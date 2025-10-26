import {useEffect, useRef, useState} from 'react'
import {RuntimeContentWrapper} from './runtime-content-wrapper'

const convertRuntimeAction = (action, context) => {
  if (!action) {
    return null
  }
  return (
    <RuntimeContentWrapper
      key={action.id + '-' + context.type}
      mountContent={container => action.mountContent(container, context)}
      unmountContent={container => action.unmountContent(container)}
    />
  )
}
const createUseDiscoveredAction = onActionRegistered => {
  return type => {
    const [discoveredActions, setDiscoveredActions] = useState([])
    const headerRef = useRef(null)
    const contentRef = useRef(null)
    useEffect(() => {
      return onActionRegistered(actions => {
        setDiscoveredActions(
          actions.map(action =>
            convertRuntimeAction(action, {type, headerRef, contentRef})
          )
        )
      })
    }, [type])
    return {discoveredActions, headerRef, contentRef}
  }
}

export {
  createUseDiscoveredAction
}
