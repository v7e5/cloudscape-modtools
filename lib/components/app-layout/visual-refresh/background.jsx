import {memo} from 'react'
import clsx from 'clsx'
import {highContrastHeaderClassName} from '../../internal/utils/content-header-utils'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'

const Background = memo(() => {
  const {
    breadcrumbs,
    hasBackgroundOverlap,
    hasNotificationsContent,
    isMobile,
    headerVariant
  } = useAppLayoutInternals()
  if (
    !hasNotificationsContent &&
    (!breadcrumbs || isMobile) &&
    !hasBackgroundOverlap
  ) {
    return null
  }
  return (
    <div
      className={clsx(styles.background, {
        [highContrastHeaderClassName]: headerVariant === 'high-contrast'
      })}>
      <div className={styles['scrolling-background']} />
    </div>
  )
})

export {
  Background as default
}
