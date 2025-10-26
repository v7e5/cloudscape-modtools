import {useState} from 'react'
import {fireNonCancelableEvent} from '../../internal/events'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import {getTrackableValue} from '../utils'
import {joinStrings} from '../../internal/utils/strings'
import {ItemSet} from './utils'

const useSelection = options => {
  const singleSelectionProps = useSingleSelection(options)
  const multiSelectionProps = useMultiSelection(options)
  return options.selectionType === 'single'
    ? singleSelectionProps
    : multiSelectionProps
}
const useSingleSelection = ({
  ariaLabels,
  isItemDisabled = () => false,
  onSelectionChange,
  selectedItems = [],
  selectionType,
  trackBy
}) => {
  const selectionControlName = useUniqueId()
  if (selectionType !== 'single') {
    return {isItemSelected: () => false}
  }
  const selectedSet = new ItemSet(trackBy, selectedItems.slice(0, 1))
  const isItemSelected = selectedSet.has.bind(selectedSet)
  const handleToggleItem = item => {
    if (!isItemDisabled(item) && !isItemSelected(item)) {
      fireNonCancelableEvent(onSelectionChange, {selectedItems: [item]})
    }
  }
  return {
    isItemSelected,
    getItemSelectionProps: item => ({
      name: selectionControlName,
      selectionType: 'single',
      disabled: isItemDisabled(item),
      checked: isItemSelected(item),
      onChange: () => handleToggleItem(item),
      ariaLabel: joinStrings(
        ariaLabels?.selectionGroupLabel,
        ariaLabels?.itemSelectionLabel?.({selectedItems}, item)
      )
    })
  }
}
const useMultiSelection = ({
  ariaLabels,
  isItemDisabled = () => false,
  items,
  loading,
  onSelectionChange,
  selectedItems = [],
  selectionType,
  trackBy
}) => {
  const selectionControlName = useUniqueId()
  const [shiftPressed, setShiftPressed] = useState(false)
  const [lastClickedItem, setLastClickedItem] = useState(null)
  if (selectionType !== 'multi') {
    return {isItemSelected: () => false}
  }
  const selectedSet = new ItemSet(trackBy, selectedItems)
  const isItemSelected = selectedSet.has.bind(selectedSet)
  let allItemsDisabled = true
  let allEnabledItemsSelected = true
  for (const item of items) {
    allItemsDisabled = allItemsDisabled && isItemDisabled(item)
    allEnabledItemsSelected =
      allEnabledItemsSelected && (isItemSelected(item) || isItemDisabled(item))
  }
  const allItemsCheckboxSelected =
    selectedItems.length > 0 && allEnabledItemsSelected
  const allItemsCheckboxIndeterminate =
    selectedItems.length > 0 && !allEnabledItemsSelected
  const itemIndexesMap = new Map()
  items.forEach((item, i) =>
    itemIndexesMap.set(getTrackableValue(trackBy, item), i)
  )
  const getShiftSelectedItems = item => {
    const lastClickedItemIndex = lastClickedItem
      ? itemIndexesMap.get(getTrackableValue(trackBy, lastClickedItem))
      : void 0
    if (lastClickedItemIndex !== void 0) {
      const currentItemIndex = itemIndexesMap.get(
        getTrackableValue(trackBy, item)
      )
      const start = Math.min(currentItemIndex, lastClickedItemIndex)
      const end = Math.max(currentItemIndex, lastClickedItemIndex)
      return items.slice(start, end + 1)
    }
    return [item]
  }
  const selectItems = requestedItems => {
    const newSelectedItems = [...selectedItems]
    requestedItems.forEach(newItem => {
      if (!isItemSelected(newItem) && !isItemDisabled(newItem)) {
        newSelectedItems.push(newItem)
      }
    })
    return newSelectedItems
  }
  const deselectItems = requestedItems => {
    const requestedItemsSet = new ItemSet(trackBy, requestedItems)
    const newSelectedItems = []
    selectedItems.forEach(selectedItem => {
      const shouldUnselect = requestedItemsSet.has(selectedItem)
      if (!shouldUnselect || isItemDisabled(selectedItem)) {
        newSelectedItems.push(selectedItem)
      }
    })
    return newSelectedItems
  }
  const handleToggleAll = () => {
    const newSelectedItems = allEnabledItemsSelected
      ? deselectItems(items)
      : selectItems(items)
    fireNonCancelableEvent(onSelectionChange, {
      selectedItems: newSelectedItems
    })
  }
  const handleToggleItem = item => {
    if (!isItemDisabled(item)) {
      const requestedItems = shiftPressed
        ? getShiftSelectedItems(item)
        : [item]
      const selectedItems2 = isItemSelected(item)
        ? deselectItems(requestedItems)
        : selectItems(requestedItems)
      fireNonCancelableEvent(onSelectionChange, {
        selectedItems: selectedItems2
      })
      setLastClickedItem(item)
    }
  }
  return {
    isItemSelected,
    getSelectAllProps: () => ({
      name: selectionControlName,
      selectionType: 'multi',
      disabled: allItemsDisabled || !!loading,
      checked: allItemsCheckboxSelected,
      indeterminate: allItemsCheckboxIndeterminate,
      onChange: handleToggleAll,
      ariaLabel: joinStrings(
        ariaLabels?.selectionGroupLabel,
        ariaLabels?.allItemsSelectionLabel?.({selectedItems})
      )
    }),
    getItemSelectionProps: item => ({
      name: selectionControlName,
      selectionType: 'multi',
      disabled: isItemDisabled(item),
      checked: isItemSelected(item),
      onChange: () => handleToggleItem(item),
      onShiftToggle: value => setShiftPressed(value),
      ariaLabel: joinStrings(
        ariaLabels?.selectionGroupLabel,
        ariaLabels?.itemSelectionLabel?.({selectedItems}, item)
      )
    })
  }
}

export {
  useSelection
}
