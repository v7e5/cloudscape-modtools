import {memo} from 'react'
import InternalForm from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Form = memo(({variant = 'full-page', ...props}) => (
  <InternalForm variant={variant} {...useBaseComponent('Form')} {...props} />
))

export {
  Form as default
}
