const getIsRtl = element => {
  if (!element) {
    return false
  }
  return getComputedStyle(element).direction === 'rtl'
}
const getOffsetInlineStart = element => {
  const offsetParentWidth = element.offsetParent?.clientWidth ?? 0
  return getIsRtl(element)
    ? offsetParentWidth - element.offsetWidth - element.offsetLeft
    : element.offsetLeft
}
const getScrollInlineStart = element =>
  getIsRtl(element)
    ? Math.floor(element.scrollLeft) * -1
    : Math.ceil(element.scrollLeft)
const getLogicalClientX = (event, IsRtl) =>
  IsRtl ? document.documentElement.clientWidth - event.clientX : event.clientX
const getLogicalBoundingClientRect = element => {
  const boundingClientRect = element.getBoundingClientRect()
  const blockSize = boundingClientRect.height
  const inlineSize = boundingClientRect.width
  const insetBlockStart = boundingClientRect.top
  const insetBlockEnd = boundingClientRect.bottom
  const insetInlineStart = getIsRtl(element)
    ? document.documentElement.clientWidth - boundingClientRect.right
    : boundingClientRect.left
  const insetInlineEnd = insetInlineStart + inlineSize
  return {
    blockSize,
    inlineSize,
    insetBlockStart,
    insetBlockEnd,
    insetInlineStart,
    insetInlineEnd
  }
}
const getLogicalPageX = event =>
  event.target instanceof HTMLElement && getIsRtl(event.target)
    ? document.documentElement.clientWidth - event.pageX
    : event.pageX

export {
  getIsRtl,
  getLogicalBoundingClientRect,
  getLogicalClientX,
  getLogicalPageX,
  getOffsetInlineStart,
  getScrollInlineStart
}
