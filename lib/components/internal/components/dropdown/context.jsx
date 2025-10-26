import {useContext, createContext, memo} from 'react'

const DropdownContext = createContext({
  position: 'bottom-right'
})
const DropdownContextProvider = memo(
  ({children, position = 'bottom-right'}) => {
    return (
      <DropdownContext.Provider value={{position}}>
        {children}
      </DropdownContext.Provider>
    )
  }
)

const useDropdownContext = () => {
  return useContext(DropdownContext)
}

export {
  DropdownContextProvider,
  useDropdownContext
}
