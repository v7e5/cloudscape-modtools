import {useCallback, useEffect, useRef, useState} from 'react'
import {useObservedElement} from './use-observed-element'
import {useResizeObserver} from '~/components/internal/toolkit/internal'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const useAppLayoutPlacement = (headerSelector, footerSelector) => {
  const mainElementRef = useRef(null)
  const headerHeight = useObservedElement(headerSelector)
  const footerHeight = useObservedElement(footerSelector)
  const [offsets, setOffsets] = useState({
    insetInlineStart: 0,
    insetInlineEnd: 0,
    inlineSize: Number.POSITIVE_INFINITY
  })
  const updatePosition = useCallback(() => {
    if (!mainElementRef.current) {
      return
    }
    const {insetInlineStart, insetInlineEnd, inlineSize} =
      getLogicalBoundingClientRect(mainElementRef.current)
    if (inlineSize === 0) {
      return
    }
    setOffsets({
      insetInlineStart,
      insetInlineEnd: inlineSize - insetInlineEnd,
      inlineSize
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [updatePosition])
  useResizeObserver(mainElementRef, updatePosition)
  return [
    mainElementRef,
    {...offsets, insetBlockStart: headerHeight, insetBlockEnd: footerHeight}
  ]
}

export {
  useAppLayoutPlacement
}
