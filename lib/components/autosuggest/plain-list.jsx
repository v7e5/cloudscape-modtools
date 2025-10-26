import {useEffect, useRef, memo} from 'react'
import OptionsList from '../internal/components/options-list'
import {scrollElementIntoView} from '../internal/utils/scrollable-containers'
import {getBaseProps} from '../internal/base-component'
import AutosuggestOption from './autosuggest-option'
import styles from './styles.css.js'

const getOptionProps = (
  index,
  item,
  filteredItems,
  highlightedA11yProps,
  highlightedOption,
  hasDropdownStatus
) => {
  const nativeAttributes =
    item === highlightedOption ? highlightedA11yProps : {}
  const baseOptionProps = getBaseProps(nativeAttributes)
  const isLastItem = index === filteredItems.length - 1
  const isNotEnteredTextItem = filteredItems.length > 1
  const padBottom = !hasDropdownStatus && isNotEnteredTextItem && isLastItem
  return {nativeAttributes, padBottom, ...baseOptionProps}
}
const PlainList = memo(
  ({
    autosuggestItemsState,
    handleLoadMore,
    menuProps,
    highlightedA11yProps,
    hasDropdownStatus,
    highlightText,
    listBottom,
    screenReaderContent
  }) => {
    const listRef = useRef(null)
    useEffect(() => {
      const item = listRef.current?.querySelector(
        `[data-mouse-target="${autosuggestItemsState.highlightedIndex}"]`
      )
      if (autosuggestItemsState.highlightType.moveFocus && item) {
        scrollElementIntoView(item)
      }
    }, [
      autosuggestItemsState.highlightType,
      autosuggestItemsState.highlightedIndex
    ])
    return (
      <OptionsList
        {...menuProps}
        onLoadMore={handleLoadMore}
        open={true}
        ref={listRef}>
        {autosuggestItemsState.items.map((item, index) => {
          const optionProps = getOptionProps(
            index,
            item,
            autosuggestItemsState.items,
            highlightedA11yProps,
            autosuggestItemsState.highlightedOption,
            hasDropdownStatus
          )
          return (
            <AutosuggestOption
              highlightText={highlightText}
              option={item}
              highlighted={item === autosuggestItemsState.highlightedOption}
              current={item.value === highlightText}
              key={index}
              data-mouse-target={index}
              screenReaderContent={screenReaderContent}
              highlightType={autosuggestItemsState.highlightType}
              {...optionProps}
            />
          )
        })}
        {listBottom ? (
          <li role='option' className={styles['list-bottom']}>
            {listBottom}
          </li>
        ) : null}
      </OptionsList>
    )
  }
)

export {
  PlainList as default,
  getOptionProps
}
