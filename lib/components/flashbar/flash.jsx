import {forwardRef, memo} from 'react'
import InternalSpinner from '../spinner/internal'
import InternalIcon from '../icon/internal'
import clsx from 'clsx'
import styles from './styles.css.js'
import {InternalButton} from '../button/internal'
import {useComponentMetadata} from '~/components/internal/toolkit/internal'
import {throttle} from '../internal/utils/throttle'
import LiveRegion from '../internal/components/live-region'
import {getVisualContextClassname} from '../internal/components/visual-context'
import {FOCUS_THROTTLE_DELAY} from './utils'
import {createUseDiscoveredAction} from '../internal/plugins/helpers'
import {awsuiPluginsInternal} from '../internal/plugins/api'
import {ActionsWrapper} from '../alert/actions-wrapper'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {PACKAGE_VERSION} from '../internal/environment'

const ICON_TYPES = {
  success: 'status-positive',
  warning: 'status-warning',
  info: 'status-info',
  error: 'status-negative',
  'in-progress': 'status-in-progress'
}
const useDiscoveredAction = createUseDiscoveredAction(
  awsuiPluginsInternal.flashbar.onActionRegistered
)
const dismissButton = (dismissLabel, onDismiss) => {
  return (
    <div className={styles['dismiss-button-wrapper']}>
      <InternalButton
        onClick={onDismiss}
        className={styles['dismiss-button']}
        variant='flashbar-icon'
        iconName='close'
        formAction='none'
        ariaLabel={dismissLabel}
      />
    </div>
  )
}
const focusFlashById = throttle(
  (element, itemId) => {
    const selector = `[data-itemid="${CSS.escape(itemId)}"] .${
      styles['flash-focus-container']
    }`
    element?.querySelector(selector)?.focus()
  },
  FOCUS_THROTTLE_DELAY,
  {trailing: false}
)
const Flash = memo(
  forwardRef(
    (
      {
        id,
        header,
        content,
        dismissible,
        dismissLabel,
        loading,
        action,
        buttonText,
        onButtonClick,
        onDismiss,
        className,
        transitionState,
        ariaRole,
        i18nStrings,
        type = 'info',
        ...props
      },
      ref
    ) => {
      const elementRef = useComponentMetadata('Flash', PACKAGE_VERSION)
      const mergedRef = useMergeRefs(ref, elementRef)
      const {discoveredActions, headerRef, contentRef} =
        useDiscoveredAction(type)
      const iconType = ICON_TYPES[type]
      const icon = loading ? (
        <InternalSpinner/>
      ) : (
        <InternalIcon name={iconType} />
      )
      const effectiveType = loading ? 'info' : type
      const handleDismiss = event => {
        onDismiss && onDismiss(event)
      }
      const statusIconAriaLabel =
        props.statusIconAriaLabel ||
        i18nStrings?.[
          `${
            loading || type === 'in-progress' ? 'inProgress' : type
          }IconAriaLabel`
        ]
      return (
        <div
          ref={mergedRef}
          role={ariaRole}
          aria-live={ariaRole ? 'off' : void 0}
          data-itemid={id}
          className={clsx(
            styles.flash,
            styles[`flash-type-${effectiveType}`],
            className,
            transitionState && {
              [styles.enter]: transitionState === 'enter',
              [styles.entering]: transitionState === 'entering',
              [styles.entered]: transitionState === 'entered',
              [styles.exit]: transitionState === 'exit',
              [styles.exiting]: transitionState === 'exiting',
              [styles.exited]: transitionState === 'exited'
            },
            getVisualContextClassname(
              type === 'warning' && !loading ? 'flashbar-warning' : 'flashbar'
            )
          )}>
          <div className={styles['flash-body']}>
            <div className={styles['flash-focus-container']} tabIndex={-1}>
              <div
                className={clsx(styles['flash-icon'], styles['flash-text'])}
                role='img'
                aria-label={statusIconAriaLabel}>
                {icon}
              </div>
              <div
                className={clsx(
                  styles['flash-message'],
                  styles['flash-text']
                )}>
                <div className={styles['flash-header']} ref={headerRef}>
                  {header}
                </div>
                <div className={styles['flash-content']} ref={contentRef}>
                  {content}
                </div>
              </div>
            </div>
            <ActionsWrapper
              className={styles['action-button-wrapper']}
              testUtilClasses={{
                actionSlot: styles['action-slot'],
                actionButton: styles['action-button']
              }}
              action={action}
              discoveredActions={discoveredActions}
              buttonText={buttonText}
              onButtonClick={onButtonClick}
            />
          </div>
          {dismissible && dismissButton(dismissLabel, handleDismiss)}
          {ariaRole === 'status' && (
            <LiveRegion
              source={[statusIconAriaLabel, headerRef, contentRef]}
            />
          )}
        </div>
      )
    }
  )
)

export {
  Flash,
  focusFlashById
}
