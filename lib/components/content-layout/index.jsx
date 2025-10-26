import {memo} from 'react'
import InternalContentLayout from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const ContentLayout = memo(props => {
  const baseComponentProps = useBaseComponent('ContentLayout', {
    props: {disableOverlap: props.disableOverlap}
  })
  return <InternalContentLayout {...props} {...baseComponentProps} />
})

export {
  ContentLayout as default
}
