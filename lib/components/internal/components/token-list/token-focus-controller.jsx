import {useEffect, useRef} from 'react'
import {getFirstFocusable} from '../focus-lock/utils'
import styles from './styles.css.js'

const tokenSelector = `.${styles['list-item']}`
const toggleButtonSelector = `.${styles.toggle}`
const useTokenFocusController = ({moveFocusNextToIndex}) => {
  const tokenListRef = useRef(null)
  useEffect(() => {
    if (
      moveFocusNextToIndex === void 0 ||
      moveFocusNextToIndex === null ||
      tokenListRef.current === null
    ) {
      return
    }
    const tokenElements = tokenListRef.current.querySelectorAll(tokenSelector)
    const toggleButton = tokenListRef.current.querySelector(
      toggleButtonSelector
    )
    let closestPrevIndex = Number.NEGATIVE_INFINITY
    let closestNextIndex = Number.POSITIVE_INFINITY
    for (
      let activeIndex = 0;
      activeIndex < tokenElements.length;
      activeIndex++
    ) {
      if (activeIndex < moveFocusNextToIndex) {
        closestPrevIndex =
          moveFocusNextToIndex - activeIndex <
          moveFocusNextToIndex - closestPrevIndex
            ? activeIndex
            : closestPrevIndex
      } else {
        closestNextIndex =
          activeIndex - moveFocusNextToIndex <
          closestNextIndex - moveFocusNextToIndex
            ? activeIndex
            : closestNextIndex
      }
    }
    const nextElement = tokenElements[closestNextIndex]
    const prevElement = tokenElements[closestPrevIndex]
    if (nextElement instanceof HTMLElement) {
      getFirstFocusable(nextElement)?.focus()
    } else if (prevElement instanceof HTMLElement) {
      getFirstFocusable(prevElement)?.focus()
    } else if (toggleButton instanceof HTMLElement) {
      toggleButton.focus()
    }
  }, [moveFocusNextToIndex])
  return tokenListRef
}

export {
  useTokenFocusController
}
