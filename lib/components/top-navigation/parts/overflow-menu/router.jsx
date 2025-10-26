import {createContext, useContext, useState, memo} from 'react'

const defaultCtx = {state: {view: 'utilities', data: null}, setState: () => {}}
const ViewContext = createContext(defaultCtx)
const useNavigate = () => {
  const {setState} = useContext(ViewContext)
  const navigate = (view, data) => {
    setState({view, data})
  }
  return navigate
}
const Route = memo(({view, element}) => {
  const {state} = useContext(ViewContext)
  if (view === state.view) {
    if (typeof element === 'function') {
      return element(state.data)
    }
    return <>{element}</>
  }
  return null
})
const Router = memo(({children}) => {
  const [state, setState] = useState({view: 'utilities', data: null})
  return (
    <ViewContext.Provider value={{state, setState}}>
      {children}
    </ViewContext.Provider>
  )
})

export {
  Route,
  ViewContext,
  Router as default,
  useNavigate
}
