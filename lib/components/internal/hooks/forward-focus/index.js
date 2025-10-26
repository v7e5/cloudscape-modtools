import {useImperativeHandle} from 'react'

const useForwardFocus = (mainRef, controlRef) => {
  useImperativeHandle(
    mainRef,
    () => ({
      focus(...args) {
        controlRef.current?.focus(...args)
      }
    }),
    [controlRef]
  )
}

export {
  useForwardFocus as default
}
