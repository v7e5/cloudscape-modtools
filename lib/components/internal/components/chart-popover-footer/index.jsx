import {memo} from 'react'
import styles from './styles.css.js'

const ChartPopoverFooter = memo(({children}) => {
  return <div className={styles.root}>{children}</div>
})

export {
  ChartPopoverFooter as default
}
