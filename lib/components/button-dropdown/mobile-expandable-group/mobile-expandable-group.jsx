import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'

const MobileExpandableGroup = memo(({children, trigger, open}) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={styles.trigger}>{trigger}</div>
      <div
        className={clsx(styles.dropdown, {[styles.open]: open})}
        data-open={open}>
        {children}
      </div>
    </div>
  )
})

export {
  MobileExpandableGroup as default
}
