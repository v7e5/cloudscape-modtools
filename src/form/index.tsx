import InternalForm from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Form = ({variant = 'full-page', ...props}) => (
  <InternalForm
    variant={variant}
    {...useBaseComponent('Form')}
    {...props}
  />
)

export {
  Form as default
}
