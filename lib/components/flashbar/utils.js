const FOCUS_THROTTLE_DELAY = 2e3
const typesToColors = {
  error: 'red',
  info: 'blue',
  'in-progress': 'blue',
  success: 'green',
  warning: 'yellow'
}
const getColorFromType = type => {
  const defaultColor = 'blue'
  return type ? typesToColors[type] || defaultColor : defaultColor
}
const getItemType = item => {
  if (item.loading) {
    return 'in-progress'
  } else {
    return item.type || 'info'
  }
}
const getItemColor = item => {
  return getColorFromType(getItemType(item))
}
const getVisibleCollapsedItems = (items, desiredLength) => {
  const itemsOnTop = []
  const itemsToPromote = []
  const addedColors = new Set()
  const allPossibleColors = Object.keys(typesToColors).length
  const finalLength = Math.min(items.length, desiredLength)
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const color = getItemColor(item)
    const isColorRepeated = addedColors.has(color)
    if (i < finalLength) {
      itemsOnTop.push({item: {...item, expandedIndex: i}, isColorRepeated})
    } else {
      if (addedColors.size === allPossibleColors) {
        break
      } else if (!isColorRepeated) {
        itemsToPromote.push({...item, expandedIndex: i})
      }
    }
    addedColors.add(color)
  }
  const reversedInitialSelection = []
  let slotsReservedForPromotions = 0
  for (let j = itemsOnTop.length - 1; j >= 0; j--) {
    const item = itemsOnTop[j]
    if (
      item.isColorRepeated &&
      slotsReservedForPromotions < itemsToPromote.length
    ) {
      slotsReservedForPromotions += 1
    } else {
      reversedInitialSelection.push(item.item)
    }
  }
  const selectedItems = reversedInitialSelection.reverse()
  for (let k = 0; selectedItems.length < desiredLength; k++) {
    selectedItems.push(itemsToPromote[k])
  }
  return selectedItems
}
const getFlashTypeCount = items => {
  const count = {error: 0, info: 0, 'in-progress': 0, success: 0, warning: 0}
  for (const item of items) {
    const type = getItemType(item)
    count[type] += 1
  }
  return count
}
const counterTypes = [
  {
    type: 'error',
    labelName: 'errorIconAriaLabel',
    iconName: 'status-negative'
  },
  {
    type: 'warning',
    labelName: 'warningIconAriaLabel',
    iconName: 'status-warning'
  },
  {
    type: 'success',
    labelName: 'successIconAriaLabel',
    iconName: 'status-positive'
  },
  {type: 'info', labelName: 'infoIconAriaLabel', iconName: 'status-info'},
  {
    type: 'in-progress',
    labelName: 'inProgressIconAriaLabel',
    iconName: 'status-in-progress'
  }
]

export {
  FOCUS_THROTTLE_DELAY,
  counterTypes,
  getFlashTypeCount,
  getItemColor,
  getItemType,
  getVisibleCollapsedItems
}
