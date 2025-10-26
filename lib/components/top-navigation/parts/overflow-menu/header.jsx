import {memo} from 'react'
import InternalButton from '../../../button/internal'
import styles from '../../styles.css.js'

const Header = memo(
  ({
    children,
    secondaryText,
    backIconAriaLabel,
    dismissIconAriaLabel,
    onBack,
    onClose
  }) => {
    return (
      <div className={styles['overflow-menu-header']}>
        {onBack && (
          <InternalButton
            className={styles['overflow-menu-back-button']}
            ariaLabel={backIconAriaLabel}
            iconName='angle-left'
            variant='icon'
            onClick={() => onBack()}
          />
        )}
        <h2 className={styles['overflow-menu-header-text']}>
          <div className={styles['overflow-menu-header-text--title']}>
            {children}
          </div>
          {secondaryText && (
            <div className={styles['overflow-menu-header-text--secondary']}>
              {secondaryText}
            </div>
          )}
        </h2>
        <InternalButton
          className={styles['overflow-menu-dismiss-button']}
          ariaLabel={dismissIconAriaLabel}
          iconName='close'
          variant='icon'
          onClick={() => onClose && onClose()}
        />
      </div>
    )
  }
)

export {
  Header as default
}
