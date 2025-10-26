import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'
import useBaseComponent from '../internal/hooks/use-base-component'

const TextContent = memo(({children, ...props}) => {
  const {__internalRootRef} = useBaseComponent('TextContent')
  const baseProps = getBaseProps(props)
  const className = clsx(baseProps.className, styles['text-content'])
  return (
    <div {...baseProps} className={className} ref={__internalRootRef}>
      {children}
    </div>
  )
})

export {
  TextContent as default
}
