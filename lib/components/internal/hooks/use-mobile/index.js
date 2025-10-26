import {createSingletonState} from '~/components/internal/toolkit/internal'
import {getMatchingBreakpoint, mobileBreakpoint} from '../../breakpoints'

const getIsMobile = () => {
  if (typeof window === 'undefined') {
    return false
  }
  if (window.matchMedia) {
    return window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches
  }
  return getMatchingBreakpoint(window.innerWidth, ['xs']) !== 'xs'
}
const useMobile = createSingletonState({
  initialState: () => getIsMobile(),
  factory: handler => {
    const listener = () => handler(getIsMobile())
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }
})

export {
  useMobile
}
