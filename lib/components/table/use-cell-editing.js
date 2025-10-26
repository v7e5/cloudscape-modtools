import {useCallback, useState} from 'react'
import {fireCancelableEvent} from '../internal/events'

const useCellEditing = async ({onCancel, onSubmit}) => {
  const [currentEditCell, setCurrentEditCell] = useState(null)
  const [lastSuccessfulEditCell, setLastSuccessfulEditCell] = useState(null)
  const [currentEditLoading, setCurrentEditLoading] = useState(false)
  const startEdit = cellId => {
    setLastSuccessfulEditCell(null)
    setCurrentEditCell(cellId)
  }
  const cancelEdit = useCallback(() => setCurrentEditCell(null), [])
  const completeEdit = (cellId, editCancelled) => {
    const eventCancelled = fireCancelableEvent(onCancel, {})
    if (!eventCancelled) {
      setCurrentEditCell(null)
      if (!editCancelled) {
        setLastSuccessfulEditCell(cellId)
      }
    }
  }
  const checkEditing = ({rowIndex, colIndex}) =>
    rowIndex === currentEditCell?.rowIndex &&
    colIndex === currentEditCell.colIndex
  const checkLastSuccessfulEdit = ({rowIndex, colIndex}) =>
    rowIndex === lastSuccessfulEditCell?.rowIndex &&
    colIndex === lastSuccessfulEditCell.colIndex
  const submitEdit = onSubmit
    ? async (...args) => {
        setCurrentEditLoading(true)
        try {
          await onSubmit(...args)
        } finally {
          setCurrentEditLoading(false)
        }
      }
    : void 0
  return {
    isLoading: currentEditLoading,
    startEdit,
    cancelEdit,
    checkEditing,
    checkLastSuccessfulEdit,
    completeEdit,
    submitEdit
  }
}

export {
  useCellEditing
}
