import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import FlexibleColumnLayout from './flexible-column-layout'
import GridColumnLayout from './grid-column-layout'
import styles from './styles.css.js'

const COLUMN_TRIGGERS = ['default', 'xxs', 'xs']
const ColumnLayout = memo(
  ({
    columns = 1,
    variant = 'default',
    borders = 'none',
    disableGutters = false,
    minColumnWidth,
    children,
    __breakpoint,
    __internalRootRef,
    ...restProps
  }) => {
    const baseProps = getBaseProps(restProps)
    return (
      <div
        {...baseProps}
        className={clsx(baseProps.className, styles['column-layout'])}
        ref={__internalRootRef}>
        {minColumnWidth ? (
          <FlexibleColumnLayout
            columns={columns}
            borders={borders}
            variant={variant}
            minColumnWidth={minColumnWidth}
            disableGutters={disableGutters}>
            {children}
          </FlexibleColumnLayout>
        ) : (
          <GridColumnLayout
            columns={columns}
            variant={variant}
            borders={borders}
            disableGutters={disableGutters}
            __breakpoint={__breakpoint}>
            {children}
          </GridColumnLayout>
        )}
      </div>
    )
  }
)

export {
  COLUMN_TRIGGERS,
  ColumnLayout as default
}
