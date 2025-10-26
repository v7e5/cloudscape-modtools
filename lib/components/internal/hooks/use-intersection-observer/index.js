import {useCallback, useRef, useState} from 'react'

const useIntersectionObserver = () => {
  const observerRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useCallback(targetElement => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    if (targetElement) {
      observerRef.current = new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      )
      observerRef.current.observe(targetElement)
    }
  }, [])
  return {ref, isIntersecting}
}

export {
  useIntersectionObserver
}
