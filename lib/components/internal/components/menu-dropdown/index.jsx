import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../../base-component'
import InternalButtonDropdown from '../../../button-dropdown/internal'
import InternalIcon from '../../../icon/internal'
import buttonDropdownStyles from '../../../button-dropdown/styles.css.js'
import styles from './styles.css.js'

const ButtonTrigger = memo(
  forwardRef(
    (
      {
        testUtilsClass,
        iconName,
        iconUrl,
        iconAlt,
        iconSvg,
        badge,
        ariaLabel,
        offsetRight,
        disabled,
        expanded,
        children,
        onClick
      },
      ref
    ) => {
      const hasIcon = iconName || iconUrl || iconSvg
      return (
        <button
          ref={ref}
          type='button'
          className={clsx(
            styles.button,
            styles[`offset-right-${offsetRight}`],
            testUtilsClass,
            {
              [styles.expanded]: expanded
            }
          )}
          aria-label={ariaLabel}
          aria-expanded={!!expanded}
          aria-haspopup={true}
          disabled={disabled}
          onClick={event => {
            event.preventDefault()
            onClick && onClick()
          }}>
          {hasIcon && (
            <InternalIcon
              className={styles.icon}
              name={iconName}
              url={iconUrl}
              alt={iconAlt}
              svg={iconSvg}
              badge={badge}
            />
          )}
          {children && <span className={styles.text}>{children}</span>}
          {children && (
            <InternalIcon
              name='caret-down-filled'
              className={
                expanded
                  ? buttonDropdownStyles['rotate-up']
                  : buttonDropdownStyles['rotate-down']
              }
            />
          )}
        </button>
      )
    }
  )
)
const MenuDropdown = memo(
  ({
    iconName,
    iconUrl,
    iconAlt,
    iconSvg,
    badge,
    offsetRight,
    children,
    ...props
  }) => {
    const baseProps = getBaseProps(props)
    const dropdownTrigger = ({
      triggerRef,
      ariaLabel,
      isOpen,
      testUtilsClass,
      disabled,
      onClick
    }) => {
      return (
        <ButtonTrigger
          testUtilsClass={testUtilsClass}
          ref={triggerRef}
          disabled={disabled}
          expanded={isOpen}
          iconName={iconName}
          iconUrl={iconUrl}
          iconAlt={iconAlt}
          iconSvg={iconSvg}
          badge={badge}
          ariaLabel={ariaLabel}
          offsetRight={offsetRight}
          onClick={onClick}>
          {children}
        </ButtonTrigger>
      )
    }
    return (
      <InternalButtonDropdown
        {...baseProps}
        {...props}
        variant='navigation'
        customTriggerBuilder={dropdownTrigger}
        preferCenter={true}
      />
    )
  }
)

export {
  ButtonTrigger,
  MenuDropdown as default
}
