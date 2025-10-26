const getClosestCell = element => {
  return element.closest('td,th')
}
const isElementDisabled = element => {
  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLButtonElement
  ) {
    return element.disabled
  }
  return false
}
const defaultIsSuppressed = target => {
  let current = target
  while (current) {
    if (isTableCell(current)) {
      return false
    }
    if (
      current.getAttribute('role') === 'dialog' ||
      current.getAttribute('data-awsui-table-suppress-navigation') === 'true'
    ) {
      return true
    }
    current = current.parentElement
  }
  return false
}
const findTableRowByAriaRowIndex = (table, targetAriaRowIndex, delta) => {
  let targetRow = null
  const rowElements = Array.from(table.querySelectorAll('tr[aria-rowindex]'))
  if (delta < 0) {
    rowElements.reverse()
  }
  for (const element of rowElements) {
    const rowIndex = parseInt(element.getAttribute('aria-rowindex') ?? '')
    targetRow = element
    if (rowIndex === targetAriaRowIndex) {
      break
    }
    if (delta >= 0 && rowIndex > targetAriaRowIndex) {
      break
    }
    if (delta < 0 && rowIndex < targetAriaRowIndex) {
      break
    }
  }
  return targetRow
}
const findTableRowCellByAriaColIndex = (
  tableRow,
  targetAriaColIndex,
  delta
) => {
  let targetCell = null
  const cellElements = Array.from(
    tableRow.querySelectorAll('td[aria-colindex],th[aria-colindex]')
  )
  if (delta < 0) {
    cellElements.reverse()
  }
  for (const element of cellElements) {
    const columnIndex = parseInt(element.getAttribute('aria-colindex') ?? '')
    targetCell = element
    if (columnIndex === targetAriaColIndex) {
      break
    }
    if (delta >= 0 && columnIndex > targetAriaColIndex) {
      break
    }
    if (delta < 0 && columnIndex < targetAriaColIndex) {
      break
    }
  }
  return targetCell
}
const isTableCell = element => {
  return element.tagName === 'TD' || element.tagName === 'TH'
}
const focusNextElement = element => {
  if (element) {
    if (isTableCell(element)) {
      element.tabIndex = -1
    }
    element.focus()
  }
}

export {
  defaultIsSuppressed,
  findTableRowByAriaRowIndex,
  findTableRowCellByAriaColIndex,
  focusNextElement,
  getClosestCell,
  isElementDisabled,
  isTableCell
}
