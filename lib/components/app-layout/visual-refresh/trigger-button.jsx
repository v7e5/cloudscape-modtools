import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import Icon from '../../icon/internal'
import styles from './styles.css.js'

const TriggerButton = memo(
  forwardRef(
    (
      {
        ariaLabel,
        className,
        iconName,
        iconSvg,
        ariaExpanded,
        ariaControls,
        onClick,
        testId,
        badge,
        selected = false,
        highContrastHeader
      },
      ref
    ) => {
      return (
        <div
          className={clsx(
            styles['trigger-wrapper'],
            !highContrastHeader && styles['remove-high-contrast-header']
          )}>
          <button
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-haspopup={true}
            aria-label={ariaLabel}
            className={clsx(
              styles.trigger,
              {
                [styles.selected]: selected,
                [styles.badge]: badge
              },
              className
            )}
            onClick={onClick}
            ref={ref}
            type='button'
            data-testid={testId}>
            <span className={clsx(badge && styles['trigger-badge-wrapper'])}>
              <Icon name={iconName} svg={iconSvg} />
            </span>
          </button>
          {badge && <div className={clsx(styles.dot)} />}
        </div>
      )
    }
  )
)

export {
  TriggerButton as default
}
