import {createContext} from 'react'

const defaultValue = {
  defaultVariant: 'secondary'
}
const LinkDefaultVariantContext = createContext(defaultValue)

export {
  LinkDefaultVariantContext,
  defaultValue
}
