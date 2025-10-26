import {useRef, forwardRef, memo} from 'react'
import {getBaseProps} from '../internal/base-component'
import {fireKeyboardEvent, fireNonCancelableEvent} from '../internal/events'
import {useFormFieldContext} from '../internal/context/form-field-context'
import useForwardFocus from '../internal/hooks/forward-focus'
import clsx from 'clsx'
import styles from './styles.css.js'
import useBaseComponent from '../internal/hooks/use-base-component'
import {convertAutoComplete} from '../input/utils'

const Textarea = memo(
  forwardRef(
    (
      {
        value,
        autoComplete = true,
        disabled,
        readOnly,
        disableBrowserAutocorrect,
        disableBrowserSpellcheck,
        spellcheck,
        onKeyDown,
        onKeyUp,
        onChange,
        onBlur,
        onFocus,
        ariaRequired,
        name,
        rows,
        placeholder,
        autoFocus,
        ariaLabel,
        ...rest
      },
      ref
    ) => {
      const {__internalRootRef} = useBaseComponent('Textarea', {
        props: {
          autoComplete,
          autoFocus,
          disableBrowserAutocorrect,
          disableBrowserSpellcheck,
          readOnly,
          spellcheck
        }
      })
      const {ariaLabelledby, ariaDescribedby, controlId, invalid, warning} =
        useFormFieldContext(rest)
      const baseProps = getBaseProps(rest)
      const textareaRef = useRef(null)
      useForwardFocus(ref, textareaRef)
      const attributes = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        'aria-required': ariaRequired ? 'true' : void 0,
        'aria-invalid': invalid ? 'true' : void 0,
        name,
        placeholder,
        autoFocus,
        className: clsx(styles.textarea, {
          [styles['textarea-readonly']]: readOnly,
          [styles['textarea-invalid']]: invalid,
          [styles['textarea-warning']]: warning && !invalid
        }),
        autoComplete: convertAutoComplete(autoComplete),
        spellCheck: spellcheck,
        disabled,
        readOnly: readOnly ? true : void 0,
        rows: rows || 3,
        onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)),
        onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)),

        value: value || '',
        onChange:
          onChange &&
          (event =>
            fireNonCancelableEvent(onChange, {value: event.target.value})),
        onBlur: onBlur && (() => fireNonCancelableEvent(onBlur)),
        onFocus: onFocus && (() => fireNonCancelableEvent(onFocus))
      }
      if (disableBrowserAutocorrect) {
        attributes.autoCorrect = 'off'
        attributes.autoCapitalize = 'off'
      }
      if (disableBrowserSpellcheck) {
        attributes.spellCheck = 'false'
      }
      return (
        <span
          {...baseProps}
          className={clsx(styles.root, baseProps.className)}
          ref={__internalRootRef}>
          <textarea ref={textareaRef} id={controlId} {...attributes} />
        </span>
      )
    }
  )
)

export {
  Textarea as default
}
