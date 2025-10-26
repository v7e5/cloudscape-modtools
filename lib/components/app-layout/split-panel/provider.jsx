import {useEffect, useState, memo} from 'react'
import {getLimitedValue} from '../../split-panel/utils/size-utils'
import {SplitPanelContextProvider} from '../../internal/context/split-panel-context'
import {SPLIT_PANEL_MIN_HEIGHT, SPLIT_PANEL_MIN_WIDTH} from './constants'

const SplitPanelProvider = memo(
  ({
    children,
    size,
    getMaxHeight,
    maxWidth,
    reportSize,
    onResize,
    ...rest
  }) => {
    const {position, isOpen} = rest
    const [maxHeight, setMaxHeight] = useState(size)
    const minSize =
      position === 'bottom' ? SPLIT_PANEL_MIN_HEIGHT : SPLIT_PANEL_MIN_WIDTH
    const maxSize = position === 'bottom' ? maxHeight : maxWidth
    const cappedSize = getLimitedValue(minSize, size, maxSize)
    const relativeSize = ((size - minSize) / (maxSize - minSize)) * 100
    const onResizeWithValidation = newSize => {
      const maxSize2 = position === 'side' ? maxWidth : getMaxHeight()
      const isResizeValid =
        position === 'side'
          ? maxSize2 >= SPLIT_PANEL_MIN_WIDTH
          : maxSize2 >= SPLIT_PANEL_MIN_HEIGHT
      if (isOpen && isResizeValid) {
        onResize(getLimitedValue(minSize, newSize, maxSize2))
      }
    }
    useEffect(() => {
      if (position !== 'bottom') {
        return
      }
      const handle = requestAnimationFrame(() => setMaxHeight(getMaxHeight()))
      return () => cancelAnimationFrame(handle)
    }, [size, minSize, position, getMaxHeight])
    useEffect(() => {
      reportSize(cappedSize)
    }, [reportSize, cappedSize])
    useEffect(() => {
      if (position !== 'bottom') {
        return
      }
      const handler = () => setMaxHeight(getMaxHeight())
      window.addEventListener('resize', handler)
      return () => window.removeEventListener('resize', handler)
    }, [position, getMaxHeight])
    return (
      <SplitPanelContextProvider
        value={{
          ...rest,
          size: cappedSize,
          relativeSize,
          onResize: onResizeWithValidation
        }}>
        {children}
      </SplitPanelContextProvider>
    )
  }
)

export {
  SplitPanelProvider
}
