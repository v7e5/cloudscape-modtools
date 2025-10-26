import {useEffect, useMemo, useRef} from 'react'
import {useVirtual as useVirtualDefault} from '../../vendor/react-virtual'

const MAX_ITEM_MOUNTS = 100
const useVirtual = ({items, parentRef, estimateSize}) => {
  const rowVirtualizer = useVirtualDefault({
    size: items.length,
    parentRef,
    estimateSize,
    overscan: 5
  })
  const measuresCache = useRef(new WeakMap())
  const indicesKey = rowVirtualizer.virtualItems
    .map(item => `${item.index}`)
    .join(':')
  useEffect(() => {
    measuresCache.current = new WeakMap()
  }, [indicesKey, items, estimateSize])
  const virtualItems = useMemo(
    () =>
      rowVirtualizer.virtualItems.map(virtualItem => ({
        ...virtualItem,
        measureRef: node => {
          const mountedCount =
            measuresCache.current.get(items[virtualItem.index]) ?? 0
          if (mountedCount < MAX_ITEM_MOUNTS) {
            virtualItem.measureRef(node)
            measuresCache.current.set(
              items[virtualItem.index],
              mountedCount + 1
            )
          }
        }
      })),
    [items, rowVirtualizer.virtualItems]
  )
  return {
    virtualItems,
    totalSize: rowVirtualizer.totalSize,
    scrollToIndex: rowVirtualizer.scrollToIndex
  }
}

export {
  useVirtual
}
