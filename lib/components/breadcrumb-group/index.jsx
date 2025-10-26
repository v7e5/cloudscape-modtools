import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import {InternalBreadcrumbGroup} from './internal'

const BreadcrumbGroup = memo(({items = [], ...props}) => {
  const baseComponentProps = useBaseComponent('BreadcrumbGroup')
  return (
    <InternalBreadcrumbGroup
      items={items}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  BreadcrumbGroup as default
}
