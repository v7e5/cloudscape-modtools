import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalPagination from './internal'

const Pagination = memo(props => {
  const baseComponentProps = useBaseComponent('Pagination', {
    props: {openEnd: props.openEnd}
  })
  return <InternalPagination {...props} {...baseComponentProps} />
})

export {
  Pagination as default
}
