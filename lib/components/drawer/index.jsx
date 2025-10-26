import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import {InternalDrawer} from './internal'

const Drawer = memo(props => {
  const internalProps = useBaseComponent('Drawer')
  return <InternalDrawer {...internalProps} {...props} />
})

export {
  Drawer as default
}
