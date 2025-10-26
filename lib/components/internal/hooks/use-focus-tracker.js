import {useRef, useEffect} from 'react'
import {fireNonCancelableEvent} from '../events'
import FocusTracker from '../focus-tracker'

const useFocusTracker = ({rootRef, onBlur, onFocus}) => {
  const focusTracker = useRef(null)
  useEffect(() => {
    if (!rootRef.current) {
      return
    }
    focusTracker.current = new FocusTracker(rootRef.current, {
      onFocusLeave: () => {
        fireNonCancelableEvent(onBlur)
      },
      onFocusEnter: () => {
        fireNonCancelableEvent(onFocus)
      }
    })
    focusTracker.current.initialize()
    return () => {
      focusTracker.current?.destroy()
    }
  }, [rootRef, onBlur, onFocus])
}

export {
  useFocusTracker
}
