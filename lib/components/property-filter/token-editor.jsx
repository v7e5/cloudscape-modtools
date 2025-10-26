import {useState, useRef, memo} from 'react'
import InternalSelect from '../select/internal'
import InternalAutosuggest from '../autosuggest/internal'
import InternalPopover from '../popover/internal'
import styles from './styles.css.js'
import {useLoadItems} from './use-load-items'
import {
  createPropertiesCompatibilityMap,
  getAllowedOperators,
  operatorToDescription,
  getPropertySuggestions
} from './controller'
import InternalButton from '../button/internal'
import InternalFormField from '../form-field/internal'
import {matchTokenValue} from './utils'

const PropertyInput = memo(
  ({
    property,
    onChangePropertyKey,
    asyncProps,
    filteringProperties,
    onLoadItems,
    customGroupsText,
    i18nStrings,
    freeTextFiltering
  }) => {
    const propertySelectHandlers = useLoadItems(onLoadItems)
    const asyncPropertySelectProps = asyncProps
      ? {...asyncProps, ...propertySelectHandlers}
      : {}
    const propertyOptions = getPropertySuggestions(
      filteringProperties,
      customGroupsText,
      i18nStrings,
      ({propertyKey, propertyLabel}) => ({
        value: propertyKey,
        label: propertyLabel,
        dontCloseOnSelect: true
      })
    )
    const checkPropertiesCompatible =
      createPropertiesCompatibilityMap(filteringProperties)
    propertyOptions.forEach(optionGroup => {
      if ('options' in optionGroup) {
        optionGroup.options.forEach(option => {
          if (property?.propertyKey && option.value) {
            option.disabled = !checkPropertiesCompatible(
              option.value,
              property.propertyKey
            )
          }
        })
      }
    })
    const allPropertiesOption = {
      label: i18nStrings.allPropertiesLabel,
      value: void 0
    }
    if (!freeTextFiltering.disabled) {
      propertyOptions.unshift(allPropertiesOption)
    }
    return (
      <InternalSelect
        options={propertyOptions}
        selectedOption={
          property
            ? {
                value: property.propertyKey ?? void 0,
                label: property.propertyLabel
              }
            : allPropertiesOption
        }
        onChange={e => onChangePropertyKey(e.detail.selectedOption.value)}
        {...asyncPropertySelectProps}
      />
    )
  }
)

const OperatorInput = memo(
  ({property, operator, onChangeOperator, i18nStrings, freeTextFiltering}) => {
    const operatorOptions = (
      property ? getAllowedOperators(property) : freeTextFiltering.operators
    ).map(operator2 => ({
      value: operator2,
      label: operator2,
      description: operatorToDescription(operator2, i18nStrings)
    }))
    return (
      <InternalSelect
        options={operatorOptions}
        triggerVariant='option'
        selectedOption={
          operator
            ? {
                value: operator,
                label: operator,
                description: operatorToDescription(operator, i18nStrings)
              }
            : null
        }
        onChange={e => onChangeOperator(e.detail.selectedOption.value)}
      />
    )
  }
)

const ValueInput = memo(
  ({
    property,
    operator,
    value,
    onChangeValue,
    asyncProps,
    filteringOptions,
    onLoadItems,
    i18nStrings
  }) => {
    const valueOptions = property
      ? filteringOptions
          .filter(
            option => option.property?.propertyKey === property.propertyKey
          )
          .map(({label, value: value2}) => ({label, value: value2}))
      : []
    const valueAutosuggestHandlers = useLoadItems(
      onLoadItems,
      '',
      property?.externalProperty
    )
    const asyncValueAutosuggestProps = property?.propertyKey
      ? {...valueAutosuggestHandlers, ...asyncProps}
      : {empty: asyncProps.empty}
    const [matchedOption] = valueOptions.filter(
      option => option.value === value
    )
    const OperatorForm =
      property?.propertyKey &&
      operator &&
      property?.getValueFormRenderer(operator)
    return OperatorForm ? (
      <OperatorForm
        value={value}
        onChange={onChangeValue}
        operator={operator}
      />
    ) : (
      <InternalAutosuggest
        enteredTextLabel={i18nStrings.enteredTextLabel ?? (value2 => value2)}
        value={matchedOption?.label ?? value ?? ''}
        clearAriaLabel={i18nStrings.clearAriaLabel}
        onChange={e => onChangeValue(e.detail.value)}
        disabled={!operator}
        options={valueOptions}
        {...asyncValueAutosuggestProps}
        virtualScroll={true}
      />
    )
  }
)

const TokenEditor = memo(
  ({
    asyncProperties,
    asyncProps,
    customGroupsText,
    freeTextFiltering,
    expandToViewport,
    filteringProperties,
    filteringOptions,
    i18nStrings,
    onLoadItems,
    setToken,
    token,
    triggerComponent
  }) => {
    const [temporaryToken, setTemporaryToken] = useState(token)
    const popoverRef = useRef(null)
    const closePopover = () => {
      popoverRef.current && popoverRef.current.dismissPopover()
    }
    const property = temporaryToken.property
    const onChangePropertyKey = newPropertyKey => {
      const filteringProperty = filteringProperties.reduce(
        (acc, property2) =>
          property2.propertyKey === newPropertyKey ? property2 : acc,
        void 0
      )
      const allowedOperators = filteringProperty
        ? getAllowedOperators(filteringProperty)
        : freeTextFiltering.operators
      const operator2 =
        temporaryToken.operator &&
        allowedOperators.indexOf(temporaryToken.operator) !== -1
          ? temporaryToken.operator
          : allowedOperators[0]
      const matchedProperty =
        filteringProperties.find(
          property2 => property2.propertyKey === newPropertyKey
        ) ?? null
      setTemporaryToken({
        ...temporaryToken,
        property: matchedProperty,
        operator: operator2
      })
    }
    const operator = temporaryToken.operator
    const onChangeOperator = newOperator => {
      setTemporaryToken({...temporaryToken, operator: newOperator})
    }
    const value = temporaryToken.value
    const onChangeValue = newValue => {
      setTemporaryToken({...temporaryToken, value: newValue})
    }
    return (
      <InternalPopover
        ref={popoverRef}
        className={styles['token-label']}
        triggerType='text'
        header={i18nStrings.editTokenHeader}
        size='large'
        position='right'
        dismissAriaLabel={i18nStrings.dismissAriaLabel}
        __onOpen={() => setTemporaryToken(token)}
        renderWithPortal={expandToViewport}
        content={
          <div className={styles['token-editor']}>
            <div className={styles['token-editor-form']}>
              <InternalFormField
                label={i18nStrings.propertyText}
                className={styles['token-editor-field-property']}>
                <PropertyInput
                  property={property}
                  onChangePropertyKey={onChangePropertyKey}
                  asyncProps={asyncProperties ? asyncProps : null}
                  filteringProperties={filteringProperties}
                  onLoadItems={onLoadItems}
                  customGroupsText={customGroupsText}
                  i18nStrings={i18nStrings}
                  freeTextFiltering={freeTextFiltering}
                />
              </InternalFormField>
              <InternalFormField
                label={i18nStrings.operatorText}
                className={styles['token-editor-field-operator']}>
                <OperatorInput
                  property={property}
                  operator={operator}
                  onChangeOperator={onChangeOperator}
                  i18nStrings={i18nStrings}
                  freeTextFiltering={freeTextFiltering}
                />
              </InternalFormField>
              <InternalFormField
                label={i18nStrings.valueText}
                className={styles['token-editor-field-value']}>
                <ValueInput
                  property={property}
                  operator={operator}
                  value={value}
                  onChangeValue={onChangeValue}
                  asyncProps={asyncProps}
                  filteringOptions={filteringOptions}
                  onLoadItems={onLoadItems}
                  i18nStrings={i18nStrings}
                />
              </InternalFormField>
            </div>
            <div className={styles['token-editor-actions']}>
              <InternalButton
                formAction='none'
                variant='link'
                className={styles['token-editor-cancel']}
                onClick={closePopover}>
                {i18nStrings.cancelActionText}
              </InternalButton>
              <InternalButton
                className={styles['token-editor-submit']}
                formAction='none'
                onClick={() => {
                  setToken(matchTokenValue(temporaryToken, filteringOptions))
                  closePopover()
                }}>
                {i18nStrings.applyActionText}
              </InternalButton>
            </div>
          </div>
        }>
        {triggerComponent}
      </InternalPopover>
    )
  }
)

export {
  TokenEditor
}
