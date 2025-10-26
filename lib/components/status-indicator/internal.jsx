import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'
import InternalIcon from '../icon/internal'
import InternalSpinner from '../spinner/internal'

const typeToIcon = size => ({
  error: <InternalIcon name='status-negative' size={size} />,
  warning: <InternalIcon name='status-warning' size={size} />,
  success: <InternalIcon name='status-positive' size={size} />,
  info: <InternalIcon name='status-info' size={size} />,
  stopped: <InternalIcon name='status-stopped' size={size} />,
  pending: <InternalIcon name='status-pending' size={size} />,
  'in-progress': <InternalIcon name='status-in-progress' size={size} />,
  loading: <InternalSpinner/>
})
const StatusIndicator = memo(
  ({
    type,
    children,
    iconAriaLabel,
    colorOverride,
    wrapText = true,
    __animate = false,
    __internalRootRef,
    __size = 'normal',
    __display = 'inline-block',
    ...rest
  }) => {
    const baseProps = getBaseProps(rest)
    return (
      <span
        {...baseProps}
        className={clsx(
          styles.root,
          styles[`status-${type}`],
          {
            [styles[`color-override-${colorOverride}`]]: colorOverride
          },
          baseProps.className
        )}
        ref={__internalRootRef}>
        <span
          className={clsx(
            styles.container,
            styles[`display-${__display}`],
            wrapText === false && styles['overflow-ellipsis'],
            __animate && styles['container-fade-in']
          )}>
          <span
            className={clsx(styles.icon, __animate && styles['icon-shake'])}
            aria-label={iconAriaLabel}
            role={iconAriaLabel ? 'img' : void 0}>
            {typeToIcon(__size)[type]}
            {__display === 'inline' && <>&nbsp;</>}
          </span>
          {children}
        </span>
      </span>
    )
  }
)

export {
  StatusIndicator as default
}
