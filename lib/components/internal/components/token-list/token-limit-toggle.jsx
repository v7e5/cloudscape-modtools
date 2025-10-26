import {useCallback, memo} from 'react'
import InternalIcon from '../../../icon/internal'
import {fireNonCancelableEvent} from '../../events'
import styles from './styles.css.js'
import {useInternalI18n} from '../../../i18n/context'

const TokenLimitToggle = memo(
  ({
    controlId,
    allHidden,
    expanded,
    numberOfHiddenOptions,
    onClick,
    i18nStrings = {},
    limitShowFewerAriaLabel,
    limitShowMoreAriaLabel
  }) => {
    const i18n = useInternalI18n('token-group')
    const numberOfHiddenOptionLabel = allHidden
      ? numberOfHiddenOptions
      : `+${numberOfHiddenOptions}`
    const description = expanded
      ? i18n('i18nStrings.limitShowFewer', i18nStrings.limitShowFewer)
      : `${
          i18n('i18nStrings.limitShowMore', i18nStrings.limitShowMore) || ''
        } (${numberOfHiddenOptionLabel})`
    const ariaLabel = expanded
      ? limitShowFewerAriaLabel
      : limitShowMoreAriaLabel
    const handleClick = useCallback(() => {
      fireNonCancelableEvent(onClick, null)
    }, [onClick])
    return (
      <button
        type='button'
        className={styles.toggle}
        onClick={handleClick}
        aria-controls={controlId}
        aria-expanded={expanded}
        aria-label={ariaLabel}>
        <InternalIcon
          name={expanded ? 'treeview-collapse' : 'treeview-expand'}
        />
        <span className={styles.description}>{description}</span>
      </button>
    )
  }
)

export {
  TokenLimitToggle as default
}
