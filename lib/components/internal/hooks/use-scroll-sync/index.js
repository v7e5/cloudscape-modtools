import {useRef} from 'react'

const useScrollSync = refs => {
  const activeElement = useRef(null)
  return event => {
    const targetElement = event.currentTarget
    if (
      targetElement &&
      (activeElement.current === null ||
        activeElement.current === targetElement)
    ) {
      requestAnimationFrame(() => {
        activeElement.current = targetElement
        refs.forEach(ref => {
          const element = ref.current
          if (element && element !== targetElement) {
            element.scrollLeft = targetElement.scrollLeft
          }
        })
        requestAnimationFrame(() => {
          activeElement.current = null
        })
      })
    }
  }
}

export {
  useScrollSync
}
