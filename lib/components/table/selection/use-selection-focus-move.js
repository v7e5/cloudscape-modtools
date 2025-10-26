import {findUpUntil} from '../../internal/utils/dom'
import selectionStyles from './styles.css.js'
import {SELECTION_ITEM} from './utils'

const useSelectionFocusMove = (selectionType, totalItems) => {
  if (selectionType !== 'multi') {
    return {}
  }
  const moveFocus = (sourceElement, fromIndex, direction) => {
    let index = fromIndex
    const rootContainer = findRootContainer(sourceElement)
    while (index >= -1 && index < totalItems) {
      index += direction
      const control = findSelectionControlByIndex(rootContainer, index)
      if (control && !control.disabled) {
        control.focus()
        break
      }
    }
  }
  const [moveFocusDown, moveFocusUp] = [1, -1].map(direction => {
    return event => {
      const target = event.currentTarget
      const itemNode = findUpUntil(
        target,
        node => node.dataset.selectionItem === 'item'
      )
      const fromIndex = Array.prototype.indexOf.call(
        itemNode.parentElement.children,
        itemNode
      )
      moveFocus(target, fromIndex, direction)
    }
  })
  return {
    moveFocusDown,
    moveFocusUp,
    moveFocus
  }
}
const findSelectionControlByIndex = (rootContainer, index) => {
  if (index === -1) {
    return rootContainer.querySelector(
      `[data-${SELECTION_ITEM}="all"] .${selectionStyles.root} input`
    )
  }
  return rootContainer.querySelectorAll(
    `[data-${SELECTION_ITEM}="item"] .${selectionStyles.root} input`
  )[index]
}
const findRootContainer = element => {
  return findUpUntil(element, node => node.dataset.selectionRoot === 'true')
}

export {
  useSelectionFocusMove
}
