import {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'

const manageDefaultContainer = setState => {
  const newContainer = document.createElement('div')
  document.body.appendChild(newContainer)
  setState(newContainer)
  return () => {
    document.body.removeChild(newContainer)
  }
}
const manageAsyncContainer = (getContainer, removeContainer, setState) => {
  let newContainer
  getContainer().then(
    container => {
      newContainer = container
      setState(container)
    },
    error => {
      console.warn('[AwsUi] [portal]: failed to load portal root', error)
    }
  )
  return () => {
    removeContainer(newContainer)
  }
}
const Portal = ({container, getContainer, removeContainer, children}) => {
  const [activeContainer, setActiveContainer] = useState(container ?? null)
  useEffect(() => {
    if (container) {
      setActiveContainer(container)
      return
    }
    if (getContainer && removeContainer) {
      return manageAsyncContainer(
        getContainer,
        removeContainer,
        setActiveContainer
      )
    }
    return manageDefaultContainer(setActiveContainer)
  }, [container, getContainer, removeContainer])
  return activeContainer && createPortal(children, activeContainer)
}

export {
  Portal as default
}
