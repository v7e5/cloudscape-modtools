import {useState, useMemo, useCallback} from 'react'
import {indexIncludes, indexEquals} from './utils'
import createItemsTree from './create-items-tree'
import moveHighlightOneStep from './move-highlight'

const useHighlightedMenu = ({
  items,
  hasExpandableGroups,
  isInRestrictedView = false
}) => {
  const [targetIndex, setTargetIndex] = useState([])
  const [expandedIndex, setExpandedIndex] = useState([])
  const [isUsingMouse, setIsUsingMouse] = useState(true)
  const {getItem, getItemIndex, getSequentialIndex, getParentIndex} = useMemo(
    () => createItemsTree(items),
    [items]
  )
  const targetItem = useMemo(
    () => getItem(targetIndex),
    [targetIndex, getItem]
  )
  const isHighlighted = useCallback(
    item => {
      const index = getItemIndex(item)
      return indexIncludes(index, targetIndex)
    },
    [targetIndex, getItemIndex]
  )
  const isKeyboardHighlight = useCallback(
    item => {
      const index = getItemIndex(item)
      return !isUsingMouse && indexEquals(index, targetIndex)
    },
    [targetIndex, getItemIndex, isUsingMouse]
  )
  const isExpanded = useCallback(
    group => {
      const index = getItemIndex(group)
      return indexIncludes(index, expandedIndex)
    },
    [expandedIndex, getItemIndex]
  )
  const moveHighlight = useCallback(
    direction => {
      const getNext = index => {
        const nextIndex2 = getSequentialIndex(index, direction)
        const item = getItem(nextIndex2 || [-1])
        if (!nextIndex2 || !item) {
          return null
        }
        const parentIndex = getParentIndex(item)
        const parentItem = parentIndex && getItem(parentIndex)
        return {index: nextIndex2, item, parent: parentItem || void 0}
      }
      const nextIndex = moveHighlightOneStep({
        startIndex: targetIndex,
        expandedIndex,
        getNext,
        hasExpandableGroups,
        isInRestrictedView
      })
      if (nextIndex) {
        setTargetIndex(nextIndex)
      }
    },
    [
      targetIndex,
      expandedIndex,
      getItem,
      getSequentialIndex,
      getParentIndex,
      hasExpandableGroups,
      isInRestrictedView
    ]
  )
  const highlightItem = useCallback(
    item => {
      setTargetIndex(getItemIndex(item))
    },
    [getItemIndex]
  )
  const expandGroup = useCallback(
    group => {
      const groupIndex = group ? getItemIndex(group) : targetIndex
      const firstChildIndex = [...groupIndex, 0]
      setTargetIndex(isInRestrictedView ? groupIndex : firstChildIndex)
      setExpandedIndex(groupIndex)
    },
    [targetIndex, getItemIndex, isInRestrictedView]
  )
  const collapseGroup = useCallback(() => {
    if (expandedIndex.length > 0) {
      setTargetIndex(expandedIndex)
      setExpandedIndex(expandedIndex.slice(0, -1))
    }
  }, [expandedIndex])
  const reset = useCallback(() => {
    setTargetIndex([])
    setExpandedIndex([])
  }, [])
  return {
    targetItem,
    isHighlighted,
    isKeyboardHighlight,
    isExpanded,
    moveHighlight,
    highlightItem,
    expandGroup,
    collapseGroup,
    reset,
    setIsUsingMouse
  }
}

export {
  useHighlightedMenu as default
}
