import {useEffect, useRef, useState, memo} from 'react'
import styles from './styles.css.js'
import {isModifierKey} from '../../hooks/focus-visible'

const useFocusVisibleState = () => {
  const [focusVisible, setFocusVisible] = useState(false)
  useEffect(() => {
    const handleMousedown = () => {
      return setFocusVisible(false)
    }
    const handleKeydown = event => {
      if (!isModifierKey(event)) {
        setFocusVisible(true)
      }
    }
    document.addEventListener('mousedown', handleMousedown)
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('mousedown', handleMousedown)
      document.removeEventListener('keydown', handleKeydown)
    }
  })
  return focusVisible
}
const FocusOutline = memo(({elementKey, elementRef, offset = 0}) => {
  const ref = useRef(null)
  const focusVisible = useFocusVisibleState()
  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (
      focusVisible &&
      elementKey &&
      elementRef &&
      elementRef.current &&
      elementRef.current.getBBox
    ) {
      const element = elementRef.current.getBBox()
      showOutline(ref.current, element, offset)
    } else {
      hideOutline(ref.current)
    }
  }, [focusVisible, elementKey, elementRef, offset])
  return (
    <rect
      ref={ref}
      aria-hidden='true'
      className={styles['focus-outline']}
      rx='2'
    />
  )
})

const showOutline = (el, position, offset) => {
  const offsetX = typeof offset === 'number' ? offset : offset.x
  const offsetY = typeof offset === 'number' ? offset : offset.y
  el.setAttribute('x', (position.x - offsetX).toString())
  el.setAttribute('y', (position.y - offsetY).toString())
  el.setAttribute('width', (position.width + 2 * offsetX).toString())
  el.setAttribute('height', (position.height + 2 * offsetY).toString())
  el.style.visibility = 'visible'
}
const hideOutline = el => {
  el.style.visibility = 'hidden'
  el.removeAttribute('x')
  el.removeAttribute('y')
  el.removeAttribute('width')
  el.removeAttribute('height')
}

export {
  FocusOutline as default
}
