import styles from './styles.css.js'
import {browserScrollbarSize} from '../internal/utils/browser-scrollbar-size'

let initialBodyPaddingRightStyle = void 0
const disableBodyScrolling = () => {
  setBodyScrollbarPadding()
  document.body.classList.add(styles['modal-open'])
}
const enableBodyScrolling = () => {
  document.body.classList.remove(styles['modal-open'])
  restoreBodyScrollbarPadding()
}
const setBodyScrollbarPadding = () => {
  if (bodyHasScrollbar()) {
    initialBodyPaddingRightStyle = document.body.style.paddingRight
    const initialBodyPaddingRight = computedBodyPaddingRightPixels()
    const scrollbarWidth = browserScrollbarSize().width
    const newBodyPaddingRight = initialBodyPaddingRight + scrollbarWidth
    document.body.style.paddingRight = newBodyPaddingRight + 'px'
  }
}
const computedBodyPaddingRightPixels = () => {
  return parseInt(window.getComputedStyle(document.body).paddingRight, 10)
}
const restoreBodyScrollbarPadding = () => {
  if (initialBodyPaddingRightStyle) {
    document.body.style.setProperty(
      'padding-right',
      initialBodyPaddingRightStyle
    )
  } else {
    document.body.style.removeProperty('padding-right')
  }
  initialBodyPaddingRightStyle = void 0
}
const bodyHasScrollbar = () => {
  return document.body.clientWidth < window.innerWidth
}

export {
  disableBodyScrolling,
  enableBodyScrolling
}
