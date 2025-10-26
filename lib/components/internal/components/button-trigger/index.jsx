import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../../base-component'
import InternalIcon from '../../../icon/internal'
import styles from './styles.css.js'
import {fireKeyboardEvent, fireCancelableEvent} from '../../events'

const ButtonTrigger = memo(
  forwardRef(
    (
      {
        children,
        pressed = false,
        hideCaret = false,
        disabled = false,
        readOnly = false,
        invalid = false,
        warning = false,
        inlineTokens,
        inFilteringToken,
        ariaHasPopup,
        ariaLabel,
        ariaLabelledby,
        ariaDescribedby,
        ariaControls,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onClick,
        onFocus,
        onBlur,
        autoFocus,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const attributes = {
        ...baseProps,
        type: 'button',
        className: clsx(
          styles['button-trigger'],
          baseProps.className,
          pressed && styles.pressed,
          disabled && styles.disabled,
          invalid && styles.invalid,
          warning && !invalid && styles.warning,
          !hideCaret && styles['has-caret'],
          readOnly && styles['read-only'],
          inFilteringToken && styles['in-filtering-token'],
          inlineTokens && styles['inline-tokens']
        ),
        disabled: disabled || readOnly,
        'aria-expanded': pressed,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        'aria-haspopup': ariaHasPopup ?? 'listbox',
        'aria-controls': ariaControls,
        onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)),
        onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)),
        onMouseDown:
          onMouseDown &&
          (event => fireCancelableEvent(onMouseDown, {}, event)),
        onClick: onClick && (event => fireCancelableEvent(onClick, {}, event)),
        onFocus: onFocus && (event => fireCancelableEvent(onFocus, {}, event)),
        onBlur:
          onBlur &&
          (event =>
            fireCancelableEvent(
              onBlur,
              {relatedTarget: event.relatedTarget},
              event
            )),
        autoFocus
      }
      if (invalid) {
        attributes['aria-invalid'] = invalid
      }
      return (
        <button ref={ref} {...attributes}>
          {children}
          {!hideCaret && (
            <span className={styles.arrow}>
              <InternalIcon
                name='caret-down-filled'
                variant={disabled ? 'disabled' : 'normal'}
              />
            </span>
          )}
        </button>
      )
    }
  )
)

export {
  ButtonTrigger as default
}
