import {useEffect, useRef, useState, memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'
import {useMergeRefs} from '../../hooks/use-merge-refs'
import {createPortal} from 'react-dom'
import {fireNonCancelableEvent} from '../../events'
import {
  calculatePosition,
  defaultMaxDropdownWidth,
  hasEnoughSpaceToStretchBeyondTriggerWidth
} from './dropdown-fit-handler'
import {Transition} from '../transition'
import {useVisualRefresh} from '../../hooks/use-visual-mode'
import {usePortalModeClasses} from '../../hooks/use-portal-mode-classes'
import {DropdownContextProvider} from './context'
import {useMobile} from '../../hooks/use-mobile'
import TabTrap from '../tab-trap/'
import {getFirstFocusable, getLastFocusable} from '../focus-lock/utils'
import {useUniqueId} from '../../hooks/use-unique-id/'
import customCssProps from '../../generated/custom-css-properties'
import {useResizeObserver} from '~/components/internal/toolkit/internal'
import {nodeBelongs} from '../../utils/node-belongs'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const DropdownContainer = memo(
  ({children, renderWithPortal = false, id, referrerId, open}) => {
    if (renderWithPortal) {
      if (open) {
        return createPortal(<div id={id}>{children}</div>, document.body)
      } else {
        return null
      }
    } else {
      return <>{children}</>
    }
  }
)
const TransitionContent = memo(
  ({
    state,
    transitionRef,
    dropdownClasses,
    stretchWidth,
    interior,
    isRefresh,
    dropdownRef,
    verticalContainerRef,
    expandToViewport,
    stretchBeyondTriggerWidth,
    header,
    children,
    footer,
    position,
    open,
    onMouseDown,
    id,
    role,
    ariaLabelledby,
    ariaDescribedby
  }) => {
    const contentRef = useMergeRefs(dropdownRef, transitionRef)
    return (
      <div
        className={clsx(styles.dropdown, dropdownClasses, {
          [styles.open]: open,
          [styles['with-limited-width']]: !stretchWidth,
          [styles['hide-block-border']]: stretchWidth,
          [styles.interior]: interior,
          [styles.refresh]: isRefresh,
          [styles['use-portal']]: expandToViewport && !interior,
          [styles['stretch-beyond-trigger-width']]: stretchBeyondTriggerWidth
        })}
        ref={contentRef}
        id={id}
        role={role}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        data-open={open}
        data-animating={state !== 'exited'}
        aria-hidden={!open}
        style={
          stretchBeyondTriggerWidth
            ? {
                [customCssProps.dropdownDefaultMaxWidth]: `${defaultMaxDropdownWidth}px`
              }
            : {}
        }
        onMouseDown={onMouseDown}>
        <div
          className={clsx(
            styles['dropdown-content-wrapper'],
            !header && !children && styles['is-empty'],
            isRefresh && styles.refresh
          )}>
          <div
            ref={verticalContainerRef}
            className={styles['dropdown-content']}>
            <DropdownContextProvider position={position}>
              {header}
              {children}
              {footer}
            </DropdownContextProvider>
          </div>
        </div>
      </div>
    )
  }
)
const Dropdown = memo(
  ({
    children,
    trigger,
    open,
    onDropdownClose,
    onMouseDown,
    header,
    footer,
    dropdownId,
    stretchTriggerHeight = false,
    stretchWidth = true,
    stretchHeight = false,
    stretchToTriggerWidth = true,
    stretchBeyondTriggerWidth = false,
    expandToViewport = false,
    preferCenter = false,
    interior = false,
    minWidth,
    scrollable = true,
    loopFocus = expandToViewport,
    onFocus,
    onBlur,
    contentKey,
    dropdownContentId,
    dropdownContentRole,
    ariaLabelledby,
    ariaDescribedby
  }) => {
    const wrapperRef = useRef(null)
    const triggerRef = useRef(null)
    const dropdownRef = useRef(null)
    const dropdownContainerRef = useRef(null)
    const verticalContainerRef = useRef(null)
    const fixedPosition = useRef(null)
    const isRefresh = useVisualRefresh()
    const dropdownClasses = usePortalModeClasses(triggerRef)
    const [position, setPosition] = useState('bottom-right')
    const isMobile = useMobile()
    const setDropdownPosition = (
      position2,
      triggerBox,
      target,
      verticalContainer
    ) => {
      const entireWidth = !interior && stretchWidth
      if (!stretchWidth) {
        verticalContainer.style.maxBlockSize = `${
          parseInt(position2.blockSize) + 1
        }px`
      } else {
        verticalContainer.style.maxBlockSize = position2.blockSize
      }
      if (entireWidth && !expandToViewport) {
        if (stretchToTriggerWidth) {
          target.classList.add(styles['occupy-entire-width'])
        }
      } else {
        target.style.inlineSize = position2.inlineSize
      }
      if (position2.dropBlockStart && !interior) {
        target.classList.add(styles['dropdown-drop-up'])
        if (!expandToViewport) {
          target.style.insetBlockEnd = '100%'
        }
      } else {
        target.classList.remove(styles['dropdown-drop-up'])
      }
      target.classList.add(
        position2.dropInlineStart
          ? styles['dropdown-drop-left']
          : styles['dropdown-drop-right']
      )
      if (
        position2.insetInlineStart &&
        position2.insetInlineStart !== 'auto'
      ) {
        target.style.insetInlineStart = position2.insetInlineStart
      }
      if (expandToViewport && !interior) {
        target.style.position = 'fixed'
        if (position2.dropBlockStart) {
          target.style.insetBlockEnd = `calc(100% - ${triggerBox.top}px)`
        } else {
          target.style.insetBlockStart = `${triggerBox.bottom}px`
        }
        if (position2.dropInlineStart) {
          target.style.insetInlineStart = `calc(${triggerBox.right}px - ${position2.inlineSize})`
        } else {
          target.style.insetInlineStart = `${triggerBox.left}px`
        }
        fixedPosition.current = position2
        return
      }
      if (interior && isInteriorPosition(position2)) {
        if (position2.dropBlockStart) {
          target.style.insetBlockEnd = position2.insetBlockEnd
        } else {
          target.style.insetBlockStart = position2.insetBlockStart
        }
        target.style.insetInlineStart = position2.insetInlineStart
      }
      if (position2.dropBlockStart && position2.dropInlineStart) {
        setPosition('top-left')
      } else if (position2.dropBlockStart) {
        setPosition('top-right')
      } else if (position2.dropInlineStart) {
        setPosition('bottom-left')
      } else {
        setPosition('bottom-right')
      }
    }
    const isOutsideDropdown = element =>
      (!wrapperRef.current || !nodeBelongs(wrapperRef.current, element)) &&
      (!dropdownContainerRef.current ||
        !nodeBelongs(dropdownContainerRef.current, element))
    const focusHandler = event => {
      if (!event.relatedTarget || isOutsideDropdown(event.relatedTarget)) {
        fireNonCancelableEvent(onFocus, event)
      }
    }
    const blurHandler = event => {
      if (!event.relatedTarget || isOutsideDropdown(event.relatedTarget)) {
        fireNonCancelableEvent(onBlur, event)
      }
    }
    const fixStretching = () => {
      const classNameToRemove = styles['stretch-beyond-trigger-width']
      if (
        open &&
        stretchBeyondTriggerWidth &&
        dropdownRef.current &&
        triggerRef.current &&
        dropdownRef.current.classList.contains(classNameToRemove) &&
        !hasEnoughSpaceToStretchBeyondTriggerWidth({
          triggerElement: triggerRef.current,
          dropdownElement: dropdownRef.current,
          desiredMinWidth: minWidth,
          expandToViewport,
          stretchWidth,
          stretchHeight,
          isMobile
        })
      ) {
        dropdownRef.current.classList.remove(classNameToRemove)
      }
    }
    useResizeObserver(() => dropdownRef.current, fixStretching)
    useEffect(() => {
      const onDropdownOpen = () => {
        if (
          open &&
          dropdownRef.current &&
          triggerRef.current &&
          verticalContainerRef.current
        ) {
          if (scrollable) {
            dropdownRef.current.classList.add(styles.nowrap)
          }
          setDropdownPosition(
            ...calculatePosition(
              dropdownRef.current,
              triggerRef.current,
              verticalContainerRef.current,
              interior,
              expandToViewport,
              preferCenter,
              stretchWidth,
              stretchHeight,
              isMobile,
              minWidth,
              stretchBeyondTriggerWidth
            ),
            dropdownRef.current,
            verticalContainerRef.current
          )
          if (scrollable) {
            dropdownRef.current.classList.remove(styles.nowrap)
          }
        }
      }
      onDropdownOpen()
      if (open) {
        window.addEventListener('scroll', onDropdownOpen)
        const timeoutId = setTimeout(() => {
          window.removeEventListener('scroll', onDropdownOpen)
        }, 500)
        return () => {
          clearTimeout(timeoutId)
          window.removeEventListener('scroll', onDropdownOpen)
        }
      }
    }, [
      open,
      dropdownRef,
      triggerRef,
      verticalContainerRef,
      interior,
      stretchWidth,
      isMobile,
      contentKey
    ])
    useEffect(() => {
      if (!open) {
        return
      }
      const clickListener = e => {
        if (
          !nodeBelongs(dropdownRef.current, e.target) &&
          !nodeBelongs(triggerRef.current, e.target)
        ) {
          fireNonCancelableEvent(onDropdownClose)
        }
      }
      window.addEventListener('click', clickListener, true)
      return () => {
        window.removeEventListener('click', clickListener, true)
      }
    }, [open, onDropdownClose])
    useEffect(() => {
      if (!expandToViewport || !open) {
        return
      }
      const updateDropdownPosition = () => {
        if (
          triggerRef.current &&
          dropdownRef.current &&
          verticalContainerRef.current
        ) {
          const triggerRect = getLogicalBoundingClientRect(triggerRef.current)
          const target = dropdownRef.current
          if (fixedPosition.current) {
            if (fixedPosition.current.dropBlockStart) {
              dropdownRef.current.style.insetBlockEnd = `calc(100% - ${triggerRect.insetBlockStart}px)`
            } else {
              target.style.insetBlockStart = `${triggerRect.insetBlockEnd}px`
            }
            if (fixedPosition.current.dropInlineStart) {
              target.style.insetInlineStart = `calc(${triggerRect.insetInlineEnd}px - ${fixedPosition.current.inlineSize})`
            } else {
              target.style.insetInlineStart = `${triggerRect.insetInlineStart}px`
            }
          }
        }
      }
      updateDropdownPosition()
      window.addEventListener('scroll', updateDropdownPosition, true)
      window.addEventListener('resize', updateDropdownPosition, true)
      return () => {
        window.removeEventListener('scroll', updateDropdownPosition, true)
        window.removeEventListener('resize', updateDropdownPosition, true)
      }
    }, [open, expandToViewport])
    const referrerId = useUniqueId()
    return (
      <div
        className={clsx(
          styles.root,
          interior && styles.interior,
          stretchTriggerHeight && styles['stretch-trigger-height']
        )}
        ref={wrapperRef}
        onFocus={focusHandler}
        onBlur={blurHandler}>
        <div
          id={referrerId}
          className={clsx(
            stretchTriggerHeight && styles['stretch-trigger-height']
          )}
          ref={triggerRef}>
          {trigger}
        </div>
        <TabTrap
          focusNextCallback={() =>
            dropdownRef.current &&
            getFirstFocusable(dropdownRef.current)?.focus()
          }
          disabled={!open || !loopFocus}
        />
        <DropdownContainer
          renderWithPortal={expandToViewport && !interior}
          id={dropdownId}
          referrerId={referrerId}
          open={open}>
          <Transition in={open ?? false} exit={false}>
            {(state, ref) => (
              <div ref={dropdownContainerRef}>
                <TabTrap
                  focusNextCallback={() =>
                    triggerRef.current &&
                    getLastFocusable(triggerRef.current)?.focus()
                  }
                  disabled={!open || !loopFocus}
                />
                <TransitionContent
                  state={state}
                  transitionRef={ref}
                  dropdownClasses={dropdownClasses}
                  open={open}
                  stretchWidth={stretchWidth}
                  interior={interior}
                  header={header}
                  expandToViewport={expandToViewport}
                  stretchBeyondTriggerWidth={stretchBeyondTriggerWidth}
                  footer={footer}
                  onMouseDown={onMouseDown}
                  isRefresh={isRefresh}
                  dropdownRef={dropdownRef}
                  verticalContainerRef={verticalContainerRef}
                  position={position}
                  id={dropdownContentId}
                  role={dropdownContentRole}
                  ariaLabelledby={ariaLabelledby}
                  ariaDescribedby={ariaDescribedby}>
                  {children}
                </TransitionContent>
                <TabTrap
                  focusNextCallback={() =>
                    triggerRef.current &&
                    getFirstFocusable(triggerRef.current)?.focus()
                  }
                  disabled={!open || !loopFocus}
                />
              </div>
            )}
          </Transition>
        </DropdownContainer>
      </div>
    )
  }
)
const isInteriorPosition = position => position.insetBlockEnd !== void 0

export {
  Dropdown as default
}
