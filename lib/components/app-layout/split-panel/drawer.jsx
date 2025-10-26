import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {useSplitPanelContext} from '../../internal/context/split-panel-context'

const SideSplitPanelDrawer = memo(({displayed, children}) => {
  const {isOpen, size, topOffset, bottomOffset} = useSplitPanelContext()
  const width = isOpen && children ? size : void 0
  return (
    <div
      className={clsx(displayed && styles['drawer-displayed'])}
      style={{width}}
      data-testid='side-split-panel-drawer'>
      <div
        className={styles['drawer-content']}
        style={{width, top: topOffset, bottom: bottomOffset}}>
        {children}
      </div>
    </div>
  )
})

export {
  SideSplitPanelDrawer
}
