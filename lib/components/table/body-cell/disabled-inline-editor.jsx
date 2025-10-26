import {useRef, useState, memo} from 'react'
import clsx from 'clsx'
import useHiddenDescription from '../../button-dropdown/utils/use-hidden-description'
import Icon from '../../icon/internal'
import PopoverContainer from '../../popover/container'
import PopoverBody from '../../popover/body'
import Portal from '../../internal/components/portal'
import {usePortalModeClasses} from '../../internal/hooks/use-portal-mode-classes'
import Arrow from '../../popover/arrow'
import {useClickAway} from './click-away'
import {TableTdElement} from './td-element'
import styles from './styles.css.js'
import {useSingleTabStopNavigation} from '../../internal/context/single-tab-stop-navigation-context'

const DisabledInlineEditor = memo(
  ({
    className,
    item,
    column,
    ariaLabels,
    isEditing,
    onEditStart,
    onEditEnd,
    editDisabledReason,
    isVisualRefresh,
    interactiveCell = true,
    resizableColumns = false,
    ...rest
  }) => {
    const clickAwayRef = useClickAway(() => {
      if (isEditing) {
        onEditEnd(true)
      }
    })
    const [hasHover, setHasHover] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)
    const showIcon = hasHover || hasFocus || isEditing || !interactiveCell
    const iconRef = useRef(null)
    const buttonRef = useRef(null)
    const portalRef = useRef(null)
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onEditEnd(true)
      }
    }
    const onClick = () => {
      onEditStart()
      buttonRef.current?.focus()
    }
    const {targetProps, descriptionEl} =
      useHiddenDescription(editDisabledReason)
    const portalClasses = usePortalModeClasses(portalRef)
    const {tabIndex} = useSingleTabStopNavigation(buttonRef)
    return (
      <TableTdElement
        {...rest}
        nativeAttributes={{'data-inline-editing-active': isEditing.toString()}}
        className={clsx(
          className,
          styles['body-cell-editable'],
          interactiveCell && styles['body-cell-interactive'],
          resizableColumns && styles['resizable-columns'],
          isEditing && styles['body-cell-edit-disabled-popover'],
          isVisualRefresh && styles['is-visual-refresh']
        )}
        onClick={interactiveCell && !isEditing ? onClick : void 0}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        ref={clickAwayRef}>
        {column.cell(item)}
        <div className={styles['body-cell-editor-wrapper']}>
          <button
            ref={buttonRef}
            tabIndex={tabIndex}
            className={clsx(
              styles['body-cell-editor'],
              styles['body-cell-editor-disabled']
            )}
            aria-label={ariaLabels?.activateEditLabel?.(column, item)}
            aria-haspopup='dialog'
            aria-disabled='true'
            onClick={!interactiveCell && !isEditing ? onClick : void 0}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            onKeyDown={handleEscape}
            {...targetProps}>
            {showIcon && (
              <Icon
                name='lock-private'
                variant='normal'
                __internalRootRef={iconRef}
              />
            )}
            {descriptionEl}
          </button>
        </div>
        {isEditing && (
          <span ref={portalRef}>
            <Portal>
              <span className={portalClasses}>
                <PopoverContainer
                  size='medium'
                  fixedWidth={false}
                  position='top'
                  trackRef={iconRef}
                  arrow={memo(position => <Arrow position={position} />)}
                  renderWithPortal={true}
                  zIndex={2e3}>
                  <PopoverBody
                    dismissButton={false}
                    dismissAriaLabel={void 0}
                    header={null}
                    onDismiss={() => {}}
                    overflowVisible='both'>
                    <span aria-live='polite'>{editDisabledReason}</span>
                  </PopoverBody>
                </PopoverContainer>
              </span>
            </Portal>
          </span>
        )}
      </TableTdElement>
    )
  }
)

export {
  DisabledInlineEditor
}
