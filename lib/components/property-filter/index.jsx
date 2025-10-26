import {useRef, useState, useImperativeHandle, forwardRef, memo} from 'react'
import clsx from 'clsx'
import InternalSpaceBetween from '../space-between/internal'
import {InternalButton} from '../button/internal'
import {getBaseProps} from '../internal/base-component'
import {KeyCode} from '../internal/keycode'
import {useUniqueId} from '../internal/hooks/use-unique-id/'
import {fireNonCancelableEvent} from '../internal/events'
import {TokenButton} from './token'
import {
  getQueryActions,
  parseText,
  getAutosuggestOptions,
  getAllowedOperators
} from './controller'
import {useLoadItems} from './use-load-items'
import styles from './styles.css.js'
import useBaseComponent from '../internal/hooks/use-base-component'
import PropertyFilterAutosuggest from './property-filter-autosuggest'
import {PropertyEditor} from './property-editor'
import {matchTokenValue} from './utils'
import {useInternalI18n} from '../i18n/context'
import TokenList from '../internal/components/token-list'
import {SearchResults} from '../text-filter/search-results'
import {joinStrings} from '../internal/utils/strings'

const getOperatorI18nString = operator => {
  switch (operator) {
    case '=':
      return 'equals'
    case '!=':
      return 'not_equals'
    case '>':
      return 'greater_than'
    case '>=':
      return 'greater_than_equal'
    case '<':
      return 'less_than'
    case '<=':
      return 'less_than_equal'
    case ':':
      return 'contains'
    case '!:':
      return 'not_contains'
    case '^':
      return 'starts_with'
    case '!^':
      return 'not_starts_with'
    default:
      return operator
  }
}
const PropertyFilter = memo(
  memo(
    forwardRef(
      (
        {
          disabled,
          countText,
          query,
          hideOperations,
          onChange,
          filteringProperties,
          filteringOptions = [],
          customGroupsText = [],
          disableFreeTextFiltering = false,
          freeTextFiltering,
          onLoadItems,
          virtualScroll,
          customControl,
          customFilterActions,
          filteringPlaceholder,
          filteringAriaLabel,
          filteringEmpty,
          filteringLoadingText,
          filteringFinishedText,
          filteringErrorText,
          filteringRecoveryText,
          filteringConstraintText,
          filteringStatusType,
          asyncProperties,
          tokenLimit,
          expandToViewport,
          tokenLimitShowFewerAriaLabel,
          tokenLimitShowMoreAriaLabel,
          ...rest
        },
        ref
      ) => {
        const {__internalRootRef} = useBaseComponent('PropertyFilter', {
          props: {
            asyncProperties,
            disableFreeTextFiltering,
            expandToViewport,
            hideOperations,
            tokenLimit,
            virtualScroll
          }
        })
        const [removedTokenIndex, setRemovedTokenIndex] = useState(null)
        const inputRef = useRef(null)
        const baseProps = getBaseProps(rest)
        const i18n = useInternalI18n('property-filter')
        const i18nStrings = {
          ...rest.i18nStrings,
          allPropertiesLabel: i18n(
            'i18nStrings.allPropertiesLabel',
            rest.i18nStrings?.allPropertiesLabel
          ),
          applyActionText: i18n(
            'i18nStrings.applyActionText',
            rest.i18nStrings?.applyActionText
          ),
          cancelActionText: i18n(
            'i18nStrings.cancelActionText',
            rest.i18nStrings?.cancelActionText
          ),
          clearFiltersText: i18n(
            'i18nStrings.clearFiltersText',
            rest.i18nStrings?.clearFiltersText
          ),
          editTokenHeader: i18n(
            'i18nStrings.editTokenHeader',
            rest.i18nStrings?.editTokenHeader
          ),
          groupPropertiesText: i18n(
            'i18nStrings.groupPropertiesText',
            rest.i18nStrings?.groupPropertiesText
          ),
          groupValuesText: i18n(
            'i18nStrings.groupValuesText',
            rest.i18nStrings?.groupValuesText
          ),
          operationAndText: i18n(
            'i18nStrings.operationAndText',
            rest.i18nStrings?.operationAndText
          ),
          operationOrText: i18n(
            'i18nStrings.operationOrText',
            rest.i18nStrings?.operationOrText
          ),
          operatorContainsText: i18n(
            'i18nStrings.operatorContainsText',
            rest.i18nStrings?.operatorContainsText
          ),
          operatorDoesNotContainText: i18n(
            'i18nStrings.operatorDoesNotContainText',
            rest.i18nStrings?.operatorDoesNotContainText
          ),
          operatorDoesNotEqualText: i18n(
            'i18nStrings.operatorDoesNotEqualText',
            rest.i18nStrings?.operatorDoesNotEqualText
          ),
          operatorEqualsText: i18n(
            'i18nStrings.operatorEqualsText',
            rest.i18nStrings?.operatorEqualsText
          ),
          operatorGreaterOrEqualText: i18n(
            'i18nStrings.operatorGreaterOrEqualText',
            rest.i18nStrings?.operatorGreaterOrEqualText
          ),
          operatorGreaterText: i18n(
            'i18nStrings.operatorGreaterText',
            rest.i18nStrings?.operatorGreaterText
          ),
          operatorLessOrEqualText: i18n(
            'i18nStrings.operatorLessOrEqualText',
            rest.i18nStrings?.operatorLessOrEqualText
          ),
          operatorLessText: i18n(
            'i18nStrings.operatorLessText',
            rest.i18nStrings?.operatorLessText
          ),
          operatorStartsWithText: i18n(
            'i18nStrings.operatorStartsWithText',
            rest.i18nStrings?.operatorStartsWithText
          ),
          operatorDoesNotStartWithText: i18n(
            'i18nStrings.operatorDoesNotStartWithText',
            rest.i18nStrings?.operatorDoesNotStartWithText
          ),
          operatorText: i18n(
            'i18nStrings.operatorText',
            rest.i18nStrings?.operatorText
          ),
          operatorsText: i18n(
            'i18nStrings.operatorsText',
            rest.i18nStrings?.operatorsText
          ),
          propertyText: i18n(
            'i18nStrings.propertyText',
            rest.i18nStrings?.propertyText
          ),
          tokenLimitShowFewer: i18n(
            'i18nStrings.tokenLimitShowFewer',
            rest.i18nStrings?.tokenLimitShowFewer
          ),
          tokenLimitShowMore: i18n(
            'i18nStrings.tokenLimitShowMore',
            rest.i18nStrings?.tokenLimitShowMore
          ),
          valueText: i18n(
            'i18nStrings.valueText',
            rest.i18nStrings?.valueText
          ),
          removeTokenButtonAriaLabel: i18n(
            'i18nStrings.removeTokenButtonAriaLabel',
            rest.i18nStrings?.removeTokenButtonAriaLabel,
            format => token =>
              format({
                token__operator: getOperatorI18nString(token.operator),
                token__propertyKey: token.propertyKey ?? '',
                token__value: token.value
              })
          )
        }
        useImperativeHandle(
          ref,
          () => ({focus: () => inputRef.current?.focus()}),
          []
        )
        const showResults = !!query.tokens?.length && !disabled && !!countText
        const {
          addToken,
          removeToken,
          setToken,
          setOperation,
          removeAllTokens
        } = getQueryActions(query, onChange, inputRef)
        const [filteringText, setFilteringText] = useState('')
        const {
          internalProperties,
          internalOptions,
          internalQuery,
          internalFreeText
        } = (() => {
          const propertyByKey = filteringProperties.reduce((acc, property) => {
            const extendedOperators = (property?.operators ?? []).reduce(
              (acc2, operator) =>
                typeof operator === 'object'
                  ? acc2.set(operator.operator, operator)
                  : acc2,
              new Map()
            )
            acc.set(property.key, {
              propertyKey: property.key,
              propertyLabel: property?.propertyLabel ?? '',
              groupValuesLabel: property?.groupValuesLabel ?? '',
              propertyGroup: property?.group,
              operators: (property?.operators ?? []).map(op =>
                typeof op === 'string' ? op : op.operator
              ),
              defaultOperator: property?.defaultOperator ?? '=',
              getValueFormatter: operator =>
                operator
                  ? extendedOperators.get(operator)?.format ?? null
                  : null,
              getValueFormRenderer: operator =>
                operator
                  ? extendedOperators.get(operator)?.form ?? null
                  : null,
              externalProperty: property
            })
            return acc
          }, new Map())
          const getProperty = propertyKey =>
            propertyByKey.get(propertyKey) ?? null
          const internalOptions2 = filteringOptions.map(option => ({
            property: getProperty(option.propertyKey),
            value: option.value,
            label: option.label ?? option.value ?? ''
          }))
          const internalQuery2 = {
            operation: query.operation,
            tokens: query.tokens.map(token => ({
              property: token.propertyKey
                ? getProperty(token.propertyKey)
                : null,
              operator: token.operator,
              value: token.value
            }))
          }
          const internalFreeText2 = {
            disabled: disableFreeTextFiltering,
            operators: freeTextFiltering?.operators ?? [':', '!:'],
            defaultOperator: freeTextFiltering?.defaultOperator ?? ':'
          }
          return {
            internalProperties: [...propertyByKey.values()],
            internalOptions: internalOptions2,
            internalQuery: internalQuery2,
            internalFreeText: internalFreeText2
          }
        })()
        const parsedText = parseText(
          filteringText,
          internalProperties,
          internalFreeText
        )
        const autosuggestOptions = getAutosuggestOptions(
          parsedText,
          internalProperties,
          internalOptions,
          customGroupsText,
          i18nStrings
        )
        const createToken = currentText => {
          const parsedText2 = parseText(
            currentText,
            internalProperties,
            internalFreeText
          )
          let newToken
          switch (parsedText2.step) {
            case 'property': {
              newToken = matchTokenValue(
                {
                  property: parsedText2.property,
                  operator: parsedText2.operator,
                  value: parsedText2.value
                },
                internalOptions
              )
              break
            }
            case 'free-text': {
              newToken = {
                operator:
                  parsedText2.operator || internalFreeText.defaultOperator,
                value: parsedText2.value
              }
              break
            }
            case 'operator': {
              newToken = {
                operator: internalFreeText.defaultOperator,
                value: currentText
              }
              break
            }
          }
          if (internalFreeText.disabled && !('propertyKey' in newToken)) {
            return
          }
          addToken(newToken)
          setFilteringText('')
        }
        const ignoreKeyDown = useRef(false)
        const handleKeyDown = event => {
          if (
            filteringText &&
            !ignoreKeyDown.current &&
            event.detail.keyCode === KeyCode.enter
          ) {
            createToken(filteringText)
          }
        }
        const getLoadMoreDetail = (parsedText2, filteringText2) => {
          const loadMoreDetail2 = {
            filteringProperty: void 0,
            filteringText: filteringText2,
            filteringOperator: void 0
          }
          if (parsedText2.step === 'property') {
            loadMoreDetail2.filteringProperty =
              parsedText2.property.externalProperty
            loadMoreDetail2.filteringText = parsedText2.value
            loadMoreDetail2.filteringOperator = parsedText2.operator
          }
          return loadMoreDetail2
        }
        const loadMoreDetail = getLoadMoreDetail(parsedText, filteringText)
        const inputLoadItemsHandlers = useLoadItems(
          onLoadItems,
          loadMoreDetail.filteringText,
          loadMoreDetail.filteringProperty,
          loadMoreDetail.filteringText,
          loadMoreDetail.filteringOperator
        )
        const asyncProps = {
          empty: filteringEmpty,
          loadingText: filteringLoadingText,
          finishedText: filteringFinishedText,
          errorText: filteringErrorText,
          recoveryText: filteringRecoveryText,
          statusType: filteringStatusType
        }
        const asyncAutosuggestProps =
          !!filteringText.length || asyncProperties
            ? {
                ...inputLoadItemsHandlers,
                ...asyncProps
              }
            : {}
        const handleSelected = event => {
          ignoreKeyDown.current = true
          setTimeout(() => {
            ignoreKeyDown.current = false
          }, 0)
          const {detail: option} = event
          const value = option.value || ''
          if (!('keepOpenOnSelect' in option)) {
            createToken(value)
            return
          }
          event.preventDefault()
          const parsedText2 = parseText(
            value,
            internalProperties,
            internalFreeText
          )
          const loadMoreDetail2 = getLoadMoreDetail(parsedText2, value)
          if (parsedText2.step === 'operator') {
            const operators = getAllowedOperators(parsedText2.property)
            if (
              value.trim() === parsedText2.property.propertyLabel &&
              operators.length === 1
            ) {
              loadMoreDetail2.filteringProperty =
                parsedText2.property.externalProperty ?? void 0
              loadMoreDetail2.filteringOperator = operators[0]
              loadMoreDetail2.filteringText = ''
              setFilteringText(
                parsedText2.property.propertyLabel + ' ' + operators[0] + ' '
              )
            }
          }
          fireNonCancelableEvent(onLoadItems, {
            ...loadMoreDetail2,
            firstPage: true,
            samePage: false
          })
        }
        const operatorForm =
          parsedText.step === 'property' &&
          parsedText.property.getValueFormRenderer(parsedText.operator)
        const searchResultsId = useUniqueId('property-filter-search-results')
        const constraintTextId = useUniqueId('property-filter-constraint')
        const textboxAriaDescribedBy = filteringConstraintText
          ? joinStrings(rest.ariaDescribedby, constraintTextId)
          : rest.ariaDescribedby
        return (
          <div
            {...baseProps}
            className={clsx(baseProps.className, styles.root)}
            ref={__internalRootRef}>
            <div className={styles['search-field']}>
              {customControl && (
                <div className={styles['custom-control']}>{customControl}</div>
              )}
              <PropertyFilterAutosuggest
                ref={inputRef}
                virtualScroll={virtualScroll}
                enteredTextLabel={i18nStrings.enteredTextLabel}
                ariaLabel={
                  filteringAriaLabel ?? i18nStrings.filteringAriaLabel
                }
                placeholder={
                  filteringPlaceholder ?? i18nStrings.filteringPlaceholder
                }
                ariaLabelledby={rest.ariaLabelledby}
                ariaDescribedby={textboxAriaDescribedBy}
                controlId={rest.controlId}
                value={filteringText}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                {...autosuggestOptions}
                onChange={event => setFilteringText(event.detail.value)}
                empty={filteringEmpty}
                {...asyncAutosuggestProps}
                expandToViewport={expandToViewport}
                onOptionClick={handleSelected}
                customForm={
                  operatorForm && (
                    <PropertyEditor
                      property={parsedText.property}
                      operator={parsedText.operator}
                      filter={parsedText.value}
                      operatorForm={operatorForm}
                      i18nStrings={i18nStrings}
                      onCancel={() => {
                        setFilteringText('')
                        inputRef.current?.close()
                        inputRef.current?.focus({preventDropdown: true})
                      }}
                      onSubmit={token => {
                        addToken(token)
                        setFilteringText('')
                        inputRef.current?.focus({preventDropdown: true})
                        inputRef.current?.close()
                      }}
                    />
                  )
                }
                hideEnteredTextOption={
                  internalFreeText.disabled && parsedText.step !== 'property'
                }
                clearAriaLabel={i18nStrings.clearAriaLabel}
                searchResultsId={showResults ? searchResultsId : void 0}
              />
              {showResults ? (
                <div className={styles.results}>
                  <SearchResults id={searchResultsId}>
                    {countText}
                  </SearchResults>
                </div>
              ) : null}
            </div>
            {filteringConstraintText && (
              <div id={constraintTextId} className={styles.constraint}>
                {filteringConstraintText}
              </div>
            )}
            {internalQuery.tokens && internalQuery.tokens.length > 0 && (
              <div className={styles.tokens}>
                <InternalSpaceBetween size='xs' direction='horizontal'>
                  <TokenList
                    alignment='inline'
                    limit={tokenLimit}
                    items={internalQuery.tokens}
                    limitShowFewerAriaLabel={tokenLimitShowFewerAriaLabel}
                    limitShowMoreAriaLabel={tokenLimitShowMoreAriaLabel}
                    renderItem={(token, tokenIndex) => (
                      <TokenButton
                        token={token}
                        first={tokenIndex === 0}
                        operation={internalQuery.operation}
                        removeToken={() => {
                          removeToken(tokenIndex)
                          setRemovedTokenIndex(tokenIndex)
                        }}
                        setToken={newToken => setToken(tokenIndex, newToken)}
                        setOperation={setOperation}
                        filteringProperties={internalProperties}
                        filteringOptions={internalOptions}
                        asyncProps={asyncProps}
                        onLoadItems={onLoadItems}
                        i18nStrings={i18nStrings}
                        asyncProperties={asyncProperties}
                        hideOperations={hideOperations}
                        customGroupsText={customGroupsText}
                        freeTextFiltering={internalFreeText}
                        disabled={disabled}
                        expandToViewport={expandToViewport}
                      />
                    )}
                    i18nStrings={{
                      limitShowFewer: i18nStrings.tokenLimitShowFewer,
                      limitShowMore: i18nStrings.tokenLimitShowMore
                    }}
                    after={
                      customFilterActions ? (
                        <div className={styles['custom-filter-actions']}>
                          {customFilterActions}
                        </div>
                      ) : (
                        <InternalButton
                          formAction='none'
                          onClick={removeAllTokens}
                          className={styles['remove-all']}
                          disabled={disabled}>
                          {i18nStrings.clearFiltersText}
                        </InternalButton>
                      )
                    }
                    moveFocusNextToIndex={removedTokenIndex}
                  />
                </InternalSpaceBetween>
              </div>
            )}
          </div>
        )
      }
    )
  )
)

export {
  PropertyFilter as default
}
