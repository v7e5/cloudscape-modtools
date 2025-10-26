import {memo} from 'react'
import InternalColumnLayout from './internal'
import {getExternalProps} from '../internal/utils/external-props'
import useBaseComponent from '../internal/hooks/use-base-component'

const ColumnLayout = memo(
  ({
    columns = 1,
    variant = 'default',
    borders = 'none',
    disableGutters = false,
    ...props
  }) => {
    const baseComponentProps = useBaseComponent('ColumnLayout', {
      props: {
        borders,
        columns,
        disableGutters,
        minColumnWidth: props.minColumnWidth,
        variant
      }
    })
    const externalProps = getExternalProps(props)
    return (
      <InternalColumnLayout
        columns={columns}
        variant={variant}
        borders={borders}
        disableGutters={disableGutters}
        {...externalProps}
        {...baseComponentProps}
      />
    )
  }
)

export {
  ColumnLayout as default
}
