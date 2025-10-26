import {memo} from 'react'
import clsx from 'clsx'
import {highContrastHeaderClassName} from '../../internal/utils/content-header-utils'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'

const Notifications = memo(() => {
  const {
    ariaLabels,
    hasDrawerViewportOverlay,
    notifications,
    notificationsElement,
    stickyNotifications,
    headerVariant,
    hasNotificationsContent
  } = useAppLayoutInternals()
  if (!notifications) {
    return null
  }
  return (
    <div
      role='region'
      aria-label={ariaLabels?.notifications ?? void 0}
      className={clsx(
        styles.notifications,
        {
          [styles['sticky-notifications']]: stickyNotifications,
          [styles['has-notification-content']]: hasNotificationsContent,
          [styles.unfocusable]: hasDrawerViewportOverlay,
          [highContrastHeaderClassName]: headerVariant === 'high-contrast',
          [styles['high-contrast']]: headerVariant === 'high-contrast'
        },
        testutilStyles.notifications
      )}>
      <div ref={notificationsElement}>{notifications}</div>
    </div>
  )
})

export {
  Notifications as default
}
