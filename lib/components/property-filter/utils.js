const matchFilteringProperty = (filteringProperties, filteringText) => {
  let maxLength = 0
  let matchedProperty = null
  for (const property of filteringProperties) {
    if (
      (property.propertyLabel.length >= maxLength &&
        startsWith(filteringText, property.propertyLabel)) ||
      (property.propertyLabel.length > maxLength &&
        startsWith(
          filteringText.toLowerCase(),
          property.propertyLabel.toLowerCase()
        ))
    ) {
      maxLength = property.propertyLabel.length
      matchedProperty = property
    }
  }
  return matchedProperty
}
const matchOperator = (allowedOperators, filteringText) => {
  filteringText = filteringText.toLowerCase()
  let maxLength = 0
  let matchedOperator = null
  for (const operator of allowedOperators) {
    if (
      operator.length > maxLength &&
      startsWith(filteringText, operator.toLowerCase())
    ) {
      maxLength = operator.length
      matchedOperator = operator
    }
  }
  return matchedOperator
}
const matchOperatorPrefix = (allowedOperators, filteringText) => {
  if (filteringText.trim().length === 0) {
    return ''
  }
  for (const operator of allowedOperators) {
    if (startsWith(operator.toLowerCase(), filteringText.toLowerCase())) {
      return filteringText
    }
  }
  return null
}
const matchTokenValue = ({property, operator, value}, filteringOptions) => {
  const propertyOptions = filteringOptions.filter(
    option => option.property === property
  )
  const bestMatch = {propertyKey: property?.propertyKey, operator, value}
  for (const option of propertyOptions) {
    if (
      (option.label && option.label === value) ||
      (!option.label && option.value === value)
    ) {
      return {
        propertyKey: property?.propertyKey,
        operator,
        value: option.value
      }
    }
    if (
      typeof value === 'string' &&
      value.toLowerCase() ===
        (option.label ?? option.value ?? '').toLowerCase()
    ) {
      bestMatch.value = option.value
    }
  }
  return bestMatch
}
const getFormattedToken = token => {
  const valueFormatter = token.property?.getValueFormatter(token.operator)
  const propertyLabel = token.property && token.property.propertyLabel
  const tokenValue = valueFormatter ? valueFormatter(token.value) : token.value
  const label = `${propertyLabel ?? ''} ${token.operator} ${tokenValue}`
  return {
    property: propertyLabel ?? '',
    operator: token.operator,
    value: tokenValue,
    label
  }
}
const trimStart = source => {
  let spacesLength = 0
  for (let i = 0; i < source.length; i++) {
    if (source[i] === ' ') {
      spacesLength++
    } else {
      break
    }
  }
  return source.slice(spacesLength)
}
const trimFirstSpace = source => {
  return source[0] === ' ' ? source.slice(1) : source
}
const removeOperator = (source, operator) => {
  const operatorLastIndex = source.indexOf(operator) + operator.length
  const textWithoutOperator = source.slice(operatorLastIndex)
  return trimFirstSpace(textWithoutOperator)
}
const startsWith = (source, target) => {
  return source.indexOf(target) === 0
}

export {
  getFormattedToken,
  matchFilteringProperty,
  matchOperator,
  matchOperatorPrefix,
  matchTokenValue,
  removeOperator,
  trimFirstSpace,
  trimStart
}
