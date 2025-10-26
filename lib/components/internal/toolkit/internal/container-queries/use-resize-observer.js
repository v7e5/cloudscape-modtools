import {useEffect} from 'react'
import {ResizeObserver, ResizeObserverEntry} from '@juggle/resize-observer'
import {useStableCallback} from '../stable-callback'

const convertResizeObserverEntry = entry => ({
  target: entry.target,
  contentBoxWidth: entry.contentBoxSize[0].inlineSize,
  contentBoxHeight: entry.contentBoxSize[0].blockSize,
  borderBoxWidth: entry.borderBoxSize[0].inlineSize,
  borderBoxHeight: entry.borderBoxSize[0].blockSize
})
const useResizeObserver = (elementRef, onObserve) => {
  const stableOnObserve = useStableCallback(onObserve)
  useEffect(() => {
    const element =
      typeof elementRef === 'function' ? elementRef() : elementRef?.current
    if (element) {
      onObserve(convertResizeObserverEntry(new ResizeObserverEntry(element)))
    }
  }, [])
  useEffect(() => {
    const element =
      typeof elementRef === 'function' ? elementRef() : elementRef?.current
    if (element) {
      let connected = true
      const observer = new ResizeObserver(entries => {
        if (connected) {
          stableOnObserve(convertResizeObserverEntry(entries[0]))
        }
      })
      observer.observe(element)
      return () => {
        connected = false
        observer.disconnect()
      }
    }
  }, [elementRef, stableOnObserve])
}

export {
  useResizeObserver
}
