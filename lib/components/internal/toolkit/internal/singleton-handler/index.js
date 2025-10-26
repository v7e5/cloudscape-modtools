import {useEffect, useState} from 'react'
import {unstable_batchedUpdates} from 'react-dom'

const createSingletonHandler = factory => {
  const listeners = []
  const callback = value => {
    unstable_batchedUpdates(() => {
      for (const listener of listeners) {
        listener(value)
      }
    })
  }
  let cleanup
  return listener => {
    useEffect(() => {
      if (listeners.length === 0) {
        cleanup = factory(callback)
      }
      listeners.push(listener)
      return () => {
        listeners.splice(listeners.indexOf(listener), 1)
        if (listeners.length === 0) {
          cleanup()
          cleanup = void 0
        }
      }
    }, [])
  }
}
const createSingletonState = ({factory, initialState}) => {
  const useSingleton = createSingletonHandler(factory)
  let value = initialState
  return () => {
    const [state, setState] = useState(value)
    useSingleton(newValue => {
      value = newValue
      setState(newValue)
    })
    return state
  }
}

export {
  createSingletonHandler,
  createSingletonState
}
