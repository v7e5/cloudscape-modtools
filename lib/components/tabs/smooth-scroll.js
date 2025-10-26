import {isMotionDisabled} from '~/components/internal/toolkit/internal'
import isNativeSmoothScrollingSupported from './native-smooth-scroll-supported'

const getScrollSpeed = pixels => 15e-4 * Math.abs(pixels) + 0.558
const getScrollTime = pixels =>
  Math.round(Math.abs(pixels) / getScrollSpeed(pixels))
const now = () => (window.performance ? window.performance.now() : Date.now())
const ease = k => {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}
const step = context => {
  const time = now()
  const elapsed = Math.min((time - context.startTime) / context.scrollTime, 1)
  const value = ease(elapsed)
  const currentX = context.startX + (context.endX - context.startX) * value
  context.scrollable.scrollLeft = currentX
  if (currentX !== context.endX) {
    requestAnimationFrame(() => step(context))
  }
}
const simulateSmoothScroll = (element, endX) => {
  const startX = element.scrollLeft
  step({
    scrollable: element,
    startX,
    endX,
    startTime: now(),
    scrollTime: getScrollTime(endX - startX)
  })
}
const smoothScroll = (element, to) => {
  if (isMotionDisabled(element)) {
    element.scrollLeft = to
    return
  }
  if (isNativeSmoothScrollingSupported() && element.scrollTo) {
    element.scrollTo({
      left: to,
      behavior: 'smooth'
    })
    return
  }
  simulateSmoothScroll(element, to)
}

export {
  smoothScroll as default
}
