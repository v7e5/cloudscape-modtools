import {useState, memo} from 'react'
import clsx from 'clsx'
import InternalBox from '../../box/internal'
import InternalFormField from '../../form-field/internal'
import InternalInput from '../../input/internal'
import InternalRadioGroup from '../../radio-group/internal'
import InternalSelect from '../../select/internal'
import InternalSpaceBetween from '../../space-between/internal'
import styles from './styles.css.js'
import {useInternalI18n} from '../../i18n/context'

const dayUnits = ['day', 'week', 'month', 'year']
const units = ['second', 'minute', 'hour', ...dayUnits]
const CUSTOM_OPTION_SELECT_KEY = 'awsui-internal-custom-duration-key'
const RelativeRangePicker = memo(
  ({
    dateOnly,
    options: clientOptions = [],
    initialSelection: initialRange,
    onChange: onChangeRangeSize,
    i18nStrings,
    isSingleGrid
  }) => {
    const i18n = useInternalI18n('date-range-picker')
    const formatRelativeRange = i18n(
      'i18nStrings.formatRelativeRange',
      i18nStrings?.formatRelativeRange,
      format =>
        ({amount, unit}) =>
          format({amount, unit})
    )
    const formatUnit = i18n(
      'i18nStrings.formatUnit',
      i18nStrings?.formatUnit,
      format => (unit, amount) => format({amount, unit})
    )
    const radioOptions = clientOptions.map(option => ({
      value: option.key,
      label: formatRelativeRange?.(option)
    }))
    radioOptions.push({
      value: CUSTOM_OPTION_SELECT_KEY,
      label: i18n(
        'i18nStrings.customRelativeRangeOptionLabel',
        i18nStrings?.customRelativeRangeOptionLabel
      ),
      description: i18n(
        'i18nStrings.customRelativeRangeOptionDescription',
        i18nStrings?.customRelativeRangeOptionDescription
      )
    })
    const [selectedRadio, setSelectedRadio] = useState(() => {
      if (initialRange && !initialRange.key) {
        return CUSTOM_OPTION_SELECT_KEY
      }
      return initialRange?.key ?? null
    })
    const [customDuration, setCustomDuration] = useState(() => {
      if (initialRange) {
        return initialRange.amount
      }
      return NaN
    })
    const initialCustomTimeUnit = dateOnly ? 'day' : 'minute'
    const [customUnitOfTime, setCustomUnitOfTime] = useState(
      initialRange?.unit ?? initialCustomTimeUnit
    )
    const showRadioControl = clientOptions.length > 0
    const showCustomControls =
      clientOptions.length === 0 || selectedRadio === CUSTOM_OPTION_SELECT_KEY
    return (
      <div>
        <InternalSpaceBetween size='xs' direction='vertical'>
          {showRadioControl && (
            <InternalFormField
              label={i18n(
                'i18nStrings.relativeRangeSelectionHeading',
                i18nStrings?.relativeRangeSelectionHeading
              )}>
              <InternalRadioGroup
                className={styles['relative-range-radio-group']}
                onChange={({detail}) => {
                  setSelectedRadio(detail.value)
                  if (detail.value === CUSTOM_OPTION_SELECT_KEY) {
                    setCustomDuration(NaN)
                    setCustomUnitOfTime(initialCustomTimeUnit)
                    onChangeRangeSize({
                      amount: NaN,
                      unit: initialCustomTimeUnit,
                      type: 'relative'
                    })
                  } else {
                    const option = clientOptions.filter(
                      o => o.key === detail.value
                    )[0]
                    onChangeRangeSize(option)
                  }
                }}
                value={selectedRadio}
                items={radioOptions}
              />
            </InternalFormField>
          )}
          {showCustomControls && (
            <InternalSpaceBetween direction='vertical' size='xs'>
              {!showRadioControl && (
                <InternalBox fontSize='body-m' color='text-body-secondary'>
                  {i18n(
                    'i18nStrings.customRelativeRangeOptionDescription',
                    i18nStrings?.customRelativeRangeOptionDescription
                  )}
                </InternalBox>
              )}
              <div
                className={clsx(styles['custom-range'], {
                  [styles['custom-range--no-padding']]: !showRadioControl
                })}>
                <div
                  className={clsx(styles['custom-range-form-controls'], {
                    [styles.vertical]: isSingleGrid
                  })}>
                  <div className={styles['custom-range-duration']}>
                    <InternalFormField
                      label={i18n(
                        'i18nStrings.customRelativeRangeDurationLabel',
                        i18nStrings?.customRelativeRangeDurationLabel
                      )}>
                      <InternalInput
                        type='number'
                        className={styles['custom-range-duration-input']}
                        value={
                          isNaN(customDuration) || customDuration === 0
                            ? ''
                            : customDuration?.toString()
                        }
                        onChange={e => {
                          const amount = Number(e.detail.value)
                          setCustomDuration(amount)
                          onChangeRangeSize({
                            amount,
                            unit: customUnitOfTime,
                            type: 'relative'
                          })
                        }}
                        placeholder={i18n(
                          'i18nStrings.customRelativeRangeDurationPlaceholder',
                          i18nStrings?.customRelativeRangeDurationPlaceholder
                        )}
                        __inheritFormFieldProps={true}
                      />
                    </InternalFormField>
                  </div>
                  <div className={styles['custom-range-unit']}>
                    <InternalFormField
                      label={i18n(
                        'i18nStrings.customRelativeRangeUnitLabel',
                        i18nStrings?.customRelativeRangeUnitLabel
                      )}>
                      <InternalSelect
                        className={styles['custom-range-unit-select']}
                        selectedOption={{
                          value: customUnitOfTime,
                          label: formatUnit?.(customUnitOfTime, customDuration)
                        }}
                        onChange={e => {
                          const {value: unit} = e.detail.selectedOption
                          setCustomUnitOfTime(unit)
                          onChangeRangeSize({
                            amount: customDuration,
                            unit,
                            type: 'relative'
                          })
                        }}
                        options={(dateOnly ? dayUnits : units).map(unit => ({
                          value: unit,
                          label: formatUnit?.(unit, customDuration)
                        }))}
                        renderHighlightedAriaLive={option =>
                          option.label || option.value || ''
                        }
                      />
                    </InternalFormField>
                  </div>
                </div>
              </div>
            </InternalSpaceBetween>
          )}
        </InternalSpaceBetween>
      </div>
    )
  }
)

export {
  RelativeRangePicker as default
}
