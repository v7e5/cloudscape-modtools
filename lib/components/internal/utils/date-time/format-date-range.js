import {isIsoDateOnly} from './is-iso-date-only'
import formatDateIso from './format-date-iso'
import formatDateLocalized from './format-date-localized'

const formatDateRange = ({
  startDate,
  endDate,
  timeOffset,
  hideTimeOffset,
  format,
  locale
}) => {
  const isDateOnly = isIsoDateOnly(startDate) && isIsoDateOnly(endDate)
  return (
    formatDate({
      date: startDate,
      format,
      hideTimeOffset,
      isDateOnly,
      timeOffset: timeOffset.startDate,
      locale
    }) +
    ' \u2014 ' +
    formatDate({
      date: endDate,
      format,
      hideTimeOffset,
      isDateOnly,
      timeOffset: timeOffset.endDate,
      locale
    })
  )
}
const formatDate = ({
  date,
  format,
  hideTimeOffset,
  isDateOnly,
  timeOffset,
  locale
}) => {
  switch (format) {
    case 'long-localized': {
      return formatDateLocalized({
        date,
        hideTimeOffset,
        isDateOnly,
        locale,
        timeOffset
      })
    }
    default: {
      return formatDateIso({date, hideTimeOffset, isDateOnly, timeOffset})
    }
  }
}

export {
  formatDateRange
}
