const EPSILON = 1e-13
const computeDomainX = series => {
  const xValues = getXValues(series)
  if (xValues.length === 0) {
    return []
  }
  if (typeof xValues[0] === 'string') {
    return uniq(xValues)
  }
  return xValues.reduce(
    ([min, max], x) => [x < min ? x : min, max < x ? x : max],
    [xValues[0], xValues[0]]
  )
}
const computeDomainY = (series, scaleType) => {
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY
  series.forEach(s => {
    if (s.type === 'threshold') {
      min = Math.min(min, s.y)
      max = Math.max(max, s.y)
    }
  })
  getXValues(series).forEach((_, xIndex) => {
    let stackY = scaleType === 'linear' ? 0 : EPSILON
    for (const s of series) {
      if (s.type === 'area') {
        stackY = stackY + (s.data[xIndex]?.y || 0)
        min = Math.min(min, stackY)
        max = Math.max(max, stackY)
      }
    }
  })
  if (min === Number.POSITIVE_INFINITY) {
    return []
  }
  if (scaleType === 'log' && min === 0 && max > 1) {
    return [1, max]
  }
  return [min, max]
}
const computePlotPoints = (series, xScale, yScale) => {
  const xValues = getXValues(series)
  const xy = []
  const xs = []
  const sx = []
  getVisibleData(xValues, xScale).forEach(({x, scaledX}, xIndex) => {
    let stackY = yScale.scaleType === 'linear' ? 0 : EPSILON
    const points = []
    series.forEach((s, sIndex) => {
      if (s.type === 'threshold') {
        const scaledY = yScale.d3Scale(s.y) || 0
        points.push({
          x,
          y0: s.y,
          y1: s.y,
          scaled: {x: scaledX, y0: scaledY, y1: scaledY},
          index: {x: xIndex, s: sIndex, y: 0},
          value: 0
        })
      } else {
        const value = s.data[xIndex]?.y || 0
        const y0 = stackY
        const y1 = stackY + value
        points.push({
          x,
          y0,
          y1,
          scaled: {
            x: scaledX,
            y0: yScale.d3Scale(y0) || 0,
            y1: yScale.d3Scale(y1) || 0
          },
          index: {x: xIndex, s: sIndex, y: 0},
          value
        })
        stackY = y1
      }
    })
    points
      .sort((p1, p2) => p1.y1 - p2.y1)
      .forEach((point, index) => {
        point.index.y = index
        insertIntoMatrix(xy, point.index.x, point.index.y, point)
        insertIntoMatrix(xs, point.index.x, point.index.s, point)
        insertIntoMatrix(sx, point.index.s, point.index.x, point)
      })
  })
  return {xy, xs, sx}
}
const findClosest = (sortedArray, target, getter) => {
  if (sortedArray.length === 0) {
    throw new Error('Invariant violation: array is empty.')
  }
  const isAscending =
    getter(sortedArray[0]) < getter(sortedArray[sortedArray.length - 1])
  const compare = x => (isAscending ? getter(x) < target : getter(x) > target)
  const delta = x => Math.abs(getter(x) - target)
  let lo = 0
  let hi = sortedArray.length - 1
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2)
    if (compare(sortedArray[mid])) {
      lo = mid
    } else {
      hi = mid
    }
  }
  return delta(sortedArray[lo]) < delta(sortedArray[hi])
    ? sortedArray[lo]
    : sortedArray[hi]
}
const circleIndex = (index, [from, to]) => {
  if (index < from) {
    return to
  }
  if (index > to) {
    return from
  }
  return index
}
const isSeriesValid = series => {
  const sampleXValues = getXValues(series)
  for (const s of series) {
    if (s.type === 'area') {
      for (let i = 0; i < Math.max(s.data.length, sampleXValues.length); i++) {
        if (s.data[i]?.x !== sampleXValues[i]) {
          return false
        }
      }
    }
  }
  return true
}
const getXValues = series => {
  for (const s of series) {
    if (s.type === 'area') {
      return s.data.map(({x}) => x)
    }
  }
  return []
}
const getVisibleData = (data, xScale) => {
  const scaledOffsetX = xScale.isCategorical()
    ? Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2
    : 0
  const visibleData = []
  for (const x of data) {
    const scaledX = xScale.d3Scale(x)
    if (scaledX !== void 0) {
      visibleData.push({x, scaledX: scaledX + scaledOffsetX})
    }
  }
  return visibleData
}
const insertIntoMatrix = (matrix, row, col, value) => {
  if (!matrix[row]) {
    matrix[row] = []
  }
  matrix[row][col] = value
}
const uniq = arr => {
  const set = new Set()
  const uniqArray = []
  for (const value of arr) {
    if (!set.has(value)) {
      set.add(value)
      uniqArray.push(value)
    }
  }
  return uniqArray
}

export {
  circleIndex,
  computeDomainX,
  computeDomainY,
  computePlotPoints,
  findClosest,
  isSeriesValid
}
