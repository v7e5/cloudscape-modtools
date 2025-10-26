import {useCallback, useRef} from 'react'
import debounce from '../../debounce'

const useDebounceCallback = (callback, delay) => {
  const callbackRef = useRef()
  callbackRef.current = callback
  return useCallback(
    debounce((...args) => {
      if (callbackRef.current) {
        callbackRef.current(...args)
      }
    }, delay),
    []
  )
}

export {
  useDebounceCallback
}
