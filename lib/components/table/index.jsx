import {forwardRef, memo} from 'react'
import InternalTable, {InternalTableAsSubstep} from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Table = memo(
  forwardRef(
    (
      {
        items = [],
        selectedItems = [],
        variant = 'container',
        contentDensity = 'comfortable',
        firstIndex = 1,
        ...props
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Table', {
        props: {
          contentDensity,
          resizableColumns: props.resizableColumns,
          selectionType: props.selectionType,
          stickyHeader: props.stickyHeader,
          stripedRows: props.stripedRows,
          variant,
          wrapLines: props.wrapLines,
          enableKeyboardNavigation: props.enableKeyboardNavigation
        },
        metadata: {
          expandableRows: !!props.expandableRows
        }
      })
      const tableProps = {
        items,
        selectedItems,
        variant,
        contentDensity,
        firstIndex,
        ...props,
        ...baseComponentProps,
        ref
      }
      if (variant === 'borderless' || variant === 'embedded') {
        return <InternalTable {...tableProps} />
      }
      return <InternalTableAsSubstep {...tableProps} />
    }
  )
)

export {
  Table as default
}
