import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  memo
} from 'react'
import {useMergeRefs} from '../../internal/hooks/use-merge-refs'
import OptionsList from '../../internal/components/options-list'
import {renderOptions} from '../utils/render-options'
import styles from './styles.css.js'
import {useVirtual} from '../../internal/hooks/use-virtual'
import {useContainerQuery} from '~/components/internal/toolkit'

const VirtualList = memo(
  forwardRef((props, ref) => {
    return props.menuProps.open ? (
      <VirtualListOpen {...props} ref={ref} />
    ) : (
      <VirtualListClosed {...props} ref={ref} />
    )
  })
)
const VirtualListOpen = memo(
  forwardRef(
    (
      {
        menuProps,
        getOptionProps,
        filteredOptions,
        filteringValue,
        highlightType,
        checkboxes,
        hasDropdownStatus,
        listBottom,
        useInteractiveGroups,
        screenReaderContent
      },
      ref
    ) => {
      const [width, menuMeasureRef] = useContainerQuery(
        rect => rect.contentBoxWidth,
        []
      )
      const menuRefObject = useRef(null)
      const menuRef = useMergeRefs(
        menuMeasureRef,
        menuRefObject,
        menuProps.ref
      )
      const {virtualItems, totalSize, scrollToIndex} = useVirtual({
        items: filteredOptions,
        parentRef: menuRefObject,

        estimateSize: useCallback(() => 31, [width, filteringValue])
      })
      useImperativeHandle(
        ref,
        () => index => {
          if (highlightType.moveFocus) {
            scrollToIndex(index)
          }
        },
        [highlightType, scrollToIndex]
      )
      const finalOptions = renderOptions({
        options: virtualItems.map(({index}) => filteredOptions[index]),
        getOptionProps,
        filteringValue,
        highlightType,
        checkboxes,
        hasDropdownStatus,
        virtualItems,
        useInteractiveGroups,
        screenReaderContent,
        ariaSetsize: filteredOptions.length
      })
      return (
        <OptionsList {...menuProps} ref={menuRef}>
          <div
            aria-hidden='true'
            key='total-size'
            className={styles['layout-strut']}
            style={{height: totalSize}}
          />
          {finalOptions}
          {listBottom ? (
            <li role='option' className={styles['list-bottom']}>
              {listBottom}
            </li>
          ) : null}
        </OptionsList>
      )
    }
  )
)
const VirtualListClosed = memo(
  forwardRef(({menuProps, listBottom}, ref) => {
    useImperativeHandle(ref, () => () => {}, [])
    return (
      <OptionsList {...menuProps} ref={menuProps.ref}>
        {listBottom ? (
          <li role='option' className={styles['list-bottom']}>
            {listBottom}
          </li>
        ) : null}
      </OptionsList>
    )
  })
)

export {
  VirtualList as default
}
