import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {InternalButton} from '../../button/internal'
import InternalIcon from '../../icon/internal'
import styles from './styles.css.js'

const togglesConfig = {
  navigation: {
    TagName: 'nav',
    iconName: 'menu',
    getLabels: (labels = {}) => ({
      mainLabel: labels.navigation,
      openLabel: labels.navigationToggle,
      closeLabel: labels.navigationClose
    })
  },
  tools: {
    TagName: 'aside',
    iconName: 'status-info',
    getLabels: (labels = {}) => ({
      mainLabel: labels.tools,
      openLabel: labels.toolsToggle,
      closeLabel: labels.toolsClose
    })
  }
}
const ToggleButton = memo(
  forwardRef(
    (
      {
        className,
        ariaLabel,
        ariaExpanded,
        ariaControls,
        iconName,
        iconSvg,
        disabled,
        testId,
        onClick,
        badge
      },
      ref
    ) => {
      return (
        <button
          ref={ref}
          className={clsx(className, styles['toggle-button'])}
          aria-label={ariaLabel}
          type='button'
          onClick={onClick}
          disabled={disabled}
          aria-expanded={ariaExpanded}
          aria-haspopup={ariaExpanded ? void 0 : true}
          aria-controls={ariaControls}
          data-testid={testId}>
          <InternalIcon svg={iconSvg} name={iconName} badge={badge} />
        </button>
      )
    }
  )
)
const CloseButton = memo(
  forwardRef(({className, ariaLabel, onClick}, ref) => {
    return (
      <span className={styles['close-button']}>
        <InternalButton
          ref={ref}
          className={className}
          ariaLabel={ariaLabel}
          variant='icon'
          formAction='none'
          iconName='close'
          onClick={onClick}
        />
      </span>
    )
  })
)

export {
  CloseButton,
  ToggleButton,
  togglesConfig
}
