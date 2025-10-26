import {memo} from 'react'
import InternalFormField from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const FormField = memo(({stretch = false, ...props}) => {
  const baseComponentProps = useBaseComponent('FormField', {props: {stretch}})
  return (
    <InternalFormField
      stretch={stretch}
      {...props}
      __hideLabel={false}
      {...baseComponentProps}
    />
  )
})

export {
  FormField as default
}
