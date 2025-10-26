import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalToggle from './internal'

const Toggle = memo(
  forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('Toggle')
    return <InternalToggle {...props} {...baseComponentProps} ref={ref} />
  })
)

export {
  Toggle as default
}
