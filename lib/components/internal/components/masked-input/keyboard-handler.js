const backspaceHandler = (
  initialValue,
  format,
  selectionStart,
  selectionEnd
) => {
  const multiCharDelete = selectionStart !== selectionEnd
  if (multiCharDelete) {
    const isCursorAtEnd = selectionEnd === initialValue.length
    if (!isCursorAtEnd) {
      return format.replaceDigitsWithZeroes(
        initialValue,
        selectionStart,
        selectionEnd
      )
    }
    return {
      value: initialValue.slice(0, selectionStart),
      position: selectionStart
    }
  }
  const isSeparator = format.isSegmentStart(selectionStart)
  const atEnd = selectionStart === initialValue.length
  if (!atEnd) {
    if (isSeparator) {
      return format.deleteSeparator(initialValue, selectionStart)
    } else {
      return format.deleteDigit(initialValue, selectionStart)
    }
  }
  if (isSeparator) {
    return {
      value: initialValue.slice(0, selectionStart - 2),
      position: selectionStart - 2
    }
  }
  return {
    value: initialValue.slice(0, selectionStart - 1),
    position: selectionStart - 1
  }
}
const keyHandler = (
  initialValue,
  key,
  format,
  selectionStart,
  selectionEnd
) => {
  let value = initialValue
  const position = selectionStart
  if (
    selectionStart === value.length &&
    value.length === format.getMaxLength()
  ) {
    return {value, position}
  }
  if (selectionStart !== value.length && selectionEnd === value.length) {
    const sliceEnd = format.isCursorAtSeparator(selectionStart)
      ? selectionStart + 1
      : selectionStart
    value = initialValue.slice(0, sliceEnd)
  }
  if (format.isCursorAtSeparator(position)) {
    return {value, position: position + 1}
  }
  return format.processKey(value, key, position)
}
const enterHandler = (value, format) => {
  if (!value) {
    return {value: '', position: 0}
  }
  const autoCompletedValue = format.autoComplete(value)
  const position = autoCompletedValue.length
  return {value: autoCompletedValue, position}
}

export {
  backspaceHandler,
  enterHandler,
  keyHandler
}
