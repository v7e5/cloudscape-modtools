import {useEffect} from 'react'
import {KeyCode} from '../../keycode'

const isModifierKey = event => {
  return (
    [KeyCode.shift, KeyCode.alt, KeyCode.control, KeyCode.meta].indexOf(
      event.keyCode
    ) > -1
  )
}
const setIsKeyboard = active => {
  if (active) {
    document.body.setAttribute('data-awsui-focus-visible', 'true')
  } else {
    document.body.removeAttribute('data-awsui-focus-visible')
  }
}
const handleMousedown = () => {
  return setIsKeyboard(false)
}
const handleKeydown = event => {
  if (!isModifierKey(event)) {
    setIsKeyboard(true)
  }
}
let componentsCount = 0
const addListeners = () => {
  document.addEventListener('mousedown', handleMousedown)
  document.addEventListener('keydown', handleKeydown)
}
const removeListeners = () => {
  document.removeEventListener('mousedown', handleMousedown)
  document.removeEventListener('keydown', handleKeydown)
}
const useFocusVisible = () => {
  useEffect(() => {
    if (componentsCount === 0) {
      addListeners()
    }
    componentsCount++
    return () => {
      componentsCount--
      if (componentsCount === 0) {
        removeListeners()
      }
    }
  }, [])
}

export {
  useFocusVisible as default,
  isModifierKey
}
