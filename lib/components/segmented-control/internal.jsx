import {memo} from 'react'
import clsx from 'clsx'
import InternalSelect from '../select/internal'
import InternalFormField from '../form-field/internal'
import InternalSegmentedControlComponent from './internal-segmented-control'
import {getBaseProps} from '../internal/base-component'
import {fireNonCancelableEvent} from '../internal/events'
import styles from './styles.css.js'

const InternalSegmentedControl = memo(
  ({
    selectedId,
    options,
    label,
    ariaLabelledby,
    onChange,
    __internalRootRef = null,
    ...props
  }) => {
    const baseProps = getBaseProps(props)
    const selectOptions = (options || []).map(option => {
      const label2 = option.text || option.iconAlt
      return {...option, label: label2, value: option.id}
    })
    const selectedOptions = selectOptions.filter(option => {
      return option.value === selectedId
    })
    const currentSelectedOption = selectedOptions.length
      ? selectedOptions[0]
      : null
    const selectProps = {
      options: selectOptions,
      selectedOption: currentSelectedOption,
      triggerVariant: 'option',
      onChange: event =>
        fireNonCancelableEvent(onChange, {
          selectedId: event.detail.selectedOption.value
        })
    }
    return (
      <div
        {...baseProps}
        className={clsx(baseProps.className, styles.root)}
        ref={__internalRootRef}>
        <InternalSegmentedControlComponent
          selectedId={selectedId}
          options={options}
          label={label}
          ariaLabelledby={ariaLabelledby}
          onChange={onChange}
        />
        <div className={styles.select}>
          {ariaLabelledby && (
            <InternalSelect {...selectProps} ariaLabelledby={ariaLabelledby} />
          )}
          {!ariaLabelledby && label && (
            <InternalFormField label={label} stretch={true}>
              <InternalSelect {...selectProps} />
            </InternalFormField>
          )}
          {!ariaLabelledby && !label && <InternalSelect {...selectProps} />}
        </div>
      </div>
    )
  }
)

export {
  InternalSegmentedControl as default
}
