import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'

const ScreenreaderOnly = memo(props => {
  return <span {...props} className={clsx(styles.root, props.className)} />
})

export {
  ScreenreaderOnly as default
}
