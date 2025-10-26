import {useEffect, useRef, memo} from 'react'

const RuntimeContentWrapper = memo(({mountContent, unmountContent}) => {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    mountContent(container)
    return () => unmountContent(container)
  }, [])
  return <div ref={ref} />
})

export {
  RuntimeContentWrapper
}
