import {useCallback, useState} from 'react'
import customCssProps from '../../internal/generated/custom-css-properties'

const useBackgroundOverlap = ({
  contentHeader,
  disableContentHeaderOverlap,
  layoutElement
}) => {
  const hasContentHeader = !!contentHeader
  const [hasBackgroundOverlap, setHasBackgroundOverlap] =
    useState(hasContentHeader)
  const updateBackgroundOverlapHeight = useCallback(
    height => {
      const hasOverlap = hasContentHeader || height > 0
      setHasBackgroundOverlap(hasOverlap)
      const element =
        typeof layoutElement !== 'function' && layoutElement?.current
      if (!element) {
        return
      }
      if (disableContentHeaderOverlap || !hasOverlap || height <= 0) {
        element.style.removeProperty(customCssProps.overlapHeight)
      } else {
        element.style.setProperty(customCssProps.overlapHeight, `${height}px`)
      }
    },
    [hasContentHeader, layoutElement, disableContentHeaderOverlap]
  )
  return {
    hasBackgroundOverlap,
    updateBackgroundOverlapHeight
  }
}

export {
  useBackgroundOverlap as default
}
