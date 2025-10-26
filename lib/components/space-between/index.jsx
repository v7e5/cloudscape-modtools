import {memo} from 'react'
import InternalSpaceBetween from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const SpaceBetween = memo(({direction = 'vertical', ...props}) => {
  const baseComponentProps = useBaseComponent('SpaceBetween', {
    props: {alignItems: props.alignItems, direction, size: props.size}
  })
  return (
    <InternalSpaceBetween
      direction={direction}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  SpaceBetween as default
}
