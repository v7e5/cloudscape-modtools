import {padLeftZeros} from '../strings'

const formatTimeOffsetISO = (isoDate, offsetInMinutes) => {
  offsetInMinutes = defaultToLocal(isoDate, offsetInMinutes)
  const {hours, minutes} = getMinutesAndHours(offsetInMinutes)
  const sign = offsetInMinutes < 0 ? '-' : '+'
  const formattedOffset = `${sign}${formatISO2Digits(
    hours
  )}:${formatISO2Digits(minutes)}`
  return formattedOffset
}
const formatTimeOffsetLocalized = (isoDate, offsetInMinutes) => {
  offsetInMinutes = defaultToLocal(isoDate, offsetInMinutes)
  if (offsetInMinutes === 0) {
    return '(UTC)'
  }
  const {hours, minutes} = getMinutesAndHours(offsetInMinutes)
  const sign = offsetInMinutes < 0 ? '-' : '+'
  const formattedMinutes = minutes === 0 ? '' : `:${minutes}`
  const formattedOffset = `(UTC${sign}${hours}${formattedMinutes})`
  return formattedOffset
}
const defaultToLocal = (isoDate, offsetInMinutes) => {
  return offsetInMinutes ?? 0 - new Date(isoDate).getTimezoneOffset()
}
const getMinutesAndHours = minutes => {
  return {
    hours: Math.floor(Math.abs(minutes) / 60),
    minutes: Math.abs(minutes % 60)
  }
}
const formatISO2Digits = n => {
  return padLeftZeros(n.toFixed(0), 2)
}

export {
  formatTimeOffsetISO,
  formatTimeOffsetLocalized
}
