import {useState, useCallback, useEffect, createContext} from 'react'
import {findUpUntil} from '../internal/utils/dom'
import {getOverflowParents} from '../internal/utils/scrollable-containers'
import {useMobile} from '../internal/hooks/use-mobile'
import globalVars from '../internal/styles/global-vars'
import * as tokens from '../internal/generated/styles/tokens'

const computeOffset = ({
  isMobile,
  __stickyOffset,
  __mobileStickyOffset,
  hasInnerOverflowParents,
  __additionalOffset
}) => {
  const localOffset = isMobile
    ? (__stickyOffset ?? 0) - (__mobileStickyOffset ?? 0)
    : __stickyOffset ?? 0
  if (hasInnerOverflowParents || __stickyOffset !== void 0) {
    return `${localOffset}px`
  }
  const globalOffset = `var(${globalVars.stickyVerticalTopOffset}, 0px)`
  return `calc(${globalOffset} + ${localOffset}px + ${
    __additionalOffset ? tokens.spaceScaledS : '0px'
  })`
}
const StickyHeaderContext = createContext({
  isStuck: false
})
const useStickyHeader = (
  rootRef,
  headerRef,
  __stickyHeader,
  __stickyOffset,
  __mobileStickyOffset,
  __disableMobile,
  __additionalOffset = false
) => {
  const isMobile = useMobile()
  const disableSticky = isMobile && __disableMobile
  const isSticky = !disableSticky && !!__stickyHeader
  const [hasInnerOverflowParents, setHasInnerOverflowParents] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  useEffect(() => {
    if (rootRef.current) {
      const overflowParents = getOverflowParents(rootRef.current)
      const mainElement = findUpUntil(
        rootRef.current,
        elem => elem.tagName === 'MAIN'
      )
      setHasInnerOverflowParents(
        overflowParents.length > 0 && overflowParents[0] !== mainElement
      )
    }
  }, [rootRef])
  const computedOffset = computeOffset({
    isMobile,
    __stickyOffset,
    __mobileStickyOffset,
    hasInnerOverflowParents,
    __additionalOffset
  })
  const stickyStyles = isSticky
    ? {
        style: {
          top: computedOffset
        }
      }
    : {}
  const checkIfStuck = useCallback(() => {
    if (rootRef.current && headerRef.current) {
      const rootTopBorderWidth =
        parseFloat(getComputedStyle(rootRef.current).borderTopWidth) || 0
      const rootTop =
        rootRef.current.getBoundingClientRect().top + rootTopBorderWidth
      const headerTop = headerRef.current.getBoundingClientRect().top
      if (rootTop < headerTop) {
        setIsStuck(true)
      } else {
        setIsStuck(false)
      }
    }
  }, [rootRef, headerRef])
  useEffect(() => {
    if (isSticky) {
      window.addEventListener('scroll', checkIfStuck, true)
      window.addEventListener('resize', checkIfStuck)
      return () => {
        window.removeEventListener('scroll', checkIfStuck, true)
        window.removeEventListener('resize', checkIfStuck)
      }
    }
  }, [isSticky, checkIfStuck])
  return {
    isSticky,
    isStuck,
    stickyStyles
  }
}

export {
  StickyHeaderContext,
  computeOffset,
  useStickyHeader
}
