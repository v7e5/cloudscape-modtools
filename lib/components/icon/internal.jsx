import {useEffect, useRef, useState, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'
import icons from './icons'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'

const iconSizeMap = height => {
  if (height === null) {
    return 'normal'
  }
  if (height >= 50) {
    return 'large'
  } else if (height >= 36) {
    return 'big'
  } else if (height >= 24) {
    return 'medium'
  } else if (height <= 16) {
    return 'small'
  } else {
    return 'normal'
  }
}
const InternalIcon = memo(
  ({
    name,
    size = 'normal',
    variant = 'normal',
    url,
    alt,
    svg,
    badge,
    __internalRootRef = null,
    ...props
  }) => {
    const iconRef = useRef(null)
    useVisualRefresh()
    const [parentHeight, setParentHeight] = useState(null)
    const contextualSize = size === 'inherit'
    const iconSize = contextualSize ? iconSizeMap(parentHeight) : size
    const inlineStyles =
      contextualSize && parentHeight !== null
        ? {height: `${parentHeight}px`}
        : {}
    const baseProps = getBaseProps(props)
    baseProps.className = clsx(
      baseProps.className,
      styles.icon,
      contextualSize && styles['icon-flex-height'],
      badge && styles.badge,
      !contextualSize && styles[`size-${iconSize}-mapped-height`],
      styles[`size-${iconSize}`],
      styles[`variant-${variant}`],
      styles[`name-${name}`]
    )
    useEffect(() => {
      if (!contextualSize || !iconRef.current) {
        return
      }
      const {lineHeight} = getComputedStyle(iconRef.current)
      const newParentHeight = parseInt(lineHeight, 10)
      setParentHeight(newParentHeight)
    })
    const mergedRef = useMergeRefs(iconRef, __internalRootRef)
    if (svg) {
      return (
        <span
          {...baseProps}
          ref={mergedRef}
          aria-hidden='true'
          style={inlineStyles}>
          {svg}
        </span>
      )
    }
    if (url) {
      return (
        <span {...baseProps} ref={mergedRef} style={inlineStyles}>
          <img src={url} alt={alt} />
        </span>
      )
    }
    const validIcon = name && Object.prototype.hasOwnProperty.call(icons, name)
    const iconMap = name2 => {
      const genAiFilledIcon = `<svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        data-testid="gen-ai-filled"
      >
        <path d="m8 4.4 1.018 2.582L11.6 8 9.018 9.018 8 11.6 6.982 9.018 4.4 8l2.582-1.018L8 4.4ZM2.405 2.41l.002-.003.003-.002-.003-.002-.002-.003-.002.003-.003.002.003.002.002.003Z" class="filled"></path>
      </svg>`
      if (name2 === 'gen-ai' && iconSize === 'small') {
        return genAiFilledIcon
      } else {
        return icons[name2]
      }
    }
    return (
      <span
        {...baseProps}
        dangerouslySetInnerHTML={validIcon ? {__html: iconMap(name)} : void 0}
        ref={mergedRef}
        style={inlineStyles}
      />
    )
  }
)

export {
  InternalIcon as default
}
