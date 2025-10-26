import {createContext, useContext} from 'react'

const ModalContext = createContext({isInModal: false})
const useModalContext = () => {
  const modalContext = useContext(ModalContext)
  return modalContext
}

export {
  ModalContext,
  useModalContext
}
