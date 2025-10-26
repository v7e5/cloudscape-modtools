import {memo} from 'react'
import VirtualList from './virtual-list'
import PlainList from './plain-list'
import {useAnnouncement} from '../select/utils/use-announcement'

const createMouseEventHandler = handler => itemIndex => {
  if (itemIndex > -1) {
    handler(itemIndex)
  }
}
const AutosuggestOptionsList = memo(
  ({
    statusType,
    autosuggestItemsState,
    autosuggestItemsHandlers,
    highlightedOptionId,
    highlightText,
    listId,
    controlId,
    handleLoadMore,
    hasDropdownStatus,
    virtualScroll,
    selectedAriaLabel,
    renderHighlightedAriaLive,
    listBottom,
    ariaDescribedby
  }) => {
    const handleMouseUp = createMouseEventHandler(
      autosuggestItemsHandlers.selectVisibleOptionWithMouse
    )
    const handleMouseMove = createMouseEventHandler(
      autosuggestItemsHandlers.highlightVisibleOptionWithMouse
    )
    const ListComponent = virtualScroll ? VirtualList : PlainList
    const announcement = useAnnouncement({
      announceSelected:
        autosuggestItemsState.highlightedOption?.value === highlightText,
      highlightedOption: autosuggestItemsState.highlightedOption,
      getParent: option => autosuggestItemsState.getItemGroup(option),
      selectedAriaLabel,
      renderHighlightedAriaLive
    })
    return (
      <ListComponent
        listBottom={listBottom}
        handleLoadMore={handleLoadMore}
        autosuggestItemsState={autosuggestItemsState}
        highlightText={highlightText}
        highlightedA11yProps={
          highlightedOptionId ? {id: highlightedOptionId} : {}
        }
        hasDropdownStatus={hasDropdownStatus}
        menuProps={{
          id: listId,
          ariaLabelledby: controlId,
          onMouseUp: handleMouseUp,
          onMouseMove: handleMouseMove,
          ariaDescribedby,
          statusType
        }}
        screenReaderContent={announcement}
      />
    )
  }
)

export {
  AutosuggestOptionsList as default
}
