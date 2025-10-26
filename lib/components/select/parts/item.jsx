import {memo, forwardRef} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import Option from '../../internal/components/option'
import SelectableItem from '../../internal/components/selectable-item'
import {getBaseProps} from '../../internal/base-component'
import CheckboxIcon from '../../internal/components/checkbox-icon'
import InternalIcon from '../../icon/internal'

const Item = memo(
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
      return (
        <SelectableItem
          ariaSelected={Boolean(selected)}
          selected={selected}
          isNextSelected={isNextSelected}
          highlighted={highlighted}
          disabled={option.disabled}
          isParent={isParent}
          isChild={isChild}
          ref={ref}
          virtualPosition={virtualPosition}
          padBottom={padBottom}
          screenReaderContent={screenReaderContent}
          ariaPosinset={ariaPosinset}
          ariaSetsize={ariaSetsize}
          highlightType={highlightType}
          {...baseProps}>
          <div
            className={clsx(
              styles.item,
              !isParent && wrappedOption.labelTag && styles['show-label-tag']
            )}>
            {hasCheckbox && !isParent && (
              <div className={styles.checkbox}>
                <CheckboxIcon
                  checked={selected || false}
                  disabled={option.disabled}
                />
              </div>
            )}
            {isParent ? (
              <span>{wrappedOption.label || wrappedOption.value}</span>
            ) : (
              <Option
                option={{...wrappedOption, disabled}}
                highlightedOption={highlighted}
                selectedOption={selected}
                highlightText={filteringValue}
              />
            )}
            {!hasCheckbox && !isParent && selected && (
              <div className={styles['selected-icon']}>
                <InternalIcon name='check' />
              </div>
            )}
          </div>
        </SelectableItem>
      )
    }
  )
)

export {
  Item as default
}
