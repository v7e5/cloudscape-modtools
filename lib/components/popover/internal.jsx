import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  memo
} from 'react'
import clsx from 'clsx'
import {KeyCode} from '../internal/keycode'
import {getBaseProps} from '../internal/base-component'
import Arrow from './arrow'
import Portal from '../internal/components/portal'
import PopoverContainer from './container'
import PopoverBody from './body'
import styles from './styles.css.js'
import {fireNonCancelableEvent} from '../internal/events/'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {usePortalModeClasses} from '../internal/hooks/use-portal-mode-classes'
import {useInternalI18n} from '../i18n/context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {getFirstFocusable} from '../internal/components/focus-lock/utils'
import {LinkDefaultVariantContext} from '../internal/context/link-default-variant-context'
import ResetContextsForModal from '../internal/context/reset-contexts-for-modal'
import {useSingleTabStopNavigation} from '../internal/context/single-tab-stop-navigation-context'

const InternalPopover = memo(
  forwardRef(
    (
      {
        position = 'right',
        size = 'medium',
        fixedWidth = false,
        triggerType = 'text',
        dismissButton = true,
        children,
        header,
        content,
        triggerAriaLabel,
        wrapTriggerText = true,
        renderWithPortal = false,
        __onOpen,
        __internalRootRef = null,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const triggerRef = useRef(null)
      const popoverRef = useRef(null)
      const clickFrameId = useRef(null)
      const i18n = useInternalI18n('popover')
      const dismissAriaLabel = i18n(
        'dismissAriaLabel',
        restProps.dismissAriaLabel
      )
      const [visible, setVisible] = useState(false)
      const focusTrigger = useCallback(() => {
        if (triggerType === 'text') {
          triggerRef.current?.focus()
        } else {
          triggerRef.current && getFirstFocusable(triggerRef.current)?.focus()
        }
      }, [triggerType])
      const onTriggerClick = useCallback(() => {
        fireNonCancelableEvent(__onOpen)
        setVisible(true)
      }, [__onOpen])
      const onDismiss = useCallback(() => {
        setVisible(false)
        focusTrigger()
      }, [focusTrigger])
      const onTriggerKeyDown = useCallback(
        event => {
          const isEscapeKey = event.keyCode === KeyCode.escape
          const isTabKey = event.keyCode === KeyCode.tab
          if (isEscapeKey && visible) {
            event.stopPropagation()
          }
          if (isTabKey || isEscapeKey) {
            setVisible(false)
          }
        },
        [visible]
      )
      useImperativeHandle(ref, () => ({
        dismissPopover: onDismiss
      }))
      useEffect(() => {
        if (!triggerRef.current) {
          return
        }
        const document = triggerRef.current.ownerDocument
        const onDocumentClick = () => {
          if (clickFrameId.current === null) {
            setVisible(false)
          }
        }
        document.addEventListener('mousedown', onDocumentClick)
        return () => {
          document.removeEventListener('mousedown', onDocumentClick)
        }
      }, [])
      const popoverClasses = usePortalModeClasses(triggerRef)
      const triggerProps = {
        ref: triggerRef,
        onClick: onTriggerClick,
        onKeyDown: onTriggerKeyDown,
        className: clsx(styles.trigger, styles[`trigger-type-${triggerType}`])
      }
      const {tabIndex: triggerTabIndex} =
        useSingleTabStopNavigation(triggerRef)
      const referrerId = useUniqueId()
      const popoverContent = (
        <div
          aria-live={dismissButton ? void 0 : 'polite'}
          aria-atomic={dismissButton ? void 0 : true}
          className={clsx(
            popoverClasses,
            !renderWithPortal && styles['popover-inline-content']
          )}>
          {visible && (
            <PopoverContainer
              size={size}
              fixedWidth={fixedWidth}
              position={position}
              trackRef={triggerRef}
              arrow={position2 => <Arrow position={position2} />}
              renderWithPortal={renderWithPortal}
              zIndex={renderWithPortal ? 7e3 : void 0}>
              <LinkDefaultVariantContext.Provider
                value={{defaultVariant: 'primary'}}>
                <PopoverBody
                  dismissButton={dismissButton}
                  dismissAriaLabel={dismissAriaLabel}
                  header={header}
                  onDismiss={onDismiss}
                  overflowVisible='both'>
                  {content}
                </PopoverBody>
              </LinkDefaultVariantContext.Provider>
            </PopoverContainer>
          )}
        </div>
      )
      const mergedRef = useMergeRefs(popoverRef, __internalRootRef)
      return (
        <span
          {...baseProps}
          className={clsx(styles.root, baseProps.className)}
          ref={mergedRef}
          onMouseDown={() => {
            clickFrameId.current = requestAnimationFrame(() => {
              clickFrameId.current = null
            })
          }}>
          {triggerType === 'text' ? (
            <button
              {...triggerProps}
              className={clsx(
                triggerProps.className,
                wrapTriggerText === false && styles['overflow-ellipsis']
              )}
              tabIndex={triggerTabIndex}
              type='button'
              aria-haspopup='dialog'
              id={referrerId}
              aria-label={triggerAriaLabel}>
              {children}
            </button>
          ) : (
            <span {...triggerProps} id={referrerId}>
              {children}
            </span>
          )}
          <ResetContextsForModal>
            {renderWithPortal ? (
              <Portal>{popoverContent}</Portal>
            ) : (
              popoverContent
            )}
          </ResetContextsForModal>
        </span>
      )
    }
  )
)

export {
  InternalPopover as default
}
