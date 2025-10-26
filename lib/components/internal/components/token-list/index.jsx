import {useState, memo} from 'react'
import TokenLimitToggle from './token-limit-toggle'
import styles from './styles.css.js'
import {useUniqueId} from '../../hooks/use-unique-id'
import clsx from 'clsx'
import {useTokenFocusController} from './token-focus-controller'

const TokenList = memo(
  ({
    items,
    alignment,
    renderItem,
    limit,
    after,
    i18nStrings,
    limitShowFewerAriaLabel,
    limitShowMoreAriaLabel,
    moveFocusNextToIndex,
    onExpandedClick = () => void 0
  }) => {
    const tokenListRef = useTokenFocusController({moveFocusNextToIndex})
    const controlId = useUniqueId()
    const [expanded, setExpanded] = useState(false)
    const hasItems = items.length > 0
    const hasHiddenItems = hasItems && limit !== void 0 && items.length > limit
    const visibleItems =
      hasHiddenItems && !expanded ? items.slice(0, limit) : items
    const hasVisibleItems = visibleItems.length > 0
    const toggle = hasHiddenItems ? (
      <div className={styles[`toggle-container-${alignment}`]}>
        <TokenLimitToggle
          controlId={hasVisibleItems ? controlId : void 0}
          allHidden={limit === 0}
          expanded={expanded}
          numberOfHiddenOptions={items.length - visibleItems.length}
          i18nStrings={i18nStrings}
          limitShowFewerAriaLabel={limitShowFewerAriaLabel}
          limitShowMoreAriaLabel={limitShowMoreAriaLabel}
          onClick={() => {
            const isExpanded = !expanded
            setExpanded(isExpanded)
            onExpandedClick(isExpanded)
          }}
        />
      </div>
    ) : null
    if (alignment === 'inline') {
      return (
        <div
          ref={tokenListRef}
          className={clsx(styles.root, styles.horizontal)}>
          {hasItems && (
            <ul id={controlId} className={styles.list}>
              {visibleItems.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={styles['list-item']}
                  aria-setsize={items.length}
                  aria-posinset={itemIndex + 1}>
                  {renderItem(item, itemIndex)}
                </li>
              ))}
            </ul>
          )}
          {toggle}
          {after && <div className={styles.separator} />}
          {after}
        </div>
      )
    }
    return (
      <div ref={tokenListRef} className={clsx(styles.root, styles.vertical)}>
        {hasVisibleItems && (
          <ul id={controlId} className={clsx(styles.list, styles[alignment])}>
            {visibleItems.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={styles['list-item']}
                aria-setsize={items.length}
                aria-posinset={itemIndex + 1}>
                {renderItem(item, itemIndex)}
              </li>
            ))}
          </ul>
        )}
        {toggle}
        {after}
      </div>
    )
  }
)

export {
  TokenList as default
}
