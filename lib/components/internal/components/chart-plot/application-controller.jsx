import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  memo
} from 'react'
import styles from './styles.css.js'

const ApplicationController = memo(
  forwardRef(
    (
      {activeElementKey, activeElementRef, onFocus, onBlur, onKeyDown},
      ref
    ) => {
      const containerRef = useRef(null)
      const applicationRef = useRef(null)
      const focusTransitionRef = useRef(false)
      const [isFocused, setFocused] = useState(false)
      const onApplicationFocus = useCallback(
        event => {
          if (focusTransitionRef.current === false) {
            setFocused(true)
            onFocus && onFocus(event)
          } else {
            focusTransitionRef.current = false
          }
        },
        [onFocus]
      )
      const onApplicationBlur = useCallback(
        event => {
          if (focusTransitionRef.current === false) {
            setFocused(false)
            onBlur && onBlur(event)
            muteApplication(applicationRef.current)
          }
        },
        [onBlur]
      )
      const onApplicationKeyDown = onKeyDown
      useImperativeHandle(
        ref,
        () => ({
          focus: () =>
            focusApplication(
              applicationRef.current,
              activeElementRef?.current || null
            )
        }),
        [activeElementRef]
      )
      useEffect(() => {
        if (!isFocused || focusTransitionRef.current === true) {
          return
        }
        focusTransitionRef.current = true
        containerRef.current.removeChild(applicationRef.current)
        containerRef.current.appendChild(applicationRef.current)
        focusApplication(
          applicationRef.current,
          activeElementRef?.current || null
        )
      }, [isFocused, activeElementKey, activeElementRef])
      return (
        <g ref={containerRef}>
          <g
            tabIndex={-1}
            ref={applicationRef}
            onFocus={onApplicationFocus}
            onBlur={onApplicationBlur}
            onKeyDown={onApplicationKeyDown}
            className={styles.application}
          />
        </g>
      )
    }
  )
)

const focusApplication = (app, target) => {
  for (const attributeName of app.getAttributeNames()) {
    if (attributeName === 'role' || attributeName.slice(0, 4) === 'aria') {
      app.removeAttribute(attributeName)
    }
  }
  if (target) {
    for (const attributeName of target.getAttributeNames()) {
      if (attributeName === 'role' || attributeName.slice(0, 4) === 'aria') {
        const attributeValue = target.getAttribute(attributeName)
        attributeValue && app.setAttribute(attributeName, attributeValue)
      }
    }
  }
  app.tabIndex = 0
  app.setAttribute('focusable', 'true')
  app.setAttribute('aria-hidden', 'false')
  app.focus({preventScroll: true})
}
const muteApplication = app => {
  for (const attributeName of app.getAttributeNames()) {
    if (attributeName === 'role' || attributeName.slice(0, 4) === 'aria') {
      app.removeAttribute(attributeName)
    }
  }
  app.tabIndex = -1
  app.setAttribute('focusable', 'false')
  app.setAttribute('aria-hidden', 'true')
}

export {
  ApplicationController as default
}
