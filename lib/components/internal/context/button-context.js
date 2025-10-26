import {useContext, createContext} from 'react'

const ButtonContext = createContext({
  onClick: () => {}
})
const useButtonContext = () => {
  return useContext(ButtonContext)
}

export {
  ButtonContext,
  useButtonContext
}
