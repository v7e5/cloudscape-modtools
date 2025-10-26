import {addMinutes} from 'date-fns'
import {joinDateTime} from '.'
import {formatDate} from './format-date'
import {formatTime} from './format-time'
import {parseTimezoneOffset} from './parse-timezone-offset'

const shiftTimezoneOffset = (dateString, targetTimezoneOffset) => {
  const [datePart, timeAndOffsetPart = ''] = dateString.split('T')
  const [timePart] = timeAndOffsetPart.split(/-|\+|Z/)
  const valueWithoutOffset = joinDateTime(datePart, timePart)
  const originalTimezoneOffset = parseTimezoneOffset(dateString)
  const date = new Date(valueWithoutOffset)
  targetTimezoneOffset = targetTimezoneOffset ?? 0 - date.getTimezoneOffset()
  const adjustedDate = addMinutes(
    date,
    targetTimezoneOffset - originalTimezoneOffset
  )
  return joinDateTime(formatDate(adjustedDate), formatTime(adjustedDate))
}

export {
  shiftTimezoneOffset
}
