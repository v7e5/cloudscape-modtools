import {useRef} from 'react'
import {createSingletonHandler} from '~/components/internal/toolkit/internal'

const useEventListenersSingleton = createSingletonHandler(setTarget => {
  const handleMouseDown = event => {
    setTarget(event.target)
  }
  const handleKeyDown = () => {
    setTarget(null)
  }
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('keydown', handleKeyDown)
  return () => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('keydown', handleKeyDown)
  }
})
const useMouseDownTarget = () => {
  const mouseDownTargetRef = useRef(null)
  useEventListenersSingleton(target => {
    mouseDownTargetRef.current = target
  })
  return () => mouseDownTargetRef.current
}

export {
  useMouseDownTarget as default
}
