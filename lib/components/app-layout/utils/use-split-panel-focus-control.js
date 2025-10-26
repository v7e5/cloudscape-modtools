import {useEffect, useRef} from 'react'

const useSplitPanelFocusControl = dependencies => {
  const refs = {
    toggle: useRef(null),
    slider: useRef(null),
    preferences: useRef(null)
  }
  const lastInteraction = useRef(null)
  useEffect(() => {
    switch (lastInteraction.current?.type) {
      case 'open':
        refs.slider.current?.focus()
        break
      case 'close':
        refs.toggle.current?.focus()
        break
      case 'position':
        refs.preferences.current?.focus()
        break
    }
    lastInteraction.current = null
  }, dependencies)
  return {
    refs,
    setLastInteraction: interaction => (lastInteraction.current = interaction)
  }
}

export {
  useSplitPanelFocusControl
}
