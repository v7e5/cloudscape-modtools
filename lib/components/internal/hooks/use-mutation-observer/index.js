import {useEffect} from 'react'
import {
  createSingletonHandler,
  useStableCallback
} from '~/components/internal/toolkit/internal'

const useMutationSingleton = createSingletonHandler(handler => {
  const observer = new MutationObserver(() => handler())
  observer.observe(document.body, {attributes: true, subtree: true})
  return () => observer.disconnect()
})
const useMutationObserver = (elementRef, onChange) => {
  const handler = useStableCallback(() => {
    if (elementRef.current) {
      onChange(elementRef.current)
    }
  })
  useMutationSingleton(handler)
  useEffect(() => {
    handler()
  }, [handler])
}

export {
  useMutationObserver
}
