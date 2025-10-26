import {useImperativeHandle, useRef} from 'react'

const useRadioGroupForwardFocus = (forwardedRef, items, value) => {
  const itemRef = useRef(null)
  const itemIndex = items && findIndex(items, item => item.value === value)
  useImperativeHandle(forwardedRef, () => ({
    focus() {
      itemRef.current?.focus()
    }
  }))
  return [itemRef, itemIndex !== void 0 && itemIndex !== -1 ? itemIndex : 0]
}
const findIndex = (items, predicate) => {
  for (let i = 0; i < items.length; i++) {
    if (predicate(items[i])) {
      return i
    }
  }
  return -1
}

export {
  useRadioGroupForwardFocus as default
}
