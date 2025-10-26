import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import InternalInput from '../input/internal'
import {getBaseProps} from '../internal/base-component'
import useForwardFocus from '../internal/hooks/forward-focus'
import {fireNonCancelableEvent} from '../internal/events'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {joinStrings} from '../internal/utils/strings'
import {SearchResults} from './search-results'
import styles from './styles.css.js'

const InternalTextFilter = memo(
  forwardRef(
    (
      {
        filteringText,
        filteringAriaLabel,
        filteringPlaceholder,
        filteringClearAriaLabel,
        controlId,
        ariaLabelledby,
        ariaDescribedby,
        disabled,
        countText,
        onChange,
        onDelayedChange,
        __internalRootRef,
        ...rest
      },
      ref
    ) => {
      const baseProps = getBaseProps(rest)
      const inputRef = useRef(null)
      useForwardFocus(ref, inputRef)
      const searchResultsId = useUniqueId('text-filter-search-results')
      const showResults = filteringText && countText && !disabled
      return (
        <div
          {...baseProps}
          className={clsx(baseProps.className, styles.root)}
          ref={__internalRootRef}>
          <InternalInput
            __inheritFormFieldProps={true}
            ref={inputRef}
            className={styles.input}
            type='search'
            ariaLabel={filteringAriaLabel}
            placeholder={filteringPlaceholder}
            value={filteringText}
            disabled={disabled}
            controlId={controlId}
            ariaLabelledby={ariaLabelledby}
            ariaDescribedby={joinStrings(
              showResults ? searchResultsId : void 0,
              ariaDescribedby
            )}
            autoComplete={false}
            clearAriaLabel={filteringClearAriaLabel}
            onChange={event =>
              fireNonCancelableEvent(onChange, {
                filteringText: event.detail.value
              })
            }
            __onDelayedInput={event =>
              fireNonCancelableEvent(onDelayedChange, {
                filteringText: event.detail.value
              })
            }
          />
          {showResults ? (
            <SearchResults id={searchResultsId}>{countText}</SearchResults>
          ) : null}
        </div>
      )
    }
  )
)

export {
  InternalTextFilter as default
}
