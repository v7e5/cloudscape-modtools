import {memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'
import InternalIcon from '../../../icon/internal'
import HighlightMatch from './highlight-match'

const Label = memo(({label, prefix, highlightText, triggerVariant}) => (
  <span
    className={clsx(
      styles.label,
      triggerVariant && styles['trigger-variant']
    )}>
    {prefix && (
      <span
        className={clsx(
          styles['label-prefix'],
          triggerVariant && styles['trigger-variant']
        )}>
        {prefix}{' '}
      </span>
    )}
    <HighlightMatch str={label} highlightText={highlightText} />
  </span>
))
const LabelTag = memo(({labelTag, highlightText, triggerVariant}) =>
  labelTag ? (
    <span
      className={clsx(
        styles['label-tag'],
        triggerVariant && styles['trigger-variant']
      )}>
      <HighlightMatch str={labelTag} highlightText={highlightText} />
    </span>
  ) : null
)
const Description = memo(
  ({
    description,
    highlightedOption,
    highlightText,
    selectedOption,
    triggerVariant
  }) =>
    description ? (
      <span
        className={clsx(styles.description, {
          [styles['trigger-variant']]: triggerVariant,
          [styles.highlighted]: highlightedOption,
          [styles.selected]: selectedOption
        })}>
        <HighlightMatch str={description} highlightText={highlightText} />
      </span>
    ) : null
)
const Tags = memo(
  ({
    tags,
    highlightedOption,
    highlightText,
    selectedOption,
    triggerVariant
  }) =>
    tags ? (
      <span
        className={clsx(styles.tags, {
          [styles.highlighted]: highlightedOption,
          [styles.selected]: selectedOption
        })}>
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={clsx(
              styles.tag,
              triggerVariant && styles['trigger-variant']
            )}>
            <HighlightMatch str={tag} highlightText={highlightText} />
          </span>
        ))}
      </span>
    ) : null
)
const FilteringTags = memo(
  ({
    filteringTags,
    highlightedOption,
    highlightText,
    selectedOption,
    triggerVariant
  }) => {
    if (!highlightText || !filteringTags) {
      return null
    }
    const searchElement = highlightText.toLowerCase()
    return (
      <span
        className={clsx(styles.tags, {
          [styles.highlighted]: highlightedOption,
          [styles.selected]: selectedOption
        })}>
        {filteringTags.map((filteringTag, key) => {
          const match =
            filteringTag.toLowerCase().indexOf(searchElement) !== -1
          if (match) {
            return (
              <span
                className={clsx(
                  styles.tag,
                  triggerVariant && styles['trigger-variant']
                )}
                key={key}
                aria-disabled={true}>
                <HighlightMatch
                  str={filteringTag}
                  highlightText={highlightText}
                />
              </span>
            )
          }
          return null
        })}
      </span>
    )
  }
)
const OptionIcon = memo(props => {
  if (!props.name && !props.url && !props.svg) {
    return null
  }
  return (
    <span
      className={clsx(
        styles.icon,
        props.size === 'big' && [styles[`icon-size-big`]]
      )}>
      <InternalIcon {...props} />
    </span>
  )
})

export {
  Description,
  FilteringTags,
  Label,
  LabelTag,
  OptionIcon,
  Tags
}
