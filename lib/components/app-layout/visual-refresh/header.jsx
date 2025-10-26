import {memo} from 'react'
import clsx from 'clsx'
import {highContrastHeaderClassName} from '../../internal/utils/content-header-utils'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'

const Header = memo(() => {
  const {
    breadcrumbs,
    contentHeader,
    hasDrawerViewportOverlay,
    hasNotificationsContent,
    headerVariant
  } = useAppLayoutInternals()
  if (!contentHeader) {
    return null
  }
  return (
    <header
      className={clsx(styles.content, {
        [styles['has-breadcrumbs']]: breadcrumbs,
        [styles['has-notifications-content']]: hasNotificationsContent,
        [styles.unfocusable]: hasDrawerViewportOverlay,
        [highContrastHeaderClassName]: headerVariant === 'high-contrast'
      })}>
      {contentHeader}
    </header>
  )
})

export {
  Header as default
}
