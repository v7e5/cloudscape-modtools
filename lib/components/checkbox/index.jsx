import {forwardRef, memo} from 'react'
import InternalCheckbox from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Checkbox = memo(
  forwardRef(({...props}, ref) => {
    const baseComponentProps = useBaseComponent('Checkbox')
    return <InternalCheckbox {...props} {...baseComponentProps} ref={ref} />
  })
)

export {
  Checkbox as default
}
