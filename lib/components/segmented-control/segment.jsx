import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import InternalIcon from '../icon/internal'
import styles from './styles.css.js'

const Segment = memo(
  forwardRef(
    (
      {
        disabled,
        text,
        iconName,
        iconAlt,
        iconUrl,
        iconSvg,
        isActive,
        onClick,
        onKeyDown,
        tabIndex
      },
      ref
    ) => {
      return (
        <button
          className={clsx(
            styles.segment,
            {[styles.disabled]: !!disabled},
            {[styles.selected]: isActive}
          )}
          ref={ref}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={disabled}
          type='button'
          tabIndex={tabIndex}
          aria-pressed={isActive ? 'true' : 'false'}
          aria-label={!text ? iconAlt : void 0}>
          {(iconName || iconUrl || iconSvg) && (
            <InternalIcon
              className={clsx(
                styles.icon,
                text ? styles['with-text'] : styles['with-no-text']
              )}
              name={iconName}
              url={iconUrl}
              svg={iconSvg}
              alt={iconAlt}
              variant={disabled ? 'disabled' : 'normal'}
            />
          )}
          <span>{text}</span>
        </button>
      )
    }
  )
)

export {
  Segment
}
