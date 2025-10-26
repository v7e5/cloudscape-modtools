import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalTextFilter from './internal'

const TextFilter = memo(
  forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('TextFilter')
    return <InternalTextFilter {...props} {...baseComponentProps} ref={ref} />
  })
)

export {
  TextFilter as default
}
