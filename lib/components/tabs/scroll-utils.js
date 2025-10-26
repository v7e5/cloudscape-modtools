import smoothScroll from './smooth-scroll'
import {
  getIsRtl,
  getScrollInlineStart
} from '~/components/internal/toolkit/internal'

const onPaginationClick = (headerBarRef, direction) => {
  if (!headerBarRef?.current) {
    return
  }
  const element = headerBarRef.current
  const {scrollLeft, scrollWidth, offsetWidth} = element
  const paginatedSectionSize = Math.ceil(element.clientWidth * 0.75)
  const scrollDistance =
    direction === 'forward'
      ? Math.min(
          Math.abs(scrollLeft) + paginatedSectionSize,
          scrollWidth - offsetWidth
        )
      : Math.max(Math.abs(scrollLeft) - paginatedSectionSize, 0)
  const scrollTo = getIsRtl(element) ? scrollDistance * -1 : scrollDistance
  smoothScroll(element, scrollTo)
}
const hasHorizontalOverflow = (headerBar, inlineStartOverflowButton) => {
  const {offsetWidth, scrollWidth} = headerBar
  const paginationButtonsWidth =
    inlineStartOverflowButton.current &&
    2 * inlineStartOverflowButton.current.offsetWidth
  return paginationButtonsWidth
    ? scrollWidth > offsetWidth + paginationButtonsWidth
    : scrollWidth > offsetWidth
}
const hasInlineStartOverflow = headerBar => {
  return getScrollInlineStart(headerBar) > 0
}
const hasInlineEndOverflow = headerBar => {
  return (
    Math.ceil(getScrollInlineStart(headerBar)) <
    headerBar.scrollWidth - headerBar.offsetWidth
  )
}
const scrollIntoView = (tabHeader, headerBar, smooth = true) => {
  if (!tabHeader || !headerBar) {
    return
  }
  const margin = 2
  let updatedLeftScroll = headerBar.scrollLeft
  updatedLeftScroll = Math.min(
    updatedLeftScroll,
    tabHeader.offsetLeft - margin
  )
  updatedLeftScroll = Math.max(
    updatedLeftScroll,
    tabHeader.offsetLeft +
      tabHeader.offsetWidth -
      headerBar.offsetWidth +
      margin
  )
  if (smooth) {
    smoothScroll(headerBar, updatedLeftScroll)
  } else {
    headerBar.scrollLeft = updatedLeftScroll
  }
}

export {
  hasHorizontalOverflow,
  hasInlineEndOverflow,
  hasInlineStartOverflow,
  onPaginationClick,
  scrollIntoView
}
