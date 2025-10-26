const stateToAriaSort = {
  sortable: 'none',
  ascending: 'ascending',
  descending: 'descending'
}
const getAriaSort = sortingState => stateToAriaSort[sortingState]
const getTableRoleProps = options => {
  const nativeProps = {}
  nativeProps.role =
    options.tableRole === 'grid-default' ? 'grid' : options.tableRole
  nativeProps['aria-label'] = options.ariaLabel
  nativeProps['aria-labelledby'] = options.ariaLabelledBy
  nativeProps['aria-rowcount'] = options.totalItemsCount
    ? options.totalItemsCount + 1
    : -1
  if (options.tableRole === 'grid' || options.tableRole === 'treegrid') {
    nativeProps['aria-colcount'] = options.totalColumnsCount
  }
  if (options.tableRole === 'grid' || options.tableRole === 'treegrid') {
    nativeProps.tabIndex = -1
  }
  return nativeProps
}
const getTableWrapperRoleProps = options => {
  const nativeProps = {}
  if (options.isScrollable) {
    nativeProps.role = 'region'
    nativeProps.tabIndex = 0
    nativeProps['aria-label'] = options.ariaLabel
  }
  return nativeProps
}
const getTableHeaderRowRoleProps = options => {
  const nativeProps = {}
  if (
    options.tableRole === 'grid' ||
    options.tableRole === 'grid-default' ||
    options.tableRole === 'treegrid'
  ) {
    nativeProps['aria-rowindex'] = 1
  }
  return nativeProps
}
const getTableRowRoleProps = options => {
  const nativeProps = {}
  if (options.tableRole === 'grid' || options.tableRole === 'treegrid') {
    nativeProps['aria-rowindex'] =
      (options.firstIndex || 1) + options.rowIndex + 1
  } else if (options.firstIndex !== void 0) {
    nativeProps['aria-rowindex'] = options.firstIndex + options.rowIndex + 1
  }
  if (
    options.tableRole === 'treegrid' &&
    options.level &&
    options.level !== 0
  ) {
    nativeProps['aria-level'] = options.level
  }
  if (options.tableRole === 'treegrid' && options.setSize) {
    nativeProps['aria-setsize'] = options.setSize
  }
  if (options.tableRole === 'treegrid' && options.posInSet) {
    nativeProps['aria-posinset'] = options.posInSet
  }
  return nativeProps
}
const getTableColHeaderRoleProps = options => {
  const nativeProps = {}
  nativeProps.scope = 'col'
  if (options.tableRole === 'grid' || options.tableRole === 'treegrid') {
    nativeProps['aria-colindex'] = options.colIndex + 1
  }
  if (options.sortingStatus) {
    nativeProps['aria-sort'] = getAriaSort(options.sortingStatus)
  }
  return nativeProps
}
const getTableCellRoleProps = options => {
  const nativeProps = {}
  if (options.tableRole === 'grid' || options.tableRole === 'treegrid') {
    nativeProps['aria-colindex'] = options.colIndex + 1
  }
  if (options.isRowHeader) {
    nativeProps.scope = 'row'
  }
  return nativeProps
}

export {
  getTableCellRoleProps,
  getTableColHeaderRoleProps,
  getTableHeaderRowRoleProps,
  getTableRoleProps,
  getTableRowRoleProps,
  getTableWrapperRoleProps
}
