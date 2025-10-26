import {KeyCode} from '../keycode'
import {getIsRtl} from '~/components/internal/toolkit/internal'

const isEventLike = event => {
  return (
    event.currentTarget instanceof HTMLElement ||
    event.currentTarget instanceof SVGElement
  )
}
const handleKey = (
  event,
  {
    onActivate,
    onBlockEnd,
    onBlockStart,
    onDefault,
    onEnd,
    onEscape,
    onHome,
    onInlineEnd,
    onInlineStart,
    onPageDown,
    onPageUp
  }
) => {
  switch (event.keyCode) {
    case KeyCode.down:
      onBlockEnd?.()
      break
    case KeyCode.end:
      onEnd?.()
      break
    case KeyCode.enter:
    case KeyCode.space:
      onActivate?.()
      break
    case KeyCode.escape:
      onEscape?.()
      break
    case KeyCode.home:
      onHome?.()
      break
    case KeyCode.left:
      getIsRtl(event.currentTarget) ? onInlineEnd?.() : onInlineStart?.()
      break
    case KeyCode.pageDown:
      onPageDown?.()
      break
    case KeyCode.pageUp:
      onPageUp?.()
      break
    case KeyCode.right:
      getIsRtl(event.currentTarget) ? onInlineStart?.() : onInlineEnd?.()
      break
    case KeyCode.up:
      onBlockStart?.()
      break
    default:
      onDefault?.()
      break
  }
}

export {
  handleKey as default,
  isEventLike
}
