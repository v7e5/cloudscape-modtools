import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  memo
} from 'react'
import clsx from 'clsx'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useFormFieldContext} from '../internal/context/form-field-context'
import {getBaseProps} from '../internal/base-component'
import {fireNonCancelableEvent} from '../internal/events'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {isGroup} from '../internal/components/option/utils/filter-options'
import DropdownFooter from '../internal/components/dropdown-footer/'
import {prepareOptions} from '../internal/components/option/utils/prepare-options'
import Dropdown from '../internal/components/dropdown'
import {useDropdownStatus} from '../internal/components/dropdown-status'
import {useSelect} from '../select/utils/use-select'
import {useNativeSearch} from '../select/utils/use-native-search'
import {useLoadItems} from '../select/utils/use-load-items'
import {useAnnouncement} from '../select/utils/use-announcement'
import {findOptionIndex} from '../select/utils/connect-options'
import PlainList from '../select/parts/plain-list'
import VirtualList from '../select/parts/virtual-list'
import Filter from '../select/parts/filter'
import Trigger from '../select/parts/trigger'
import InternalTokenGroup from '../token-group/internal'
import styles from './styles.css.js'
import ScreenreaderOnly from '../internal/components/screenreader-only'
import {joinStrings} from '../internal/utils/strings'
import {useInternalI18n} from '../i18n/context'

const InternalMultiselect = memo(
  forwardRef(
    (
      {
        options = [],
        filteringType = 'none',
        filteringPlaceholder,
        filteringAriaLabel,
        filteringClearAriaLabel,
        filteringResultsText,
        ariaRequired,
        placeholder,
        disabled,
        ariaLabel,
        statusType = 'finished',
        empty,
        loadingText,
        finishedText,
        errorText,
        noMatch,
        renderHighlightedAriaLive,
        selectedOptions = [],
        deselectAriaLabel,
        keepOpen = true,
        tokenLimit,
        i18nStrings,
        onBlur,
        onFocus,
        onLoadItems,
        onChange,
        virtualScroll,
        inlineTokens = false,
        hideTokens = false,
        expandToViewport,
        tokenLimitShowFewerAriaLabel,
        tokenLimitShowMoreAriaLabel,
        __internalRootRef = null,
        autoFocus,
        ...restProps
      },
      externalRef
    ) => {
      const baseProps = getBaseProps(restProps)
      const formFieldContext = useFormFieldContext(restProps)
      const i18n = useInternalI18n('multiselect')
      const i18nCommon = useInternalI18n('select')
      const recoveryText = i18nCommon('recoveryText', restProps.recoveryText)
      const errorIconAriaLabel = i18nCommon(
        'errorIconAriaLabel',
        restProps.errorIconAriaLabel
      )
      const selectedAriaLabel = i18nCommon(
        'selectedAriaLabel',
        restProps.selectedAriaLabel
      )
      const {handleLoadMore, handleRecoveryClick, fireLoadItems} =
        useLoadItems({
          onLoadItems,
          options,
          statusType
        })
      const useInteractiveGroups = true
      const [filteringValue, setFilteringValue] = useState('')
      const {filteredOptions, parentMap, totalCount, matchesCount} =
        prepareOptions(options, filteringType, filteringValue)
      const updateSelectedOption = useCallback(
        option => {
          const filtered = filteredOptions
            .filter(item => item.type !== 'parent')
            .map(item => item.option)
          const isAllChildrenSelected = optionsArray =>
            optionsArray.every(
              item =>
                findOptionIndex(selectedOptions, item) > -1 || item.disabled
            )
          const intersection = (visibleOptions, options2) =>
            visibleOptions.filter(
              item => findOptionIndex(options2, item) > -1 && !item.disabled
            )
          const union = (visibleOptions, options2) =>
            visibleOptions
              .filter(item => findOptionIndex(options2, item) === -1)
              .concat(options2)
          const select = (options2, selectedOptions2) => {
            return union(selectedOptions2, options2)
          }
          const unselect = (options2, selectedOptions2) => {
            return selectedOptions2.filter(
              option2 => findOptionIndex(options2, option2) === -1
            )
          }
          let newSelectedOptions = [...selectedOptions]
          if (isGroup(option)) {
            const visibleOptions = intersection([...option.options], filtered)
            newSelectedOptions = isAllChildrenSelected(visibleOptions)
              ? unselect(visibleOptions, newSelectedOptions)
              : select(visibleOptions, newSelectedOptions)
          } else {
            newSelectedOptions = isAllChildrenSelected([option])
              ? unselect([option], newSelectedOptions)
              : select([option], newSelectedOptions)
          }
          fireNonCancelableEvent(onChange, {
            selectedOptions: newSelectedOptions
          })
        },
        [onChange, selectedOptions, filteredOptions]
      )
      const rootRef = useRef(null)
      const selfControlId = useUniqueId('trigger')
      const controlId = formFieldContext.controlId ?? selfControlId
      const multiSelectAriaLabelId = useUniqueId('multiselect-arialabel-')
      const footerId = useUniqueId('footer')
      const scrollToIndex = useRef(null)
      const {
        isOpen,
        highlightType,
        highlightedOption,
        highlightedIndex,
        getTriggerProps,
        getDropdownProps,
        getFilterProps,
        getMenuProps,
        getOptionProps,
        highlightOption,
        announceSelected
      } = useSelect({
        selectedOptions,
        updateSelectedOption,
        options: filteredOptions,
        filteringType,
        onFocus,
        onBlur,
        externalRef,
        keepOpen,
        fireLoadItems,
        setFilteringValue,
        useInteractiveGroups,
        statusType
      })
      const handleNativeSearch = useNativeSearch({
        isEnabled: filteringType === 'none' && isOpen,
        options: filteredOptions,
        highlightOption,
        highlightedOption: highlightedOption?.option,
        useInteractiveGroups
      })
      const isEmpty = !options || options.length === 0
      const isNoMatch = filteredOptions && filteredOptions.length === 0
      const isFiltered =
        filteringType !== 'none' &&
        filteringValue.length > 0 &&
        filteredOptions &&
        filteredOptions.length > 0
      const filteredText = isFiltered
        ? filteringResultsText?.(matchesCount, totalCount)
        : void 0
      const dropdownStatus = useDropdownStatus({
        statusType,
        empty,
        loadingText,
        finishedText,
        errorText,
        recoveryText,
        isEmpty,
        isNoMatch,
        noMatch,
        isFiltered,
        filteringResultsText: filteredText,
        onRecoveryClick: handleRecoveryClick,
        errorIconAriaLabel,
        hasRecoveryCallback: !!onLoadItems
      })
      const filter = (
        <Filter
          clearAriaLabel={filteringClearAriaLabel}
          filteringType={filteringType}
          placeholder={filteringPlaceholder}
          ariaLabel={filteringAriaLabel}
          ariaRequired={ariaRequired}
          value={filteringValue}
          {...getFilterProps()}
        />
      )
      const trigger = (
        <Trigger
          placeholder={placeholder}
          disabled={disabled}
          triggerProps={getTriggerProps(disabled, autoFocus)}
          selectedOption={null}
          selectedOptions={selectedOptions}
          triggerVariant={inlineTokens ? 'tokens' : 'placeholder'}
          isOpen={isOpen}
          {...formFieldContext}
          controlId={controlId}
          ariaLabelledby={joinStrings(
            formFieldContext.ariaLabelledby,
            multiSelectAriaLabelId
          )}
        />
      )
      const menuProps = {
        ...getMenuProps(),
        onLoadMore: handleLoadMore,
        ariaLabelledby: joinStrings(multiSelectAriaLabelId, controlId),
        ariaDescribedby: dropdownStatus.content ? footerId : void 0
      }
      const announcement = useAnnouncement({
        announceSelected,
        highlightedOption,
        getParent: option => parentMap.get(option)?.option,
        selectedAriaLabel,
        renderHighlightedAriaLive
      })
      const tokens = selectedOptions.map(option => ({
        label: option.label,
        disabled: disabled || option.disabled,
        labelTag: option.labelTag,
        description: option.description,
        iconAlt: option.iconAlt,
        iconName: option.iconName,
        iconUrl: option.iconUrl,
        iconSvg: option.iconSvg,
        tags: option.tags,
        dismissLabel: i18n(
          'deselectAriaLabel',
          deselectAriaLabel?.(option),
          format => format({option__label: option.label ?? ''})
        )
      }))
      useEffect(() => {
        scrollToIndex.current?.(highlightedIndex)
      }, [highlightedIndex])
      const ListComponent = virtualScroll ? VirtualList : PlainList
      const handleMouseDown = event => {
        const target = event.target
        if (target !== document.activeElement) {
          event.preventDefault()
        }
      }
      const showTokens = !hideTokens && !inlineTokens && tokens.length > 0
      const handleTokenDismiss = ({detail}) => {
        const optionToDeselect = selectedOptions[detail.itemIndex]
        updateSelectedOption(optionToDeselect)
        const targetRef = getTriggerProps().ref
        if (targetRef.current) {
          targetRef.current.focus()
        }
      }
      const tokenGroupI18nStrings = {
        limitShowFewer: i18nStrings?.tokenLimitShowFewer,
        limitShowMore: i18nStrings?.tokenLimitShowMore
      }
      const mergedRef = useMergeRefs(rootRef, __internalRootRef)
      const dropdownProps = getDropdownProps()
      return (
        <div
          {...baseProps}
          ref={mergedRef}
          className={clsx(styles.root, baseProps.className)}
          onKeyPress={handleNativeSearch}>
          <Dropdown
            {...dropdownProps}
            ariaLabelledby={
              dropdownProps.dropdownContentRole
                ? joinStrings(multiSelectAriaLabelId, controlId)
                : void 0
            }
            ariaDescribedby={
              dropdownProps.dropdownContentRole
                ? dropdownStatus.content
                  ? footerId
                  : void 0
                : void 0
            }
            open={isOpen}
            trigger={trigger}
            header={filter}
            onMouseDown={handleMouseDown}
            footer={
              dropdownStatus.isSticky ? (
                <DropdownFooter
                  content={isOpen ? dropdownStatus.content : null}
                  id={footerId}
                />
              ) : null
            }
            expandToViewport={expandToViewport}
            stretchBeyondTriggerWidth={true}>
            <ListComponent
              listBottom={
                !dropdownStatus.isSticky ? (
                  <DropdownFooter
                    content={isOpen ? dropdownStatus.content : null}
                    id={footerId}
                  />
                ) : null
              }
              menuProps={menuProps}
              getOptionProps={getOptionProps}
              filteredOptions={filteredOptions}
              filteringValue={filteringValue}
              ref={scrollToIndex}
              hasDropdownStatus={dropdownStatus.content !== null}
              checkboxes={true}
              useInteractiveGroups={useInteractiveGroups}
              screenReaderContent={announcement}
              highlightType={highlightType}
            />
          </Dropdown>
          {showTokens && (
            <InternalTokenGroup
              className={styles.tokens}
              alignment='horizontal'
              limit={tokenLimit}
              items={tokens}
              onDismiss={handleTokenDismiss}
              i18nStrings={tokenGroupI18nStrings}
              limitShowMoreAriaLabel={tokenLimitShowMoreAriaLabel}
              limitShowFewerAriaLabel={tokenLimitShowFewerAriaLabel}
              disableOuterPadding={true}
            />
          )}
          <ScreenreaderOnly id={multiSelectAriaLabelId}>
            {ariaLabel}
          </ScreenreaderOnly>
        </div>
      )
    }
  )
)

export {
  InternalMultiselect as default
}
