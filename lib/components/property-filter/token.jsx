import {memo} from 'react'
import styles from './styles.css.js'
import {TokenEditor} from './token-editor'
import FilteringToken from '../internal/components/filtering-token'
import {getFormattedToken} from './utils'

const TokenButton = memo(
  ({
    token,
    operation = 'and',
    first,
    removeToken,
    setToken,
    setOperation,
    filteringProperties,
    filteringOptions,
    asyncProps,
    onLoadItems,
    i18nStrings,
    asyncProperties,
    hideOperations,
    customGroupsText,
    disabled,
    freeTextFiltering,
    expandToViewport
  }) => {
    const externalToken = {...token, propertyKey: token.property?.propertyKey}
    const formattedToken = getFormattedToken(token)
    return (
      <FilteringToken
        ariaLabel={formattedToken.label}
        showOperation={!first && !hideOperations}
        operation={operation}
        andText={i18nStrings.operationAndText ?? ''}
        orText={i18nStrings.operationOrText ?? ''}
        dismissAriaLabel={i18nStrings?.removeTokenButtonAriaLabel?.(
          externalToken
        )}
        operatorAriaLabel={i18nStrings.tokenOperatorAriaLabel}
        onChange={setOperation}
        onDismiss={removeToken}
        disabled={disabled}>
        <TokenEditor
          setToken={setToken}
          triggerComponent={
            <span className={styles['token-trigger']}>
              <TokenTrigger
                property={formattedToken.property}
                operator={token.operator}
                value={formattedToken.value}
              />
            </span>
          }
          filteringProperties={filteringProperties}
          filteringOptions={filteringOptions}
          token={token}
          asyncProps={asyncProps}
          onLoadItems={onLoadItems}
          i18nStrings={i18nStrings}
          asyncProperties={asyncProperties}
          customGroupsText={customGroupsText}
          freeTextFiltering={freeTextFiltering}
          expandToViewport={expandToViewport}
        />
      </FilteringToken>
    )
  }
)
const TokenTrigger = memo(({property, operator, value}) => {
  if (property) {
    property += ' '
  }
  const freeTextContainsToken = operator === ':' && !property
  const operatorText = freeTextContainsToken ? '' : operator + ' '
  return (
    <>
      {property}
      <span className={styles['token-operator']}>{operatorText}</span>
      {value}
    </>
  )
})

export {
  TokenButton
}
