import {memo} from 'react'
import InternalSpinner from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Spinner = memo(({size = 'normal', variant = 'normal', ...props}) => {
  const baseComponentProps = useBaseComponent('Spinner', {
    props: {size, variant}
  })
  return (
    <InternalSpinner
      size={size}
      variant={variant}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  Spinner as default
}
