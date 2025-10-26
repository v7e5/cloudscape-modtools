import {useEffect, useState} from 'react'
import {ResizeObserver} from '@juggle/resize-observer'
import styles from './styles.css.js'
import {getContainingBlock} from '../../internal/utils/dom'
import {getOverflowParents} from '../../internal/utils/scrollable-containers'
import {browserScrollbarSize} from '../../internal/utils/browser-scrollbar-size'
import globalVars from '../../internal/styles/global-vars'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const updatePosition = (
  tableEl,
  wrapperEl,
  scrollbarEl,
  scrollbarContentEl,
  inScrollableContainer
) => {
  if (!tableEl || !scrollbarEl || !wrapperEl) {
    return
  }
  const {inlineSize: tableInlineSize} = getLogicalBoundingClientRect(tableEl)
  const {inlineSize: wrapperInlineSize} =
    getLogicalBoundingClientRect(wrapperEl)
  const scrollbarHeight = browserScrollbarSize().height
  const areaIsScrollable = tableInlineSize > wrapperInlineSize
  if (!areaIsScrollable) {
    scrollbarEl.classList.remove(styles['sticky-scrollbar-visible'])
  } else {
    if (!scrollbarEl.classList.contains(styles['sticky-scrollbar-visible'])) {
      requestAnimationFrame(() => {
        scrollbarEl.scrollLeft = wrapperEl.scrollLeft
      })
    }
    scrollbarEl.classList.add(styles['sticky-scrollbar-visible'])
    if (!scrollbarHeight) {
      scrollbarEl.classList.add(styles['sticky-scrollbar-native-invisible'])
    }
  }
  if (scrollbarHeight && scrollbarEl && scrollbarContentEl) {
    scrollbarEl.style.blockSize = `${scrollbarHeight}px`
    scrollbarContentEl.style.blockSize = `${scrollbarHeight}px`
  }
  if (tableEl && wrapperEl && scrollbarContentEl && scrollbarEl) {
    const wrapperElRect = getLogicalBoundingClientRect(wrapperEl)
    const tableElRect = getLogicalBoundingClientRect(tableEl)
    scrollbarEl.style.inlineSize = `${wrapperElRect.inlineSize}px`
    scrollbarContentEl.style.inlineSize = `${tableElRect.inlineSize}px`
    scrollbarEl.style.insetBlockEnd = inScrollableContainer
      ? '0px'
      : `var(${globalVars.stickyVerticalBottomOffset}, 0px)`
  }
}
const useStickyScrollbar = (
  scrollbarRef,
  scrollbarContentRef,
  tableRef,
  wrapperRef,
  offsetScrollbar
) => {
  const [inScrollableContainer, setInScrollableContainer] = useState(false)
  const wrapperEl = wrapperRef.current
  useEffect(() => {
    if (wrapperEl) {
      setInScrollableContainer(
        !!getContainingBlock(wrapperEl) || !!getOverflowParents(wrapperEl)[0]
      )
    }
  }, [wrapperEl])
  useEffect(() => {
    if (wrapperRef.current && tableRef.current) {
      const observer = new ResizeObserver(() => {
        if (scrollbarContentRef.current) {
          updatePosition(
            tableRef.current,
            wrapperRef.current,
            scrollbarRef.current,
            scrollbarContentRef.current,
            inScrollableContainer
          )
        }
      })
      observer.observe(wrapperRef.current)
      observer.observe(tableRef.current)
      return () => {
        observer.disconnect()
      }
    }
  }, [
    scrollbarContentRef,
    scrollbarRef,
    tableRef,
    wrapperRef,
    inScrollableContainer,
    offsetScrollbar
  ])
  useEffect(() => {
    const resizeHandler = () => {
      updatePosition(
        tableRef.current,
        wrapperRef.current,
        scrollbarRef.current,
        scrollbarContentRef.current,
        inScrollableContainer
      )
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [
    tableRef,
    wrapperRef,
    scrollbarRef,
    scrollbarContentRef,
    inScrollableContainer
  ])
}

export {
  updatePosition,
  useStickyScrollbar
}
