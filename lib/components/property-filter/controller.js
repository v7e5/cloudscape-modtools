import {fireNonCancelableEvent} from '../internal/events'
import {
  matchFilteringProperty,
  matchOperator,
  matchOperatorPrefix,
  removeOperator,
  trimStart
} from './utils'

const getQueryActions = (query, onChange, inputRef) => {
  const {tokens, operation} = query
  const fireOnChange = (tokens2, operation2) =>
    fireNonCancelableEvent(onChange, {tokens: tokens2, operation: operation2})
  const setToken = (index, newToken) => {
    const newTokens = [...tokens]
    if (newTokens && index < newTokens.length) {
      newTokens[index] = newToken
    }
    fireOnChange(newTokens, operation)
  }
  const removeToken = index => {
    const newTokens = tokens.filter((_, i) => i !== index)
    fireOnChange(newTokens, operation)
    inputRef.current?.focus({preventDropdown: true})
  }
  const removeAllTokens = () => {
    fireOnChange([], operation)
    inputRef.current?.focus({preventDropdown: true})
  }
  const addToken = newToken => {
    const newTokens = [...tokens]
    newTokens.push(newToken)
    fireOnChange(newTokens, operation)
  }
  const setOperation = newOperation => {
    fireOnChange(tokens, newOperation)
  }
  return {
    setToken,
    removeToken,
    removeAllTokens,
    addToken,
    setOperation
  }
}
const getAllowedOperators = property => {
  const {operators = [], defaultOperator} = property
  const operatorOrder = ['=', '!=', ':', '!:', '^', '!^', '>=', '<=', '<', '>']
  const operatorSet = new Set([defaultOperator, ...operators])
  return operatorOrder.filter(op => operatorSet.has(op))
}
const parseText = (filteringText, filteringProperties, freeTextFiltering) => {
  const property = matchFilteringProperty(filteringProperties, filteringText)
  if (!property) {
    if (!freeTextFiltering.disabled) {
      const freeTextOperators =
        freeTextFiltering.operators.indexOf('!:') >= 0
          ? ['!', ...freeTextFiltering.operators]
          : freeTextFiltering.operators
      const operator2 = matchOperator(freeTextOperators, filteringText)
      if (operator2) {
        return {
          step: 'free-text',
          operator: operator2 === '!' ? '!:' : operator2,
          value: removeOperator(filteringText, operator2)
        }
      }
    }
    return {
      step: 'free-text',
      value: filteringText
    }
  }
  const allowedOps = getAllowedOperators(property)
  const textWithoutProperty = filteringText.substring(
    property.propertyLabel.length
  )
  const operator = matchOperator(allowedOps, trimStart(textWithoutProperty))
  if (operator) {
    return {
      step: 'property',
      property,
      operator,
      value: removeOperator(textWithoutProperty, operator)
    }
  }
  const operatorPrefix = matchOperatorPrefix(
    allowedOps,
    trimStart(textWithoutProperty)
  )
  if (operatorPrefix !== null) {
    return {step: 'operator', property, operatorPrefix}
  }
  return {
    step: 'free-text',
    value: filteringText
  }
}
const getAllValueSuggestions = (
  filteringOptions,
  operator = '=',
  i18nStrings,
  customGroupsText
) => {
  const defaultGroup = {
    label: i18nStrings.groupValuesText ?? '',
    options: []
  }
  const customGroups = {}
  filteringOptions.forEach(filteringOption => {
    const property = filteringOption.property
    if (!property) {
      return
    }
    if (getAllowedOperators(property).indexOf(operator) === -1) {
      return
    }
    if (property.propertyGroup && !customGroups[property.propertyGroup]) {
      const label = customGroupsText.reduce(
        (acc, customGroup) =>
          customGroup.group === property.propertyGroup
            ? customGroup.values
            : acc,
        ''
      )
      customGroups[property.propertyGroup] = {
        label,
        options: []
      }
    }
    const propertyGroup = property.propertyGroup
      ? customGroups[property.propertyGroup]
      : defaultGroup
    propertyGroup.options.push({
      value:
        property.propertyLabel +
        ' ' +
        (operator || '=') +
        ' ' +
        filteringOption.value,
      label: filteringOption.label,
      __labelPrefix: property.propertyLabel + ' ' + (operator || '=')
    })
  })
  return [
    defaultGroup,
    ...Object.keys(customGroups).map(group => customGroups[group])
  ]
}
const createPropertiesCompatibilityMap = filteringProperties => {
  const lookup = {}
  for (const property of filteringProperties) {
    lookup[property.propertyKey] = (property.operators || [])
      .map(operator => ({
        operator,
        form: property.getValueFormRenderer(operator)
      }))
      .sort((a, b) => a.operator.localeCompare(b.operator))
  }
  return (propertyA, propertyB) => {
    if (lookup[propertyA].length !== lookup[propertyB].length) {
      return false
    }
    for (let i = 0; i < lookup[propertyA].length; i++) {
      if (lookup[propertyA][i].operator !== lookup[propertyB][i].operator) {
        return false
      }
      if (lookup[propertyA][i].form !== lookup[propertyB][i].form) {
        return false
      }
    }
    return true
  }
}
const filteringPropertyToAutosuggestOption = filteringProperty => ({
  value: filteringProperty.propertyLabel,
  label: filteringProperty.propertyLabel,
  keepOpenOnSelect: true
})
const getPropertySuggestions = (
  filteringProperties,
  customGroupsText,
  i18nStrings,
  filteringPropertyToOption
) => {
  const defaultGroup = {
    label: i18nStrings.groupPropertiesText ?? '',
    options: []
  }
  const customGroups = {}
  filteringProperties.forEach(filteringProperty => {
    const {propertyGroup} = filteringProperty
    let optionsGroup = defaultGroup
    if (propertyGroup) {
      if (!customGroups[propertyGroup]) {
        const label = customGroupsText.reduce(
          (acc, customGroup) =>
            customGroup.group === propertyGroup ? customGroup.properties : acc,
          ''
        )
        customGroups[propertyGroup] = {options: [], label}
      }
      optionsGroup = customGroups[propertyGroup]
    }
    optionsGroup.options.push(filteringPropertyToOption(filteringProperty))
  })
  const defaultGroupArray = defaultGroup.options.length ? [defaultGroup] : []
  const customGroupsArray = Object.keys(customGroups).map(
    groupKey => customGroups[groupKey]
  )
  return [...defaultGroupArray, ...customGroupsArray]
}
const getAutosuggestOptions = (
  parsedText,
  filteringProperties,
  filteringOptions,
  customGroupsText,
  i18nStrings
) => {
  switch (parsedText.step) {
    case 'property': {
      const {propertyLabel, groupValuesLabel} = parsedText.property
      const options = filteringOptions.filter(
        o => o.property === parsedText.property
      )
      return {
        filterText: parsedText.value,
        options: [
          {
            options: options.map(({label, value}) => ({
              value: propertyLabel + ' ' + parsedText.operator + ' ' + value,
              label,
              __labelPrefix: propertyLabel + ' ' + parsedText.operator
            })),
            label: groupValuesLabel
          }
        ]
      }
    }
    case 'operator': {
      return {
        filterText:
          parsedText.property.propertyLabel + ' ' + parsedText.operatorPrefix,
        options: [
          ...getPropertySuggestions(
            filteringProperties,
            customGroupsText,
            i18nStrings,
            filteringPropertyToAutosuggestOption
          ),
          {
            options: getAllowedOperators(parsedText.property).map(value => ({
              value: parsedText.property.propertyLabel + ' ' + value + ' ',
              label: parsedText.property.propertyLabel + ' ' + value,
              description: operatorToDescription(value, i18nStrings),
              keepOpenOnSelect: true
            })),
            label: i18nStrings.operatorsText
          }
        ]
      }
    }
    case 'free-text': {
      const needsValueSuggestions = !!parsedText.value
      const needsPropertySuggestions = !(
        parsedText.step === 'free-text' && parsedText.operator === '!:'
      )
      return {
        filterText: parsedText.value,
        options: [
          ...(needsPropertySuggestions
            ? getPropertySuggestions(
                filteringProperties,
                customGroupsText,
                i18nStrings,
                filteringPropertyToAutosuggestOption
              )
            : []),
          ...(needsValueSuggestions
            ? getAllValueSuggestions(
                filteringOptions,
                parsedText.operator,
                i18nStrings,
                customGroupsText
              )
            : [])
        ]
      }
    }
  }
}
const operatorToDescription = (operator, i18nStrings) => {
  switch (operator) {
    case '<':
      return i18nStrings.operatorLessText
    case '<=':
      return i18nStrings.operatorLessOrEqualText
    case '>':
      return i18nStrings.operatorGreaterText
    case '>=':
      return i18nStrings.operatorGreaterOrEqualText
    case ':':
      return i18nStrings.operatorContainsText
    case '!:':
      return i18nStrings.operatorDoesNotContainText
    case '=':
      return i18nStrings.operatorEqualsText
    case '!=':
      return i18nStrings.operatorDoesNotEqualText
    case '^':
      return i18nStrings.operatorStartsWithText
    case '!^':
      return i18nStrings.operatorDoesNotStartWithText
    default:
      return ''
  }
}

export {
  createPropertiesCompatibilityMap,
  getAllValueSuggestions,
  getAllowedOperators,
  getAutosuggestOptions,
  getPropertySuggestions,
  getQueryActions,
  operatorToDescription,
  parseText
}
