import {useEffect, useRef, memo} from 'react'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {fireNonCancelableEvent} from '../internal/events'
import {KeyCode} from '../internal/keycode'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {InternalButton} from '../button/internal'
import InternalHeader from '../header/internal'
import Portal from '../internal/components/portal'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {disableBodyScrolling, enableBodyScrolling} from './body-scroll'
import styles from './styles.css.js'
import FocusLock from '../internal/components/focus-lock'
import {useInternalI18n} from '../i18n/context'
import {useIntersectionObserver} from '../internal/hooks/use-intersection-observer'
import {useContainerQuery} from '~/components/internal/toolkit'
import {ModalContext} from '../internal/context/modal-context'
import ResetContextsForModal from '../internal/context/reset-contexts-for-modal'

const InternalModal = memo(
  ({modalRoot, getModalRoot, removeModalRoot, ...rest}) => {
    return (
      <Portal
        container={modalRoot}
        getContainer={getModalRoot}
        removeContainer={removeModalRoot}>
        <PortaledModal {...rest} />
      </Portal>
    )
  }
)

const PortaledModal = memo(
  ({
    size,
    visible,
    header,
    children,
    footer,
    disableContentPaddings,
    onDismiss,
    __internalRootRef = null,
    ...rest
  }) => {
    const instanceUniqueId = useUniqueId()
    const headerId = `${rest.id || instanceUniqueId}-header`
    const lastMouseDownElementRef = useRef(null)
    const [breakpoint, breakpointsRef] = useContainerBreakpoints(['xs'])
    const i18n = useInternalI18n('modal')
    const closeAriaLabel = i18n('closeAriaLabel', rest.closeAriaLabel)
    const refObject = useRef(null)
    const mergedRef = useMergeRefs(
      breakpointsRef,
      refObject,
      __internalRootRef
    )
    const isRefresh = useVisualRefresh()
    const baseProps = getBaseProps(rest)
    useEffect(() => {
      return () => {
        enableBodyScrolling()
      }
    }, [])
    useEffect(() => {
      if (visible) {
        disableBodyScrolling()
      } else {
        enableBodyScrolling()
      }
    }, [visible])
    useEffect(() => {
      if (visible && refObject.current) {
        refObject.current.scrollTop = 0
      }
    }, [visible])
    const dismiss = reason => fireNonCancelableEvent(onDismiss, {reason})
    const onOverlayMouseDown = event => {
      lastMouseDownElementRef.current = event.target
    }
    const onOverlayClick = event => {
      const overlay = refObject.current
      const lastClicked = lastMouseDownElementRef.current
      if (event.target === overlay && lastClicked === overlay) {
        dismiss('overlay')
      }
    }
    const onCloseButtonClick = () => dismiss('closeButton')
    const escKeyHandler = event => {
      if (event.keyCode === KeyCode.escape) {
        dismiss('keyboard')
      }
    }
    const {ref: stickySentinelRef, isIntersecting: footerStuck} =
      useIntersectionObserver()
    const [footerHeight, footerRef] = useContainerQuery(
      rect => rect.borderBoxHeight
    )
    return (
      <ResetContextsForModal>
        <ModalContext.Provider value={{isInModal: true}}>
          <div
            {...baseProps}
            className={clsx(
              styles.root,
              {[styles.hidden]: !visible},
              baseProps.className,
              isRefresh && styles.refresh
            )}
            role='dialog'
            aria-modal={true}
            aria-labelledby={headerId}
            onMouseDown={onOverlayMouseDown}
            onClick={onOverlayClick}
            ref={mergedRef}
            style={
              footerHeight ? {scrollPaddingBottom: footerHeight} : void 0
            }>
            <FocusLock
              disabled={!visible}
              autoFocus={true}
              restoreFocus={true}
              className={styles['focus-lock']}>
              <div
                className={clsx(
                  styles.dialog,
                  styles[size],
                  styles[`breakpoint-${breakpoint}`],
                  isRefresh && styles.refresh
                )}
                onKeyDown={escKeyHandler}>
                <div className={styles.container}>
                  <div className={styles.header}>
                    <InternalHeader
                      variant='h2'
                      __disableActionsWrapping={true}
                      actions={
                        <InternalButton
                          ariaLabel={closeAriaLabel}
                          className={styles['dismiss-control']}
                          variant='modal-dismiss'
                          iconName='close'
                          formAction='none'
                          onClick={onCloseButtonClick}
                        />
                      }>
                      <span id={headerId} className={styles['header--text']}>
                        {header}
                      </span>
                    </InternalHeader>
                  </div>
                  <div
                    className={clsx(styles.content, {
                      [styles['no-paddings']]: disableContentPaddings
                    })}>
                    {children}
                    <div ref={stickySentinelRef} />
                  </div>
                  {footer && (
                    <div
                      ref={footerRef}
                      className={clsx(
                        styles.footer,
                        footerStuck && styles['footer--stuck']
                      )}>
                      {footer}
                    </div>
                  )}
                </div>
              </div>
            </FocusLock>
          </div>
        </ModalContext.Provider>
      </ResetContextsForModal>
    )
  }
)

export {
  InternalModal as default
}
