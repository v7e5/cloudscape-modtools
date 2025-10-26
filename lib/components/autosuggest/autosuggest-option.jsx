import {memo, forwardRef} from 'react'
import OptionComponent from '../internal/components/option'
import SelectableItem from '../internal/components/selectable-item'
import {getBaseProps} from '../internal/base-component'
import {getTestOptionIndexes} from '../internal/components/options-list/utils/test-indexes'
import styles from './styles.css.js'

const AutosuggestOption = memo(
  forwardRef(
    (
      {
        nativeAttributes = {},
        highlightText,
        option,
        highlighted,
        highlightType,
        current,
        virtualPosition,
        padBottom,
        screenReaderContent,
        ariaSetsize,
        ariaPosinset,
        ...rest
      },
      ref
    ) => {
      const baseProps = getBaseProps(rest)
      const useEntered = 'type' in option && option.type === 'use-entered'
      const isParent = 'type' in option && option.type === 'parent'
      const isChild = 'type' in option && option.type === 'child'
      const {throughIndex, inGroupIndex, groupIndex} =
        getTestOptionIndexes(option) || {}
      let optionContent
      if (useEntered) {
        optionContent = option.label
        screenReaderContent = void 0
      } else if (isParent) {
        optionContent = option.label
      } else {
        const a11yProperties = {}
        if (nativeAttributes['aria-label']) {
          a11yProperties['aria-label'] = nativeAttributes['aria-label']
        }
        optionContent = (
          <div {...a11yProperties}>
            <OptionComponent
              option={option}
              highlightedOption={highlighted}
              highlightText={highlightText}
            />
          </div>
        )
      }
      return (
        <SelectableItem
          {...baseProps}
          className={styles.option}
          ariaSelected={current}
          highlighted={highlighted}
          disabled={option.disabled}
          hasBackground={useEntered}
          isParent={isParent}
          isChild={isChild}
          virtualPosition={virtualPosition}
          data-test-index={throughIndex}
          data-in-group-index={inGroupIndex}
          data-group-index={groupIndex}
          ref={ref}
          padBottom={padBottom}
          screenReaderContent={screenReaderContent}
          ariaSetsize={ariaSetsize}
          ariaPosinset={ariaPosinset}
          highlightType={highlightType.type}>
          {optionContent}
        </SelectableItem>
      )
    }
  )
)

export {
  AutosuggestOption as default
}
