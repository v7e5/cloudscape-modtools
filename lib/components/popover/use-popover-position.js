import {useCallback, useRef, useState} from 'react'
import {
  calculatePosition,
  getDimensions,
  getOffsetDimensions
} from './utils/positions'
import {nodeContains} from '~/components/internal/toolkit/dom'
import {
  calculateScroll,
  getFirstScrollableParent,
  scrollRectangleIntoView
} from '../internal/utils/scrollable-containers'
import {getContainingBlock} from '../internal/utils/dom'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const usePopoverPosition = ({
  popoverRef,
  bodyRef,
  arrowRef,
  trackRef,
  contentRef,
  allowScrollToFit,
  allowVerticalOverflow,
  preferredPosition,
  renderWithPortal,
  keepPosition
}) => {
  const previousInternalPositionRef = useRef(null)
  const [popoverStyle, setPopoverStyle] = useState({})
  const [internalPosition, setInternalPosition] = useState(null)
  const positionHandlerRef = useRef(() => {})
  const updatePositionHandler = useCallback(
    (onContentResize = false) => {
      if (
        !trackRef.current ||
        !popoverRef.current ||
        !bodyRef.current ||
        !contentRef.current ||
        !arrowRef.current
      ) {
        return
      }
      const popover = popoverRef.current
      const body = bodyRef.current
      const arrow = arrowRef.current
      const document = popover.ownerDocument
      const track = trackRef.current
      const {offsetWidth, offsetHeight} = getOffsetDimensions(popover)
      if (
        offsetWidth === 0 ||
        offsetHeight === 0 ||
        !nodeContains(document.body, track)
      ) {
        return
      }
      const prevInsetBlockStart = popover.style.insetBlockStart
      const prevInsetInlineStart = popover.style.insetInlineStart
      popover.style.insetBlockStart = '0'
      popover.style.insetInlineStart = '0'
      body.style.maxBlockSize = ''
      body.style.overflowX = ''
      body.style.overflowY = ''
      const viewportRect = getViewportRect(document.defaultView)
      const trackRect = getLogicalBoundingClientRect(track)
      const arrowRect = getDimensions(arrow)
      const containingBlock = getContainingBlock(popover)
      const containingBlockRect = containingBlock
        ? getLogicalBoundingClientRect(containingBlock)
        : viewportRect
      const bodyBorderWidth = getBorderWidth(body)
      const contentRect = getLogicalBoundingClientRect(contentRef.current)
      const contentBoundingBox = {
        inlineSize: contentRect.inlineSize + 2 * bodyBorderWidth,
        blockSize: contentRect.blockSize + 2 * bodyBorderWidth
      }
      const shouldKeepPosition =
        keepPosition &&
        onContentResize &&
        !!previousInternalPositionRef.current
      const fixedInternalPosition =
        (shouldKeepPosition && previousInternalPositionRef.current) ?? void 0
      const {
        scrollable,
        internalPosition: newInternalPosition,
        rect
      } = calculatePosition({
        preferredPosition,
        fixedInternalPosition,
        trigger: trackRect,
        arrow: arrowRect,
        body: contentBoundingBox,
        container: containingBlock
          ? containingBlockRect
          : getDocumentRect(document),
        viewport: viewportRect,
        renderWithPortal,
        allowVerticalOverflow
      })
      const popoverOffset = toRelativePosition(rect, containingBlockRect)
      const trackRelativeOffset = toRelativePosition(
        popoverOffset,
        toRelativePosition(trackRect, containingBlockRect)
      )
      popover.style.insetBlockStart = prevInsetBlockStart
      popover.style.insetInlineStart = prevInsetInlineStart
      if (scrollable) {
        body.style.maxBlockSize = rect.blockSize + 'px'
        body.style.overflowX = 'hidden'
        body.style.overflowY = 'auto'
      }
      previousInternalPositionRef.current = newInternalPosition
      setInternalPosition(newInternalPosition)
      const shouldScroll = allowScrollToFit && !shouldKeepPosition
      const insetBlockStart = shouldScroll
        ? popoverOffset.insetBlockStart + calculateScroll(rect)
        : popoverOffset.insetBlockStart
      setPopoverStyle({
        insetBlockStart,
        insetInlineStart: popoverOffset.insetInlineStart
      })
      if (shouldScroll) {
        const scrollableParent = getFirstScrollableParent(popover)
        scrollRectangleIntoView(rect, scrollableParent)
      }
      positionHandlerRef.current = () => {
        const newTrackOffset = toRelativePosition(
          getLogicalBoundingClientRect(track),
          containingBlock
            ? getLogicalBoundingClientRect(containingBlock)
            : viewportRect
        )
        setPopoverStyle({
          insetBlockStart:
            newTrackOffset.insetBlockStart +
            trackRelativeOffset.insetBlockStart,
          insetInlineStart:
            newTrackOffset.insetInlineStart +
            trackRelativeOffset.insetInlineStart
        })
      }
    },
    [
      trackRef,
      popoverRef,
      bodyRef,
      contentRef,
      arrowRef,
      keepPosition,
      allowScrollToFit,
      preferredPosition,
      renderWithPortal,
      allowVerticalOverflow
    ]
  )
  return {
    updatePositionHandler,
    popoverStyle,
    internalPosition,
    positionHandlerRef
  }
}
const getBorderWidth = element => {
  return parseInt(getComputedStyle(element).borderWidth) || 0
}
const toRelativePosition = (element, parent) => {
  return {
    insetBlockStart: element.insetBlockStart - parent.insetBlockStart,
    insetInlineStart: element.insetInlineStart - parent.insetInlineStart
  }
}
const getViewportRect = window => {
  return {
    insetBlockStart: 0,
    insetInlineStart: 0,
    inlineSize: window.innerWidth,
    blockSize: window.innerHeight
  }
}
const getDocumentRect = document => {
  const {insetBlockStart, insetInlineStart} = getLogicalBoundingClientRect(
    document.documentElement
  )
  return {
    insetBlockStart,
    insetInlineStart,
    inlineSize: document.documentElement.scrollWidth,
    blockSize: document.documentElement.scrollHeight
  }
}

export {
  usePopoverPosition as default
}
