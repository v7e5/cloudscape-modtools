import {useEffect, useState} from 'react'

const useHasRendered = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const cancelAnimationFrame2 = requestAnimationFrameTwice(() =>
      setMounted(true)
    )
    return () => cancelAnimationFrame2()
  }, [])
  return mounted
}
const requestAnimationFrameTwice = callback => {
  let handle = requestAnimationFrame(() => {
    handle = requestAnimationFrame(callback)
  })
  return () => cancelAnimationFrame(handle)
}

export {
  useHasRendered
}
