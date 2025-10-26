import {memo} from 'react'
import clsx from 'clsx'
import InternalSelect from '../../../select/internal'
import InternalIcon from '../../../icon/internal'
import styles from './styles.css.js'

const FilteringToken = memo(
  ({
    ariaLabel,
    showOperation,
    operation,
    andText,
    orText,
    dismissAriaLabel,
    operatorAriaLabel,
    disabled,
    children,
    onChange,
    onDismiss
  }) => {
    return (
      <div className={styles.root} role='group' aria-label={ariaLabel}>
        {showOperation && (
          <InternalSelect
            __inFilteringToken={true}
            className={styles.select}
            options={[
              {value: 'and', label: andText},
              {value: 'or', label: orText}
            ]}
            selectedOption={{
              value: operation,
              label: operation === 'and' ? andText : orText
            }}
            onChange={e => onChange(e.detail.selectedOption.value)}
            disabled={disabled}
            ariaLabel={operatorAriaLabel}
          />
        )}
        <div
          className={clsx(
            styles.token,
            showOperation && styles['show-operation'],
            disabled && styles['token-disabled']
          )}
          aria-disabled={disabled}>
          <div className={styles['token-content']}>{children}</div>
          <button
            type='button'
            className={styles['dismiss-button']}
            aria-label={dismissAriaLabel}
            onClick={onDismiss}
            disabled={disabled}>
            <InternalIcon name='close' />
          </button>
        </div>
      </div>
    )
  }
)

export {
  FilteringToken as default
}
