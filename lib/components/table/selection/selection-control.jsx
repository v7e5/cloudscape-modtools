import {useContext, memo} from 'react'
import clsx from 'clsx'
import {KeyCode} from '../../internal/keycode'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import InternalCheckbox from '../../checkbox/internal'
import RadioButton from '../../radio-group/radio-button'
import styles from './styles.css.js'
import {SingleTabStopNavigationContext} from '../../internal/context/single-tab-stop-navigation-context'

const SelectionControl = memo(
  ({
    selectionType,
    indeterminate = false,
    onShiftToggle,
    onFocusUp,
    onFocusDown,
    name,
    ariaLabel,
    focusedComponent,
    ...sharedProps
  }) => {
    const controlId = useUniqueId()
    const isMultiSelection = selectionType === 'multi'
    const {navigationActive} = useContext(SingleTabStopNavigationContext)
    const setShiftState = event => {
      if (isMultiSelection) {
        onShiftToggle && onShiftToggle(event.shiftKey)
      }
    }
    const onMouseDownHandler = event => {
      setShiftState(event)
      if (isMultiSelection) {
        event.preventDefault()
      }
    }
    const handleKeyDown = event => {
      setShiftState(event)
      if (isMultiSelection && !navigationActive) {
        if (event.keyCode === KeyCode.up) {
          event.preventDefault()
          onFocusUp && onFocusUp(event)
        }
        if (event.keyCode === KeyCode.down) {
          event.preventDefault()
          onFocusDown && onFocusDown(event)
        }
      }
    }
    const handleClick = event => {
      const target = event.currentTarget
      const nativeInput =
        target.tagName === 'INPUT' ? target : target.querySelector('input')
      nativeInput?.focus()
    }
    const selector = isMultiSelection ? (
      <InternalCheckbox
        {...sharedProps}
        showOutline={focusedComponent === 'selection-control'}
        controlId={controlId}
        data-focus-id='selection-control'
        indeterminate={indeterminate}
      />
    ) : (
      <RadioButton
        {...sharedProps}
        controlId={controlId}
        name={name}
        value={''}
        label={''}
      />
    )
    return (
      <>
        <label
          onKeyDown={handleKeyDown}
          onKeyUp={setShiftState}
          onMouseDown={onMouseDownHandler}
          onMouseUp={setShiftState}
          onClick={handleClick}
          htmlFor={controlId}
          className={clsx(styles.label, styles.root)}
          aria-label={ariaLabel}
          title={ariaLabel}>
          {selector}
        </label>
        <span className={clsx(styles.stud)} aria-hidden={true}>
          &nbsp;
        </span>
      </>
    )
  }
)

export {
  SelectionControl
}
