import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalRadioGroup from './internal'

const RadioGroup = memo(
  forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('RadioGroup')
    return <InternalRadioGroup ref={ref} {...props} {...baseComponentProps} />
  })
)

export {
  RadioGroup as default
}
