const flattenOptions = options => {
  const parentMap = new Map()
  const flatOptions = options.reduce((acc, option) => {
    if ('options' in option) {
      const {options: options2, ...rest} = option
      const parentDropdownOption = {type: 'parent', option}
      const allOptionsDisabled = options2.every(option2 => option2.disabled)
      if (option.disabled || allOptionsDisabled) {
        parentDropdownOption.disabled = true
      }
      acc.push(parentDropdownOption)
      options2.forEach(child => {
        const childDropdownOption = {type: 'child', option: child}
        if (rest.disabled || child.disabled) {
          childDropdownOption.disabled = true
        }
        acc.push(childDropdownOption)
        parentMap.set(childDropdownOption, parentDropdownOption)
      })
    } else {
      const dropdownOption = {option}
      if (option.disabled) {
        dropdownOption.disabled = true
      }
      acc.push(dropdownOption)
    }
    return acc
  }, [])
  return {
    flatOptions,
    parentMap
  }
}

export {
  flattenOptions
}
