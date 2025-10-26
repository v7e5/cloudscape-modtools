import {useEffect, useRef, useState, memo} from 'react'
import Button from '../../button/internal'
import FormField from '../../form-field/internal'
import SpaceBetween from '../../space-between/internal'
import {useClickAway} from './click-away'
import styles from './styles.css.js'
import FocusLock from '../../internal/components/focus-lock'
import LiveRegion from '../../internal/components/live-region'
import {useInternalI18n} from '../../i18n/context'

const noop = () => void 0
const InlineEditor = memo(
  async ({ariaLabels, item, column, onEditEnd, submitEdit, __onRender}) => {
    const [currentEditLoading, setCurrentEditLoading] = useState(false)
    const [currentEditValue, setCurrentEditValue] = useState()
    const i18n = useInternalI18n('table')
    const focusLockRef = useRef(null)
    const cellContext = {
      currentValue: currentEditValue,
      setValue: setCurrentEditValue
    }
    const finishEdit = ({cancelled = false, refocusCell = true} = {}) => {
      if (!cancelled) {
        setCurrentEditValue(void 0)
      }
      onEditEnd({cancelled, refocusCell})
    }
    const onSubmitClick = async evt => {
      evt.preventDefault()
      if (currentEditValue === void 0) {
        finishEdit()
        return
      }
      setCurrentEditLoading(true)
      try {
        await submitEdit(item, column, currentEditValue)
        setCurrentEditLoading(false)
        finishEdit()
      } catch (e) {
        setCurrentEditLoading(false)
        focusLockRef.current?.focusFirst()
      }
    }
    const onCancel = ({reFocusEditedCell = true} = {}) => {
      if (currentEditLoading) {
        return
      }
      finishEdit({cancelled: true, refocusCell: reFocusEditedCell})
    }
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onCancel()
      }
    }
    const clickAwayRef = useClickAway(() =>
      onCancel({reFocusEditedCell: false})
    )
    useEffect(() => {
      if (__onRender) {
        const timer = setTimeout(__onRender, 1)
        return () => clearTimeout(timer)
      }
    }, [__onRender])
    const {
      ariaLabel = void 0,
      validation = noop,
      errorIconAriaLabel,
      constraintText,
      editingCell
    } = column.editConfig
    return (
      <FocusLock restoreFocus={true} ref={focusLockRef}>
        <div
          role='dialog'
          ref={clickAwayRef}
          aria-label={ariaLabels?.activateEditLabel?.(column, item)}
          onKeyDown={handleEscape}>
          <form
            onSubmit={onSubmitClick}
            className={styles['body-cell-editor-form']}>
            <FormField
              stretch={true}
              label={ariaLabel}
              constraintText={constraintText}
              __hideLabel={true}
              __disableGutters={true}
              i18nStrings={{errorIconAriaLabel}}
              errorText={validation(item, currentEditValue)}>
              <div className={styles['body-cell-editor-row']}>
                {editingCell(item, cellContext)}
                <span className={styles['body-cell-editor-controls']}>
                  <SpaceBetween direction='horizontal' size='xxs'>
                    {!currentEditLoading ? (
                      <Button
                        ariaLabel={ariaLabels?.cancelEditLabel?.(column)}
                        formAction='none'
                        iconName='close'
                        variant='inline-icon'
                        onClick={() => onCancel()}
                      />
                    ) : null}
                    <Button
                      ariaLabel={ariaLabels?.submitEditLabel?.(column)}
                      formAction='submit'
                      iconName='check'
                      variant='inline-icon'
                      loading={currentEditLoading}
                    />
                  </SpaceBetween>
                  <LiveRegion>
                    {currentEditLoading
                      ? i18n(
                          'ariaLabels.submittingEditText',
                          ariaLabels?.submittingEditText?.(column)
                        )
                      : ''}
                  </LiveRegion>
                </span>
              </div>
            </FormField>
          </form>
        </div>
      </FocusLock>
    )
  }
)

export {
  InlineEditor
}
