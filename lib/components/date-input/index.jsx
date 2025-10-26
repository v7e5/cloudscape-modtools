import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalDateInput from './internal'

const DateInput = memo(
  forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('DateInput', {
      props: {autoFocus: props.autoFocus, readOnly: props.readOnly}
    })
    return <InternalDateInput {...props} {...baseComponentProps} ref={ref} />
  })
)

export {
  DateInput as default
}
