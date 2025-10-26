import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalTiles from './internal'

const Tiles = memo(
  forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('Tiles', {
      props: {columns: props.columns}
    })
    return <InternalTiles ref={ref} {...props} {...baseComponentProps} />
  })
)

export {
  Tiles as default
}
