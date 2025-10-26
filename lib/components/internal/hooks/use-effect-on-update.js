import {useEffect, useRef} from 'react'

const useEffectOnUpdate = (callback, deps) => {
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      return callback()
    }
  }, deps)
}

export {
  useEffectOnUpdate
}
