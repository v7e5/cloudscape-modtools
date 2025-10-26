import {useCallback, useState} from 'react'
import {useResizeObserver} from '~/components/internal/toolkit/internal'

const useHeightMeasure = (getMeasure, skip = false, deps = []) => {
  const [measuredHeight, setHeight] = useState(0)
  const stableGetMeasure = useCallback(getMeasure, [...deps, skip])
  useResizeObserver(
    stableGetMeasure,
    entry => !skip && setHeight(entry.borderBoxHeight)
  )
  return !skip ? measuredHeight : void 0
}

export {
  useHeightMeasure
}
