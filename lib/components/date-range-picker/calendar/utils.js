import {addMonths, isSameMonth, startOfMonth} from 'date-fns'
import {parseDate} from '../../internal/utils/date-time'

const findDateToFocus = (selected, baseDate, isDateEnabled) => {
  if (selected && isDateEnabled(selected) && isSameMonth(selected, baseDate)) {
    return selected
  }
  const today = new Date()
  if (isDateEnabled(today) && isSameMonth(today, baseDate)) {
    return today
  }
  if (isDateEnabled(baseDate)) {
    return baseDate
  }
  return null
}
const findMonthToDisplay = (value, isSingleGrid) => {
  if (value.start.date) {
    const startDate = parseDate(value.start.date)
    if (isSingleGrid) {
      return startOfMonth(startDate)
    }
    return startOfMonth(addMonths(startDate, 1))
  }
  if (value.end.date) {
    return startOfMonth(parseDate(value.end.date))
  }
  return startOfMonth(Date.now())
}

export {
  findDateToFocus,
  findMonthToDisplay
}
