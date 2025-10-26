import {memo} from 'react'
import ChartFilter from '../../internal/components/chart-filter'

const AreaChartFilter = memo(
  ({model, filterLabel, filterPlaceholder, filterSelectedAriaLabel}) => {
    const filterItems = model.allSeries.map(s => {
      const {title, color, markerType} = model.getInternalSeries(s)
      return {label: title, color, type: markerType, datum: s}
    })
    return (
      <ChartFilter
        series={filterItems}
        onChange={model.handlers.onFilterSeries}
        selectedSeries={model.series}
        i18nStrings={{
          filterLabel,
          filterPlaceholder,
          filterSelectedAriaLabel
        }}
      />
    )
  }
)

export {
  AreaChartFilter as default
}
