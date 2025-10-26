import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalSegmentedControl from './internal'

const SegmentedControl = memo(props => {
  const baseComponentProps = useBaseComponent('SegmentedControl')
  return <InternalSegmentedControl {...props} {...baseComponentProps} />
})

export {
  SegmentedControl as default
}
