import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalTopNavigation from './internal'

const TopNavigation = memo(({utilities = [], ...restProps}) => {
  const baseComponentProps = useBaseComponent('TopNavigation')
  return (
    <InternalTopNavigation
      {...baseComponentProps}
      utilities={utilities}
      {...restProps}
    />
  )
})

export {
  TopNavigation as default
}
