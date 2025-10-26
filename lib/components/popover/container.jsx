import {useEffect, useRef, memo} from 'react'
import clsx from 'clsx'
import {nodeContains} from '~/components/internal/toolkit/dom'
import {useResizeObserver} from '~/components/internal/toolkit/internal'
import styles from './styles.css.js'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import usePopoverPosition from './use-popover-position'

const PopoverContainer = memo(
  ({
    position,
    trackRef,
    trackKey,
    arrow,
    children,
    zIndex,
    renderWithPortal,
    size,
    fixedWidth,
    variant,
    keepPosition,
    allowScrollToFit,
    allowVerticalOverflow
  }) => {
    const bodyRef = useRef(null)
    const contentRef = useRef(null)
    const popoverRef = useRef(null)
    const arrowRef = useRef(null)
    const isRefresh = useVisualRefresh()
    const {
      updatePositionHandler,
      popoverStyle,
      internalPosition,
      positionHandlerRef
    } = usePopoverPosition({
      popoverRef,
      bodyRef,
      arrowRef,
      trackRef,
      contentRef,
      allowScrollToFit,
      allowVerticalOverflow,
      preferredPosition: position,
      renderWithPortal,
      keepPosition
    })
    useEffect(() => {
      updatePositionHandler()
    }, [updatePositionHandler, trackKey])
    useResizeObserver(contentRef, () => {
      updatePositionHandler(true)
    })
    useEffect(() => {
      const onClick = event => {
        if (keepPosition || nodeContains(trackRef.current, event.target)) {
          return
        }
        requestAnimationFrame(() => {
          updatePositionHandler()
        })
      }
      const updatePositionOnResize = () =>
        requestAnimationFrame(() => updatePositionHandler())
      const refreshPosition = () =>
        requestAnimationFrame(() => positionHandlerRef.current())
      window.addEventListener('click', onClick)
      window.addEventListener('resize', updatePositionOnResize)
      window.addEventListener('scroll', refreshPosition, true)
      return () => {
        window.removeEventListener('click', onClick)
        window.removeEventListener('resize', updatePositionOnResize)
        window.removeEventListener('scroll', refreshPosition, true)
      }
    }, [keepPosition, positionHandlerRef, trackRef, updatePositionHandler])
    return (
      <div
        ref={popoverRef}
        style={{...popoverStyle, zIndex}}
        className={clsx(styles.container, isRefresh && styles.refresh)}>
        <div
          ref={arrowRef}
          className={clsx(
            styles[`container-arrow`],
            styles[`container-arrow-position-${internalPosition}`]
          )}
          aria-hidden={true}>
          {arrow(internalPosition)}
        </div>
        <div
          ref={bodyRef}
          className={clsx(
            styles['container-body'],
            styles[`container-body-size-${size}`],
            {
              [styles['fixed-width']]: fixedWidth,
              [styles[`container-body-variant-${variant}`]]: variant
            }
          )}>
          <div ref={contentRef}>{children}</div>
        </div>
      </div>
    )
  }
)

export {
  PopoverContainer as default
}
