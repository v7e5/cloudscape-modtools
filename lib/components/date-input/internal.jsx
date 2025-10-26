import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {getDaysInMonth} from 'date-fns'
import {fireNonCancelableEvent} from '../internal/events'
import {
  displayToIso,
  isoToDisplay,
  parseDate
} from '../internal/utils/date-time'
import MaskedInput from '../internal/components/masked-input'
import styles from './styles.css.js'

const daysMax = value => {
  const baseDate = displayToIso(value).substring(0, 7)
  return getDaysInMonth(parseDate(baseDate))
}
const yearMask = {min: 0, max: 9999, default: 2e3, length: 4}
const monthMask = {min: 1, max: 12, length: 2}
const dayMask = {min: 1, max: daysMax, length: 2}
const InternalDateInput = memo(
  forwardRef(
    (
      {value, onChange, granularity, __internalRootRef = null, ...props},
      ref
    ) => {
      const maskArgs = {
        separator: '/',
        inputSeparators: ['-', '.', ' '],
        segments:
          granularity === 'month'
            ? [yearMask, monthMask]
            : [yearMask, monthMask, dayMask]
      }
      return (
        <MaskedInput
          ref={ref}
          {...props}
          value={isoToDisplay(value || '')}
          onChange={event =>
            fireNonCancelableEvent(onChange, {
              value: displayToIso(event.detail.value)
            })
          }
          className={clsx(styles.root, props.className)}
          mask={maskArgs}
          autofix={true}
          autoComplete={false}
          disableAutocompleteOnBlur={false}
          disableBrowserAutocorrect={true}
          __internalRootRef={__internalRootRef}
        />
      )
    }
  )
)

export {
  InternalDateInput as default
}
