import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  memo
} from 'react'
import {
  useResizeObserver,
  useStableCallback
} from '~/components/internal/toolkit/internal'
import {setElementWidths} from './column-widths-utils'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const DEFAULT_COLUMN_WIDTH = 120
const readWidths = (getCell, visibleColumns) => {
  const result = new Map()
  for (let index = 0; index < visibleColumns.length; index++) {
    const column = visibleColumns[index]
    let width = column.width || 0
    const minWidth = column.minWidth || width || DEFAULT_COLUMN_WIDTH
    if (!width && index !== visibleColumns.length - 1) {
      const colEl = getCell(column.id)
      width = colEl
        ? getLogicalBoundingClientRect(colEl).inlineSize
        : DEFAULT_COLUMN_WIDTH
    }
    result.set(column.id, Math.max(width, minWidth))
  }
  return result
}
const updateWidths = (visibleColumns, oldWidths, newWidth, columnId) => {
  const column = visibleColumns.find(column2 => column2.id === columnId)
  const minWidth =
    typeof column?.minWidth === 'number'
      ? column.minWidth
      : DEFAULT_COLUMN_WIDTH
  newWidth = Math.max(newWidth, minWidth)
  if (oldWidths.get(columnId) === newWidth) {
    return oldWidths
  }
  const newWidths = new Map(oldWidths)
  newWidths.set(columnId, newWidth)
  return newWidths
}
const WidthsContext = createContext({
  getColumnStyles: () => ({}),
  columnWidths: new Map(),
  updateColumn: () => {},
  setCell: () => {}
})
const ColumnWidthsProvider = memo(
  ({visibleColumns, resizableColumns, containerRef, children}) => {
    const visibleColumnsRef = useRef(null)
    const containerWidthRef = useRef(0)
    const [columnWidths, setColumnWidths] = useState(null)
    const cellsRef = useRef(new Map())
    const stickyCellsRef = useRef(new Map())
    const getCell = columnId => cellsRef.current.get(columnId) ?? null
    const setCell = (sticky, columnId, node) => {
      const ref = sticky ? stickyCellsRef : cellsRef
      if (node) {
        ref.current.set(columnId, node)
      } else {
        ref.current.delete(columnId)
      }
    }
    const getColumnStyles = (sticky, columnId) => {
      const column = visibleColumns.find(column2 => column2.id === columnId)
      if (!column) {
        return {}
      }
      if (sticky) {
        return {
          width:
            cellsRef.current.get(column.id)?.offsetWidth ||
            (columnWidths?.get(column.id) ?? column.width)
        }
      }
      if (resizableColumns && columnWidths) {
        const isLastColumn =
          column.id === visibleColumns[visibleColumns.length - 1]?.id
        const totalWidth = visibleColumns.reduce(
          (sum, {id}) => sum + (columnWidths.get(id) || DEFAULT_COLUMN_WIDTH),
          0
        )
        if (isLastColumn && containerWidthRef.current > totalWidth) {
          return {width: 'auto', minWidth: column?.minWidth}
        } else {
          return {
            width: columnWidths.get(column.id),
            minWidth: column?.minWidth
          }
        }
      }
      return {
        width: column.width,
        minWidth: column.minWidth,
        maxWidth: !resizableColumns ? column.maxWidth : void 0
      }
    }
    const updateColumnWidths = useStableCallback(() => {
      for (const {id} of visibleColumns) {
        const element = cellsRef.current.get(id)
        if (element) {
          setElementWidths(element, getColumnStyles(false, id))
        }
      }
      for (const {id} of visibleColumns) {
        const element = stickyCellsRef.current.get(id)
        if (element) {
          setElementWidths(element, getColumnStyles(true, id))
        }
      }
    })
    useResizeObserver(containerRef, ({contentBoxWidth: containerWidth}) => {
      containerWidthRef.current = containerWidth
      updateColumnWidths()
    })
    useEffect(() => {
      updateColumnWidths()
      if (!resizableColumns) {
        return
      }
      let updated = false
      const newColumnWidths = new Map(columnWidths)
      const lastVisible = visibleColumnsRef.current
      if (lastVisible) {
        for (let index = 0; index < visibleColumns.length; index++) {
          const column = visibleColumns[index]
          if (
            !columnWidths?.get(column.id) &&
            lastVisible.indexOf(column.id) === -1
          ) {
            updated = true
            newColumnWidths.set(
              column.id,
              column.width || DEFAULT_COLUMN_WIDTH
            )
          }
        }
        if (updated) {
          setColumnWidths(newColumnWidths)
        }
      }
      visibleColumnsRef.current = visibleColumns.map(column => column.id)
    }, [columnWidths, resizableColumns, visibleColumns, updateColumnWidths])
    useEffect(() => {
      if (!resizableColumns) {
        return
      }
      setColumnWidths(() => readWidths(getCell, visibleColumns))
    }, [])
    const updateColumn = (columnId, newWidth) => {
      setColumnWidths(columnWidths2 =>
        updateWidths(
          visibleColumns,
          columnWidths2 ?? new Map(),
          newWidth,
          columnId
        )
      )
    }
    return (
      <WidthsContext.Provider
        value={{
          getColumnStyles,
          columnWidths: columnWidths ?? new Map(),
          updateColumn,
          setCell
        }}>
        {children}
      </WidthsContext.Provider>
    )
  }
)

const useColumnWidths = () => {
  return useContext(WidthsContext)
}

export {
  ColumnWidthsProvider,
  DEFAULT_COLUMN_WIDTH,
  useColumnWidths
}
