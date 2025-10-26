import {useEffect, useRef, useState, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import Icon from '../../icon/internal'
import {TableTdElement} from './td-element'
import {InlineEditor} from './inline-editor'
import LiveRegion from '../../internal/components/live-region/'
import {useInternalI18n} from '../../i18n/context'
import {usePrevious} from '../../internal/hooks/use-previous'
import {useSingleTabStopNavigation} from '../../internal/context/single-tab-stop-navigation-context'
import {DisabledInlineEditor} from './disabled-inline-editor'

const submitHandlerFallback = () => {
  throw new Error(
    'The function `handleSubmit` is required for editable columns'
  )
}
const TableCellEditable = memo(
  ({
    className,
    item,
    column,
    isEditing,
    onEditStart,
    onEditEnd,
    submitEdit,
    ariaLabels,
    isVisualRefresh,
    resizableColumns = false,
    successfulEdit = false,
    interactiveCell = true,
    ...rest
  }) => {
    const i18n = useInternalI18n('table')
    const editActivateRef = useRef(null)
    const tdNativeAttributes = {
      'data-inline-editing-active': isEditing.toString()
    }
    const isFocusMoveNeededRef = useRef(false)
    useEffect(() => {
      if (
        !isEditing &&
        editActivateRef.current &&
        isFocusMoveNeededRef.current
      ) {
        isFocusMoveNeededRef.current = false
        editActivateRef.current.focus()
      }
    }, [isEditing])
    const [hasHover, setHasHover] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)
    const showIcon = hasHover || hasFocus || !interactiveCell
    const prevSuccessfulEdit = usePrevious(successfulEdit)
    const prevHasFocus = usePrevious(hasFocus)
    const [showSuccessIcon, setShowSuccessIcon] = useState(false)
    useEffect(() => {
      if (successfulEdit && prevSuccessfulEdit && !hasFocus && prevHasFocus) {
        setShowSuccessIcon(false)
      }
      if (successfulEdit && !prevSuccessfulEdit) {
        setShowSuccessIcon(true)
      }
    }, [hasFocus, successfulEdit, prevHasFocus, prevSuccessfulEdit])
    const {tabIndex: editActivateTabIndex} =
      useSingleTabStopNavigation(editActivateRef)
    return (
      <TableTdElement
        {...rest}
        nativeAttributes={tdNativeAttributes}
        className={clsx(
          className,
          styles['body-cell-editable'],
          interactiveCell && styles['body-cell-interactive'],
          resizableColumns && styles['resizable-columns'],
          isEditing && styles['body-cell-edit-active'],
          showSuccessIcon && showIcon && styles['body-cell-has-success'],
          isVisualRefresh && styles['is-visual-refresh']
        )}
        onClick={interactiveCell && !isEditing ? onEditStart : void 0}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}>
        {isEditing ? (
          <InlineEditor
            ariaLabels={ariaLabels}
            column={column}
            item={item}
            onEditEnd={options => {
              setShowSuccessIcon(false)
              isFocusMoveNeededRef.current = options.refocusCell
              onEditEnd(options.cancelled)
            }}
            submitEdit={submitEdit ?? submitHandlerFallback}
          />
        ) : (
          <>
            {column.cell(item)}
            {showSuccessIcon && showIcon && (
              <>
                <span
                  className={styles['body-cell-success']}
                  aria-label={ariaLabels?.successfulEditLabel?.(column)}
                  role='img'
                  onMouseDown={e => {
                    e.preventDefault()
                  }}>
                  <Icon name='status-positive' variant='success' />
                </span>
                <LiveRegion>
                  {i18n(
                    'ariaLabels.successfulEditLabel',
                    ariaLabels?.successfulEditLabel?.(column)
                  )}
                </LiveRegion>
              </>
            )}
            <div className={styles['body-cell-editor-wrapper']}>
              <button
                className={styles['body-cell-editor']}
                aria-label={ariaLabels?.activateEditLabel?.(column, item)}
                ref={editActivateRef}
                onClick={!interactiveCell && !isEditing ? onEditStart : void 0}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                tabIndex={editActivateTabIndex}>
                {showIcon && <Icon name='edit' />}
              </button>
            </div>
          </>
        )}
      </TableTdElement>
    )
  }
)

const TableBodyCell = memo(({isEditable, ...rest}) => {
  const isExpandableColumnCell = rest.level !== void 0
  const editDisabledReason = rest.column.editConfig?.disabledReason?.(
    rest.item
  )
  if (editDisabledReason && !isExpandableColumnCell) {
    return (
      <DisabledInlineEditor
        editDisabledReason={editDisabledReason}
        {...rest}
      />
    )
  }
  if ((isEditable || rest.isEditing) && !isExpandableColumnCell) {
    return <TableCellEditable {...rest} />
  }
  const {column, item} = rest
  return <TableTdElement {...rest}>{column.cell(item)}</TableTdElement>
})

export {
  TableBodyCell
}
