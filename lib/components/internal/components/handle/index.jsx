import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'

const Handle = memo(props => {
  return (
    <div
      role='button'
      tabIndex={0}
      {...props}
      onPointerDown={props.onPointerDown}
      className={clsx(styles.handle, props.className)}
    />
  )
})

export {
  Handle as default
}
