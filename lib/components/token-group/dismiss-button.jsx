import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import InternalIcon from '../icon/internal'

const DismissButton = memo(
  forwardRef(({disabled, dismissLabel, onDismiss}, ref) => {
    return (
      <button
        ref={ref}
        type='button'
        className={clsx(styles['dismiss-button'])}
        aria-disabled={disabled ? true : void 0}
        onClick={!disabled && onDismiss ? () => onDismiss() : void 0}
        aria-label={dismissLabel}>
        <InternalIcon name='close' />
      </button>
    )
  })
)

export {
  DismissButton as default
}
