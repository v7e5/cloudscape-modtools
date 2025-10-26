import {memo} from 'react'
import {line, area} from 'd3-shape'

const AreaSeries = memo(({data, color, chartAreaClipPath}) => {
  const areaGenerator = area()
    .x(p => p.scaled.x)
    .y0(p => p.scaled.y0)
    .y1(p => p.scaled.y1)
  const areaPath = areaGenerator(data) || ''
  const lineGenerator = line()
    .x(p => p.scaled.x)
    .y(p => p.scaled.y1)
  const linePath = lineGenerator(data) || ''
  return (
    <>
      <path
        aria-hidden={true}
        fill={color}
        stroke={color}
        style={{opacity: 0.4}}
        clipPath={`url(#${chartAreaClipPath})`}
        d={areaPath}
      />
      <path
        aria-hidden={true}
        stroke={color}
        clipPath={`url(#${chartAreaClipPath})`}
        d={linePath}
      />
    </>
  )
})

export {
  AreaSeries as default
}
