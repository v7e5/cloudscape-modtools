import {useEffect, useRef} from 'react'
import {nodeBelongs} from '../../internal/utils/node-belongs'
import {useStableCallback} from '~/components/internal/toolkit/internal'

const useClickAway = onClick => {
  const awayRef = useRef(null)
  const onClickStable = useStableCallback(onClick)
  useEffect(() => {
    const handleClick = event => {
      if (!nodeBelongs(awayRef.current, event.target)) {
        onClickStable()
      }
    }
    document.addEventListener('click', handleClick, {capture: true})
    return () =>
      document.removeEventListener('click', handleClick, {capture: true})
  }, [onClickStable])
  return awayRef
}

export {
  useClickAway
}
