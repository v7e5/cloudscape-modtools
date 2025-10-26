const stateToIcon = {
  sortable: 'caret-down',
  ascending: 'caret-up-filled',
  descending: 'caret-down-filled'
}
const getSortingStatus = (sortable, sorted, descending, disabled) => {
  if (sorted) {
    if (descending) {
      return 'descending'
    }
    return 'ascending'
  }
  if (sortable && !disabled) {
    return 'sortable'
  }
  return void 0
}
const getSortingIconName = sortingState => stateToIcon[sortingState]
const isSorted = (column, sortingColumn) =>
  column === sortingColumn ||
  (column.sortingField !== void 0 &&
    column.sortingField === sortingColumn.sortingField) ||
  (column.sortingComparator !== void 0 &&
    column.sortingComparator === sortingColumn.sortingComparator)

export {
  getSortingIconName,
  getSortingStatus,
  isSorted
}
