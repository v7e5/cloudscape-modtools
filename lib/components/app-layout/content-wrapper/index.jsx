import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'

const ContentWrapper = memo(
  forwardRef(
    (
      {
        className,
        style,
        contentType,
        children,
        toolsPadding,
        disablePaddings,
        navigationPadding,
        isMobile,
        contentWidthStyles
      },
      ref
    ) => {
      if (disablePaddings) {
        return (
          <div className={className} ref={ref} style={style}>
            {children}
          </div>
        )
      }
      return (
        <div
          ref={ref}
          className={clsx(
            styles['content-wrapper'],
            !navigationPadding &&
              styles['content-wrapper-no-navigation-padding'],
            !toolsPadding && styles['content-wrapper-no-tools-padding'],
            isMobile && styles['content-wrapper-mobile']
          )}
          style={style}>
          <div
            style={contentWidthStyles}
            className={clsx(className, styles[`content-type-${contentType}`])}>
            {children}
          </div>
        </div>
      )
    }
  )
)

export {
  ContentWrapper as default
}
