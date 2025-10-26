import {differenceInDays, add} from 'date-fns'
import {X_TICK_COUNT_RATIO, Y_TICK_COUNT_RATIO} from './constants'

const getXTickCount = width => {
  return Math.ceil(width / X_TICK_COUNT_RATIO)
}
const getYTickCount = height => {
  return Math.ceil(height / Y_TICK_COUNT_RATIO)
}
const createXTicks = (scale, values) => {
  if (scale.isNumeric()) {
    return scale.d3Scale.ticks(values)
  } else if (scale.isTime()) {
    const rawTicks = scale.d3Scale.ticks(values)
    const domain = scale.d3Scale.domain()
    return uniform(rawTicks, domain[domain.length - 1])
  } else {
    return scale.d3Scale.domain()
  }
}
const createYTicks = (scale, values) => {
  const ticks = scale.d3Scale.ticks(values)
  if (scale.scaleType === 'log' && ticks.length > 10) {
    return scale.d3Scale.ticks(3)
  }
  return ticks
}
const uniform = (ticks, max) => {
  if (ticks.length < 3 || !isMixedDayInterval(ticks)) {
    return ticks
  }
  return createTwoDayInterval(ticks[0], max)
}
const isMixedDayInterval = ticks => {
  let oneDayInterval = false
  let twoDayInterval = false
  for (let i = 1; i < ticks.length; i++) {
    oneDayInterval = oneDayInterval || isDayInterval(ticks[i - 1], ticks[i], 1)
    twoDayInterval = twoDayInterval || isDayInterval(ticks[i - 1], ticks[i], 2)
  }
  return oneDayInterval && twoDayInterval
}
const isDayInterval = (a, b, difference = 1) => {
  return Math.abs(differenceInDays(a, b)) === difference
}
const createTwoDayInterval = (start, max) => {
  const result = []
  let curr = start
  while (curr < max) {
    result.push(curr)
    curr = add(curr, {days: 2})
  }
  return result
}

export {
  createXTicks,
  createYTicks,
  getXTickCount,
  getYTickCount
}
