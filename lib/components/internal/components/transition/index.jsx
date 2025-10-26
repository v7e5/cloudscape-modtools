import {useState, useCallback, useRef, memo} from 'react'
import {Transition as ReactTransitionGroupTransition} from 'react-transition-group'
import {useReducedMotion} from '~/components/internal/toolkit/internal'

const Transition = memo(
  ({
    in: isIn,
    children,
    exit = true,
    onStatusChange = () => void 0,
    disabled = false,
    transitionChangeDelay,
    ...rest
  }) => {
    const transitionRootElement = useRef(null)
    const [transitionState, setTransitionState] = useState(
      isIn ? 'entered' : 'exited'
    )
    const motionDisabled = useReducedMotion(transitionRootElement) || disabled
    const addTransitionEndListener = useCallback(done => {
      const node = transitionRootElement.current
      if (node === null) {
        return
      }
      const listener = e => {
        if (e.target === node) {
          node.removeEventListener('transitionend', listener)
          node.removeEventListener('animationend', listener)
          done()
        }
      }
      node.addEventListener('transitionend', listener)
      node.addEventListener('animationend', listener)
    }, [])
    return (
      <ReactTransitionGroupTransition
        addEndListener={addTransitionEndListener}
        timeout={motionDisabled ? 0 : void 0}
        in={isIn}
        nodeRef={transitionRootElement}
        exit={exit}
        onEnter={isAppearing => {
          if (!isAppearing) {
            setTransitionState('enter')
            onStatusChange('enter')
          }
        }}
        onEntering={isAppearing => {
          if (!isAppearing) {
            void transitionRootElement.current?.offsetHeight
            if (transitionChangeDelay?.entering) {
              setTimeout(() => {
                setTransitionState('entering')
                onStatusChange('entering')
              }, transitionChangeDelay?.entering)
            } else {
              setTransitionState('entering')
              onStatusChange('entering')
            }
          }
        }}
        onEntered={isAppearing => {
          if (!isAppearing) {
            setTransitionState('entered')
            onStatusChange('entered')
          }
        }}
        onExit={() => {
          setTransitionState('exit')
          onStatusChange('exit')
        }}
        onExiting={() => {
          setTransitionState('exiting')
          onStatusChange('exiting')
        }}
        onExited={() => {
          setTransitionState('exited')
          onStatusChange('exited')
        }}
        {...rest}>
        {() => children(transitionState, transitionRootElement)}
      </ReactTransitionGroupTransition>
    )
  }
)

export {
  Transition
}
