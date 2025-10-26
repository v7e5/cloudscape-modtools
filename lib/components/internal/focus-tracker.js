import {nodeBelongs} from './utils/node-belongs'

class FocusTracker {
  constructor(node, {onFocusEnter, onFocusLeave}) {
    this.node = node
    this.onFocusEnter = onFocusEnter
    this.onFocusLeave = onFocusLeave
  }
  onFocusLeave
  onFocusEnter
  currentlyFocused = false
  initialize() {
    this.currentlyFocused = nodeBelongs(this.node, document.activeElement)
    document.addEventListener('focusin', this.focusInListener)
    document.addEventListener('focusout', this.focusOutListener)
  }
  destroy() {
    document.removeEventListener('focusin', this.focusInListener)
    document.removeEventListener('focusout', this.focusOutListener)
  }
  focusInListener = event => {
    const focusIsInside = nodeBelongs(this.node, event.target)
    if (!this.currentlyFocused && focusIsInside) {
      this.triggerFocus()
    }
  }
  focusOutListener = event => {
    const nextFocused = event.relatedTarget
    const isNextFocusedInParent = !nodeBelongs(this.node, nextFocused)
    if (
      this.currentlyFocused &&
      (nextFocused === null || isNextFocusedInParent)
    ) {
      this.triggerBlur()
    }
  }
  triggerBlur() {
    this.currentlyFocused = false
    this.onFocusLeave()
  }
  triggerFocus() {
    this.currentlyFocused = true
    this.onFocusEnter()
  }
}

export {
  FocusTracker as default
}
