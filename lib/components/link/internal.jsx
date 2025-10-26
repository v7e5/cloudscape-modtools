import {useContext, useRef, forwardRef, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import InternalIcon from '../icon/internal'
import styles from './styles.css.js'
import {getBaseProps} from '../internal/base-component'
import {
  fireCancelableEvent,
  fireNonCancelableEvent,
  isPlainLeftClick
} from '../internal/events'
import useForwardFocus from '../internal/hooks/forward-focus'
import {KeyCode} from '../internal/keycode'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {useInternalI18n} from '../i18n/context'
import {InfoLinkLabelContext} from '../internal/context/info-link-label-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {LinkDefaultVariantContext} from '../internal/context/link-default-variant-context'
import {useSingleTabStopNavigation} from '../internal/context/single-tab-stop-navigation-context'

const InternalLink = memo(
  forwardRef(
    (
      {
        variant: providedVariant,
        fontSize = 'body-m',
        color = 'normal',
        external = false,
        target,
        to,
        rel,
        ariaLabel,
        externalIconAriaLabel,
        onFollow,
        onClick,
        children,
        __internalRootRef = null,
        ...props
      },
      ref
    ) => {
      const isButton = !to
      const {defaultVariant} = useContext(LinkDefaultVariantContext)
      const variant = providedVariant || defaultVariant
      const specialStyles = ['top-navigation', 'link', 'recovery']
      const hasSpecialStyle = specialStyles.indexOf(variant) > -1
      const i18n = useInternalI18n('link')
      const baseProps = getBaseProps(props)
      const anchorTarget = target ?? (external ? '_blank' : void 0)
      const anchorRel =
        rel ?? (anchorTarget === '_blank' ? 'noopener noreferrer' : void 0)
      const uniqueId = useUniqueId('link')
      const linkId = useUniqueId('link-self')
      const infoId = useUniqueId('link-info')
      const infoLinkLabelFromContext = useContext(InfoLinkLabelContext)
      const fireFollowEvent = event => {
        fireCancelableEvent(
          onFollow,
          {to, external, target: anchorTarget},
          event
        )
      }
      const fireClickEvent = event => {
        const {altKey, ctrlKey, metaKey, shiftKey} = event
        const button = 'button' in event ? event.button : 0
        fireNonCancelableEvent(onClick, {
          altKey,
          button,
          ctrlKey,
          metaKey,
          shiftKey
        })
      }
      const handleLinkClick = event => {
        if (isPlainLeftClick(event)) {
          fireFollowEvent(event)
        }
        fireClickEvent(event)
      }
      const handleButtonClick = event => {
        fireFollowEvent(event)
        fireClickEvent(event)
      }
      const handleButtonKeyDown = event => {
        if (
          event.keyCode === KeyCode.space ||
          event.keyCode === KeyCode.enter
        ) {
          event.preventDefault()
          fireFollowEvent(event)
          fireClickEvent(event)
        }
      }
      const linkRef = useRef(null)
      const isVisualRefresh = useVisualRefresh()
      useForwardFocus(ref, linkRef)
      const applyButtonStyles = isButton && isVisualRefresh && !hasSpecialStyle
      const sharedProps = {
        id: linkId,
        ...baseProps,

        ref: useMergeRefs(linkRef, __internalRootRef),
        className: clsx(
          styles.link,
          baseProps.className,
          applyButtonStyles ? styles.button : null,
          styles[getVariantStyle(variant)],
          styles[getFontSizeStyle(variant, fontSize)],
          styles[getColorStyle(variant, color)]
        ),
        'aria-label': ariaLabel,
        'aria-labelledby': ''
      }
      if (variant === 'info' && infoLinkLabelFromContext && !ariaLabel) {
        sharedProps['aria-labelledby'] =
          `${sharedProps.id} ${infoId} ${infoLinkLabelFromContext}`
      }
      const renderedExternalIconAriaLabel = i18n(
        'externalIconAriaLabel',
        externalIconAriaLabel
      )
      const content = (
        <>
          {children}
          {external && (
            <span className={styles['icon-wrapper']}>
              &nbsp;
              <span
                className={styles.icon}
                aria-label={renderedExternalIconAriaLabel}
                role={renderedExternalIconAriaLabel ? 'img' : void 0}>
                <InternalIcon name='external' size='inherit' />
              </span>
            </span>
          )}
          {variant === 'info' && (
            <span hidden={true} id={infoId}>
              :
            </span>
          )}
        </>
      )
      const {tabIndex} = useSingleTabStopNavigation(linkRef, {
        tabIndex: isButton ? 0 : void 0
      })
      if (isButton) {
        return (
          <Link
            {...sharedProps}
            role='button'
            tabIndex={tabIndex}
            onKeyDown={handleButtonKeyDown}
            onClick={handleButtonClick}>
            {content}
          </Link>
        )
      }
      return (
        <Link
          {...sharedProps}
          tabIndex={tabIndex}
          target={anchorTarget}
          rel={anchorRel}
          to={to}
          onClick={handleLinkClick}>
          {content}
        </Link>
      )
    }
  )
)
const getVariantStyle = variant => {
  return `variant-${variant.replace(/^awsui-/, '')}`
}
const getFontSizeStyle = (variant, fontSize) => {
  switch (variant) {
    case 'info':
      return 'font-size-body-s'
    case 'awsui-value-large':
      return 'font-size-display-l'
    default:
      return `font-size-${fontSize}`
  }
}
const getColorStyle = (variant, color) => {
  return `color-${variant === 'info' ? 'normal' : color}`
}

export {
  InternalLink as default
}
