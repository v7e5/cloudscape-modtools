class CustomEventStub {
  constructor(cancelable = false, detail = null) {
    this.cancelable = cancelable
    this.detail = detail
  }
  defaultPrevented = false
  cancelBubble = false
  preventDefault() {
    this.defaultPrevented = true
  }
  stopPropagation() {
    this.cancelBubble = true
  }
}
const createCustomEvent = ({cancelable, detail}) => {
  return new CustomEventStub(cancelable, detail)
}
const fireNonCancelableEvent = (handler, detail) => {
  if (!handler) {
    return
  }
  const event = createCustomEvent({cancelable: false, detail})
  handler(event)
}
const fireCancelableEvent = (handler, detail, sourceEvent) => {
  if (!handler) {
    return false
  }
  const event = createCustomEvent({cancelable: true, detail})
  handler(event)
  if (event.defaultPrevented && sourceEvent) {
    sourceEvent.preventDefault()
  }
  if (event.cancelBubble && sourceEvent) {
    sourceEvent.stopPropagation()
  }
  return event.defaultPrevented
}
const fireKeyboardEvent = (handler, reactEvent) => {
  return fireCancelableEvent(
    handler,
    {
      keyCode: reactEvent.keyCode,
      key: reactEvent.key,
      ctrlKey: reactEvent.ctrlKey,
      shiftKey: reactEvent.shiftKey,
      altKey: reactEvent.altKey,
      metaKey: reactEvent.metaKey
    },
    reactEvent
  )
}
const isMouseEvent = e => {
  return e.button !== void 0
}
const hasModifierKeys = event => {
  return event.ctrlKey || event.altKey || event.shiftKey || event.metaKey
}
const isPlainLeftClick = event => {
  return (
    event &&
    (!isMouseEvent(event) || event.button === 0) &&
    !hasModifierKeys(event)
  )
}

export {
  createCustomEvent,
  fireCancelableEvent,
  fireKeyboardEvent,
  fireNonCancelableEvent,
  hasModifierKeys,
  isPlainLeftClick
}
