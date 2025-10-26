const useProgressiveLoadingProps = ({
  items,
  getLoadingStatus,
  getExpandableItemProps
}) => {
  const allRows = new Array()
  const getItemParent = item => getExpandableItemProps(item).parent
  const getItemChildren = item => getExpandableItemProps(item).children
  const getItemLevel = item => (item ? getExpandableItemProps(item).level : 0)
  const isItemExpanded = item => getExpandableItemProps(item).isExpanded
  for (let i = 0; i < items.length; i++) {
    allRows.push({type: 'data', item: items[i]})
    if (isItemExpanded(items[i]) && getItemChildren(items[i]).length === 0) {
      const status = getLoadingStatus?.(items[i])
      if (status && (status === 'loading' || status === 'error')) {
        allRows.push({
          type: 'loader',
          item: items[i],
          level: getItemLevel(items[i]),
          status,
          from: 0
        })
      }
    }
    let currentParent = getItemParent(items[i])
    let levelsDiff = getItemLevel(items[i]) - getItemLevel(items[i + 1])
    while (currentParent && levelsDiff > 0) {
      const status = getLoadingStatus?.(currentParent)
      if (status && status !== 'finished') {
        const level = currentParent ? getItemLevel(currentParent) : 0
        const children = currentParent ? getItemChildren(currentParent) : []
        allRows.push({
          type: 'loader',
          item: currentParent,
          level,
          status,
          from: children.length
        })
      }
      currentParent = currentParent && getItemParent(currentParent)
      levelsDiff--
    }
    const rootLoadingStatus = getLoadingStatus?.(null)
    if (
      i === items.length - 1 &&
      rootLoadingStatus &&
      rootLoadingStatus !== 'finished'
    ) {
      allRows.push({
        type: 'loader',
        item: null,
        level: 0,
        status: rootLoadingStatus,
        from: items.length
      })
    }
  }
  return {allRows}
}

export {
  useProgressiveLoadingProps
}
