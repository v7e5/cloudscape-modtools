import {
  formatTimeOffsetISO,
  parseTimezoneOffset,
  shiftTimezoneOffset
} from '../internal/utils/date-time'
import {addMinutes} from 'date-fns'

const setTimeOffset = (value, timeOffset) => {
  if (!(value?.type === 'absolute')) {
    return value
  }
  return {
    type: 'absolute',
    startDate:
      value.startDate +
      formatTimeOffsetISO(value.startDate, timeOffset.startDate),
    endDate:
      value.endDate + formatTimeOffsetISO(value.endDate, timeOffset.endDate)
  }
}
const shiftTimeOffset = (value, timeOffset) => {
  if (!value || value.type !== 'absolute') {
    return value
  }
  const dateTimeRegex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d{1,3})?(((\+|-)\d{2}(:\d{2})?)|Z)?$/
  if (
    !dateTimeRegex.test(value.startDate) ||
    !dateTimeRegex.test(value.endDate)
  ) {
    return null
  }
  return {
    type: 'absolute',
    startDate: shiftTimezoneOffset(value.startDate, timeOffset.startDate),
    endDate: shiftTimezoneOffset(value.endDate, timeOffset.endDate)
  }
}
const normalizeTimeOffset = (value, getTimeOffset, timeOffset) => {
  if (value && value.type === 'absolute') {
    if (getTimeOffset) {
      return {
        startDate: getTimeOffset(parseDateUTC(value.startDate)),
        endDate: getTimeOffset(parseDateUTC(value.endDate))
      }
    } else if (timeOffset !== void 0) {
      return {startDate: timeOffset, endDate: timeOffset}
    }
  }
  return {startDate: void 0, endDate: void 0}
}
const parseDateUTC = isoDateString => {
  const date = new Date(isoDateString)
  return addMinutes(date, parseTimezoneOffset(isoDateString))
}

export {
  normalizeTimeOffset,
  setTimeOffset,
  shiftTimeOffset
}
