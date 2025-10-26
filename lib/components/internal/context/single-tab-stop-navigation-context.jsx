import {createContext, useContext, useEffect, useState} from 'react'

const defaultValue = {
  navigationActive: false,
  registerFocusable: () => () => {}
}
const SingleTabStopNavigationContext = createContext(defaultValue)
const useSingleTabStopNavigation = (focusable, options) => {
  const {navigationActive: contextNavigationActive, registerFocusable} =
    useContext(SingleTabStopNavigationContext)
  const [focusTargetActive, setFocusTargetActive] = useState(false)
  const navigationDisabled = options?.tabIndex && options?.tabIndex < 0
  const navigationActive = contextNavigationActive && !navigationDisabled
  useEffect(() => {
    if (navigationActive && focusable && focusable.current) {
      const unregister = registerFocusable(focusable.current, isFocusable =>
        setFocusTargetActive(isFocusable)
      )
      return () => unregister()
    }
  })
  let tabIndex = options?.tabIndex
  if (navigationActive) {
    tabIndex = !focusTargetActive ? -1 : options?.tabIndex ?? 0
  }
  return {navigationActive, tabIndex}
}

export {
  SingleTabStopNavigationContext,
  defaultValue,
  useSingleTabStopNavigation
}
