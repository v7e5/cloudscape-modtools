import {useRef, forwardRef, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import {fireCancelableEvent, isPlainLeftClick} from '../internal/events'
import useForwardFocus from '../internal/hooks/forward-focus'
import styles from './styles.css.js'
import {LeftIcon, RightIcon} from './icon-helper'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import LiveRegion from '../internal/components/live-region'
import {useButtonContext} from '../internal/context/button-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {useSingleTabStopNavigation} from '../internal/context/single-tab-stop-navigation-context'

const InternalButton = memo(
  forwardRef(
    (
      {
        children,
        iconName,
        __iconClass,
        onClick,
        onFollow,
        iconAlign = 'left',
        iconUrl,
        iconSvg,
        iconAlt,
        variant = 'normal',
        loading = false,
        loadingText,
        disabled = false,
        wrapText = true,
        to,
        target,
        rel,
        download,
        formAction = 'submit',
        ariaLabel,
        ariaDescribedby,
        ariaExpanded,
        ariaControls,
        fullWidth,
        badge,
        __nativeAttributes,
        __internalRootRef = null,
        __focusable = false,
        ...props
      },
      ref
    ) => {
      const isAnchor = Boolean(to)
      const isNotInteractive = loading || disabled
      const hasAriaDisabled =
        (loading && !disabled) || (disabled && __focusable)
      const shouldHaveContent =
        children &&
        ['icon', 'inline-icon', 'flashbar-icon', 'modal-dismiss'].indexOf(
          variant
        ) === -1
      const buttonRef = useRef(null)
      useForwardFocus(ref, buttonRef)
      const buttonContext = useButtonContext()
      const uniqueId = useUniqueId('button')
      const handleClick = event => {
        if (isNotInteractive) {
          return event.preventDefault()
        }
        if (isAnchor && isPlainLeftClick(event)) {
          fireCancelableEvent(onFollow, {to, target}, event)
        }
        const {altKey, button, ctrlKey, metaKey, shiftKey} = event
        fireCancelableEvent(
          onClick,
          {altKey, button, ctrlKey, metaKey, shiftKey},
          event
        )
        buttonContext.onClick({variant})
      }
      const buttonClass = clsx(
        props.className,
        styles.button,
        styles[`variant-${variant}`],
        {
          [styles.disabled]: isNotInteractive,
          [styles['button-no-wrap']]: !wrapText,
          [styles['button-no-text']]: !shouldHaveContent,
          [styles['full-width']]: shouldHaveContent && fullWidth
        }
      )
      const explicitTabIndex =
        __nativeAttributes && 'tabIndex' in __nativeAttributes
          ? __nativeAttributes.tabIndex
          : void 0
      const {tabIndex} = useSingleTabStopNavigation(buttonRef, {
        tabIndex: isAnchor && isNotInteractive ? -1 : explicitTabIndex
      })
      const buttonProps = {
        ...props,
        ...__nativeAttributes,
        tabIndex,

        ref: useMergeRefs(buttonRef, __internalRootRef),
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedby,
        'aria-expanded': ariaExpanded,
        'aria-controls': ariaControls,

        title: ariaLabel,
        className: buttonClass,
        onClick: handleClick
      }
      const iconProps = {
        loading,
        iconName,
        iconAlign,
        iconUrl,
        iconSvg,
        iconAlt,
        variant,
        badge,
        iconClass: __iconClass,
        iconSize: variant === 'modal-dismiss' ? 'medium' : 'normal'
      }
      const buttonContent = (
        <>
          <LeftIcon {...iconProps} />
          {shouldHaveContent && (
            <span className={styles.content}>{children}</span>
          )}
          <RightIcon {...iconProps} />
        </>
      )
      if (isAnchor) {
        return (
          <>
            <Link
              {...buttonProps}
              to={to}
              target={target}
              rel={
                rel ?? (target === '_blank' ? 'noopener noreferrer' : void 0)
              }
              aria-disabled={isNotInteractive ? true : void 0}
              download={download}>
              {buttonContent}
            </Link>
            {loading && loadingText && <LiveRegion>{loadingText}</LiveRegion>}
          </>
        )
      }
      return (
        <>
          <button
            {...buttonProps}
            type={formAction === 'none' ? 'button' : 'submit'}
            disabled={disabled && !__focusable}
            aria-disabled={hasAriaDisabled ? true : void 0}>
            {buttonContent}
          </button>
          {loading && loadingText && <LiveRegion>{loadingText}</LiveRegion>}
        </>
      )
    }
  )
)

export {
  InternalButton,
  InternalButton as default
}
