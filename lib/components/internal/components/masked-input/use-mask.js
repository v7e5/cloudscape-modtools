import {KeyCode} from '../../keycode'
import {isCommand, isDigit} from './utils/keys'
import {backspaceHandler, keyHandler, enterHandler} from './keyboard-handler'

const onAutoComplete = (value, onChange, maskFormat) => {
  if (!value) {
    return
  }
  const autoCompletedValue = maskFormat.autoComplete(value)
  if (autoCompletedValue !== value) {
    onChange(autoCompletedValue)
  }
}
const preventDefault = (event, result) => result && event.preventDefault()
const useMask = ({
  value = '',
  onBlur,
  onChange,
  onKeyDown,
  format,
  inputRef,
  autofix = false,
  disableAutocompleteOnBlur = false,
  setPosition
}) => {
  const onMaskChange = updatedValue => {
    const autofixedUpdatedValue = autofix
      ? format.correctMinMaxValues(updatedValue)
      : updatedValue
    if (
      autofixedUpdatedValue === value ||
      !format.isValid(autofixedUpdatedValue)
    ) {
      return
    }
    onChange(autofixedUpdatedValue)
  }
  const initialValue = autofix ? format.correctMinMaxValues(value) : value
  const maskedValue = format.getValidValue(initialValue)
  return {
    value: maskedValue,
    onKeyDown: event => {
      const selectionStart = inputRef.current?.selectionStart || 0
      const selectionEnd = inputRef.current?.selectionEnd || 0
      let result
      const {keyCode, key, ctrlKey, metaKey} = event.detail
      if (isDigit(key) || format.isSeparator(key)) {
        result = keyHandler(
          maskedValue,
          key,
          format,
          selectionStart,
          selectionEnd
        )
        preventDefault(event, result)
      } else if (keyCode === KeyCode.backspace) {
        result = backspaceHandler(
          maskedValue,
          format,
          selectionStart,
          selectionEnd
        )
        preventDefault(event, result)
      } else if (keyCode === KeyCode.enter) {
        result = enterHandler(maskedValue, format)
      } else if (!isCommand(keyCode, ctrlKey, metaKey)) {
        event.preventDefault()
      }
      if (result) {
        const {value: value2, position} = result
        onMaskChange(value2)
        setPosition(position)
      }
      onKeyDown && onKeyDown(event)
    },
    onChange: ({detail}) => onMaskChange(detail.value),
    onBlur: () => {
      if (!disableAutocompleteOnBlur) {
        onAutoComplete(maskedValue, onChange, format)
      }
      onBlur && onBlur()
    },
    onPaste: event => {
      const text = (event.clipboardData || window.clipboardData).getData(
        'text'
      )
      const selectionStart = inputRef.current?.selectionStart || 0
      const selectionEnd = inputRef.current?.selectionEnd || 0
      const formattedText = format.formatPastedText(
        text,
        maskedValue,
        selectionStart,
        selectionEnd
      )
      onMaskChange(formattedText)
    }
  }
}

export {
  useMask as default
}
