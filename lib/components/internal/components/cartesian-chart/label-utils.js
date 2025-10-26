const SPACE_BETWEEN = 4
const formatTicks = ({ticks, scale, getLabelSpace, tickFormatter}) => {
  return ticks.map(tick => {
    const position = scale.d3Scale(tick) ?? NaN
    const label = tickFormatter ? tickFormatter(tick) : tick.toString()
    const lines = (label + '').split('\n')
    return {position, lines, space: Math.max(...lines.map(getLabelSpace))}
  })
}
const getVisibleTicks = (ticks, from, until, balanceTicks = false) => {
  ticks = getTicksInRange(ticks, from, until)
  return balanceTicks ? getReducedTicks(ticks) : removeIntersections(ticks)
}
const getTicksInRange = (ticks, from, until) => {
  return ticks.filter(
    tick =>
      from <= tick.position - tick.space / 2 &&
      tick.position + tick.space / 2 <= until
  )
}
const getReducedTicks = ticks => {
  const reduceLabelRatio = findReduceLabelRatio(ticks)
  const reducedTicks = []
  for (let index = 0; index < ticks.length; index += reduceLabelRatio) {
    reducedTicks.push(ticks[index])
  }
  return reducedTicks
}
const findReduceLabelRatio = (ticks, ratio = 1) => {
  if (ratio >= ticks.length) {
    return ratio
  }
  for (let i = ratio; i < ticks.length; i += ratio) {
    if (hasIntersection(ticks[i - ratio], ticks[i])) {
      return findReduceLabelRatio(ticks, ratio + 1)
    }
  }
  return ratio
}
const removeIntersections = ticks => {
  const visibleTicks = []
  let prevTick = null
  for (const tick of ticks) {
    if (!prevTick || !hasIntersection(prevTick, tick)) {
      visibleTicks.push(tick)
      prevTick = tick
    }
  }
  return visibleTicks
}
const hasIntersection = (a, b) => {
  const [left, right] = a.position < b.position ? [a, b] : [b, a]
  const leftEdge = left.position + left.space / 2 + SPACE_BETWEEN
  const rightEdge = right.position - right.space / 2
  return leftEdge > rightEdge
}
const getSVGTextSize = element => {
  if (element && element.getBBox) {
    return element.getBBox()
  }
  return void 0
}

export {
  formatTicks,
  getSVGTextSize,
  getVisibleTicks
}
