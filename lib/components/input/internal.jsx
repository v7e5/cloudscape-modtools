import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import InternalIcon from '../icon/internal'
import InternalButton from '../button/internal'
import {fireNonCancelableEvent, fireKeyboardEvent} from '../internal/events'
import {getBaseProps} from '../internal/base-component'
import {useSearchProps, convertAutoComplete} from './utils'
import {useDebounceCallback} from '../internal/hooks/use-debounce-callback'
import {useFormFieldContext} from '../internal/context/form-field-context'
import styles from './styles.css.js'
import {useInternalI18n} from '../i18n/context'

const InternalInput = memo(
  forwardRef(
    (
      {
        type = 'text',
        step,
        inputMode,
        autoComplete = true,
        ariaLabel,
        clearAriaLabel: clearAriaLabelOverride,
        name,
        value,
        placeholder,
        autoFocus,
        disabled,
        readOnly,
        disableBrowserAutocorrect,
        spellcheck,
        __noBorderRadius,
        __leftIcon,
        __leftIconVariant = 'subtle',
        __onLeftIconClick,
        ariaRequired,
        __rightIcon,
        __onRightIconClick,
        onKeyDown,
        onKeyUp,
        onChange,
        __onDelayedInput,
        __onBlurWithDetail,
        onBlur,
        onFocus,
        __nativeAttributes,
        __internalRootRef,
        __inheritFormFieldProps,
        ...rest
      },
      ref
    ) => {
      const baseProps = getBaseProps(rest)
      const i18n = useInternalI18n('input')
      const fireDelayedInput = useDebounceCallback(value2 =>
        fireNonCancelableEvent(__onDelayedInput, {value: value2})
      )
      const handleChange = value2 => {
        fireDelayedInput(value2)
        fireNonCancelableEvent(onChange, {value: value2})
      }
      const inputRef = useRef(null)
      const searchProps = useSearchProps(
        type,
        disabled,
        readOnly,
        value,
        inputRef,
        handleChange
      )
      __leftIcon = __leftIcon ?? searchProps.__leftIcon
      __rightIcon = __rightIcon ?? searchProps.__rightIcon
      __onRightIconClick = __onRightIconClick ?? searchProps.__onRightIconClick
      const formFieldContext = useFormFieldContext(rest)
      const {ariaLabelledby, ariaDescribedby, controlId, invalid, warning} =
        __inheritFormFieldProps ? formFieldContext : rest
      const attributes = {
        'aria-label': ariaLabel,

        'aria-labelledby':
          ariaLabel && !rest.ariaLabelledby ? void 0 : ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        name,
        placeholder,
        autoFocus,
        id: controlId,
        className: clsx(
          styles.input,
          type && styles[`input-type-${type}`],
          __rightIcon && styles['input-has-icon-right'],
          __leftIcon && styles['input-has-icon-left'],
          __noBorderRadius && styles['input-has-no-border-radius'],
          {
            [styles['input-readonly']]: readOnly,
            [styles['input-invalid']]: invalid,
            [styles['input-warning']]: warning && !invalid
          }
        ),
        autoComplete: convertAutoComplete(autoComplete),
        disabled,
        readOnly,
        type,
        step,
        inputMode,
        spellCheck: spellcheck,
        onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)),
        onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)),

        value: value ?? '',
        onChange: onChange && (event => handleChange(event.target.value)),
        onBlur: e => {
          onBlur && fireNonCancelableEvent(onBlur)
          __onBlurWithDetail &&
            fireNonCancelableEvent(__onBlurWithDetail, {
              relatedTarget: e.relatedTarget
            })
        },
        onFocus: onFocus && (() => fireNonCancelableEvent(onFocus)),
        ...__nativeAttributes
      }
      if (type === 'number') {
        attributes.onWheel = event => event.currentTarget.blur()
      }
      if (disableBrowserAutocorrect) {
        attributes.autoCorrect = 'off'
        attributes.autoCapitalize = 'off'
      }
      if (ariaRequired) {
        attributes['aria-required'] = 'true'
      }
      if (invalid) {
        attributes['aria-invalid'] = 'true'
      }
      const mergedRef = useMergeRefs(ref, inputRef)
      if (attributes.type === 'visualSearch') {
        attributes.type = 'text'
      }
      return (
        <div
          {...baseProps}
          className={clsx(baseProps.className, styles['input-container'])}
          ref={__internalRootRef}
          dir={type === 'email' ? 'ltr' : void 0}>
          {__leftIcon && (
            <span
              onClick={__onLeftIconClick}
              className={styles['input-icon-left']}>
              <InternalIcon
                name={__leftIcon}
                variant={disabled || readOnly ? 'disabled' : __leftIconVariant}
              />
            </span>
          )}
          <input ref={mergedRef} {...attributes} />
          {__rightIcon && (
            <span className={styles['input-icon-right']}>
              <InternalButton
                className={styles['input-button-right']}
                variant='inline-icon'
                formAction='none'
                iconName={__rightIcon}
                onClick={__onRightIconClick}
                ariaLabel={i18n('clearAriaLabel', clearAriaLabelOverride)}
                disabled={disabled}
              />
            </span>
          )}
        </div>
      )
    }
  )
)

export {
  InternalInput as default
}
