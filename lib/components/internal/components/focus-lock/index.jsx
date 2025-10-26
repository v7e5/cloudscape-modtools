import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  memo
} from 'react'
import {useMergeRefs} from '../../hooks/use-merge-refs'
import TabTrap from '../tab-trap/'
import {getFirstFocusable, getLastFocusable} from './utils'

const FocusLock = memo(
  forwardRef(
    ({className, disabled, autoFocus, restoreFocus, children}, ref) => {
      const returnFocusToRef = useRef(null)
      const containerRef = useRef(null)
      const focusFirst = () => {
        if (containerRef.current) {
          getFirstFocusable(containerRef.current)?.focus()
        }
      }
      const focusLast = () => {
        if (containerRef.current) {
          getLastFocusable(containerRef.current)?.focus()
        }
      }
      useEffect(() => {
        if (autoFocus && !disabled) {
          returnFocusToRef.current = document.activeElement
          focusFirst()
        }
      }, [autoFocus, disabled])
      const [previouslyDisabled, setPreviouslyDisabled] = useState(!!disabled)
      useEffect(() => {
        if (previouslyDisabled !== !!disabled) {
          setPreviouslyDisabled(!!disabled)
          if (restoreFocus && disabled) {
            returnFocusToRef.current?.focus()
            returnFocusToRef.current = null
          }
        }
      }, [previouslyDisabled, disabled, restoreFocus])
      const restoreFocusHandler = useCallback(
        elem => {
          if (elem === null && restoreFocus) {
            returnFocusToRef.current?.focus()
            returnFocusToRef.current = null
          }
        },
        [restoreFocus]
      )
      useImperativeHandle(ref, () => ({focusFirst}))
      const mergedRef = useMergeRefs(containerRef, restoreFocusHandler)
      return (
        <>
          <TabTrap disabled={disabled} focusNextCallback={focusLast} />
          <div className={className} ref={mergedRef}>
            {children}
          </div>
          <TabTrap disabled={disabled} focusNextCallback={focusFirst} />
        </>
      )
    }
  )
)

export {
  FocusLock as default
}
