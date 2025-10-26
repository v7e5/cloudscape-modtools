import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalTokenGroup from './internal'

const TokenGroup = memo(({items = [], alignment = 'horizontal', ...props}) => {
  const baseComponentProps = useBaseComponent('TokenGroup', {
    props: {
      alignment,
      disableOuterPadding: props.disableOuterPadding,
      limit: props.limit
    }
  })
  return (
    <InternalTokenGroup
      items={items}
      alignment={alignment}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  TokenGroup as default
}
