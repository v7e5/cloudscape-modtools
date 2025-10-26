import {useState, useEffect} from 'react'
import PanelResizeHandle from '../../internal/components/panel-resize-handle'
import {getLimitedValue} from '../../split-panel/utils/size-utils'
import {usePointerEvents} from './use-pointer-events'
import {useKeyboardEvents} from './use-keyboard-events'
import testutilStyles from '../test-classes/styles.css.js'

const useResize = (
  drawerRefObject,
  {
    activeDrawer,
    activeDrawerSize,
    onActiveDrawerResize,
    drawersRefs,
    isToolsOpen,
    drawersMinWidth,
    drawersMaxWidth
  }
) => {
  const [relativeSize, setRelativeSize] = useState(0)
  const drawerSize = !activeDrawer && !isToolsOpen ? 0 : activeDrawerSize
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      const maxSize = drawersMaxWidth
      setRelativeSize(
        ((drawerSize - drawersMinWidth) / (maxSize - drawersMinWidth)) * 100
      )
    })
    return () => cancelAnimationFrame(handle)
  }, [drawerSize, drawersMaxWidth, drawersMinWidth])
  const setSidePanelWidth = width => {
    const maxWidth = drawersMaxWidth
    const size = getLimitedValue(drawersMinWidth, width, maxWidth)
    const id = activeDrawer?.id
    if (id && maxWidth >= drawersMinWidth) {
      onActiveDrawerResize({size, id})
    }
  }
  const sizeControlProps = {
    position: 'side',
    panelRef: drawerRefObject,
    handleRef: drawersRefs.slider,
    onResize: setSidePanelWidth,
    hasTransitions: true
  }
  const onSliderPointerDown = usePointerEvents(sizeControlProps)
  const onKeyDown = useKeyboardEvents(sizeControlProps)
  const resizeHandle = (
    <PanelResizeHandle
      ref={drawersRefs.slider}
      position='side'
      ariaLabel={activeDrawer?.ariaLabels?.resizeHandle}
      ariaValuenow={relativeSize}
      className={testutilStyles['drawers-slider']}
      onKeyDown={onKeyDown}
      onPointerDown={onSliderPointerDown}
    />
  )
  return {resizeHandle, drawerSize}
}

export {
  useResize as default
}
