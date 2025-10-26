import {useRef} from 'react'
import {
  filterOptions,
  isInteractive,
  isGroupInteractive,
  isGroup
} from '../../internal/components/option/utils/filter-options'
import {useDebounceCallback} from '../../internal/hooks/use-debounce-callback'

const isRepeatedChar = str => str.split('').every(c => c === str[0])
const findMatchingOption = (
  options,
  searchText,
  currentHighlight,
  useInteractiveGroups
) => {
  const interactivityCheck = useInteractiveGroups
    ? isGroupInteractive
    : isInteractive
  const filter = searchText2 =>
    filterOptions(options, searchText2, true).filter(option =>
      interactivityCheck(option)
    )
  const matchingOptions = filter(searchText)
  if (matchingOptions.length === 1) {
    return matchingOptions[0]
  }
  if (
    currentHighlight &&
    searchText.length > 1 &&
    isRepeatedChar(searchText)
  ) {
    const matchingOptions2 = filter(searchText[0])
    if (matchingOptions2.length > 0) {
      let active = isGroup(currentHighlight)
        ? matchingOptions2.map(({option}) => option).indexOf(currentHighlight)
        : matchingOptions2
            .map(({option}) => option.value)
            .indexOf(currentHighlight.value)
      active += 1
      active = active % matchingOptions2.length
      return matchingOptions2[active]
    }
  }
  if (matchingOptions.length > 0) {
    return matchingOptions[0]
  }
  return null
}
const useNativeSearch = ({
  isEnabled,
  options,
  highlightOption,
  highlightedOption,
  useInteractiveGroups
}) => {
  const value = useRef('')
  const delayedResetValue = useDebounceCallback(
    () => (value.current = ''),
    500
  )
  return event => {
    if (!isEnabled) {
      return
    }
    const {key} = event
    if (!key || key.length !== 1) {
      return
    }
    delayedResetValue()
    const newValue = value.current + key
    value.current = newValue
    const nextHighlight = findMatchingOption(
      options,
      newValue,
      highlightedOption,
      useInteractiveGroups
    )
    if (nextHighlight) {
      highlightOption(nextHighlight)
    }
  }
}

export {
  isRepeatedChar,
  useNativeSearch
}
