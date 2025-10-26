import {useEffect, useCallback} from 'react'
import stickyScrolling, {
  calculateScrollingOffset,
  scrollUpBy
} from './sticky-scrolling'
import {useMobile} from '../internal/hooks/use-mobile'
import {useResizeObserver} from '~/components/internal/toolkit/internal'

const useStickyHeader = (
  tableRef,
  theadRef,
  secondaryTheadRef,
  secondaryTableRef,
  tableWrapperRef
) => {
  const isMobile = useMobile()
  const syncColumnHeaderWidths = useCallback(() => {
    if (
      tableRef.current &&
      theadRef.current &&
      secondaryTheadRef.current &&
      secondaryTableRef.current &&
      tableWrapperRef.current
    ) {
      secondaryTableRef.current.style.inlineSize = `${tableRef.current.offsetWidth}px`
      tableWrapperRef.current.style.marginBlockStart = `-${theadRef.current.offsetHeight}px`
    }
  }, [
    theadRef,
    secondaryTheadRef,
    secondaryTableRef,
    tableWrapperRef,
    tableRef
  ])
  useEffect(() => {
    syncColumnHeaderWidths()
  })
  useResizeObserver(theadRef, syncColumnHeaderWidths)
  const scrollToTop = () => {
    if (
      !isMobile &&
      theadRef.current &&
      secondaryTheadRef.current &&
      tableWrapperRef.current
    ) {
      const scrollDist = calculateScrollingOffset(
        theadRef.current,
        secondaryTheadRef.current
      )
      if (scrollDist > 0) {
        scrollUpBy(scrollDist, tableWrapperRef.current)
      }
    }
  }
  const {scrollToItem} = stickyScrolling(tableWrapperRef, secondaryTheadRef)
  const scrollToRow = itemNode => {
    if (!isMobile) {
      scrollToItem(itemNode)
    }
  }
  return {scrollToRow, scrollToTop}
}

export {
  useStickyHeader
}
