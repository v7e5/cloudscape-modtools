import {getMatchingBreakpoint} from '../../breakpoints'
import {useContainerQuery} from '~/components/internal/toolkit'

const useContainerBreakpoints = triggers => {
  const triggersDep = triggers?.join()
  return useContainerQuery(
    rect => getMatchingBreakpoint(rect.contentBoxWidth, triggers),
    [triggersDep]
  )
}

export {
  useContainerBreakpoints
}
