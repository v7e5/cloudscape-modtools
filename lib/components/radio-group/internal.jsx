import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import RadioButton from './radio-button'
import styles from './styles.css.js'
import {useFormFieldContext} from '../internal/context/form-field-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import useRadioGroupForwardFocus from '../internal/hooks/forward-focus/radio-group'

const InternalRadioGroup = memo(
  forwardRef(
    (
      {
        name,
        value,
        items,
        ariaLabel,
        ariaRequired,
        ariaControls,
        onChange,
        __internalRootRef = null,
        ...props
      },
      ref
    ) => {
      const {ariaDescribedby, ariaLabelledby} = useFormFieldContext(props)
      const baseProps = getBaseProps(props)
      const generatedName = useUniqueId('awsui-radio-')
      const [radioButtonRef, radioButtonRefIndex] = useRadioGroupForwardFocus(
        ref,
        items,
        value
      )
      return (
        <div
          role='radiogroup'
          aria-labelledby={ariaLabelledby}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          aria-required={ariaRequired}
          aria-controls={ariaControls}
          {...baseProps}
          className={clsx(baseProps.className, styles.root)}
          ref={__internalRootRef}>
          {items &&
            items.map((item, index) => (
              <RadioButton
                key={item.value}
                ref={index === radioButtonRefIndex ? radioButtonRef : void 0}
                checked={item.value === value}
                name={name || generatedName}
                value={item.value}
                label={item.label}
                description={item.description}
                disabled={item.disabled}
                onChange={onChange}
                controlId={item.controlId}
              />
            ))}
        </div>
      )
    }
  )
)

export {
  InternalRadioGroup as default
}
