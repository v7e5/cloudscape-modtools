import {
  scaleLinear,
  scaleLog,
  scaleTime,
  scaleBand
} from '../../vendor/d3-scale'

const isNumericDomain = domain => {
  return domain.length > 0 && typeof domain[0] === 'number'
}
const isDateDomain = domain => {
  return domain.length > 0 && domain[0] instanceof Date
}
const createNumericScale = (type, domain) => {
  let scale
  switch (type) {
    case 'log':
      scale = scaleLog()
      break
    default:
      scale = scaleLinear()
  }
  if (isNumericDomain(domain)) {
    scale.domain(domain)
  }
  return scale
}
const createTimeScale = domain => {
  const scale = scaleTime()
  if (isDateDomain(domain)) {
    scale.domain(domain)
  }
  return scale
}
const createBandScale = domain => {
  const scale = scaleBand().padding(0.1)
  scale.domain(domain)
  return scale
}
const createScale = (type, domain, range) => {
  switch (type) {
    case 'linear':
    case 'log':
      return {
        type: 'numeric',
        scale: createNumericScale(type, domain).range(range)
      }
    case 'time':
      return {type: 'time', scale: createTimeScale(domain).range(range)}
    case 'categorical':
      return {type: 'categorical', scale: createBandScale(domain).range(range)}
  }
}
class ChartScale {
  constructor(scaleType, domain, range, noCategoricalOuterPadding = false) {
    this.scaleType = scaleType
    this.domain = domain
    this.range = range
    this.scale = createScale(this.scaleType, this.domain, this.range)
    this.d3Scale = this.scale.scale
    if (this.isCategorical()) {
      if (noCategoricalOuterPadding) {
        this.d3Scale.paddingInner(0.7)
        this.d3Scale.paddingOuter(0)
      } else {
        this.d3Scale.paddingInner(0.2)
        this.d3Scale.paddingOuter(0.05)
      }
    }
  }
  scale
  d3Scale
  cloneScale(newScaleType, newDomain, newRange) {
    return new ChartScale(
      newScaleType || this.scaleType,
      newDomain || this.domain,
      newRange || this.range
    )
  }
  isNumeric() {
    return this.scale.type === 'numeric'
  }
  isTime() {
    return this.scale.type === 'time'
  }
  isCategorical() {
    return this.scale.type === 'categorical'
  }
}
class NumericChartScale {
  constructor(scaleType, domain, range, adjustDomain) {
    this.scaleType = scaleType
    const scale = createNumericScale(scaleType, domain).range(range)
    if (adjustDomain !== null) {
      scale.nice(adjustDomain)
    }
    this.scale = {type: 'numeric', scale}
    this.d3Scale = this.scale.scale
  }
  scale
  d3Scale
  isCategorical() {
    return false
  }
}

export {
  ChartScale,
  NumericChartScale,
  createScale
}
