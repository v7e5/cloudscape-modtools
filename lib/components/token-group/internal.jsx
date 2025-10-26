import {useState, memo} from 'react'
import Option from '../internal/components/option'
import {fireNonCancelableEvent} from '../internal/events'
import {getBaseProps} from '../internal/base-component'
import clsx from 'clsx'
import styles from './styles.css.js'
import TokenList from '../internal/components/token-list'
import {Token} from './token'

const InternalTokenGroup = memo(
  ({
    alignment,
    items,
    onDismiss,
    limit,
    i18nStrings,
    disableOuterPadding,
    limitShowFewerAriaLabel,
    limitShowMoreAriaLabel,
    __internalRootRef,
    ...props
  }) => {
    const [removedItemIndex, setRemovedItemIndex] = useState(null)
    const baseProps = getBaseProps(props)
    const hasItems = items.length > 0
    return (
      <div
        {...baseProps}
        className={clsx(
          baseProps.className,
          styles.root,
          hasItems && styles['has-items'],
          disableOuterPadding && styles['no-padding']
        )}
        ref={__internalRootRef}>
        <TokenList
          alignment={alignment}
          items={items}
          limit={limit}
          renderItem={memo((item, itemIndex) => (
            <Token
              ariaLabel={item.label}
              dismissLabel={item.dismissLabel}
              onDismiss={() => {
                fireNonCancelableEvent(onDismiss, {itemIndex})
                setRemovedItemIndex(itemIndex)
              }}
              disabled={item.disabled}>
              <Option option={item} isGenericGroup={false} />
            </Token>
          ))}
          i18nStrings={i18nStrings}
          limitShowFewerAriaLabel={limitShowFewerAriaLabel}
          limitShowMoreAriaLabel={limitShowMoreAriaLabel}
          moveFocusNextToIndex={removedItemIndex}
          onExpandedClick={isExpanded => {
            if (isExpanded && limit) {
              setRemovedItemIndex(limit)
            } else {
              setRemovedItemIndex(null)
            }
          }}
        />
      </div>
    )
  }
)

export {
  InternalTokenGroup as default
}
