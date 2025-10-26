import {useContext, createContext} from 'react'

const FormFieldContext = createContext({})
const applyDefault = (fields, defaults, keys) => {
  const result = {}
  keys.forEach(key => {
    result[key] = fields[key] === void 0 ? defaults[key] : fields[key]
  })
  return result
}
const useFormFieldContext = props => {
  const context = useContext(FormFieldContext)
  return applyDefault(props, context, [
    'invalid',
    'warning',
    'controlId',
    'ariaLabelledby',
    'ariaDescribedby'
  ])
}

export {
  FormFieldContext,
  useFormFieldContext
}
