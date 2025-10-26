const isItemGroup = item => item && item.items !== void 0
const isLinkItem = item => item && item.to !== void 0
const isCheckboxItem = item => item && item.itemType === 'checkbox'
const getItemTarget = item => (item.external ? '_blank' : void 0)
const indexIncludes = (source, target) => {
  for (let index = 0; index < source.length; index++) {
    if (source[index] !== target[index]) {
      return false
    }
  }
  return true
}
const indexEquals = (left, right) => {
  if (left.length !== right.length) {
    return false
  }
  for (let index = 0; index < left.length; index++) {
    if (left[index] !== right[index]) {
      return false
    }
  }
  return true
}

export {
  getItemTarget,
  indexEquals,
  indexIncludes,
  isCheckboxItem,
  isItemGroup,
  isLinkItem
}
