const applyTrackBy = (trackBy, item) => {
  if (typeof trackBy === 'function') {
    return trackBy(item)
  }
  return item[trackBy]
}
const getItemKey = (trackBy, item, index) => {
  if (!trackBy) {
    return index
  }
  return applyTrackBy(trackBy, item)
}
const getTrackableValue = (trackBy, item) => {
  if (!trackBy) {
    return item
  }
  return applyTrackBy(trackBy, item)
}
const getColumnKey = (column, index) => {
  return column.id || index
}
const toContainerVariant = variant => {
  const isDefaultVariant = !variant || variant === 'container'
  return isDefaultVariant
    ? 'default'
    : variant === 'borderless'
      ? 'embedded'
      : variant
}
const getVisibleColumnDefinitions = ({
  columnDisplay,
  visibleColumns,
  columnDefinitions
}) => {
  if (columnDisplay) {
    return getVisibleColumnDefinitionsFromColumnDisplay({
      columnDisplay,
      columnDefinitions
    })
  } else if (visibleColumns) {
    return getVisibleColumnDefinitionsFromVisibleColumns({
      visibleColumns,
      columnDefinitions
    })
  } else {
    return columnDefinitions
  }
}
const getVisibleColumnDefinitionsFromColumnDisplay = ({
  columnDisplay,
  columnDefinitions
}) => {
  const columnDefinitionsById = columnDefinitions.reduce(
    (accumulator, item) =>
      item.id === void 0 ? accumulator : {...accumulator, [item.id]: item},
    {}
  )
  return columnDisplay
    .filter(item => item.visible)
    .map(item => columnDefinitionsById[item.id])
    .filter(Boolean)
}
const getVisibleColumnDefinitionsFromVisibleColumns = ({
  visibleColumns,
  columnDefinitions
}) => {
  const ids = new Set(visibleColumns)
  return columnDefinitions.filter(({id}) => id !== void 0 && ids.has(id))
}
const getStickyClassNames = (styles, props) => {
  return {
    [styles['sticky-cell']]: !!props,
    [styles['sticky-cell-pad-inline-start']]: !!props?.padInlineStart,
    [styles['sticky-cell-last-inline-start']]: !!props?.lastInsetInlineStart,
    [styles['sticky-cell-last-inline-end']]: !!props?.lastInsetInlineEnd
  }
}

export {
  applyTrackBy,
  getColumnKey,
  getItemKey,
  getStickyClassNames,
  getTrackableValue,
  getVisibleColumnDefinitions,
  toContainerVariant
}
