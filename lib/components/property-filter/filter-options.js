const filterOptions = (options, searchText = '') => {
  if (!searchText) {
    return options
  }
  const filtered = []
  for (const option of options) {
    if (isGroup(option)) {
      const childOptions = filterOptions(option.options, searchText)
      if (childOptions.length > 0) {
        filtered.push({...option, options: childOptions})
      }
    } else if (matchSingleOption(option, searchText)) {
      filtered.push(option)
    }
  }
  return filtered
}
const isGroup = optionOrGroup => {
  return 'options' in optionOrGroup
}
const matchSingleOption = (option, searchText) => {
  searchText = searchText.toLowerCase()
  const label = (option.label ?? '').toLowerCase()
  const labelPrefix = option.__labelPrefix ?? ''
  const value = (
    option.value ? option.value.slice(labelPrefix.length) : ''
  ).toLowerCase()
  return label.indexOf(searchText) !== -1 || value.indexOf(searchText) !== -1
}

export {
  filterOptions
}
