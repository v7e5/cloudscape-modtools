import {useCallback, useEffect, useRef, memo} from 'react'
import clsx from 'clsx'
import {KeyCode} from '../internal/keycode'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {InternalButton} from '../button/internal'
import FocusLock from '../internal/components/focus-lock'
import styles from './styles.css.js'
import {useInternalI18n} from '../i18n/context'

const PopoverBody = memo(
  ({
    dismissButton: showDismissButton,
    dismissAriaLabel,
    header,
    children,
    onDismiss,
    variant,
    overflowVisible,
    className,
    ariaLabelledby
  }) => {
    const i18n = useInternalI18n('popover')
    const labelledById = useUniqueId('awsui-popover-')
    const dismissButtonFocused = useRef(false)
    const dismissButtonRef = useRef(null)
    const onKeyDown = useCallback(
      event => {
        if (event.keyCode === KeyCode.escape) {
          event.stopPropagation()
          onDismiss?.()
        }
      },
      [onDismiss]
    )
    useEffect(() => {
      if (showDismissButton && !dismissButtonFocused.current) {
        dismissButtonRef.current?.focus({preventScroll: true})
      }
      dismissButtonFocused.current = showDismissButton
    }, [showDismissButton])
    const dismissButton = (showDismissButton ?? null) && (
      <div className={styles.dismiss}>
        <InternalButton
          variant='icon'
          formAction='none'
          iconName='close'
          className={styles['dismiss-control']}
          ariaLabel={i18n('dismissAriaLabel', dismissAriaLabel)}
          onClick={() => onDismiss?.()}
          ref={dismissButtonRef}
        />
      </div>
    )
    const isDialog = showDismissButton
    const shouldTrapFocus = showDismissButton && variant !== 'annotation'
    const dialogProps = isDialog
      ? {
          role: 'dialog',
          'aria-modal': shouldTrapFocus ? true : void 0,
          'aria-labelledby': ariaLabelledby ?? (header ? labelledById : void 0)
        }
      : {}
    return (
      <div
        className={clsx(styles.body, className, {
          [styles['body-overflow-visible']]: overflowVisible === 'both'
        })}
        onKeyDown={onKeyDown}
        {...dialogProps}>
        <FocusLock disabled={!shouldTrapFocus} autoFocus={false}>
          {header && (
            <div
              className={clsx(
                styles['header-row'],
                showDismissButton && styles['has-dismiss']
              )}>
              {dismissButton}
              <div className={styles.header} id={labelledById}>
                <h2>{header}</h2>
              </div>
            </div>
          )}
          <div
            className={
              !header && showDismissButton ? styles['has-dismiss'] : void 0
            }>
            {!header && dismissButton}
            <div
              className={clsx(styles.content, {
                [styles['content-overflow-visible']]: !!overflowVisible
              })}>
              {children}
            </div>
          </div>
        </FocusLock>
      </div>
    )
  }
)

export {
  PopoverBody as default
}
