import {useOpenState} from '../../internal/components/options-list/utils/use-open-state'
import {fireCancelableEvent, isPlainLeftClick} from '../../internal/events'
import {KeyCode} from '../../internal/keycode'
import {getItemTarget, isCheckboxItem, isItemGroup, isLinkItem} from './utils'
import useHighlightedMenu from './use-highlighted-menu'

const useButtonDropdown = ({
  items,
  onItemClick,
  onItemFollow,
  onReturnFocus,
  hasExpandableGroups,
  isInRestrictedView = false,
  expandToViewport = false
}) => {
  const {
    targetItem,
    isHighlighted,
    isKeyboardHighlight,
    isExpanded,
    highlightItem,
    moveHighlight,
    expandGroup,
    collapseGroup,
    reset,
    setIsUsingMouse
  } = useHighlightedMenu({
    items,
    hasExpandableGroups,
    isInRestrictedView
  })
  const {isOpen, closeDropdown, ...openStateProps} = useOpenState({
    onClose: reset
  })
  const toggleDropdown = (options = {}) => {
    const moveHighlightOnOpen = options.moveHighlightOnOpen ?? true
    if (!isOpen && moveHighlightOnOpen) {
      moveHighlight(1)
    }
    openStateProps.toggleDropdown()
  }
  const onGroupToggle = item =>
    !isExpanded(item) ? expandGroup(item) : collapseGroup()
  const onItemActivate = (item, event) => {
    const isCheckbox = isCheckboxItem(item)
    const isLink = isLinkItem(item)
    const details = {
      id: item.id || 'undefined',
      to: isLink ? item.to : void 0,
      external: isLink ? item.external : void 0,
      target: isLink ? getItemTarget(item) : void 0,
      checked: isCheckbox ? !item.checked : void 0
    }
    if (onItemFollow && isLink && isPlainLeftClick(event)) {
      fireCancelableEvent(onItemFollow, details, event)
    }
    if (onItemClick) {
      fireCancelableEvent(onItemClick, details, event)
    }
    onReturnFocus()
    closeDropdown()
  }
  const doVerticalNavigation = direction => {
    if (isOpen) {
      moveHighlight(direction)
    }
  }
  const openAndSelectFirst = event => {
    toggleDropdown()
    event.preventDefault()
  }
  const actOnParentDropdown = event => {
    if (!targetItem) {
      if (isOpen && !isInRestrictedView) {
        toggleDropdown()
      } else {
        openAndSelectFirst(event)
      }
    } else {
      if (isItemGroup(targetItem)) {
        onGroupToggle(targetItem, event)
      } else {
        onItemActivate(targetItem, event)
      }
    }
  }
  const activate = (event, isEnter) => {
    setIsUsingMouse(false)
    if (targetItem && isLinkItem(targetItem) && isEnter) {
      return
    }
    event.preventDefault()
    actOnParentDropdown(event)
  }
  const onKeyDown = event => {
    setIsUsingMouse(false)
    switch (event.keyCode) {
      case KeyCode.down: {
        doVerticalNavigation(1)
        event.preventDefault()
        break
      }
      case KeyCode.up: {
        doVerticalNavigation(-1)
        event.preventDefault()
        break
      }
      case KeyCode.space: {
        event.preventDefault()
        break
      }
      case KeyCode.enter: {
        if (!targetItem?.disabled) {
          activate(event, true)
        }
        break
      }
      case KeyCode.left:
      case KeyCode.right: {
        if (
          targetItem &&
          !targetItem.disabled &&
          isItemGroup(targetItem) &&
          !isExpanded(targetItem)
        ) {
          expandGroup()
        } else if (hasExpandableGroups) {
          collapseGroup()
        }
        event.preventDefault()
        break
      }
      case KeyCode.escape: {
        onReturnFocus()
        closeDropdown()
        event.preventDefault()
        if (isOpen) {
          event.stopPropagation()
        }
        break
      }
      case KeyCode.tab: {
        if (expandToViewport) {
          onReturnFocus()
        }
        closeDropdown()
        break
      }
    }
  }
  const onKeyUp = event => {
    if (event.keyCode === KeyCode.space && !targetItem?.disabled) {
      activate(event)
    }
  }
  return {
    isOpen,
    targetItem,
    isHighlighted,
    isKeyboardHighlight,
    isExpanded,
    highlightItem,
    onKeyDown,
    onKeyUp,
    onItemActivate,
    onGroupToggle,
    toggleDropdown,
    closeDropdown,
    setIsUsingMouse
  }
}

export {
  useButtonDropdown
}
