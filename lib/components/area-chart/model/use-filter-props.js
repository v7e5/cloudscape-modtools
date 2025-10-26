import {useCallback, useEffect} from 'react'
import {fireNonCancelableEvent} from '../../internal/events'
import {useControllable} from '../../internal/hooks/use-controllable'

const useFilterProps = (
  series,
  controlledVisibleSeries,
  controlledOnVisibleChange
) => {
  const [visibleSeries = [], setVisibleSeriesState] = useControllable(
    controlledVisibleSeries,
    controlledOnVisibleChange,
    series,
    {
      componentName: 'AreaChart',
      controlledProp: 'visibleSeries',
      changeHandler: 'onFilterChange'
    }
  )
  const setVisibleSeries = useCallback(
    selectedSeries => {
      setVisibleSeriesState(selectedSeries)
      fireNonCancelableEvent(controlledOnVisibleChange, {
        visibleSeries: selectedSeries
      })
    },
    [controlledOnVisibleChange, setVisibleSeriesState]
  )
  useEffect(() => {
    const newVisibleSeries = visibleSeries.filter(
      s => series.indexOf(s) !== -1
    )
    if (newVisibleSeries.length !== visibleSeries.length) {
      setVisibleSeries(newVisibleSeries)
    }
  }, [series, visibleSeries, setVisibleSeries])
  return [visibleSeries, setVisibleSeries]
}

export {
  useFilterProps as default
}
