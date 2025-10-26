import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import DropdownStatus from '../dropdown-status/'
import LiveRegion from '../live-region/'

const DropdownFooter = memo(({content, id, hasItems = true}) => (
  <div
    className={clsx(styles.root, {
      [styles.hidden]: content === null,
      [styles['no-items']]: !hasItems
    })}>
    <LiveRegion visible={true} tagName='div' id={id}>
      {content && <DropdownStatus>{content}</DropdownStatus>}
    </LiveRegion>
  </div>
))

export {
  DropdownFooter as default
}
