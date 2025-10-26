import {memo} from 'react'
import {getBaseProps} from '../internal/base-component'
import clsx from 'clsx'
import styles from './styles.css.js'
import useBaseComponent from '../internal/hooks/use-base-component'

const Badge = memo(({color = 'grey', children, ...rest}) => {
  const {__internalRootRef} = useBaseComponent('Badge', {props: {color}})
  const baseProps = getBaseProps(rest)
  const className = clsx(
    baseProps.className,
    styles.badge,
    styles[`badge-color-${color}`]
  )
  return (
    <span {...baseProps} {...{className}} ref={__internalRootRef}>
      {children}
    </span>
  )
})

export {
  Badge as default
}
