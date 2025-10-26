import {useCallback, useEffect, useImperativeHandle, useRef, memo} from 'react'
import OptionsList from '../internal/components/options-list'
import AutosuggestOption from './autosuggest-option'
import {getOptionProps} from './plain-list'
import styles from './styles.css.js'
import {useVirtual} from '../internal/hooks/use-virtual'
import {useContainerQuery} from '~/components/internal/toolkit'

const VirtualList = memo(
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
    const scrollRef = useRef(null)
    const [width, strutRef] = useContainerQuery(
      rect => rect.contentBoxWidth,
      []
    )
    useImperativeHandle(strutRef, () => scrollRef.current)
    const rowVirtualizer = useVirtual({
      items: autosuggestItemsState.items,
      parentRef: scrollRef,

      estimateSize: useCallback(() => 31, [width, highlightText])
    })
    useEffect(() => {
      if (autosuggestItemsState.highlightType.moveFocus) {
        rowVirtualizer.scrollToIndex(autosuggestItemsState.highlightedIndex)
      }
    }, [
      autosuggestItemsState.highlightType,
      autosuggestItemsState.highlightedIndex,
      rowVirtualizer
    ])
    return (
      <OptionsList
        {...menuProps}
        onLoadMore={handleLoadMore}
        ref={scrollRef}
        open={true}>
        <div
          aria-hidden='true'
          key='total-size'
          className={styles['layout-strut']}
          style={{
            height:
              rowVirtualizer.totalSize +
              (autosuggestItemsState.items.length === 1 ? 1 : 0)
          }}
        />
        {rowVirtualizer.virtualItems.map(virtualRow => {
          const {index, start, measureRef} = virtualRow
          const item = autosuggestItemsState.items[index]
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
              key={index}
              ref={measureRef}
              highlightText={highlightText}
              option={item}
              highlighted={item === autosuggestItemsState.highlightedOption}
              current={item.value === highlightText}
              data-mouse-target={index}
              virtualPosition={start + (index === 0 ? 1 : 0)}
              screenReaderContent={screenReaderContent}
              ariaSetsize={autosuggestItemsState.items.length}
              ariaPosinset={index + 1}
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
  VirtualList as default
}
