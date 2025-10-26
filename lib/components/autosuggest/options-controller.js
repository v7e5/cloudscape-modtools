import {useMemo, useState} from 'react'
import {filterOptions} from './utils/utils'
import {generateTestIndexes} from '../internal/components/options-list/utils/test-indexes'
import {useHighlightedOption} from '../internal/components/options-list/utils/use-highlight-option'
import {useInternalI18n} from '../i18n/context'

const isHighlightable = option => {
  return !!option && option.type !== 'parent'
}
const isInteractive = option =>
  !!option && !option.disabled && option.type !== 'parent'
const useAutosuggestItems = ({
  options,
  filterValue,
  filterText,
  filteringType,
  enteredTextLabel,
  hideEnteredTextLabel,
  onSelectItem
}) => {
  const i18n = useInternalI18n('autosuggest')
  const [showAll, setShowAll] = useState(false)
  const {items, getItemGroup, getItemParent} = useMemo(
    () => createItems(options),
    [options]
  )
  const enteredItemLabel = i18n(
    'enteredTextLabel',
    enteredTextLabel?.(filterValue),
    format => format({value: filterValue})
  )
  const filteredItems = useMemo(() => {
    const filteredItems2 =
      filteringType === 'auto' && !showAll
        ? filterOptions(items, filterText)
        : [...items]
    if (filterValue && !hideEnteredTextLabel) {
      filteredItems2.unshift({
        value: filterValue,
        type: 'use-entered',
        label: enteredItemLabel,
        option: {value: filterValue}
      })
    }
    generateTestIndexes(filteredItems2, getItemParent)
    return filteredItems2
  }, [
    filteringType,
    showAll,
    items,
    filterText,
    filterValue,
    hideEnteredTextLabel,
    getItemParent,
    enteredItemLabel
  ])
  const [highlightedOptionState, highlightedOptionHandlers] =
    useHighlightedOption({
      options: filteredItems,
      isHighlightable
    })
  const selectHighlightedOptionWithKeyboard = () => {
    if (
      highlightedOptionState.highlightedOption &&
      isInteractive(highlightedOptionState.highlightedOption)
    ) {
      onSelectItem(highlightedOptionState.highlightedOption)
      return true
    }
    return false
  }
  const highlightVisibleOptionWithMouse = index => {
    if (filteredItems[index] && isHighlightable(filteredItems[index])) {
      highlightedOptionHandlers.setHighlightedIndexWithMouse(index)
    }
  }
  const selectVisibleOptionWithMouse = index => {
    if (filteredItems[index] && isInteractive(filteredItems[index])) {
      onSelectItem(filteredItems[index])
    }
  }
  return [
    {...highlightedOptionState, items: filteredItems, showAll, getItemGroup},
    {
      ...highlightedOptionHandlers,
      setShowAll,
      selectHighlightedOptionWithKeyboard,
      highlightVisibleOptionWithMouse,
      selectVisibleOptionWithMouse
    }
  ]
}
const createItems = options => {
  const items = []
  const itemToGroup = new WeakMap()
  const getItemParent = item => itemToGroup.get(item)
  const getItemGroup = item => getItemParent(item)?.option
  for (const option of options) {
    if (isGroup(option)) {
      for (const item of flattenGroup(option)) {
        items.push(item)
      }
    } else {
      items.push({...option, option})
    }
  }
  const flattenGroup = group => {
    const {options: options2, ...rest} = group
    let hasOnlyDisabledChildren = true
    const groupItem = {...rest, type: 'parent', option: group}
    const items2 = [groupItem]
    for (const option of options2) {
      if (!option.disabled) {
        hasOnlyDisabledChildren = false
      }
      const childOption = {
        ...option,
        type: 'child',
        disabled: option.disabled || rest.disabled,
        option
      }
      items2.push(childOption)
      itemToGroup.set(childOption, groupItem)
    }
    items2[0].disabled = items2[0].disabled || hasOnlyDisabledChildren
    return items2
  }
  return {items, getItemGroup, getItemParent}
}
const isGroup = optionOrGroup => {
  return 'options' in optionOrGroup
}

export {
  useAutosuggestItems
}
