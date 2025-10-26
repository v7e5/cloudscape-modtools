import {fireNonCancelableEvent, fireCancelableEvent} from '../internal/events/'
import {findUpUntil} from '../internal/utils/dom'
import styles from './styles.css.js'

const useRowEvents = ({onRowClick, onRowContextMenu}) => {
  const onRowClickHandler = (rowIndex, item, event) => {
    const tableCell = findUpUntil(
      event.target,
      element => element.tagName.toLowerCase() === 'td'
    )
    if (
      !tableCell ||
      !tableCell.classList.contains(styles['selection-control'])
    ) {
      const details = {rowIndex, item}
      fireNonCancelableEvent(onRowClick, details)
    }
  }
  const onRowContextMenuHandler = (rowIndex, item, event) => {
    const details = {
      rowIndex,
      item,
      clientX: event.clientX,
      clientY: event.clientY
    }
    fireCancelableEvent(onRowContextMenu, details, event)
  }
  return {
    onRowClickHandler: onRowClick && onRowClickHandler,
    onRowContextMenuHandler: onRowContextMenu && onRowContextMenuHandler
  }
}

export {
  useRowEvents
}
