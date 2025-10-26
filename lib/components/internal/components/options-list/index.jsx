import {useEffect, useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {useMergeRefs} from '../../hooks/use-merge-refs'
import {getBaseProps} from '../../base-component'
import {fireNonCancelableEvent, fireKeyboardEvent} from '../../events'
import {findUpUntil} from '../../utils/dom'
import styles from './styles.css.js'
import {useStableCallback} from '~/components/internal/toolkit/internal'

const BOTTOM_TRIGGER_OFFSET = 80
const getItemIndex = (containerRef, event) => {
  const target = findUpUntil(
    event.target,
    element =>
      element === containerRef.current || !!element.dataset.mouseTarget
  )
  const mouseTarget = target?.dataset.mouseTarget
  return mouseTarget ? parseInt(mouseTarget) : -1
}
const OptionsList = memo(
  forwardRef(
    (
      {
        open,
        statusType,
        children,
        nativeAttributes = {},
        onKeyDown,
        onBlur,
        onFocus,
        onLoadMore,
        onMouseUp,
        onMouseMove,
        position = 'relative',
        role = 'listbox',
        decreaseBlockMargin = false,
        ariaLabel,
        ariaLabelledby,
        ariaDescribedby,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const menuRef = useRef(null)
      const handleScroll = useStableCallback(() => {
        const scrollContainer = menuRef?.current
        if (scrollContainer) {
          const bottomEdgePosition =
            scrollContainer.scrollTop + scrollContainer.clientHeight
          const remainingScrollHeight =
            scrollContainer.scrollHeight - bottomEdgePosition
          if (remainingScrollHeight < BOTTOM_TRIGGER_OFFSET) {
            fireNonCancelableEvent(onLoadMore)
          }
        }
      })
      useEffect(() => {
        if (open && statusType === 'pending') {
          handleScroll()
        }
      }, [open, statusType, handleScroll])
      const className = clsx(styles['options-list'], {
        [styles['decrease-block-margin']]: decreaseBlockMargin
      })
      const mergedRef = useMergeRefs(ref, menuRef)
      return (
        <ul
          {...baseProps}
          {...nativeAttributes}
          className={className}
          ref={mergedRef}
          style={{position}}
          role={role}
          onScroll={handleScroll}
          onKeyDown={event => onKeyDown && fireKeyboardEvent(onKeyDown, event)}
          onMouseMove={event => onMouseMove?.(getItemIndex(menuRef, event))}
          onMouseUp={event => onMouseUp?.(getItemIndex(menuRef, event))}
          onBlur={event =>
            fireNonCancelableEvent(onBlur, {
              relatedTarget: event.relatedTarget
            })
          }
          onFocus={() => fireNonCancelableEvent(onFocus)}
          tabIndex={-1}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}>
          {open && children}
        </ul>
      )
    }
  )
)

export {
  OptionsList as default
}
