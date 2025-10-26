import {useCallback, useEffect, useRef} from 'react'

const useFocusControl = (isOpen, restoreFocus = false, activeDrawerId) => {
  const refs = {
    toggle: useRef(null),
    close: useRef(null),
    slider: useRef(null)
  }
  const previousFocusedElement = useRef()
  const shouldFocus = useRef(false)
  const doFocus = () => {
    if (!shouldFocus.current) {
      return
    }
    if (isOpen) {
      previousFocusedElement.current =
        document.activeElement !== document.body
          ? document.activeElement
          : void 0
      if (refs.slider.current) {
        refs.slider.current?.focus()
      } else {
        refs.close.current?.focus()
      }
    } else {
      if (
        restoreFocus &&
        previousFocusedElement.current &&
        document.contains(previousFocusedElement.current)
      ) {
        previousFocusedElement.current.focus()
        previousFocusedElement.current = void 0
      } else {
        refs.toggle.current?.focus()
      }
    }
    shouldFocus.current = false
  }
  const setFocus = force => {
    shouldFocus.current = true
    if (force && isOpen) {
      doFocus()
    }
  }
  useEffect(doFocus, [isOpen, activeDrawerId])
  const loseFocus = useCallback(() => {
    previousFocusedElement.current = void 0
  }, [])
  return {
    refs,
    setFocus,
    loseFocus
  }
}

export {
  useFocusControl
}
