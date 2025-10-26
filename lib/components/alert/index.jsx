import {forwardRef, memo} from 'react'
import InternalAlert from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Alert = memo(
  forwardRef(({type = 'info', visible = true, ...props}, ref) => {
    const baseComponentProps = useBaseComponent('Alert', {
      props: {type, visible, dismissible: props.dismissible}
    })
    return (
      <InternalAlert
        type={type}
        visible={visible}
        {...props}
        {...baseComponentProps}
        ref={ref}
      />
    )
  })
)

export {
  Alert as default
}
