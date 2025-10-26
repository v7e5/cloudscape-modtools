import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const isCellStatesEqual = (s1, s2) => {
  if (s1 && s2) {
    return (
      s1.padInlineStart === s2.padInlineStart &&
      s1.lastInsetInlineStart === s2.lastInsetInlineStart &&
      s1.lastInsetInlineEnd === s2.lastInsetInlineEnd &&
      s1.offset.insetInlineStart === s2.offset.insetInlineStart &&
      s1.offset.insetInlineEnd === s2.offset.insetInlineEnd
    )
  }
  return s1 === s2
}
const isWrapperStatesEqual = (s1, s2) => {
  return (
    s1.scrollPaddingInlineStart === s2.scrollPaddingInlineStart &&
    s1.scrollPaddingInlineEnd === s2.scrollPaddingInlineEnd
  )
}
const updateCellOffsets = (cells, props) => {
  const totalColumns = props.visibleColumns.length
  const firstColumnsWidths = []
  for (let i = 0; i < Math.min(totalColumns, props.stickyColumnsFirst); i++) {
    const element = cells.get(props.visibleColumns[i])
    const cellWidth = element
      ? getLogicalBoundingClientRect(element).inlineSize
      : 0
    firstColumnsWidths[i] = (firstColumnsWidths[i - 1] ?? 0) + cellWidth
  }
  const lastColumnsWidths = []
  for (let i = 0; i < Math.min(totalColumns, props.stickyColumnsLast); i++) {
    const element = cells.get(props.visibleColumns[totalColumns - 1 - i])
    const cellWidth = element
      ? getLogicalBoundingClientRect(element).inlineSize
      : 0
    lastColumnsWidths[i] = (lastColumnsWidths[i - 1] ?? 0) + cellWidth
  }
  const stickyWidthInlineStart =
    firstColumnsWidths[props.stickyColumnsFirst - 1] ?? 0
  const stickyWidthInlineEnd =
    lastColumnsWidths[props.stickyColumnsLast - 1] ?? 0
  const offsets = props.visibleColumns.reduce(
    (map, columnId, columnIndex) =>
      map.set(columnId, {
        first: firstColumnsWidths[columnIndex - 1] ?? 0,
        last: lastColumnsWidths[totalColumns - 1 - columnIndex - 1] ?? 0
      }),
    new Map()
  )
  return {offsets, stickyWidthInlineStart, stickyWidthInlineEnd}
}

export {
  isCellStatesEqual,
  isWrapperStatesEqual,
  updateCellOffsets
}
