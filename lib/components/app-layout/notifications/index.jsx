import {forwardRef, memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'

const Notifications = memo(
  forwardRef(({sticky, disableContentPaddings, ...props}, ref) => {
    return sticky ? (
      <div
        ref={ref}
        className={styles['notifications-sticky']}
        style={{top: props.topOffset}}>
        <div
          role='region'
          className={clsx(
            props.testUtilsClassName,
            disableContentPaddings && styles['no-content-paddings']
          )}
          aria-label={props.labels?.notifications}>
          {props.children}
        </div>
      </div>
    ) : (
      <div
        role='region'
        ref={ref}
        className={clsx(
          props.testUtilsClassName,
          styles.notifications,
          disableContentPaddings && styles['no-content-paddings']
        )}
        aria-label={props.labels?.notifications}>
        {props.children}
      </div>
    )
  })
)

export {
  Notifications
}
