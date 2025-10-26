import {useCallback, useEffect, useRef} from 'react'

const useStableCallback = fn => {
  const ref = useRef()
  useEffect(() => {
    ref.current = fn
  })
  return useCallback((...args) => ref.current?.apply(void 0, args), [])
}

export {
  useStableCallback
}
