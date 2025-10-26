import {memo, useMemo} from 'react'
import ChartLegend from '../../internal/components/chart-legend'
import {useSelector} from '../async-store'

const AreaChartLegend = memo(
  ({model, legendTitle, ariaLabel, plotContainerRef}) => {
    const legendItems = useMemo(
      () =>
        model.series.map(s => {
          const {title, color, markerType} = model.getInternalSeries(s)
          return {label: title, color, type: markerType, datum: s}
        }),
      [model]
    )
    const legendSeries = useSelector(
      model.interactions,
      state => state.legendSeries
    )
    return (
      <ChartLegend
        series={legendItems}
        highlightedSeries={legendSeries}
        onHighlightChange={model.handlers.onLegendHighlight}
        legendTitle={legendTitle}
        ariaLabel={ariaLabel}
        plotContainerRef={plotContainerRef}
      />
    )
  }
)

export {
  AreaChartLegend as default
}
