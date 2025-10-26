import {useCallback, useEffect, useMemo} from 'react'
import {scrollElementIntoView} from '../internal/utils/scrollable-containers'

const iterateTableCells = (table, func) => {
  table.querySelectorAll('tr').forEach((row, rowIndex) => {
    row.querySelectorAll('td').forEach((cell, cellIndex) => {
      func(cell, rowIndex, cellIndex)
    })
  })
}
const useTableFocusNavigation = ({
  enableKeyboardNavigation,
  selectionType,
  tableRoot,
  columnDefinitions,
  numRows
}) => {
  const focusableColumns = useMemo(() => {
    const cols = columnDefinitions.map(column => !!column.editConfig)
    if (selectionType) {
      cols.unshift(false)
    }
    return cols
  }, [columnDefinitions, selectionType])
  const maxColumnIndex = focusableColumns.length - 1
  const minColumnIndex = selectionType ? 1 : 0
  const focusCell = useCallback(
    (rowIndex, columnIndex) => {
      if (tableRoot?.current) {
        iterateTableCells(tableRoot.current, (cell, rIndex, cIndex) => {
          if (rIndex === rowIndex && cIndex === columnIndex) {
            const editButton = cell.querySelector('button:last-child')
            if (editButton) {
              editButton.focus?.()
              scrollElementIntoView(editButton)
            }
          }
        })
      }
    },
    [tableRoot]
  )
  const shiftFocus = useCallback(
    (vertical, horizontal) => {
      const focusedCell = tableRoot.current?.querySelector('td:focus-within')
      if (!focusedCell) {
        return
      }
      const columnIndex = focusedCell.cellIndex
      const rowIndex = focusedCell.parentElement.rowIndex
      let newRowIndex = rowIndex
      let newColumnIndex = columnIndex
      if (vertical !== 0) {
        newRowIndex = Math.min(numRows, Math.max(rowIndex + vertical, 0))
      }
      if (horizontal !== 0) {
        while (
          newColumnIndex <= maxColumnIndex &&
          newColumnIndex >= minColumnIndex
        ) {
          newColumnIndex += horizontal
          if (focusableColumns[newColumnIndex]) {
            break
          }
        }
      }
      if (
        (rowIndex !== newRowIndex || columnIndex !== newColumnIndex) &&
        tableRoot.current
      ) {
        focusCell(newRowIndex, newColumnIndex)
      }
    },
    [
      focusCell,
      focusableColumns,
      maxColumnIndex,
      minColumnIndex,
      numRows,
      tableRoot
    ]
  )
  const handleArrowKeyEvents = useCallback(
    event => {
      const abort =
        !!tableRoot.current?.querySelector(
          '[data-inline-editing-active = "true"]'
        ) || !document.activeElement?.closest('[data-inline-editing-active]')
      if (abort) {
        return
      }
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          shiftFocus(-1, 0)
          break
        case 'ArrowDown':
          event.preventDefault()
          shiftFocus(1, 0)
          break
        case 'ArrowLeft':
          event.preventDefault()
          shiftFocus(0, -1)
          break
        case 'ArrowRight':
          event.preventDefault()
          shiftFocus(0, 1)
          break
        default:
          return
      }
    },
    [shiftFocus, tableRoot]
  )
  useEffect(() => {
    if (!tableRoot.current || enableKeyboardNavigation) {
      return
    }
    const tableElement = tableRoot.current
    tableRoot.current.addEventListener('keydown', handleArrowKeyEvents)
    return () =>
      tableElement &&
      tableElement.removeEventListener('keydown', handleArrowKeyEvents)
  }, [
    enableKeyboardNavigation,
    focusableColumns,
    handleArrowKeyEvents,
    tableRoot
  ])
}

export {
  useTableFocusNavigation as default
}
