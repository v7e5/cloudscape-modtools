import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import ResizeHandleIcon from './icon'
import styles from './styles.css.js'

const PanelResizeHandle = memo(
  forwardRef(
    (
      {className, ariaLabel, ariaValuenow, position, onKeyDown, onPointerDown},
      ref
    ) => {
      return (
        <div
          ref={ref}
          className={clsx(
            className,
            styles.slider,
            styles[`slider-${position}`]
          )}
          role='slider'
          tabIndex={0}
          aria-label={ariaLabel}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={ariaValuenow}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}>
          <ResizeHandleIcon
            className={clsx(
              styles['slider-icon'],
              styles[`slider-icon-${position}`]
            )}
          />
        </div>
      )
    }
  )
)

export {
  PanelResizeHandle as default
}
