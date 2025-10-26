import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {
  Label,
  LabelTag,
  Description,
  Tags,
  FilteringTags,
  OptionIcon
} from './option-parts'
import {getBaseProps} from '../../base-component'

const Option = memo(
  ({
    option,
    highlightText,
    triggerVariant = false,
    isGroupOption = false,
    isGenericGroup = true,
    highlightedOption = false,
    selectedOption = false,
    ...restProps
  }) => {
    if (!option) {
      return null
    }
    const {disabled} = option
    const baseProps = getBaseProps(restProps)
    const className = clsx(
      styles.option,
      disabled && styles.disabled,
      isGroupOption && styles.parent,
      highlightedOption && styles.highlighted
    )
    const icon = option.__customIcon || (
      <OptionIcon
        name={option.iconName}
        url={option.iconUrl}
        svg={option.iconSvg}
        alt={option.iconAlt}
        size={option.description || option.tags ? 'big' : 'normal'}
      />
    )
    const genericGroupProps = isGenericGroup
      ? {
          title: option.label ?? option.value,
          'aria-disabled': disabled
        }
      : void 0
    return (
      <span
        data-value={option.value}
        className={className}
        lang={option.lang}
        {...genericGroupProps}
        {...baseProps}>
        {icon}
        <span className={clsx(styles.content)}>
          <span className={clsx(styles['label-content'])}>
            <Label
              label={option.label ?? option.value}
              prefix={option.__labelPrefix}
              highlightText={highlightText}
              triggerVariant={triggerVariant}
            />
            <LabelTag
              labelTag={option.labelTag}
              highlightText={highlightText}
              triggerVariant={triggerVariant}
            />
          </span>
          <Description
            description={option.description}
            highlightedOption={highlightedOption}
            selectedOption={selectedOption}
            highlightText={highlightText}
            triggerVariant={triggerVariant}
          />
          <Tags
            tags={option.tags}
            highlightedOption={highlightedOption}
            selectedOption={selectedOption}
            highlightText={highlightText}
            triggerVariant={triggerVariant}
          />
          <FilteringTags
            filteringTags={option.filteringTags}
            highlightedOption={highlightedOption}
            selectedOption={selectedOption}
            highlightText={highlightText}
            triggerVariant={triggerVariant}
          />
        </span>
      </span>
    )
  }
)

export {
  Option as default
}
