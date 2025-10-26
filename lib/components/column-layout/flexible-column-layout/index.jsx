import {memo} from 'react'
import clsx from 'clsx'
import flattenChildren from 'react-keyed-flatten-children'
import styles from './styles.css.js'
import {useContainerQuery} from '~/components/internal/toolkit'

const isOdd = value => value % 2 !== 0
const calculcateCssColumnCount = (columns, minColumnWidth, containerWidth) => {
  if (!containerWidth) {
    return columns
  }
  const targetColumnCount = Math.min(
    columns,
    Math.floor(containerWidth / minColumnWidth)
  )
  return Math.max(
    1,
    targetColumnCount < columns && isOdd(targetColumnCount)
      ? targetColumnCount - 1
      : targetColumnCount
  )
}
const FlexibleColumnLayout = memo(
  ({columns = 1, minColumnWidth = 0, disableGutters, variant, children}) => {
    const [containerWidth, containerRef] = useContainerQuery(
      rect => rect.contentBoxWidth
    )
    const columnCount = calculcateCssColumnCount(
      columns,
      minColumnWidth,
      containerWidth
    )
    const shouldDisableGutters = variant !== 'text-grid' && disableGutters
    const flattenedChildren = flattenChildren(children)
    return (
      <div
        ref={containerRef}
        className={clsx(
          styles['css-grid'],
          styles[`grid-variant-${variant}`],
          shouldDisableGutters && [styles['grid-no-gutters']]
        )}
        style={{gridTemplateColumns: `repeat(${columnCount}, 1fr)`}}>
        {flattenedChildren.map((child, i) => {
          const key = child.key
          return (
            <div
              key={key ? String(key) : void 0}
              className={clsx(styles.item, {
                [styles['first-column']]: i % columnCount === 0
              })}>
              {child}
            </div>
          )
        })}
      </div>
    )
  }
)

export {
  calculcateCssColumnCount,
  FlexibleColumnLayout as default
}
