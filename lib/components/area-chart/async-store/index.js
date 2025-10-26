import {useEffect, useState} from 'react'
import {unstable_batchedUpdates} from 'react-dom'
import {usePrevious} from '../../internal/hooks/use-previous'

class AsyncStore {
  _state
  _listeners = []
  constructor(state) {
    this._state = state
  }
  get() {
    return this._state
  }
  set(cb) {
    const prevState = this._state
    const newState = cb(prevState)
    this._state = newState
    unstable_batchedUpdates(() => {
      for (const [selector, listener] of this._listeners) {
        if (selector(prevState) !== selector(newState)) {
          listener(newState, prevState)
        }
      }
    })
  }
  subscribe(selector, listener) {
    this._listeners.push([selector, listener])
    return () => this.unsubscribe(listener)
  }
  unsubscribe(listener) {
    for (let index = 0; index < this._listeners.length; index++) {
      const [, storedListener] = this._listeners[index]
      if (storedListener === listener) {
        this._listeners.splice(index, 1)
        break
      }
    }
  }
}
const useReaction = (store, selector, effect) => {
  useEffect(() => {
    const unsubscribe = store.subscribe(selector, (newState, prevState) =>
      effect(selector(newState), selector(prevState))
    )
    return unsubscribe
  }, [store])
}
const useSelector = (store, selector) => {
  const [state, setState] = useState(selector(store.get()))
  useReaction(store, selector, newState => {
    setState(newState)
  })
  const prevStore = usePrevious(store)
  if (prevStore !== null && prevStore !== store) {
    return selector(store.get())
  }
  return state
}

export {
  AsyncStore as default,
  useReaction,
  useSelector
}
