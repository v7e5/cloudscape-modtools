import {useCallback, useState} from 'react'
import {useResizeObserver} from '~/components/internal/toolkit/internal'

const useObservedElement = selector => {
  const getElement = useCallback(() => {
    return document.querySelector(selector)
  }, [selector])
  const [height, setHeight] = useState(0)
  useResizeObserver(getElement, entry => setHeight(entry.borderBoxHeight))
  return height
}

export {
  useObservedElement
}
