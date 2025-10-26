import {memo} from 'react'

const ThresholdSeries = memo(({data, xScale, color, chartAreaClipPath}) => {
  const range = xScale.d3Scale.range()
  const y = data[0].scaled.y0
  const path = {x1: range[0], x2: range[1], y1: y, y2: y}
  return (
    <line
      aria-hidden={true}
      stroke={color}
      clipPath={`url(#${chartAreaClipPath})`}
      {...path}
    />
  )
})

export {
  ThresholdSeries as default
}
