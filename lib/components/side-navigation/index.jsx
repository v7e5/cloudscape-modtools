import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import {InternalSideNavigation} from './internal'

const SideNavigation = memo(({items = [], ...props}) => {
  const internalProps = useBaseComponent('SideNavigation')
  return <InternalSideNavigation {...props} {...internalProps} items={items} />
})

export {
  SideNavigation as default
}
