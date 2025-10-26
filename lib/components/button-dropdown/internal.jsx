import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getBaseProps} from '../internal/base-component'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import Dropdown from '../internal/components/dropdown'
import ItemsList from './items-list'
import {useButtonDropdown} from './utils/use-button-dropdown'
import OptionsList from '../internal/components/options-list'
import {InternalButton} from '../button/internal'
import {useMobile} from '../internal/hooks/use-mobile'
import useForwardFocus from '../internal/hooks/forward-focus'
import InternalBox from '../box/internal'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode/'

const InternalButtonDropdown = memo(
  forwardRef(
    (
      {
        items,
        variant = 'normal',
        loading = false,
        loadingText,
        disabled = false,
        expandableGroups = false,
        children,
        onItemClick,
        onItemFollow,
        customTriggerBuilder,
        expandToViewport,
        ariaLabel,
        title,
        description,
        preferCenter,
        mainAction,
        __internalRootRef,
        ...props
      },
      ref
    ) => {
      const isInRestrictedView = useMobile()
      const dropdownId = useUniqueId('dropdown')
      const isMainAction =
        mainAction && (variant === 'primary' || variant === 'normal')
      const isVisualRefresh = useVisualRefresh()
      const {
        isOpen,
        targetItem,
        isHighlighted,
        isKeyboardHighlight,
        isExpanded,
        highlightItem,
        onKeyDown,
        onKeyUp,
        onItemActivate,
        onGroupToggle,
        toggleDropdown,
        closeDropdown,
        setIsUsingMouse
      } = useButtonDropdown({
        items,
        onItemClick,
        onItemFollow,

        onReturnFocus: () => triggerRef.current?.focus({preventScroll: true}),
        expandToViewport,
        hasExpandableGroups: expandableGroups,
        isInRestrictedView
      })
      const handleMouseEvent = () => {
        setIsUsingMouse(true)
      }
      const baseProps = getBaseProps(props)
      const mainActionRef = useRef(null)
      const triggerRef = useRef(null)
      useForwardFocus(ref, isMainAction ? mainActionRef : triggerRef)
      const clickHandler = () => {
        if (!loading && !disabled) {
          toggleDropdown({moveHighlightOnOpen: !isInRestrictedView})
        }
      }
      const canBeOpened = !loading && !disabled
      const triggerVariant =
        variant === 'navigation'
          ? void 0
          : variant === 'inline-icon'
            ? 'inline-icon'
            : variant
      const iconProps =
        variant === 'icon' || variant === 'inline-icon'
          ? {
              iconName: 'ellipsis'
            }
          : {
              iconName: 'caret-down-filled',
              iconAlign: 'right',
              __iconClass:
                canBeOpened && isOpen
                  ? styles['rotate-up']
                  : styles['rotate-down']
            }
      const baseTriggerProps = {
        className: clsx(
          styles['trigger-button'],
          styles['test-utils-button-trigger']
        ),
        ...iconProps,
        variant: triggerVariant,
        loading,
        loadingText,
        disabled,
        onClick: event => {
          event.preventDefault()
          clickHandler()
        },
        ariaLabel,
        ariaExpanded: canBeOpened && isOpen,
        formAction: 'none',
        __nativeAttributes: {
          'aria-haspopup': true
        }
      }
      const triggerId = useUniqueId('awsui-button-dropdown__trigger')
      const triggerHasBadge = () => {
        const flatItems = items.flatMap(item => {
          if ('items' in item) {
            return item.items
          }
          return item
        })
        return (
          variant === 'icon' &&
          !!flatItems?.find(item => {
            if ('badge' in item) {
              return item.badge
            }
          })
        )
      }
      let trigger = null
      if (customTriggerBuilder) {
        trigger = (
          <div className={styles['dropdown-trigger']}>
            {customTriggerBuilder({
              testUtilsClass: styles['test-utils-button-trigger'],
              ariaExpanded: canBeOpened && isOpen,
              onClick: clickHandler,
              triggerRef,
              ariaLabel,
              disabled,
              isOpen
            })}
          </div>
        )
      } else if (isMainAction) {
        const {
          text,
          iconName,
          iconAlt,
          iconSvg,
          iconUrl,
          external,
          externalIconAriaLabel,
          ...mainActionProps
        } = mainAction
        const mainActionIconProps = external
          ? {iconName: 'external', iconAlign: 'right'}
          : {iconName, iconAlt, iconSvg, iconUrl}
        const mainActionAriaLabel = externalIconAriaLabel
          ? `${mainAction.ariaLabel ?? mainAction.text} ${
              mainAction.externalIconAriaLabel
            }`
          : void 0
        trigger = (
          <div
            role='group'
            aria-label={ariaLabel}
            className={styles['split-trigger-wrapper']}>
            <div
              className={clsx(styles['trigger-item'], styles['split-trigger'])}
              onClick={closeDropdown}
              onKeyDown={e => e.stopPropagation()}
              onKeyUp={e => e.stopPropagation()}>
              <InternalButton
                ref={mainActionRef}
                {...mainActionProps}
                {...mainActionIconProps}
                className={styles['trigger-button']}
                variant={variant}
                ariaLabel={mainActionAriaLabel}
                formAction='none'>
                {text}
              </InternalButton>
            </div>
            <div
              className={clsx(
                styles['trigger-item'],
                styles['dropdown-trigger'],
                isVisualRefresh && styles['visual-refresh']
              )}>
              <InternalButton ref={triggerRef} {...baseTriggerProps} />
            </div>
          </div>
        )
      } else {
        trigger = (
          <div className={styles['dropdown-trigger']}>
            <InternalButton
              ref={triggerRef}
              id={triggerId}
              {...baseTriggerProps}
              badge={triggerHasBadge()}>
              {children}
            </InternalButton>
          </div>
        )
      }
      const hasHeader = title || description
      const headerId = useUniqueId('awsui-button-dropdown__header')
      const shouldLabelWithTrigger =
        !ariaLabel &&
        !mainAction &&
        variant !== 'icon' &&
        variant !== 'inline-icon'
      return (
        <div
          {...baseProps}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onMouseDown={handleMouseEvent}
          onMouseMove={handleMouseEvent}
          className={clsx(
            styles['button-dropdown'],
            styles[`variant-${variant}`],
            baseProps.className
          )}
          aria-owns={expandToViewport && isOpen ? dropdownId : void 0}
          ref={__internalRootRef}>
          <Dropdown
            open={canBeOpened && isOpen}
            stretchWidth={false}
            stretchTriggerHeight={variant === 'navigation'}
            expandToViewport={expandToViewport}
            preferCenter={preferCenter}
            onDropdownClose={() => toggleDropdown()}
            trigger={trigger}
            dropdownId={dropdownId}>
            {hasHeader && (
              <div className={styles.header} id={headerId}>
                {title && (
                  <div className={styles.title}>
                    <InternalBox
                      fontSize='heading-s'
                      fontWeight='bold'
                      color='inherit'
                      tagOverride='h2'
                      margin={{vertical: 'n', horizontal: 'n'}}>
                      {title}
                    </InternalBox>
                  </div>
                )}
                {description && (
                  <InternalBox fontSize='body-s'>
                    <span className={styles.description}>{description}</span>
                  </InternalBox>
                )}
              </div>
            )}
            <OptionsList
              open={canBeOpened && isOpen}
              position='static'
              role='menu'
              decreaseBlockMargin={true}
              ariaLabel={ariaLabel}
              ariaLabelledby={
                hasHeader
                  ? headerId
                  : shouldLabelWithTrigger
                    ? triggerId
                    : void 0
              }
              statusType='finished'>
              <ItemsList
                items={items}
                onItemActivate={onItemActivate}
                onGroupToggle={onGroupToggle}
                hasExpandableGroups={expandableGroups}
                targetItem={targetItem}
                isHighlighted={isHighlighted}
                isKeyboardHighlight={isKeyboardHighlight}
                isExpanded={isExpanded}
                lastInDropdown={true}
                highlightItem={highlightItem}
                expandToViewport={expandToViewport}
                variant={variant}
              />
            </OptionsList>
          </Dropdown>
        </div>
      )
    }
  )
)

export {
  InternalButtonDropdown as default
}
