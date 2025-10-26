import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'

const InternalSpinner = memo(
  ({size = 'normal', variant = 'normal', __internalRootRef, ...props}) => {
    const baseProps = getBaseProps(props)
    return (
      <span
        {...baseProps}
        className={clsx(
          baseProps.className,
          styles.root,
          styles[`size-${size}`],
          styles[`variant-${variant}`]
        )}
        ref={__internalRootRef}>
        <span className={clsx(styles.circle, styles['circle-left'])} />
        <span className={clsx(styles.circle, styles['circle-right'])} />
      </span>
    )
  }
)

export {
  InternalSpinner as default
}
