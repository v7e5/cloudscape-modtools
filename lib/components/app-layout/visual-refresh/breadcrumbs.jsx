import {memo} from 'react'
import clsx from 'clsx'
import {highContrastHeaderClassName} from '../../internal/utils/content-header-utils'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'

const Breadcrumbs = memo(() => {
  const {breadcrumbs, isMobile, headerVariant} = useAppLayoutInternals()
  if (isMobile || !breadcrumbs) {
    return null
  }
  return (
    <div
      className={clsx(styles.breadcrumbs, testutilStyles.breadcrumbs, {
        [highContrastHeaderClassName]: headerVariant === 'high-contrast'
      })}>
      {breadcrumbs}
    </div>
  )
})

export {
  Breadcrumbs as default
}
