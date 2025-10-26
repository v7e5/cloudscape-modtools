import {forwardRef, memo} from 'react'
import HighlightedPoint from '../../internal/components/cartesian-chart/highlighted-point'
import {useSelector} from '../async-store'

const AreaHighlightedPoint = memo(
  forwardRef(({model, ariaLabel}, ref) => {
    const highlightedPoint = useSelector(
      model.interactions,
      state => state.highlightedPoint
    )
    const isPopoverPinned = useSelector(
      model.interactions,
      state => state.isPopoverPinned
    )
    const point = highlightedPoint
      ? {
          key: `${highlightedPoint.index.x}:${highlightedPoint.index.s}`,
          x: highlightedPoint.scaled.x,
          y: highlightedPoint.scaled.y1,
          color: model.getInternalSeries(
            model.series[highlightedPoint.index.s]
          ).color
        }
      : null
    return (
      <HighlightedPoint
        ref={ref}
        point={point}
        role='button'
        ariaLabel={ariaLabel}
        ariaHasPopup={true}
        ariaExpanded={isPopoverPinned}
      />
    )
  })
)

export {
  AreaHighlightedPoint as default
}
