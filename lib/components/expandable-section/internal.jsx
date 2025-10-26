import {useCallback, useRef, memo} from 'react'
import {CSSTransition} from 'react-transition-group'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {useControllable} from '../internal/hooks/use-controllable'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {KeyCode} from '../internal/keycode'
import {fireNonCancelableEvent} from '../internal/events'
import styles from './styles.css.js'
import {ExpandableSectionContainer} from './expandable-section-container'
import {ExpandableSectionHeader} from './expandable-section-header'
import {variantSupportsDescription} from './utils'

const InternalExpandableSection = memo(
  ({
    expanded: controlledExpanded,
    defaultExpanded,
    onChange,
    variant = 'default',
    children,
    header,
    headerText,
    headerCounter,
    headerDescription,
    headerInfo,
    headerActions,
    headingTagOverride,
    disableContentPaddings,
    headerAriaLabel,
    __internalRootRef,
    ...props
  }) => {
    const ref = useRef(null)
    const controlId = useUniqueId()
    const triggerControlId = `${controlId}-trigger`
    const descriptionId = `${controlId}-description`
    const baseProps = getBaseProps(props)
    const [expanded, setExpanded] = useControllable(
      controlledExpanded,
      onChange,
      defaultExpanded,
      {
        componentName: 'ExpandableSection',
        controlledProp: 'expanded',
        changeHandler: 'onChange'
      }
    )
    const onExpandChange = useCallback(
      expanded2 => {
        setExpanded(expanded2)
        fireNonCancelableEvent(onChange, {expanded: expanded2})
      },
      [onChange, setExpanded]
    )
    const onClick = useCallback(() => {
      onExpandChange(!expanded)
    }, [onExpandChange, expanded])
    const onKeyUp = useCallback(
      event => {
        const interactionKeys = [KeyCode.enter, KeyCode.space]
        if (interactionKeys.indexOf(event.keyCode) !== -1) {
          onExpandChange(!expanded)
        }
      },
      [onExpandChange, expanded]
    )
    const onKeyDown = useCallback(event => {
      if (event.keyCode === KeyCode.space) {
        event.preventDefault()
      }
    }, [])
    const triggerProps = {
      ariaControls: controlId,
      ariaLabel: headerAriaLabel,
      ariaLabelledBy: headerAriaLabel ? void 0 : triggerControlId,
      onKeyUp,
      onKeyDown,
      onClick
    }
    const baseVariant = variant === 'stacked' ? 'container' : variant
    return (
      <ExpandableSectionContainer
        {...baseProps}
        expanded={expanded}
        className={clsx(baseProps.className, styles.root)}
        variant={variant}
        disableContentPaddings={disableContentPaddings}
        header={
          <ExpandableSectionHeader
            id={triggerControlId}
            descriptionId={descriptionId}
            className={clsx(styles.header, styles[`header-${baseVariant}`])}
            variant={baseVariant}
            expanded={!!expanded}
            header={header}
            headerText={headerText}
            headerDescription={headerDescription}
            headerCounter={headerCounter}
            headerInfo={headerInfo}
            headerActions={headerActions}
            headingTagOverride={headingTagOverride}
            {...triggerProps}
          />
        }
        __internalRootRef={__internalRootRef}>
        <CSSTransition
          in={expanded}
          timeout={30}
          classNames={{enter: styles['content-enter']}}
          nodeRef={ref}>
          <div
            id={controlId}
            ref={ref}
            className={clsx(
              styles.content,
              styles[`content-${baseVariant}`],
              expanded && styles['content-expanded']
            )}
            role='group'
            aria-label={triggerProps.ariaLabel}
            aria-labelledby={triggerProps.ariaLabelledBy}
            aria-describedby={
              variantSupportsDescription(baseVariant) && headerDescription
                ? descriptionId
                : void 0
            }>
            {children}
          </div>
        </CSSTransition>
      </ExpandableSectionContainer>
    )
  }
)

export {
  InternalExpandableSection as default
}
