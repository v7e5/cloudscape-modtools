import {useEffect, useRef, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import {isCheckboxItem, isLinkItem} from '../utils/utils'
import styles from './styles.css.js'
import Tooltip from '../tooltip'
import {getItemTarget} from '../utils/utils'
import useHiddenDescription from '../utils/use-hidden-description'
import InternalIcon from '../../icon/internal'
import {useDropdownContext} from '../../internal/components/dropdown/context'
import {getMenuItemProps, getMenuItemCheckboxProps} from '../utils/menu-item'

const ItemElement = memo(
  ({
    item,
    disabled,
    onItemActivate,
    highlighted,
    highlightItem,
    showDivider,
    hasCategoryHeader,
    isKeyboardHighlighted = false,
    variant = 'normal'
  }) => {
    const isLink = isLinkItem(item)
    const isCheckbox = isCheckboxItem(item)
    const onClick = event => {
      event.stopPropagation()
      if (!isLink) {
        event.preventDefault()
      }
      if (!disabled) {
        onItemActivate(item, event)
      }
    }
    const onHover = () => {
      highlightItem(item)
    }
    return (
      <li
        className={clsx(styles['item-element'], styles[`variant-${variant}`], {
          [styles.highlighted]: highlighted,
          [styles.disabled]: disabled,
          [styles['has-category-header']]: hasCategoryHeader,
          [styles['has-checkmark']]: isCheckbox,
          [styles['show-divider']]: showDivider,
          [styles['is-focused']]: isKeyboardHighlighted
        })}
        role='presentation'
        data-testid={item.id}
        data-description={item.description}
        onClick={onClick}
        onMouseEnter={onHover}
        onTouchStart={onHover}>
        <MenuItem item={item} disabled={disabled} highlighted={highlighted} />
      </li>
    )
  }
)
const MenuItem = memo(({item, disabled, highlighted}) => {
  const menuItemRef = useRef(null)
  const isCheckbox = isCheckboxItem(item)
  useEffect(() => {
    if (highlighted && menuItemRef.current) {
      menuItemRef.current.focus()
    }
  }, [highlighted])
  const isDisabledWithReason = disabled && item.disabledReason
  const {targetProps, descriptionEl} = useHiddenDescription(
    item.disabledReason
  )
  const menuItemProps = {
    className: styles['menu-item'],
    lang: item.lang,
    ref: menuItemRef,

    tabIndex: highlighted ? 0 : -1,
    ...(isCheckbox
      ? getMenuItemCheckboxProps({disabled, checked: item.checked})
      : getMenuItemProps({disabled})),
    ...(isDisabledWithReason ? targetProps : {})
  }
  const menuItem = isLinkItem(item) ? (
    <Link
      {...menuItemProps}
      to={!disabled ? item.to : void 0}
      target={getItemTarget(item)}
      rel={item.external ? 'noopener noreferrer' : void 0}>
      <MenuItemContent item={item} disabled={disabled} />
    </Link>
  ) : (
    <span {...menuItemProps}>
      <MenuItemContent item={item} disabled={disabled} />
    </span>
  )
  const {position} = useDropdownContext()
  const tooltipPosition =
    position === 'bottom-left' || position === 'top-left' ? 'left' : 'right'
  return isDisabledWithReason ? (
    <Tooltip content={item.disabledReason} position={tooltipPosition}>
      {menuItem}
      {descriptionEl}
    </Tooltip>
  ) : (
    menuItem
  )
})

const MenuItemContent = memo(({item, disabled}) => {
  const hasIcon = !!(item.iconName || item.iconUrl || item.iconSvg)
  const hasExternal = isLinkItem(item) && item.external
  const isCheckbox = isCheckboxItem(item)
  return (
    <>
      {isCheckbox && (
        <MenuItemCheckmark checked={item.checked} disabled={disabled} />
      )}
      {hasIcon && (
        <MenuItemIcon
          name={item.iconName}
          url={item.iconUrl}
          svg={item.iconSvg}
          alt={item.iconAlt}
          badge={item.badge}
        />
      )}
      {item.text}
      {hasExternal && (
        <ExternalIcon
          disabled={disabled}
          ariaLabel={item.externalIconAriaLabel}
        />
      )}
    </>
  )
})
const MenuItemIcon = memo(props => (
  <span className={styles.icon}>
    <InternalIcon {...props} />
  </span>
))
const MenuItemCheckmark = memo(({disabled, checked}) => {
  const checkmark = (
    <InternalIcon variant={disabled ? 'disabled' : 'normal'} name='check' />
  )
  return (
    <span
      className={clsx(styles.icon, styles.checkmark, {
        [styles.disabled]: disabled
      })}
      aria-hidden='true'
      style={{visibility: checked ? 'visible' : 'hidden'}}>
      {checkmark}
    </span>
  )
})
const ExternalIcon = memo(({disabled, ariaLabel}) => {
  const icon = (
    <InternalIcon variant={disabled ? 'disabled' : 'normal'} name='external' />
  )
  return (
    <span
      className={styles['external-icon']}
      role={ariaLabel ? 'img' : void 0}
      aria-label={ariaLabel}>
      {icon}
    </span>
  )
})

export {
  ItemElement as default
}
