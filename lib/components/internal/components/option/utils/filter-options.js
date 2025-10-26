const searchableFields = ['value', 'label', 'description', 'labelTag']
const matchesString = (value, searchText, strictMatching) => {
  if (!value) {
    return false
  }
  const index = value.toLowerCase().indexOf(searchText)
  return strictMatching ? index === 0 : index > -1
}
const matchesSingleOption = (dropdownOption, text, strictMatching) => {
  const searchText = text.toLowerCase()
  const option = dropdownOption.option
  const searchStrFields = attr =>
    matchesString(option[attr], searchText, strictMatching)
  const searchTagsFields = attr =>
    option[attr]?.some(value =>
      matchesString(value, searchText, strictMatching)
    )
  const searchableTagFields = ['tags']
  if (!strictMatching) {
    searchableTagFields.push('filteringTags')
  }
  return (
    searchableFields.some(searchStrFields) ||
    searchableTagFields.some(searchTagsFields)
  )
}
const filterOptions = (options, searchText, strictMatching = false) => {
  if (searchText === '') {
    return options
  }
  let currentGroup = null
  let parentMatched = false
  return options.reduce((acc, option) => {
    if (option.type === 'parent') {
      parentMatched = false
      currentGroup = option
      if (matchesSingleOption(option, searchText, strictMatching)) {
        parentMatched = true
        acc.push(currentGroup)
      }
      return acc
    }
    if (option.type !== 'child') {
      currentGroup = null
      parentMatched = false
    }
    if (parentMatched) {
      acc.push(option)
    } else if (matchesSingleOption(option, searchText, strictMatching)) {
      if (currentGroup) {
        acc.push(currentGroup)
        currentGroup = null
      }
      acc.push(option)
    }
    return acc
  }, [])
}
const isInteractive = option =>
  !!option && !option.disabled && option.type !== 'parent'
const isGroupInteractive = option => !!option && !option.disabled
const isGroup = option => !!option && 'options' in option

export {
  filterOptions,
  isGroup,
  isGroupInteractive,
  isInteractive,
  matchesString
}
