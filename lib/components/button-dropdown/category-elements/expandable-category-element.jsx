import {useEffect, useRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import InternalIcon from '../../icon/internal'
import ItemsList from '../items-list'
import Dropdown from '../../internal/components/dropdown'
import useHiddenDescription from '../utils/use-hidden-description'
import Tooltip from '../tooltip'
import {getMenuItemProps} from '../utils/menu-item'

const ExpandableCategoryElement = memo(
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
    expandToViewport,
    variant
  }) => {
    const highlighted = isHighlighted(item)
    const expanded = isExpanded(item)
    const isKeyboardHighlighted = isKeyboardHighlight(item)
    const triggerRef = useRef(null)
    const ref = useRef(null)
    useEffect(() => {
      if (triggerRef.current && highlighted && !expanded) {
        triggerRef.current.focus()
      }
    }, [expanded, highlighted])
    const onClick = event => {
      if (!disabled) {
        event.preventDefault()
        onGroupToggle(item, event)
        triggerRef.current?.focus()
      }
    }
    const onHover = () => {
      highlightItem(item)
    }
    const isDisabledWithReason = !!item.disabledReason && item.disabled
    const {targetProps, descriptionEl} = useHiddenDescription(
      item.disabledReason
    )
    const trigger = item.text && (
      <span
        className={clsx(
          styles.header,
          styles['expandable-header'],
          styles[`variant-${variant}`],
          {
            [styles.disabled]: disabled,
            [styles.highlighted]: highlighted,
            [styles['is-focused']]: isKeyboardHighlighted
          }
        )}
        tabIndex={highlighted ? 0 : -1}
        ref={triggerRef}
        {...getMenuItemProps({parent: true, expanded, disabled})}
        {...(isDisabledWithReason ? targetProps : {})}>
        {item.text}
        <span
          className={clsx(styles['expand-icon'], styles['expand-icon-right'])}>
          <InternalIcon name='caret-down-filled' />
        </span>
      </span>
    )
    let content
    if (isDisabledWithReason) {
      content = (
        <Tooltip content={item.disabledReason}>
          {trigger}
          {descriptionEl}
        </Tooltip>
      )
    } else if (disabled) {
      content = trigger
    } else {
      content = (
        <Dropdown
          open={expanded}
          stretchWidth={false}
          interior={true}
          expandToViewport={expandToViewport}
          trigger={trigger}>
          {item.items && expanded && (
            <ul
              role='menu'
              aria-label={item.text}
              className={clsx(
                styles['items-list-container'],
                styles['in-dropdown']
              )}>
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
                variant={variant}
              />
            </ul>
          )}
        </Dropdown>
      )
    }
    return (
      <li
        className={clsx(
          styles.category,
          styles[`variant-${variant}`],
          styles.expandable,
          {
            [styles.expanded]: expanded,
            [styles.disabled]: disabled,
            [styles.highlighted]: highlighted
          }
        )}
        role='presentation'
        data-testid={item.id}
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        onTouchStart={onHover}>
        {content}
      </li>
    )
  }
)

export {
  ExpandableCategoryElement as default
}
