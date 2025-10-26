import {createContext, useContext, memo} from 'react'

const ContainerHeaderContext = createContext({isInContainer: false})
const ContainerHeaderContextProvider = memo(({children}) => {
  return (
    <ContainerHeaderContext.Provider value={{isInContainer: true}}>
      {children}
    </ContainerHeaderContext.Provider>
  )
})
const useContainerHeader = () => {
  const {isInContainer} = useContext(ContainerHeaderContext)
  return isInContainer
}

export {
  ContainerHeaderContextProvider,
  useContainerHeader
}
