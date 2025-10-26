import {useRef, useState, useCallback} from 'react'
import {useResizeObserver} from '../internal/container-queries/use-resize-observer'

const useContainerQuery = (mapFn, deps = []) => {
  const elementRef = useRef(null)
  const [state, setState] = useState(null)
  const getElement = useCallback(() => elementRef.current, deps)
  useResizeObserver(getElement, entry =>
    setState(prevState => mapFn(entry, prevState))
  )
  return [state, elementRef]
}

export {
  useContainerQuery as default
}
