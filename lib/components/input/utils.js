import {useCallback} from 'react'

const useSearchProps = (
  type,
  disabled,
  readOnly,
  value,
  inputRef,
  onChange
) => {
  const searchProps = {}
  const handleIconClick = useCallback(() => {
    inputRef.current?.focus()
    onChange('')
  }, [inputRef, onChange])
  if (type === 'search' || type === 'visualSearch') {
    searchProps.__leftIcon = 'search'
    if (!disabled && !readOnly && value) {
      searchProps.__rightIcon = 'close'
      searchProps.__onRightIconClick = handleIconClick
    }
  }
  return searchProps
}
const convertAutoComplete = (propertyValue = false) => {
  if (propertyValue === true) {
    return 'on'
  }
  return propertyValue || 'off'
}

export {
  convertAutoComplete,
  useSearchProps
}
