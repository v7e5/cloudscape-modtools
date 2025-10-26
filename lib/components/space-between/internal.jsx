import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'
import flattenChildren from 'react-keyed-flatten-children'

const InternalSpaceBetween = memo(
  ({
    direction = 'vertical',
    size,
    children,
    alignItems,
    __internalRootRef,
    ...props
  }) => {
    const baseProps = getBaseProps(props)
    const flattenedChildren = flattenChildren(children)
    return (
      <div
        {...baseProps}
        className={clsx(
          baseProps.className,
          styles.root,
          styles[direction],
          styles[`${direction}-${size}`],
          alignItems && styles[`align-${alignItems}`]
        )}
        ref={__internalRootRef}>
        {flattenedChildren.map(child => {
          const key = typeof child === 'object' ? child.key : void 0
          return (
            <div key={key} className={styles.child}>
              {child}
            </div>
          )
        })}
      </div>
    )
  }
)

export {
  InternalSpaceBetween as default
}
