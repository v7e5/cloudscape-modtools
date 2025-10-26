import {forwardRef, useImperativeHandle, memo} from 'react'
import OptionsList from '../../internal/components/options-list'
import {renderOptions} from '../utils/render-options'
import {scrollElementIntoView} from '../../internal/utils/scrollable-containers'
import styles from './styles.css.js'

const PlainList = memo(
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
      const menuRef = menuProps.ref
      useImperativeHandle(
        ref,
        () => index => {
          const item = menuRef.current?.querySelector(
            `[data-mouse-target="${index}"]`
          )
          if (highlightType.moveFocus && item) {
            scrollElementIntoView(item)
          }
        },
        [highlightType, menuRef]
      )
      return (
        <OptionsList {...menuProps}>
          {renderOptions({
            options: filteredOptions,
            getOptionProps,
            filteringValue,
            highlightType,
            checkboxes,
            hasDropdownStatus,
            useInteractiveGroups,
            screenReaderContent
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
)

export {
  PlainList as default
}
