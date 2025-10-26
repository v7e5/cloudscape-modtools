import {useContext, useEffect, useRef, useCallback} from 'react'
import {DynamicOverlapContext} from '../../context/dynamic-overlap-context'
import {useResizeObserver} from '~/components/internal/toolkit/internal'

const useDynamicOverlap = props => {
  const disabled = props?.disabled ?? false
  const setDynamicOverlapHeight = useContext(DynamicOverlapContext)
  const overlapElementRef = useRef(null)
  const getElement = useCallback(
    () => overlapElementRef.current,
    [overlapElementRef]
  )
  const updateState = useCallback(
    entry => {
      if (!disabled) {
        setDynamicOverlapHeight(entry.contentBoxHeight)
      }
    },
    [disabled, setDynamicOverlapHeight]
  )
  useResizeObserver(getElement, updateState)
  useEffect(() => {
    return () => {
      if (!disabled) {
        setDynamicOverlapHeight(0)
      }
    }
  }, [disabled, setDynamicOverlapHeight])
  return overlapElementRef
}

export {
  useDynamicOverlap
}
