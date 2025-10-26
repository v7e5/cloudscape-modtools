import {useEffect, useMemo, useRef} from 'react'
import {nodeContains} from '~/components/internal/toolkit/dom'
import {findClosest, circleIndex} from './utils'
import {KeyCode} from '../../internal/keycode'
import computeChartProps from './compute-chart-props'
import createSeriesDecorator from './create-series-decorator'
import InteractionsStore from './interactions-store'
import {throttle} from '../../internal/utils/throttle'
import {useReaction} from '../async-store'
import {useHeightMeasure} from '../../internal/hooks/container-queries/use-height-measure'
import {useStableCallback} from '~/components/internal/toolkit/internal'
import {nodeBelongs} from '../../internal/utils/node-belongs'
import handleKey from '../../internal/utils/handle-key'

const MAX_HOVER_MARGIN = 6
const SVG_HOVER_THROTTLE = 25
const POPOVER_DEADZONE = 12
const useChartModel = ({
  isRtl,
  fitHeight,
  externalSeries: allSeries,
  visibleSeries: series,
  setVisibleSeries,
  highlightedSeries,
  setHighlightedSeries,
  xDomain,
  yDomain,
  xScaleType,
  yScaleType,
  height: explicitHeight,
  width,
  popoverRef
}) => {
  const plotRef = useRef(null)
  const containerRef = useRef(null)
  const verticalMarkerRef = useRef(null)
  const plotMeasureRef = useRef(null)
  const hasVisibleSeries = series.length > 0
  const height =
    useHeightMeasure(() => plotMeasureRef.current, !fitHeight, [
      hasVisibleSeries
    ]) ?? explicitHeight
  const stableSetVisibleSeries = useStableCallback(setVisibleSeries)
  const model = useMemo(() => {
    const computed = computeChartProps({
      isRtl,
      series,
      xDomain,
      yDomain,
      xScaleType,
      yScaleType,
      height,
      width
    })
    const interactions = new InteractionsStore(series, computed.plot)
    const containsMultipleSeries = interactions.series.length > 1
    const getInternalSeries = createSeriesDecorator(allSeries)
    const isMouseOverPopover = (clientX, clientY) => {
      if (popoverRef.current?.firstChild) {
        const popoverPosition =
          popoverRef.current.firstChild.getBoundingClientRect()
        if (
          clientX > popoverPosition.x - POPOVER_DEADZONE &&
          clientX <
            popoverPosition.x + popoverPosition.width + POPOVER_DEADZONE &&
          clientY > popoverPosition.y - POPOVER_DEADZONE &&
          clientY <
            popoverPosition.y + popoverPosition.height + POPOVER_DEADZONE
        ) {
          return true
        }
      }
      return false
    }
    const onSVGMouseMoveThrottled = throttle((clientX, clientY) => {
      if (
        interactions.get().isPopoverPinned ||
        !plotRef.current ||
        interactions.plot.xy.length === 0 ||
        isMouseOverPopover(clientX, clientY)
      ) {
        return
      }
      const svgRect = plotRef.current.svg.getBoundingClientRect()
      const offsetX = clientX - svgRect.left
      const offsetY = clientY - svgRect.top
      const closestX = findClosest(
        interactions.plot.xy,
        offsetX,
        xPoints => xPoints[0].scaled.x
      )
      const closestPoint = findClosest(
        closestX,
        offsetY,
        point => point.scaled.y1
      )
      if (
        Math.abs(offsetX - closestPoint.scaled.x) < MAX_HOVER_MARGIN &&
        Math.abs(offsetY - closestPoint.scaled.y1) < MAX_HOVER_MARGIN
      ) {
        interactions.highlightPoint(closestPoint)
      } else {
        interactions.highlightX(closestX)
      }
    }, SVG_HOVER_THROTTLE)
    const onSVGMouseMove = ({clientX, clientY}) =>
      onSVGMouseMoveThrottled(clientX, clientY)
    const onSVGMouseOut = event => {
      onSVGMouseMoveThrottled.cancel()
      if (
        interactions.get().isPopoverPinned ||
        isMouseOverPopover(event.clientX, event.clientY)
      ) {
        return
      }
      if (!nodeContains(plotRef.current.svg, event.relatedTarget)) {
        interactions.clearHighlightedLegend()
        interactions.clearHighlight()
      }
    }
    const onSVGMouseDown = event => {
      interactions.togglePopoverPin()
      event.preventDefault()
    }
    const moveWithinXAxis = direction => {
      if (interactions.get().highlightedPoint) {
        return moveWithinSeries(direction)
      } else if (containsMultipleSeries) {
        const {highlightedX} = interactions.get()
        if (highlightedX) {
          const currentXIndex = highlightedX[0].index.x
          const nextXIndex = circleIndex(currentXIndex + direction, [
            0,
            interactions.plot.xy.length - 1
          ])
          interactions.highlightX(interactions.plot.xy[nextXIndex])
        }
      }
    }
    const moveWithinSeries = direction => {
      const point = interactions.get().highlightedPoint
      if (!point) {
        return
      }
      const sIndex = point.index.s
      const xIndex = circleIndex(point.index.x + direction, [
        0,
        interactions.plot.xs.length - 1
      ])
      interactions.highlightPoint(interactions.plot.xs[xIndex][sIndex])
    }
    const moveBetweenSeries = direction => {
      const point = interactions.get().highlightedPoint
      if (!point) {
        const {highlightedX} = interactions.get()
        if (highlightedX) {
          const xIndex2 = highlightedX[0].index.x
          const points = interactions.plot.xy[xIndex2]
          const yIndex = direction === 1 ? 0 : points.length - 1
          interactions.highlightPoint(points[yIndex])
        }
        return
      }
      const xIndex = point.index.x
      const currentYIndex = point.index.y
      if (
        containsMultipleSeries &&
        ((currentYIndex === 0 && direction === -1) ||
          (currentYIndex === interactions.plot.xy[xIndex].length - 1 &&
            direction === 1))
      ) {
        interactions.highlightX(interactions.plot.xy[xIndex])
      } else {
        const nextYIndex = circleIndex(currentYIndex + direction, [
          0,
          interactions.plot.xy[xIndex].length - 1
        ])
        interactions.highlightPoint(interactions.plot.xy[xIndex][nextYIndex])
      }
    }
    const onSVGKeyDown = event => {
      const keyCode = event.keyCode
      if (
        keyCode !== KeyCode.up &&
        keyCode !== KeyCode.right &&
        keyCode !== KeyCode.down &&
        keyCode !== KeyCode.left &&
        keyCode !== KeyCode.space &&
        keyCode !== KeyCode.enter
      ) {
        return
      }
      event.preventDefault()
      if (interactions.get().isPopoverPinned) {
        return
      }
      handleKey(event, {
        onBlockEnd: () => moveBetweenSeries(-1),
        onBlockStart: () => moveBetweenSeries(1),
        onInlineStart: () => moveWithinXAxis(-1),
        onInlineEnd: () => moveWithinXAxis(1),
        onActivate: () => interactions.pinPopover()
      })
    }
    const highlightFirstX = () => {
      interactions.highlightX(interactions.plot.xy[0])
    }
    const onApplicationFocus = (_event, trigger) => {
      if (trigger === 'keyboard') {
        const {
          highlightedX,
          highlightedPoint,
          highlightedSeries: highlightedSeries2,
          legendSeries
        } = interactions.get()
        if (
          containsMultipleSeries &&
          !highlightedX &&
          !highlightedPoint &&
          !highlightedSeries2 &&
          !legendSeries
        ) {
          highlightFirstX()
        } else if (!highlightedX) {
          interactions.highlightFirstPoint()
        }
      }
    }
    const onApplicationBlur = event => {
      if (
        !nodeBelongs(containerRef.current, event.relatedTarget) &&
        !interactions.get().isPopoverPinned
      ) {
        interactions.clearHighlight()
      }
    }
    const onFilterSeries = series2 => {
      stableSetVisibleSeries(series2)
    }
    const onLegendHighlight = series2 => {
      interactions.highlightSeries(series2)
    }
    const onPopoverDismiss = outsideClick => {
      interactions.unpinPopover()
      if (!outsideClick) {
        setTimeout(() => {
          if (
            interactions.get().highlightedPoint ||
            interactions.get().highlightedX
          ) {
            plotRef.current.focusApplication()
          } else {
            interactions.clearHighlight()
            plotRef.current.focusPlot()
          }
        }, 0)
      }
    }
    const onContainerBlur = () => {
      interactions.clearState()
    }
    const onDocumentKeyDown = event => {
      if (event.key === 'Escape') {
        interactions.clearHighlight()
        interactions.clearHighlightedLegend()
      }
    }
    const onPopoverLeave = event => {
      if (
        nodeContains(plotRef.current.svg, event.relatedTarget) ||
        interactions.get().isPopoverPinned
      ) {
        return
      }
      interactions.clearHighlight()
      interactions.clearHighlightedLegend()
    }
    return {
      width,
      height,
      series,
      allSeries,
      getInternalSeries,
      computed,
      interactions,
      handlers: {
        onSVGMouseMove,
        onSVGMouseOut,
        onSVGMouseDown,
        onSVGKeyDown,
        onApplicationFocus,
        onApplicationBlur,
        onFilterSeries,
        onLegendHighlight,
        onPopoverDismiss,
        onContainerBlur,
        onDocumentKeyDown,
        onPopoverLeave
      },
      refs: {
        plot: plotRef,
        plotMeasure: plotMeasureRef,
        container: containerRef,
        verticalMarker: verticalMarkerRef,
        popoverRef
      }
    }
  }, [
    allSeries,
    series,
    xDomain,
    yDomain,
    xScaleType,
    yScaleType,
    height,
    width,
    stableSetVisibleSeries,
    popoverRef,
    isRtl
  ])
  useReaction(
    model.interactions,
    state => state.highlightedSeries,
    setHighlightedSeries
  )
  useEffect(() => {
    if (highlightedSeries !== model.interactions.get().highlightedSeries) {
      model.interactions.highlightSeries(highlightedSeries)
    }
  }, [model, highlightedSeries])
  return model
}

export {
  useChartModel as default
}
