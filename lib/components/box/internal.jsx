import {memo} from 'react'
import {getBaseProps} from '../internal/base-component'
import clsx from 'clsx'
import styles from './styles.css.js'

const InternalBox = memo(
  ({
    variant = 'div',
    tagOverride,
    margin = {},
    padding = {},
    display,
    textAlign,
    float,
    fontSize,
    fontWeight,
    color,
    children,
    __internalRootRef = null,
    ...props
  }) => {
    const baseProps = getBaseProps(props)
    const marginsClassNamesSuffices = getClassNamesSuffixes(margin)
    const paddingsClassNamesSuffices = getClassNamesSuffixes(padding)
    const Tag = getTag(variant, tagOverride)
    const className = clsx(
      baseProps.className,
      styles.root,
      styles.box,
      styles[`${variant.replace(/^awsui-/, '')}-variant`],
      marginsClassNamesSuffices.map(suffix => styles[`m-${suffix}`]),
      paddingsClassNamesSuffices.map(suffix => styles[`p-${suffix}`]),
      styles[`d-${display}`],
      styles[`f-${float}`],
      styles[`color-${color || 'default'}`],
      styles[`font-size-${fontSize || 'default'}`],
      styles[`font-weight-${fontWeight || 'default'}`],
      styles[`t-${textAlign}`]
    )
    return (
      <Tag {...baseProps} className={className} ref={__internalRootRef}>
        {children}
      </Tag>
    )
  }
)

const getClassNamesSuffixes = value => {
  if (typeof value === 'string') {
    return [value]
  }
  const sides = ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical']
  return sides
    .filter(side => !!value[side])
    .map(side => `${side}-${value[side]}`)
}
const getTag = (variant, tagOverride) => {
  if (tagOverride) {
    return tagOverride
  }
  if (variant === 'awsui-value-large') {
    return 'span'
  }
  if (variant === 'awsui-key-label' || variant === 'awsui-gen-ai-label') {
    return 'div'
  }
  return variant
}

export {
  InternalBox as default
}
