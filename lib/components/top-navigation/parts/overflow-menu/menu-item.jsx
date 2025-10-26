import {forwardRef, useState, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import {fireCancelableEvent, isPlainLeftClick} from '../../../internal/events'
import {useUniqueId} from '../../../internal/hooks/use-unique-id'
import InternalIcon from '../../../icon/internal'
import {useNavigate} from './router'
import styles from '../../styles.css.js'
import {isLinkItem} from '../../../button-dropdown/utils/utils'

const ListItem = memo(({children, startIcon, endIcon}) => {
  return (
    <>
      {startIcon && (
        <span className={styles['overflow-menu-list-item-icon']}>
          {startIcon}
        </span>
      )}
      <span className={styles['overflow-menu-list-item-text']}>
        {children}
      </span>
      {endIcon && endIcon}
    </>
  )
})
const LinkItem = memo(
  forwardRef(
    (
      {
        children,
        external,
        to,
        target,
        rel,
        startIcon,
        endIcon,
        onClick,
        context,
        testId
      },
      ref
    ) => {
      const anchorTarget = target ?? (external ? '_blank' : void 0)
      const anchorRel =
        rel ?? (anchorTarget === '_blank' ? 'noopener noreferrer' : void 0)
      const role = !to ? 'button' : void 0
      return (
        <Link
          ref={ref}
          onClick={onClick}
          className={clsx(
            styles['overflow-menu-control'],
            styles['overflow-menu-control-link'],
            context && styles[`overflow-menu-control-${context}`]
          )}
          role={role}
          tabIndex={0}
          to={to}
          target={anchorTarget}
          rel={anchorRel}
          {...(testId ? {'data-testid': testId} : {})}>
          <ListItem startIcon={startIcon} endIcon={endIcon}>
            {children}
          </ListItem>
        </Link>
      )
    }
  )
)
const ButtonItem = memo(
  forwardRef(({children, startIcon, endIcon, onClick, testId}, ref) => {
    return (
      <button
        ref={ref}
        className={styles['overflow-menu-control']}
        onClick={onClick}
        {...(typeof testId === 'string' ? {'data-testid': testId} : {})}>
        <ListItem startIcon={startIcon} endIcon={endIcon}>
          {children}
        </ListItem>
      </button>
    )
  })
)
const NavigationItem = memo(
  forwardRef(({startIcon, children, index, testId, ...definition}, ref) => {
    const navigate = useNavigate()
    return (
      <ButtonItem
        ref={ref}
        startIcon={startIcon}
        endIcon={<InternalIcon name='angle-right' />}
        testId={testId}
        onClick={() =>
          navigate('dropdown-menu', {
            definition,
            headerText: definition.text || definition.title,
            headerSecondaryText: definition.description,
            utilityIndex: index
          })
        }>
        {children}
      </ButtonItem>
    )
  })
)
const ExpandableItem = memo(({children, onItemClick, ...definition}) => {
  const [expanded, setExpanded] = useState(false)
  const headerId = useUniqueId('overflow-menu-item')
  return (
    <>
      <button
        className={clsx(
          styles['overflow-menu-control'],
          styles['overflow-menu-control-expandable-menu-trigger']
        )}
        onClick={() => setExpanded(value => !value)}
        aria-expanded={expanded}>
        <ListItem
          endIcon={
            <span className={clsx(styles.icon, expanded && styles.expanded)}>
              <InternalIcon name='caret-up-filled' />
            </span>
          }>
          <span id={headerId}>{children}</span>
        </ListItem>
      </button>
      {expanded && (
        <ul
          className={clsx(
            styles['overflow-menu-list'],
            styles['overflow-menu-list-submenu']
          )}
          aria-labelledby={headerId}>
          {definition.items.map((item, index) => {
            const isGroup = typeof item.items !== 'undefined'
            return (
              <li
                key={index}
                className={clsx(
                  styles[`overflow-menu-list-item`],
                  styles[`overflow-menu-list-item-dropdown-menu`]
                )}>
                {dropdownComponentFactory(item, isGroup, onItemClick)}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
})
const utilityComponentFactory = (utility, index, ref) => {
  const label = utility.text || utility.title
  const hasIcon =
    !!utility.iconName ||
    !!utility.iconUrl ||
    !!utility.iconAlt ||
    !!utility.iconSvg
  const startIcon = hasIcon && (
    <InternalIcon
      name={utility.iconName}
      url={utility.iconUrl}
      alt={utility.iconAlt}
      svg={utility.iconSvg}
    />
  )
  switch (utility.type) {
    case 'button': {
      const handleClick = event => {
        if (Boolean(utility.to) && isPlainLeftClick(event)) {
          fireCancelableEvent(
            utility.onFollow,
            {to: utility.to, target: utility.target},
            event
          )
        }
        fireCancelableEvent(utility.onClick, {}, event)
        utility.onClose?.()
      }
      const content = (
        <>
          {label}
          {utility.external && (
            <>
              {' '}
              <span
                aria-label={utility.externalIconAriaLabel}
                role={utility.externalIconAriaLabel ? 'img' : void 0}>
                <InternalIcon name='external' size='normal' />
              </span>
            </>
          )}
        </>
      )
      if (!utility.to) {
        return (
          <ButtonItem
            ref={ref}
            startIcon={startIcon}
            onClick={handleClick}
            testId={`__${index}`}>
            {content}
          </ButtonItem>
        )
      }
      return (
        <LinkItem
          ref={ref}
          startIcon={startIcon}
          to={utility.to}
          external={utility.external}
          target={utility.target}
          rel={utility.rel}
          testId={`__${index}`}
          onClick={handleClick}>
          {content}
        </LinkItem>
      )
    }
    case 'menu-dropdown': {
      return (
        <NavigationItem
          ref={ref}
          startIcon={startIcon}
          index={index}
          {...utility}
          testId={`__${index}`}>
          {label}
        </NavigationItem>
      )
    }
  }
}
const dropdownComponentFactory = (item, expandable, onItemClick) => {
  const label = item.text
  const hasIcon =
    !!item.iconName || !!item.iconUrl || !!item.iconAlt || !!item.iconSvg
  const isLink = isLinkItem(item)
  const startIcon = hasIcon && (
    <InternalIcon
      name={item.iconName}
      url={item.iconUrl}
      alt={item.iconAlt}
      svg={item.iconSvg}
    />
  )
  if (expandable) {
    return (
      <ExpandableItem {...item} onItemClick={onItemClick}>
        {label}
      </ExpandableItem>
    )
  }
  return (
    <LinkItem
      startIcon={startIcon}
      to={isLink ? item.to : void 0}
      external={isLink ? item.external : void 0}
      context='dropdown-menu'
      testId={item.id}
      onClick={event => onItemClick(event, item)}>
      {label}
      {isLink && item.external && (
        <>
          {' '}
          <span
            aria-label={item.externalIconAriaLabel}
            role={item.externalIconAriaLabel ? 'img' : void 0}>
            <InternalIcon name='external' size='normal' />
          </span>
        </>
      )}
    </LinkItem>
  )
}
const UtilityMenuItem = memo(
  forwardRef(({index, ...props}, ref) => {
    return (
      <li
        className={clsx(
          styles[`overflow-menu-list-item`],
          styles[`overflow-menu-list-item-utility`]
        )}>
        {utilityComponentFactory(props, index, ref)}
      </li>
    )
  })
)
const SubmenuItem = memo(props => {
  const expandable = typeof props.items !== 'undefined'
  return (
    <li
      className={clsx(
        styles[`overflow-menu-list-item`],
        styles[`overflow-menu-list-item-submenu`],
        expandable && styles[`overflow-menu-list-item-expandable`]
      )}>
      {dropdownComponentFactory(props, expandable, props.onClick)}
    </li>
  )
})

export {
  SubmenuItem,
  UtilityMenuItem
}
