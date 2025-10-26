import {useEffect, useMemo, useRef, useState} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {getBaseProps} from '../internal/base-component'
import {focusFlashById} from './flash'
import {useReducedMotion} from '~/components/internal/toolkit/internal'

const useFlashbar = ({
  items,
  onItemsAdded,
  onItemsChanged,
  onItemsRemoved,
  ...restProps
}) => {
  const {__internalRootRef} = useBaseComponent('Flashbar', {
    props: {stackItems: restProps.stackItems}
  })
  const allItemsHaveId = useMemo(
    () => items.every(item => 'id' in item),
    [items]
  )
  const baseProps = getBaseProps(restProps)
  const ref = useRef(null)
  const [breakpoint, breakpointRef] = useContainerBreakpoints(['xs'])
  const mergedRef = useMergeRefs(ref, breakpointRef, __internalRootRef)
  const isReducedMotion = useReducedMotion(ref)
  const isVisualRefresh = useVisualRefresh()
  const [previousItems, setPreviousItems] = useState(items)
  const [nextFocusId, setNextFocusId] = useState(null)
  if (items) {
    const newItems = items.filter(
      ({id}) => id && !previousItems.some(item => item.id === id)
    )
    const removedItems = previousItems.filter(
      ({id}) => id && !items.some(item => item.id === id)
    )
    if (newItems.length > 0 || removedItems.length > 0) {
      setPreviousItems(items)
      onItemsAdded?.(newItems)
      onItemsRemoved?.(removedItems)
      onItemsChanged?.({allItemsHaveId, isReducedMotion})
      const newFocusItems = newItems.filter(
        ({ariaRole}) => ariaRole === 'alert'
      )
      if (newFocusItems.length > 0) {
        setNextFocusId(newFocusItems[0].id)
      }
    }
  }
  useEffect(() => {
    if (nextFocusId) {
      focusFlashById(ref.current, nextFocusId)
    }
  }, [nextFocusId, ref])
  return {
    allItemsHaveId,
    baseProps,
    breakpoint,
    isReducedMotion,
    isVisualRefresh,
    mergedRef,
    ref
  }
}

export {
  useFlashbar
}
