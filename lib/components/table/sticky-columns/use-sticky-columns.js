import {useCallback, useEffect, useMemo, useRef} from 'react'
import AsyncStore from '../../area-chart/async-store'
import clsx from 'clsx'
import {
  useResizeObserver,
  useStableCallback
} from '~/components/internal/toolkit/internal'
import {
  isCellStatesEqual,
  isWrapperStatesEqual,
  updateCellOffsets
} from './utils'
import {
  getScrollInlineStart,
  getLogicalBoundingClientRect
} from '~/components/internal/toolkit/internal'

const MINIMUM_SCROLLABLE_SPACE = 148
const useStickyColumns = ({
  visibleColumns,
  stickyColumnsFirst,
  stickyColumnsLast
}) => {
  const store = useMemo(() => new StickyColumnsStore(), [])
  const wrapperRef = useRef(null)
  const tableRef = useRef(null)
  const cellsRef = useRef(new Map())
  const hasStickyColumns = stickyColumnsFirst + stickyColumnsLast > 0
  const updateStickyStyles = useStableCallback(() => {
    if (wrapperRef.current && tableRef.current) {
      store.updateCellStyles({
        wrapper: wrapperRef.current,
        table: tableRef.current,
        cells: cellsRef.current,
        visibleColumns,
        stickyColumnsFirst,
        stickyColumnsLast
      })
    }
  })
  useResizeObserver(wrapperRef, updateStickyStyles)
  useResizeObserver(tableRef, updateStickyStyles)
  useEffect(() => {
    if (wrapperRef.current && tableRef.current) {
      store.updateCellStyles({
        wrapper: wrapperRef.current,
        table: tableRef.current,
        cells: cellsRef.current,
        visibleColumns,
        stickyColumnsFirst,
        stickyColumnsLast
      })
    }
  }, [store, stickyColumnsFirst, stickyColumnsLast, visibleColumns])
  useEffect(() => {
    if (!hasStickyColumns) {
      return
    }
    const selector = state => state.wrapperState
    const updateWrapperStyles = (state, prev) => {
      if (isWrapperStatesEqual(state, prev)) {
        return
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.scrollPaddingInlineStart =
          state.scrollPaddingInlineStart + 'px'
        wrapperRef.current.style.scrollPaddingInlineEnd =
          state.scrollPaddingInlineEnd + 'px'
      }
    }
    const unsubscribe = store.subscribe(selector, (newState, prevState) =>
      updateWrapperStyles(selector(newState), selector(prevState))
    )
    return unsubscribe
  }, [store, hasStickyColumns])
  const setWrapper = useCallback(
    node => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', updateStickyStyles)
      }
      if (node && hasStickyColumns) {
        node.addEventListener('scroll', updateStickyStyles)
      }
      wrapperRef.current = node
    },
    [hasStickyColumns, updateStickyStyles]
  )
  const setTable = useCallback(node => {
    tableRef.current = node
  }, [])
  const setCell = useCallback((columnId, node) => {
    if (node) {
      cellsRef.current.set(columnId, node)
    } else {
      cellsRef.current.delete(columnId)
    }
  }, [])
  return {
    store,
    style: {
      wrapper: hasStickyColumns ? {...store.get().wrapperState} : void 0
    },
    refs: {wrapper: setWrapper, table: setTable, cell: setCell}
  }
}
const useStickyCellStyles = ({stickyColumns, columnId, getClassName}) => {
  const setCell = stickyColumns.refs.cell
  const unsubscribeRef = useRef(null)
  const refCallback = useCallback(
    cellElement => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
      }
      setCell(columnId, cellElement)
      const selector = state => state.cellState.get(columnId) ?? null
      const updateCellStyles = (state, prev) => {
        if (isCellStatesEqual(state, prev)) {
          return
        }
        const className = getClassName(state)
        if (cellElement) {
          Object.keys(className).forEach(key => {
            if (className[key]) {
              cellElement.classList.add(key)
            } else {
              cellElement.classList.remove(key)
            }
          })
          cellElement.style.insetInlineStart =
            state?.offset.insetInlineStart !== void 0
              ? `${state.offset.insetInlineStart}px`
              : ''
          cellElement.style.insetInlineEnd =
            state?.offset.insetInlineEnd !== void 0
              ? `${state.offset.insetInlineEnd}px`
              : ''
        }
      }
      if (cellElement) {
        unsubscribeRef.current = stickyColumns.store.subscribe(
          selector,
          (newState, prevState) => {
            updateCellStyles(selector(newState), selector(prevState))
          }
        )
      }
    },

    [columnId, setCell, stickyColumns.store]
  )
  const cellStyles = stickyColumns.store.get().cellState.get(columnId)
  return {
    ref: refCallback,
    className: cellStyles ? clsx(getClassName(cellStyles)) : void 0,
    style: cellStyles?.offset ?? void 0
  }
}
class StickyColumnsStore extends AsyncStore {
  cellOffsets = {
    offsets: new Map(),
    stickyWidthInlineStart: 0,
    stickyWidthInlineEnd: 0
  }
  isStuckToTheInlineStart = false
  isStuckToTheInlineEnd = false
  padInlineStart = false
  constructor() {
    super({
      cellState: new Map(),
      wrapperState: {scrollPaddingInlineStart: 0, scrollPaddingInlineEnd: 0}
    })
  }
  updateCellStyles(props) {
    const hasStickyColumns =
      props.stickyColumnsFirst + props.stickyColumnsLast > 0
    const hadStickyColumns = this.cellOffsets.offsets.size > 0
    if (hasStickyColumns || hadStickyColumns) {
      this.updateScroll(props)
      this.updateCellOffsets(props)
      this.set(() => ({
        cellState: this.generateCellStyles(props),
        wrapperState: {
          scrollPaddingInlineStart: this.cellOffsets.stickyWidthInlineStart,
          scrollPaddingInlineEnd: this.cellOffsets.stickyWidthInlineEnd
        }
      }))
    }
  }
  updateScroll(props) {
    const wrapperScrollInlineStart = getScrollInlineStart(props.wrapper)
    const wrapperScrollWidth = props.wrapper.scrollWidth
    const wrapperClientWidth = props.wrapper.clientWidth
    const tablePaddingInlineStart =
      parseFloat(getComputedStyle(props.table).paddingInlineStart) || 0
    const tablePaddingInlineEnd =
      parseFloat(getComputedStyle(props.table).paddingInlineEnd) || 0
    this.isStuckToTheInlineStart =
      wrapperScrollInlineStart > tablePaddingInlineStart
    this.isStuckToTheInlineEnd =
      Math.ceil(wrapperScrollInlineStart) <
      wrapperScrollWidth - wrapperClientWidth - tablePaddingInlineEnd
    this.padInlineStart =
      tablePaddingInlineStart !== 0 && this.isStuckToTheInlineStart
  }
  generateCellStyles = props => {
    const isEnabled = this.isEnabled(props)
    const lastLeftStickyColumnIndex = props.stickyColumnsFirst - 1
    const lastRightStickyColumnIndex =
      props.visibleColumns.length - props.stickyColumnsLast
    return props.visibleColumns.reduce((acc, columnId, index) => {
      let stickySide = 'non-sticky'
      if (index < props.stickyColumnsFirst) {
        stickySide = 'inline-start'
      } else if (
        index >=
        props.visibleColumns.length - props.stickyColumnsLast
      ) {
        stickySide = 'inline-end'
      }
      if (!isEnabled || stickySide === 'non-sticky') {
        return acc
      }
      const isFirstColumn = index === 0
      const stickyColumnOffsetLeft =
        this.cellOffsets.offsets.get(columnId)?.first ?? 0
      const stickyColumnOffsetRight =
        this.cellOffsets.offsets.get(columnId)?.last ?? 0
      acc.set(columnId, {
        padInlineStart: isFirstColumn && this.padInlineStart,
        lastInsetInlineStart:
          this.isStuckToTheInlineStart && lastLeftStickyColumnIndex === index,
        lastInsetInlineEnd:
          this.isStuckToTheInlineEnd && lastRightStickyColumnIndex === index,
        offset: {
          insetInlineStart:
            stickySide === 'inline-start' ? stickyColumnOffsetLeft : void 0,
          insetInlineEnd:
            stickySide === 'inline-end' ? stickyColumnOffsetRight : void 0
        }
      })
      return acc
    }, new Map())
  }
  updateCellOffsets = props => {
    this.cellOffsets = updateCellOffsets(props.cells, props)
  }
  isEnabled = props => {
    const noStickyColumns =
      props.stickyColumnsFirst + props.stickyColumnsLast === 0
    if (noStickyColumns) {
      return false
    }
    const wrapperWidth = getLogicalBoundingClientRect(props.wrapper).inlineSize
    const tableWidth = getLogicalBoundingClientRect(props.table).inlineSize
    const isWrapperScrollable = tableWidth > wrapperWidth
    if (!isWrapperScrollable) {
      return false
    }
    const totalStickySpace =
      this.cellOffsets.stickyWidthInlineStart +
      this.cellOffsets.stickyWidthInlineEnd
    const tablePaddingLeft =
      parseFloat(getComputedStyle(props.table).paddingLeft) || 0
    const tablePaddingRight =
      parseFloat(getComputedStyle(props.table).paddingRight) || 0
    const hasEnoughScrollableSpace =
      totalStickySpace +
        MINIMUM_SCROLLABLE_SPACE +
        tablePaddingLeft +
        tablePaddingRight <
      wrapperWidth
    if (!hasEnoughScrollableSpace) {
      return false
    }
    return true
  }
}

export {
  StickyColumnsStore as default,
  useStickyCellStyles,
  useStickyColumns
}
