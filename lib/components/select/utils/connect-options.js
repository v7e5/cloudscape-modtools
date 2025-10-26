const connectOptionsByValue = (options, selectedOptions) => {
  return (selectedOptions || []).map(selectedOption => {
    for (const dropdownOption of options) {
      if (
        dropdownOption.type !== 'parent' &&
        dropdownOption.option.value === selectedOption.value
      ) {
        return dropdownOption
      }
    }
    return {option: selectedOption}
  })
}
const findOptionIndex = (options, option) => {
  for (let index = 0; index < options.length; index++) {
    const __option = options[index]
    if (__option === option || __option.value === option.value) {
      return index
    }
  }
  return -1
}

export {
  connectOptionsByValue,
  findOptionIndex
}
