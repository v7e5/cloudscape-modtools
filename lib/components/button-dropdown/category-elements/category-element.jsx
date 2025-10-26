import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import ItemsList from '../items-list'

const CategoryElement = memo(
  ({
    item,
    onItemActivate,
    onGroupToggle,
    targetItem,
    isHighlighted,
    isKeyboardHighlight,
    isExpanded,
    lastInDropdown,
    highlightItem,
    disabled,
    variant
  }) => {
    return (
      <li
        className={clsx(
          styles.category,
          styles[`variant-${variant}`],
          disabled && styles.disabled
        )}
        role='presentation'
        aria-disabled={disabled ? 'true' : void 0}>
        {item.text && (
          <p
            className={clsx(styles.header, {[styles.disabled]: disabled})}
            aria-hidden='true'>
            {item.text}
          </p>
        )}
        <ul
          className={clsx(styles['items-list-container'])}
          role='group'
          aria-label={item.text}>
          {item.items && (
            <ItemsList
              items={item.items}
              onItemActivate={onItemActivate}
              onGroupToggle={onGroupToggle}
              targetItem={targetItem}
              isHighlighted={isHighlighted}
              isKeyboardHighlight={isKeyboardHighlight}
              isExpanded={isExpanded}
              lastInDropdown={lastInDropdown}
              highlightItem={highlightItem}
              categoryDisabled={disabled}
              hasCategoryHeader={!!item.text}
              variant={variant}
            />
          )}
        </ul>
      </li>
    )
  }
)

export {
  CategoryElement as default
}
