import {memo} from 'react'
import styles from './styles.css.js'
import customCssProps from '../../internal/generated/custom-css-properties'
import clsx from 'clsx'

const contentTypeCustomWidths = ['dashboard', 'cards', 'table']
const SkeletonLayout = memo(
  ({
    notifications,
    contentHeader,
    content,
    navigation,
    navigationWidth,
    tools,
    toolsWidth,
    topBar,
    placement,
    contentType,
    maxContentWidth,
    disableContentPaddings
  }) => {
    const isMaxWidth =
      maxContentWidth === Number.MAX_VALUE ||
      maxContentWidth === Number.MAX_SAFE_INTEGER
    return (
      <div
        className={clsx(styles.root, {
          [styles['has-adaptive-widths-default']]:
            !contentTypeCustomWidths.includes(contentType),
          [styles['has-adaptive-widths-dashboard']]:
            contentType === 'dashboard'
        })}
        style={{
          minBlockSize: `calc(100vh - ${placement.insetBlockStart}px - ${placement.insetBlockEnd}px)`,
          [customCssProps.maxContentWidth]: isMaxWidth
            ? '100%'
            : maxContentWidth
              ? `${maxContentWidth}px`
              : '',
          [customCssProps.navigationWidth]: `${navigationWidth}px`,
          [customCssProps.toolsWidth]: `${toolsWidth}px`
        }}>
        <section className={styles['top-bar']}>{topBar}</section>
        {navigation && <div className={styles.navigation}>{navigation}</div>}
        <main className={styles['main-landmark']}>
          {notifications && (
            <div className={styles.notifications}>{notifications}</div>
          )}
          <div
            className={clsx(styles.main, {
              [styles['main-disable-paddings']]: disableContentPaddings
            })}>
            {contentHeader && (
              <div className={styles['content-header']}>{contentHeader}</div>
            )}
            <div>{content}</div>
          </div>
        </main>
        {tools && <div className={styles.tools}>{tools}</div>}
      </div>
    )
  }
)

export {
  SkeletonLayout
}
