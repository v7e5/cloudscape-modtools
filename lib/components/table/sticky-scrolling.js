import {getOverflowParents} from '../internal/utils/scrollable-containers'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const stickyScrolling = (containerRef, stickyRef) => {
  const scrollToTop = () => {
    if (!containerRef.current || !stickyRef.current) {
      return
    }
    const scrollingOffset = calculateScrollingOffset(
      containerRef.current,
      stickyRef.current
    )
    if (scrollingOffset > 0) {
      scrollUpBy(scrollingOffset, containerRef.current)
    }
  }
  const scrollToItem = item => {
    if (!item || !containerRef.current || !stickyRef.current) {
      return
    }
    const stickyBottom = getLogicalBoundingClientRect(
      stickyRef.current
    ).insetBlockEnd
    const scrollingOffset =
      stickyBottom - getLogicalBoundingClientRect(item).insetBlockStart
    if (scrollingOffset > 0) {
      scrollUpBy(scrollingOffset, containerRef.current)
    }
  }
  return {
    scrollToTop,
    scrollToItem
  }
}
const calculateScrollingOffset = (container, sticky) => {
  const stickyRect = getLogicalBoundingClientRect(sticky)
  const containerRect = getLogicalBoundingClientRect(container)
  return stickyRect.insetBlockStart - containerRect.insetBlockStart
}
const scrollUpBy = (amount, container) => {
  const parent = getOverflowParents(container)
  if (parent.length) {
    parent[0].scrollTop -= amount
  } else {
    window.scrollTo({top: window.pageYOffset - amount})
  }
}

export {
  calculateScrollingOffset,
  stickyScrolling as default,
  scrollUpBy
}
