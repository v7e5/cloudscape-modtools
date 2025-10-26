import createCategoryColorScale from '../../internal/utils/create-category-color-scale'

const createSeriesDecorator = externalSeries => {
  const colorScale = createCategoryColorScale(
    externalSeries,
    s => s.type === 'threshold',
    s => s.color || null
  )
  const decorateSeries = (s, index) => {
    const title = s.title
    const color = colorScale[index]
    const markerType = s.type === 'area' ? 'hollow-rectangle' : 'dashed'
    const formatValue =
      s.type === 'threshold'
        ? () => (s.valueFormatter ? s.valueFormatter(s.y) : s.y)
        : (y, x) => (s.valueFormatter ? s.valueFormatter(y, x) : y)
    return {series: s, title, color, markerType, formatValue}
  }
  const mapping = externalSeries.reduce((map, series, index) => {
    map.set(series, decorateSeries(series, index))
    return map
  }, new Map())
  const seriesDecorator = series =>
    mapping.get(series) || decorateSeries(series, externalSeries.length)
  return seriesDecorator
}

export {
  createSeriesDecorator as default
}
