import {memo} from 'react'
import VerticalMarker from '../../internal/components/cartesian-chart/vertical-marker'
import {useSelector} from '../async-store'

const AreaVerticalMarker = memo(({model}) => {
  const highlightedX = useSelector(
    model.interactions,
    state => state.highlightedX
  )
  const verticalMarker = (highlightedX || []).map(point => ({
    key: `${point.index.x}:${point.index.s}`,
    x: point.scaled.x,
    y: point.scaled.y1,
    color: model.getInternalSeries(model.series[point.index.s]).color
  }))
  return (
    <VerticalMarker
      height={model.height}
      points={verticalMarker}
      ref={model.refs.verticalMarker}
    />
  )
})

export {
  AreaVerticalMarker as default
}
