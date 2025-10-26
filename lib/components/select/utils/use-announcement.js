import {useEffect, useRef} from 'react'
import defaultOptionDescription from '../../internal/components/option/option-announcer'

const useAnnouncement = ({
  announceSelected,
  highlightedOption,
  getParent,
  selectedAriaLabel,
  renderHighlightedAriaLive
}) => {
  const prevAnnouncedGroup = useRef(void 0)
  useEffect(() => {
    if (highlightedOption) {
      const frameId = requestAnimationFrame(() => {
        prevAnnouncedGroup.current = getParent(highlightedOption)
      })
      return () => cancelAnimationFrame(frameId)
    }
  })
  if (!highlightedOption) {
    return ''
  }
  const option = highlightedOption.option
  const parent = getParent(highlightedOption)
  const group =
    parent && parent !== prevAnnouncedGroup.current ? parent : void 0
  if (renderHighlightedAriaLive) {
    return renderHighlightedAriaLive(option, group)
  }
  const selectedAnnouncement =
    announceSelected && selectedAriaLabel ? selectedAriaLabel : ''
  const defaultDescription = defaultOptionDescription(option, group)
  return [selectedAnnouncement, defaultDescription].filter(Boolean).join(' ')
}

export {
  useAnnouncement
}
