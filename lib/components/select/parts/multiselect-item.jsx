import {memo, forwardRef} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import Option from '../../internal/components/option'
import SelectableItem from '../../internal/components/selectable-item'
import {getBaseProps} from '../../internal/base-component'
import CheckboxIcon from '../../internal/components/checkbox-icon'

const MultiSelectItem = memo(
  forwardRef(
    (
      {
        option,
        highlighted,
        selected,
        filteringValue,
        hasCheckbox,
        virtualPosition,
        padBottom,
        isNextSelected,
        indeterminate,
        screenReaderContent,
        ariaPosinset,
        ariaSetsize,
        highlightType,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const isParent = option.type === 'parent'
      const isChild = option.type === 'child'
      const wrappedOption = option.option
      const disabled = option.disabled || wrappedOption.disabled
      const className = clsx(styles.item, {
        [styles.disabled]: disabled
      })
      return (
        <SelectableItem
          ariaChecked={isParent && indeterminate ? 'mixed' : Boolean(selected)}
          selected={selected}
          isNextSelected={isNextSelected}
          highlighted={highlighted}
          disabled={disabled}
          isParent={isParent}
          isChild={isChild}
          highlightType={highlightType}
          ref={ref}
          virtualPosition={virtualPosition}
          padBottom={padBottom}
          useInteractiveGroups={true}
          screenReaderContent={screenReaderContent}
          ariaPosinset={ariaPosinset}
          ariaSetsize={ariaSetsize}
          {...baseProps}>
          <div className={className}>
            {hasCheckbox && (
              <div className={styles.checkbox}>
                <CheckboxIcon
                  checked={selected}
                  indeterminate={isParent && indeterminate}
                  disabled={option.disabled}
                />
              </div>
            )}
            <Option
              option={{...wrappedOption, disabled}}
              highlightedOption={highlighted}
              selectedOption={selected}
              highlightText={filteringValue}
              isGroupOption={isParent}
            />
          </div>
        </SelectableItem>
      )
    }
  )
)

export {
  MultiSelectItem as default
}
