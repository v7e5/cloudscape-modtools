import {useRef, memo} from 'react'
import {useSingleTabStopNavigation} from '../../internal/context/single-tab-stop-navigation-context'
import styles from './styles.css.js'
import InternalIcon from '../../icon/internal'
import clsx from 'clsx'

const ExpandToggleButton = memo(
  ({
    isExpanded,
    onExpandableItemToggle,
    expandButtonLabel,
    collapseButtonLabel
  }) => {
    const buttonRef = useRef(null)
    const {tabIndex} = useSingleTabStopNavigation(buttonRef)
    return (
      <button
        ref={buttonRef}
        tabIndex={tabIndex}
        aria-label={isExpanded ? collapseButtonLabel : expandButtonLabel}
        aria-expanded={isExpanded}
        className={styles['expand-toggle']}
        onClick={onExpandableItemToggle}>
        <InternalIcon
          size='small'
          name='caret-down-filled'
          className={clsx(
            styles['expand-toggle-icon'],
            isExpanded && styles['expand-toggle-icon-expanded']
          )}
        />
      </button>
    )
  }
)

export {
  ExpandToggleButton
}
