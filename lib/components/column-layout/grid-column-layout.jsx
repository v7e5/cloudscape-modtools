import {memo} from 'react'
import clsx from 'clsx'
import flattenChildren from 'react-keyed-flatten-children'
import InternalGrid from '../grid/internal'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import {repeat} from './util'
import {COLUMN_TRIGGERS} from './internal'
import styles from './styles.css.js'

const COLUMN_DEFS = {
  1: {colspan: {default: 12, xxs: 12, xs: 12}},
  2: {colspan: {default: 12, xxs: 6, xs: 6}},
  3: {colspan: {default: 12, xxs: 6, xs: 4}},
  4: {colspan: {default: 12, xxs: 6, xs: 3}}
}
const GridColumnLayout = memo(
  ({columns, variant, borders, disableGutters, __breakpoint, children}) => {
    const isTextGridVariant = variant === 'text-grid'
    const shouldDisableGutters = !isTextGridVariant && disableGutters
    const shouldHaveHorizontalBorders =
      !isTextGridVariant && (borders === 'horizontal' || borders === 'all')
    const shouldHaveVerticalBorders =
      !isTextGridVariant && (borders === 'vertical' || borders === 'all')
    const flattenedChildren = flattenChildren(children)
    const [breakpoint, ref] = useContainerBreakpoints(COLUMN_TRIGGERS)
    return (
      <InternalGrid
        ref={ref}
        disableGutters={true}
        gridDefinition={repeat(
          COLUMN_DEFS[columns] ?? {},
          flattenedChildren.length
        )}
        className={clsx(
          styles.grid,
          styles[`grid-columns-${columns}`],
          styles[`grid-variant-${variant}`],
          {
            [styles['grid-horizontal-borders']]: shouldHaveHorizontalBorders,
            [styles['grid-vertical-borders']]: shouldHaveVerticalBorders,
            [styles['grid-no-gutters']]: shouldDisableGutters
          }
        )}
        __breakpoint={__breakpoint || breakpoint}
        __responsiveClassName={breakpoint2 =>
          breakpoint2 && styles[`grid-breakpoint-${breakpoint2}`]
        }>
        {children}
      </InternalGrid>
    )
  }
)

export {
  GridColumnLayout as default
}
