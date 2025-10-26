import {useEffect, useMemo, memo} from 'react'
import {
  defaultIsSuppressed,
  findTableRowByAriaRowIndex,
  findTableRowCellByAriaColIndex,
  focusNextElement,
  getClosestCell,
  isElementDisabled,
  isTableCell
} from './utils'
import {useStableCallback} from '~/components/internal/toolkit/internal'
import {nodeBelongs} from '../../internal/utils/node-belongs'
import {getAllFocusables} from '../../internal/components/focus-lock/utils'
import {SingleTabStopNavigationContext} from '../../internal/context/single-tab-stop-navigation-context'
import handleKey, {isEventLike} from '../../internal/utils/handle-key'
import {KeyCode} from '../../internal/keycode'

const GridNavigationProvider = memo(
  ({keyboardNavigation, pageSize, getTable, children}) => {
    const gridNavigation = useMemo(() => new GridNavigationProcessor(), [])
    const getTableStable = useStableCallback(getTable)
    useEffect(() => {
      if (keyboardNavigation) {
        const table = getTableStable()
        table && gridNavigation.init(table)
      }
      return () => gridNavigation.cleanup()
    }, [keyboardNavigation, gridNavigation, getTableStable])
    useEffect(() => {
      gridNavigation.update({pageSize})
    }, [gridNavigation, pageSize])
    useEffect(() => {
      if (keyboardNavigation) {
        gridNavigation.refresh()
      }
    })
    return (
      <SingleTabStopNavigationContext.Provider
        value={{
          navigationActive: keyboardNavigation,
          registerFocusable: gridNavigation.registerFocusable
        }}>
        {children}
      </SingleTabStopNavigationContext.Provider>
    )
  }
)

class GridNavigationProcessor {
  _pageSize = 0
  _table = null

  focusedCell = null
  keepUserIndex = false
  focusables = new Set()
  focusHandlers = new Map()
  focusablesState = new WeakMap()
  focusTarget = null
  init(table) {
    this._table = table
    this.table.addEventListener('focusin', this.onFocusin)
    this.table.addEventListener('keydown', this.onKeydown)
    this.updateFocusTarget()
    this.cleanup = () => {
      this.table.removeEventListener('focusin', this.onFocusin)
      this.table.removeEventListener('keydown', this.onKeydown)
      this.focusables.forEach(this.unregisterFocusable)
    }
  }
  cleanup() {}
  update({pageSize}) {
    this._pageSize = pageSize
  }
  refresh() {
    setTimeout(() => {
      if (this._table) {
        this.updateFocusedCell(this.focusedCell?.element)
        this.updateFocusTarget()
      }
    }, 0)
  }
  registerFocusable = (focusableElement, changeHandler) => {
    this.focusables.add(focusableElement)
    this.focusHandlers.set(focusableElement, changeHandler)
    const isFocusable = this.focusablesState.get(focusableElement) ?? false
    const newIsFocusable =
      this.focusTarget === focusableElement ||
      this.isSuppressed(focusableElement)
    if (newIsFocusable !== isFocusable) {
      this.focusablesState.set(focusableElement, newIsFocusable)
      changeHandler(newIsFocusable)
    }
    const focusedElement = this.focusedCell?.element
    if (
      focusedElement &&
      isTableCell(focusedElement) &&
      focusedElement.contains(focusableElement)
    ) {
      focusableElement.focus({preventScroll: true})
    }
    return () => this.unregisterFocusable(focusableElement)
  }
  unregisterFocusable = focusable => {
    this.focusables.delete(focusable)
    this.focusHandlers.delete(focusable)
    const isUnregisteringFocusedNode = nodeBelongs(
      focusable,
      document.activeElement
    )
    if (isUnregisteringFocusedNode) {
      setTimeout(() => {
        if (
          this.focusedCell &&
          !nodeBelongs(this.table, this.focusedCell.element)
        ) {
          this.moveFocusBy(this.focusedCell, {x: 0, y: 0})
        }
      }, 0)
    }
  }
  get pageSize() {
    return this._pageSize
  }
  get table() {
    if (!this._table) {
      throw new Error(
        'Invariant violation: GridNavigationProcessor is used before initialization.'
      )
    }
    return this._table
  }
  onFocusin = event => {
    if (!(event.target instanceof HTMLElement)) {
      return
    }
    this.updateFocusedCell(event.target)
    if (!this.focusedCell) {
      return
    }
    this.updateFocusTarget()
    const focusedElement = this.focusedCell.element
    const nextTarget = isTableCell(focusedElement)
      ? this.getFocusablesFrom(focusedElement)[0]
      : null
    if (nextTarget) {
      nextTarget.focus({preventScroll: true})
    } else {
      this.keepUserIndex = false
    }
  }
  onKeydown = event => {
    if (!this.focusedCell) {
      return
    }
    const keys = [
      KeyCode.up,
      KeyCode.down,
      KeyCode.left,
      KeyCode.right,
      KeyCode.pageUp,
      KeyCode.pageDown,
      KeyCode.home,
      KeyCode.end
    ]
    const ctrlKey = event.ctrlKey ? 1 : 0
    const altKey = event.altKey ? 1 : 0
    const shiftKey = event.shiftKey ? 1 : 0
    const metaKey = event.metaKey ? 1 : 0
    const modifiersPressed = ctrlKey + altKey + shiftKey + metaKey
    const invalidModifierCombination =
      (modifiersPressed && !event.ctrlKey) ||
      (event.ctrlKey &&
        event.keyCode !== KeyCode.home &&
        event.keyCode !== KeyCode.end)
    if (
      invalidModifierCombination ||
      this.isSuppressed(document.activeElement) ||
      !this.isRegistered(document.activeElement) ||
      keys.indexOf(event.keyCode) === -1
    ) {
      return
    }
    const from = this.focusedCell
    event.preventDefault()
    isEventLike(event) &&
      handleKey(event, {
        onBlockStart: () => this.moveFocusBy(from, {y: -1, x: 0}),
        onBlockEnd: () => this.moveFocusBy(from, {y: 1, x: 0}),
        onInlineStart: () => this.moveFocusBy(from, {y: 0, x: -1}),
        onInlineEnd: () => this.moveFocusBy(from, {y: 0, x: 1}),
        onPageUp: () => this.moveFocusBy(from, {y: -this.pageSize, x: 0}),
        onPageDown: () => this.moveFocusBy(from, {y: this.pageSize, x: 0}),
        onHome: () =>
          event.ctrlKey
            ? this.moveFocusBy(from, {y: -Infinity, x: -Infinity})
            : this.moveFocusBy(from, {y: 0, x: -Infinity}),
        onEnd: () =>
          event.ctrlKey
            ? this.moveFocusBy(from, {y: Infinity, x: Infinity})
            : this.moveFocusBy(from, {y: 0, x: Infinity})
      })
  }
  moveFocusBy(cell, delta) {
    if (delta.y !== 0 && delta.x === 0) {
      this.keepUserIndex = true
    }
    focusNextElement(this.getNextFocusable(cell, delta))
  }
  updateFocusTarget() {
    this.focusTarget = this.getSingleFocusable()
    for (const focusableElement of this.focusables) {
      const isFocusable = this.focusablesState.get(focusableElement) ?? false
      const newIsFocusable =
        this.focusTarget === focusableElement ||
        this.isSuppressed(focusableElement)
      if (newIsFocusable !== isFocusable) {
        this.focusablesState.set(focusableElement, newIsFocusable)
        this.focusHandlers.get(focusableElement)(newIsFocusable)
      }
    }
  }
  isSuppressed(element) {
    if (!this.focusedCell) {
      return false
    }
    return !element || defaultIsSuppressed(element)
  }
  isRegistered(element) {
    return !element || this.focusables.has(element)
  }
  updateFocusedCell(focusedElement) {
    if (!focusedElement) {
      return
    }
    const cellElement = getClosestCell(focusedElement)
    const rowElement = cellElement?.closest('tr')
    if (!cellElement || !rowElement) {
      return
    }
    const colIndex = parseInt(cellElement.getAttribute('aria-colindex') ?? '')
    const rowIndex = parseInt(rowElement.getAttribute('aria-rowindex') ?? '')
    if (isNaN(colIndex) || isNaN(rowIndex)) {
      return
    }
    const cellFocusables = this.getFocusablesFrom(cellElement)
    const elementIndex = cellFocusables.indexOf(focusedElement)
    const prevColIndex = this.focusedCell?.colIndex ?? -1
    const prevElementIndex = this.focusedCell?.elementIndex ?? -1
    this.focusedCell = {
      rowIndex,
      colIndex:
        this.keepUserIndex && prevColIndex !== -1 ? prevColIndex : colIndex,
      elementIndex:
        this.keepUserIndex && prevElementIndex !== -1
          ? prevElementIndex
          : elementIndex,
      element: focusedElement
    }
  }
  getNextFocusable(from, delta) {
    const targetAriaRowIndex = from.rowIndex + delta.y
    const targetRow = findTableRowByAriaRowIndex(
      this.table,
      targetAriaRowIndex,
      delta.y
    )
    if (!targetRow) {
      return null
    }
    const cellElement = getClosestCell(from.element)
    const cellFocusables = cellElement
      ? this.getFocusablesFrom(cellElement)
      : []
    const nextElementIndex = from.elementIndex + delta.x
    const isValidDirection = !!delta.x
    const isValidIndex =
      from.elementIndex !== -1 &&
      0 <= nextElementIndex &&
      nextElementIndex < cellFocusables.length
    const isTargetDifferent = from.element !== cellFocusables[nextElementIndex]
    if (isValidDirection && isValidIndex && isTargetDifferent) {
      return cellFocusables[nextElementIndex]
    }
    const targetAriaColIndex = from.colIndex + delta.x
    const targetCell = findTableRowCellByAriaColIndex(
      targetRow,
      targetAriaColIndex,
      delta.x
    )
    if (!targetCell) {
      return null
    }
    if (targetCell === cellElement && delta.x !== 0) {
      return null
    }
    const targetCellFocusables = this.getFocusablesFrom(targetCell)
    let focusIndex = from.elementIndex
    if ((isFinite(delta.x) && delta.x > 0) || delta.x === -Infinity) {
      focusIndex = 0
    }
    if ((isFinite(delta.x) && delta.x < 0) || delta.x === Infinity) {
      focusIndex = targetCellFocusables.length - 1
    }
    return targetCellFocusables[focusIndex] ?? targetCell
  }
  getSingleFocusable() {
    const cell = this.focusedCell
    const firstTableCell = this.table.querySelector('td,th')
    let focusTarget =
      (firstTableCell && this.getFocusablesFrom(firstTableCell)[0]) ??
      firstTableCell
    if (cell) {
      focusTarget = this.getNextFocusable(cell, {x: 0, y: 0})
    }
    return focusTarget
  }
  getFocusablesFrom(target) {
    return getAllFocusables(target).filter(
      el => this.focusables.has(el) && !isElementDisabled(el)
    )
  }
}

export {
  GridNavigationProvider
}
