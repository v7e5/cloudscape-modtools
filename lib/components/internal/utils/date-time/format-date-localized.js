import {formatTimeOffsetLocalized} from './format-time-offset'

const formatDateLocalized = ({
  date: isoDate,
  hideTimeOffset,
  isDateOnly,
  timeOffset,
  locale
}) => {
  const date = new Date(isoDate)
  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
  if (isDateOnly) {
    return formattedDate
  }
  const formattedTime = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    hourCycle: 'h23',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
  const formattedDateTime =
    formattedDate + getDateTimeSeparator(locale) + formattedTime
  if (hideTimeOffset) {
    return formattedDateTime
  }
  const formattedTimeOffset = formatTimeOffsetLocalized(isoDate, timeOffset)
  return formattedDateTime + ' ' + formattedTimeOffset
}
const languagesWithoutDateTimeSeparator = ['ja', 'zh-CN', 'zh-TW']
const getDateTimeSeparator = locale => {
  return locale && languagesWithoutDateTimeSeparator.includes(locale)
    ? ' '
    : ', '
}

export {
  formatDateLocalized as default
}
