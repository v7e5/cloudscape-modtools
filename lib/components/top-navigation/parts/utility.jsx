import {memo} from 'react'
import clsx from 'clsx'
import {InternalButton} from '../../button/internal'
import InternalLink from '../../link/internal'
import InternalIcon from '../../icon/internal'
import MenuDropdown from '../../internal/components/menu-dropdown'
import styles from '../styles.css.js'
import {joinStrings} from '../../internal/utils/strings'
import {fireCancelableEvent} from '../../internal/events'

const Utility = memo(({hideText, definition, offsetRight}) => {
  const hasIcon =
    !!definition.iconName ||
    !!definition.iconUrl ||
    !!definition.iconAlt ||
    !!definition.iconSvg
  const shouldHideText = hideText && !definition.disableTextCollapse && hasIcon
  let ariaLabel = definition.ariaLabel ?? definition.text
  if (definition.type === 'button') {
    ariaLabel = definition.ariaLabel
      ? definition.ariaLabel
      : joinStrings(definition.text, definition.externalIconAriaLabel)
    if (definition.variant === 'primary-button') {
      return (
        <span className={styles[`offset-right-${offsetRight}`]}>
          <InternalButton
            variant='primary'
            to={definition.to}
            target={definition.external ? '_blank' : void 0}
            onClick={definition.onClick}
            onFollow={definition.onFollow}
            ariaLabel={ariaLabel}
            iconName={definition.iconName}
            iconUrl={definition.iconUrl}
            iconAlt={definition.iconAlt}
            iconSvg={definition.iconSvg}>
            {shouldHideText ? null : (
              <>
                {definition.text}
                {definition.external && (
                  <>
                    {' '}
                    <span
                      className={clsx(
                        styles['utility-button-external-icon'],
                        styles[`offset-right-${offsetRight}`]
                      )}
                      aria-label={definition.externalIconAriaLabel}
                      role={definition.externalIconAriaLabel ? 'img' : void 0}>
                      <InternalIcon name='external' />
                    </span>
                  </>
                )}
              </>
            )}
          </InternalButton>
        </span>
      )
    } else {
      return (
        <span className={styles[`offset-right-${offsetRight}`]}>
          <InternalLink
            variant='top-navigation'
            to={definition.to}
            target={definition.target}
            rel={definition.rel}
            external={definition.external}
            onFollow={evt => {
              fireCancelableEvent(
                definition.onFollow,
                {
                  to: definition.to,
                  target: definition.target,
                  external: definition.external
                },
                evt
              )
              fireCancelableEvent(
                definition.onClick,
                {
                  to: definition.to,
                  target: definition.target,
                  external: definition.external
                },
                evt
              )
            }}
            ariaLabel={ariaLabel}>
            {hasIcon && (
              <InternalIcon
                name={definition.iconName}
                url={definition.iconUrl}
                alt={definition.iconAlt}
                svg={definition.iconSvg}
                badge={definition.badge}
              />
            )}
            {!shouldHideText && definition.text && (
              <span className={hasIcon ? styles['utility-link-icon'] : void 0}>
                {definition.text}
              </span>
            )}
          </InternalLink>
        </span>
      )
    }
  } else if (definition.type === 'menu-dropdown') {
    const title = definition.title || definition.text
    const shouldShowTitle = shouldHideText || !definition.text
    return (
      <MenuDropdown
        {...definition}
        title={shouldShowTitle ? title : ''}
        ariaLabel={ariaLabel}
        offsetRight={offsetRight}>
        {!shouldHideText && definition.text}
      </MenuDropdown>
    )
  }
  return null
})

export {
  Utility as default
}
