import {useRef} from 'react'

const useDateCache = () => {
  const cacheRef = useRef(new Map())
  return date => {
    const current = cacheRef.current.get(date.getTime())
    if (current) {
      return current
    }
    cacheRef.current.set(date.getTime(), date)
    return date
  }
}

export {
  useDateCache
}
