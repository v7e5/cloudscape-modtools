import {useContext, createContext} from 'react'

const SplitPanelContext = createContext(null)
const SplitPanelContextProvider = SplitPanelContext.Provider
const useSplitPanelContext = () => {
  const ctx = useContext(SplitPanelContext)
  if (!ctx) {
    throw new Error('Split panel can only be used inside app layout')
  }
  return ctx
}

export {
  SplitPanelContextProvider,
  useSplitPanelContext
}
