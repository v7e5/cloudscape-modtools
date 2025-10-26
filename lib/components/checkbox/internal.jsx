import {useEffect, useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {fireNonCancelableEvent} from '../internal/events'
import useForwardFocus from '../internal/hooks/forward-focus'
import {getBaseProps} from '../internal/base-component'
import AbstractSwitch from '../internal/components/abstract-switch'
import styles from './styles.css.js'
import CheckboxIcon from '../internal/components/checkbox-icon'
import {useFormFieldContext} from '../internal/context/form-field-context'
import {useSingleTabStopNavigation} from '../internal/context/single-tab-stop-navigation-context'

const InternalCheckbox = memo(
  memo(
    forwardRef(
      (
        {
          controlId,
          name,
          checked,
          disabled,
          ariaRequired,
          indeterminate,
          children,
          description,
          ariaLabel,
          onFocus,
          onBlur,
          onChange,
          tabIndex: explicitTabIndex,
          showOutline,
          ariaControls,
          __internalRootRef,
          ...rest
        },
        ref
      ) => {
        const {ariaDescribedby, ariaLabelledby} = useFormFieldContext(rest)
        const baseProps = getBaseProps(rest)
        const checkboxRef = useRef(null)
        useForwardFocus(ref, checkboxRef)
        useEffect(() => {
          if (checkboxRef.current) {
            checkboxRef.current.indeterminate = Boolean(indeterminate)
          }
        })
        const {tabIndex} = useSingleTabStopNavigation(checkboxRef, {
          tabIndex: explicitTabIndex
        })
        return (
          <AbstractSwitch
            {...baseProps}
            className={clsx(styles.root, baseProps.className)}
            controlClassName={styles['checkbox-control']}
            outlineClassName={styles.outline}
            controlId={controlId}
            disabled={disabled}
            label={children}
            description={description}
            descriptionBottomPadding={true}
            ariaLabel={ariaLabel}
            ariaLabelledby={ariaLabelledby}
            ariaDescribedby={ariaDescribedby}
            ariaControls={ariaControls}
            showOutline={showOutline}
            nativeControl={nativeControlProps => (
              <input
                {...nativeControlProps}
                ref={checkboxRef}
                type='checkbox'
                checked={checked}
                name={name}
                aria-required={ariaRequired ? 'true' : void 0}
                tabIndex={tabIndex}
                onFocus={() => fireNonCancelableEvent(onFocus)}
                onBlur={() => fireNonCancelableEvent(onBlur)}
                onChange={() => {}}
              />
            )}
            onClick={() => {
              checkboxRef.current?.focus()
              fireNonCancelableEvent(
                onChange,

                indeterminate
                  ? {checked: true, indeterminate: false}
                  : {checked: !checked, indeterminate: false}
              )
            }}
            styledControl={
              <CheckboxIcon
                checked={checked}
                indeterminate={indeterminate}
                disabled={disabled}
              />
            }
            __internalRootRef={__internalRootRef}
          />
        )
      }
    )
  )
)

export {
  InternalCheckbox as default
}
