import {useState, useRef, useEffect, forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import Dropdown from '../internal/components/dropdown'
import {useDropdownStatus} from '../internal/components/dropdown-status'
import Filter from './parts/filter'
import Trigger from './parts/trigger'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {getBaseProps} from '../internal/base-component'
import {prepareOptions} from '../internal/components/option/utils/prepare-options'
import {useSelect} from './utils/use-select'
import {useNativeSearch} from './utils/use-native-search'
import {fireNonCancelableEvent} from '../internal/events'
import {useLoadItems} from './utils/use-load-items'
import {useAnnouncement} from './utils/use-announcement'
import {useFormFieldContext} from '../internal/context/form-field-context'
import PlainList from './parts/plain-list'
import VirtualList from './parts/virtual-list'
import DropdownFooter from '../internal/components/dropdown-footer'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import ScreenreaderOnly from '../internal/components/screenreader-only/'
import {joinStrings} from '../internal/utils/strings/join-strings'
import {useInternalI18n} from '../i18n/context'

const InternalSelect = memo(
  forwardRef(
    (
      {
        options,
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
        triggerVariant = 'label',
        renderHighlightedAriaLive,
        selectedOption,
        onBlur,
        onFocus,
        onLoadItems,
        onChange,
        virtualScroll,
        expandToViewport,
        autoFocus,
        __inFilteringToken,
        __internalRootRef = null,
        ...restProps
      },
      externalRef
    ) => {
      const baseProps = getBaseProps(restProps)
      const formFieldContext = useFormFieldContext(restProps)
      const i18n = useInternalI18n('select')
      const errorIconAriaLabel = i18n(
        'errorIconAriaLabel',
        restProps.errorIconAriaLabel
      )
      const selectedAriaLabel = i18n(
        'selectedAriaLabel',
        restProps.selectedAriaLabel
      )
      const recoveryText = i18n('recoveryText', restProps.recoveryText)
      const {handleLoadMore, handleRecoveryClick, fireLoadItems} =
        useLoadItems({
          onLoadItems,
          options,
          statusType
        })
      const [filteringValue, setFilteringValue] = useState('')
      const {filteredOptions, parentMap, totalCount, matchesCount} =
        prepareOptions(options, filteringType, filteringValue)
      const rootRef = useRef(null)
      const triggerRef = useRef(null)
      const selfControlId = useUniqueId('trigger')
      const controlId = formFieldContext.controlId ?? selfControlId
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
        selectOption,
        announceSelected
      } = useSelect({
        selectedOptions: selectedOption ? [selectedOption] : [],
        updateSelectedOption: option =>
          fireNonCancelableEvent(onChange, {selectedOption: option}),
        options: filteredOptions,
        filteringType,
        onBlur,
        onFocus,
        externalRef,
        fireLoadItems,
        setFilteringValue,
        statusType
      })
      const handleNativeSearch = useNativeSearch({
        isEnabled: filteringType === 'none',
        options: filteredOptions,
        highlightOption: !isOpen ? selectOption : highlightOption,
        highlightedOption: !isOpen ? selectedOption : highlightedOption?.option
      })
      const selectAriaLabelId = useUniqueId('select-arialabel-')
      const footerId = useUniqueId('footer')
      useEffect(() => {
        scrollToIndex.current?.(highlightedIndex)
      }, [highlightedIndex])
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
          ref={triggerRef}
          placeholder={placeholder}
          disabled={disabled}
          triggerVariant={triggerVariant}
          triggerProps={getTriggerProps(disabled, autoFocus)}
          selectedOption={selectedOption}
          isOpen={isOpen}
          inFilteringToken={__inFilteringToken}
          {...formFieldContext}
          controlId={controlId}
          ariaLabelledby={joinStrings(
            formFieldContext.ariaLabelledby,
            selectAriaLabelId
          )}
        />
      )
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
        errorIconAriaLabel,
        onRecoveryClick: handleRecoveryClick,
        hasRecoveryCallback: !!onLoadItems
      })
      const menuProps = {
        ...getMenuProps(),
        onLoadMore: handleLoadMore,
        ariaLabelledby: joinStrings(selectAriaLabelId, controlId),
        ariaDescribedby: dropdownStatus.content ? footerId : void 0
      }
      const announcement = useAnnouncement({
        announceSelected,
        highlightedOption,
        getParent: option => parentMap.get(option)?.option,
        selectedAriaLabel,
        renderHighlightedAriaLive
      })
      const ListComponent = virtualScroll ? VirtualList : PlainList
      const handleMouseDown = event => {
        const target = event.target
        if (target !== document.activeElement) {
          event.preventDefault()
        }
      }
      const mergedRef = useMergeRefs(rootRef, __internalRootRef)
      const dropdownProps = getDropdownProps()
      return (
        <div
          {...baseProps}
          ref={mergedRef}
          className={clsx(styles.root, baseProps.className)}
          onKeyDown={handleNativeSearch}>
          <Dropdown
            {...dropdownProps}
            ariaLabelledby={
              dropdownProps.dropdownContentRole
                ? joinStrings(selectAriaLabelId, controlId)
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
            stretchTriggerHeight={__inFilteringToken}
            stretchBeyondTriggerWidth={true}
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
            expandToViewport={expandToViewport}>
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
              screenReaderContent={announcement}
              highlightType={highlightType}
            />
          </Dropdown>
          <ScreenreaderOnly id={selectAriaLabelId}>
            {ariaLabel}
          </ScreenreaderOnly>
        </div>
      )
    }
  )
)

export {
  InternalSelect as default
}
