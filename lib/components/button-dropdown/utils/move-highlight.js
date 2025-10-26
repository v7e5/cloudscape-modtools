import {isItemGroup, indexEquals} from './utils'

const moveHighlight = ({
  startIndex,
  expandedIndex,
  getNext,
  hasExpandableGroups,
  isInRestrictedView
}) => {
  const tryMove = currentIndex => {
    const next = getNext(currentIndex)
    if (!next) {
      return null
    }
    if (next.parent?.disabled && hasExpandableGroups) {
      return tryMove(next.index)
    }
    if (isItemGroup(next.item) && !hasExpandableGroups) {
      return tryMove(next.index)
    }
    if (
      hasExpandableGroups &&
      !isInRestrictedView &&
      !isSameParent(startIndex, next.index)
    ) {
      return tryMove(next.index)
    }
    if (
      hasExpandableGroups &&
      isInRestrictedView &&
      !isSameLevel(next.index, expandedIndex) &&
      !isIncluded(expandedIndex, next.index)
    ) {
      return tryMove(next.index)
    }
    return next.index
  }
  return tryMove(startIndex)
}
const isSameParent = (left, right) => {
  return indexEquals(left.slice(0, -1), right.slice(0, -1))
}
const isSameLevel = (left, right) => {
  return left.length === right.length
}
const isIncluded = (parent, child) => {
  return indexEquals(parent, child.slice(0, -1))
}

export {
  moveHighlight as default
}
