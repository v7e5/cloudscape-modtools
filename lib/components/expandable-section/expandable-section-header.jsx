import {memo} from 'react'
import InternalIcon from '../icon/internal'
import clsx from 'clsx'
import styles from './styles.css.js'
import InternalHeader, {
  Description as HeaderDescription
} from '../header/internal'
import {
  variantSupportsDescription,
  variantSupportsInteractiveElements
} from './utils'

const componentName = 'ExpandableSection'
const ExpandableDeprecatedHeader = memo(
  ({
    id,
    className,
    onClick,
    ariaLabel,
    ariaControls,
    expanded,
    children,
    icon,
    onKeyUp,
    onKeyDown,
    variant
  }) => {
    return (
      <div
        id={id}
        role='button'
        className={clsx(
          className,
          styles['expand-button'],
          styles['click-target'],
          styles['header-deprecated']
        )}
        tabIndex={0}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-controls={ariaControls}
        aria-expanded={expanded}>
        <div
          className={clsx(
            styles['icon-container'],
            styles[`icon-container-${variant}`]
          )}>
          {icon}
        </div>
        {children}
      </div>
    )
  }
)
const ExpandableNavigationHeader = memo(
  ({
    id,
    className,
    onClick,
    ariaLabelledBy,
    ariaLabel,
    ariaControls,
    expanded,
    children,
    icon
  }) => {
    return (
      <div id={id} className={clsx(className, styles['click-target'])}>
        <button
          className={clsx(styles['icon-container'], styles['expand-button'])}
          aria-labelledby={ariaLabelledBy}
          aria-label={ariaLabel}
          aria-controls={ariaControls}
          aria-expanded={expanded}
          type='button'
          onClick={onClick}>
          {icon}
        </button>
        {children}
      </div>
    )
  }
)
const ExpandableHeaderTextWrapper = memo(
  ({
    id,
    descriptionId,
    className,
    onClick,
    ariaLabel,
    ariaControls,
    expanded,
    children,
    icon,
    headerDescription,
    headerCounter,
    headerInfo,
    headerActions,
    variant,
    headingTagOverride,
    onKeyUp,
    onKeyDown
  }) => {
    const isContainer = variant === 'container'
    const HeadingTag = headingTagOverride || 'div'
    const supportsInteractiveElements =
      variantSupportsInteractiveElements(variant)
    const restrictClickableArea =
      supportsInteractiveElements && (headerInfo || headerActions)
    const actions = supportsInteractiveElements && headerActions
    const description = variantSupportsDescription(variant) &&
      headerDescription && (
        <span id={descriptionId} className={styles[`description-${variant}`]}>
          {headerDescription}
        </span>
      )
    const listeners = {onClick, onKeyDown, onKeyUp}
    const headerButtonListeners = restrictClickableArea ? listeners : void 0
    const headingTagListeners =
      !headerButtonListeners && !isContainer && description
        ? listeners
        : void 0
    const wrapperListeners =
      !headerButtonListeners && !headingTagListeners ? listeners : void 0
    const headerButton = (
      <span
        className={clsx(
          styles['expand-button'],
          isContainer
            ? styles['header-container-button']
            : styles['header-button'],
          headerButtonListeners && styles['click-target']
        )}
        role='button'
        tabIndex={0}
        aria-label={ariaLabel}
        aria-labelledby={!ariaLabel && description ? id : void 0}
        aria-describedby={description ? descriptionId : void 0}
        aria-controls={ariaControls}
        aria-expanded={expanded}
        {...headerButtonListeners}>
        <span
          className={clsx(
            styles['icon-container'],
            styles[`icon-container-${variant}`]
          )}>
          {icon}
        </span>
        <span id={id} className={styles['header-text']}>
          {children}
        </span>
      </span>
    )
    return (
      <div
        className={clsx(className, wrapperListeners && styles['click-target'])}
        {...wrapperListeners}>
        {isContainer ? (
          <InternalHeader
            variant='h2'
            description={description}
            counter={headerCounter}
            info={headerInfo}
            actions={actions}
            headingTagOverride={headingTagOverride}>
            {headerButton}
          </InternalHeader>
        ) : (
          <>
            <div className={clsx(actions && styles['header-actions-wrapper'])}>
              <HeadingTag
                className={clsx(
                  styles['header-wrapper'],
                  headingTagListeners && styles['click-target']
                )}
                {...headingTagListeners}>
                {headerButton}
              </HeadingTag>
              {actions}
            </div>
            {description && (
              <HeaderDescription variantOverride='h3'>
                {description}
              </HeaderDescription>
            )}
          </>
        )}
      </div>
    )
  }
)
const ExpandableSectionHeader = memo(
  ({
    id,
    descriptionId,
    className,
    variant,
    header,
    headerText,
    headerDescription,
    headerCounter,
    headerInfo,
    headerActions,
    headingTagOverride,
    expanded,
    ariaControls,
    ariaLabel,
    ariaLabelledBy,
    onKeyUp,
    onKeyDown,
    onClick
  }) => {
    const icon = (
      <InternalIcon
        size={variant === 'container' ? 'medium' : 'normal'}
        className={clsx(styles.icon, expanded && styles.expanded)}
        name='caret-down-filled'
      />
    )
    const defaultHeaderProps = {
      id,
      icon,
      expanded,
      ariaControls,
      ariaLabel,
      onClick,
      variant
    }
    const wrapperClassName = clsx(
      styles.wrapper,
      styles[`wrapper-${variant}`],
      expanded && styles['wrapper-expanded']
    )
    if (variant === 'navigation') {
      return (
        <ExpandableNavigationHeader
          className={clsx(className, wrapperClassName)}
          ariaLabelledBy={ariaLabelledBy}
          {...defaultHeaderProps}>
          {headerText ?? header}
        </ExpandableNavigationHeader>
      )
    }
    if (headerText) {
      return (
        <ExpandableHeaderTextWrapper
          className={clsx(
            className,
            wrapperClassName,
            expanded && styles.expanded
          )}
          descriptionId={descriptionId}
          headerDescription={headerDescription}
          headerCounter={headerCounter}
          headerInfo={headerInfo}
          headerActions={headerActions}
          headingTagOverride={headingTagOverride}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          {...defaultHeaderProps}>
          {headerText}
        </ExpandableHeaderTextWrapper>
      )
    }
    return (
      <ExpandableDeprecatedHeader
        className={clsx(
          className,
          wrapperClassName,
          styles.focusable,
          expanded && styles.expanded
        )}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        {...defaultHeaderProps}>
        {header}
      </ExpandableDeprecatedHeader>
    )
  }
)

export {
  ExpandableSectionHeader,
  componentName
}
