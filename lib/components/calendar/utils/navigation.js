import {
  addDays,
  addMonths,
  differenceInYears,
  isSameMonth,
  isSameYear,
  startOfMonth,
  startOfYear
} from 'date-fns'

const moveNextDay = (startDate, isDateEnabled) => {
  return moveDay(startDate, isDateEnabled, 1)
}
const movePrevDay = (startDate, isDateEnabled) => {
  return moveDay(startDate, isDateEnabled, -1)
}
const moveNextWeek = (startDate, isDateEnabled) => {
  return moveDay(startDate, isDateEnabled, 7)
}
const movePrevWeek = (startDate, isDateEnabled) => {
  return moveDay(startDate, isDateEnabled, -7)
}
const moveNextMonth = (startDate, isDateEnabled) => {
  return moveMonth(startDate, isDateEnabled, 1)
}
const movePrevMonth = (startDate, isDateEnabled) => {
  return moveMonth(startDate, isDateEnabled, -1)
}
const moveMonthDown = (startDate, isDateEnabled) => {
  return moveMonth(startDate, isDateEnabled, 3)
}
const moveMonthUp = (startDate, isDateEnabled) => {
  return moveMonth(startDate, isDateEnabled, -3)
}
const getBaseDay = (date, isDateEnabled) => {
  return getBaseDate({date, isDateEnabled, granularity: 'day'})
}
const getBaseMonth = (date, isDateEnabled) => {
  return getBaseDate({date, isDateEnabled, granularity: 'month'})
}
const getBaseDate = ({date, granularity, isDateEnabled}) => {
  const isMonthGranularity = granularity === 'month'
  const getStartDate = isMonthGranularity ? startOfYear : startOfMonth
  const moveDate2 = isMonthGranularity ? moveMonth : moveDay
  const isSamePage = isMonthGranularity ? isSameYear : isSameMonth
  const startDate = getStartDate(date)
  if (isDateEnabled(startDate)) {
    return startDate
  }
  const firstEnabledDate = moveDate2(startDate, isDateEnabled, 1)
  return isSamePage(startDate, firstEnabledDate) ? firstEnabledDate : startDate
}
const moveDay = (startDate, isDateEnabled, step) => {
  return moveDate({startDate, granularity: 'day', isDateEnabled, step})
}
const moveMonth = (startDate, isDateEnabled, step) => {
  return moveDate({startDate, granularity: 'month', isDateEnabled, step})
}
const moveDate = ({startDate, granularity, isDateEnabled, step}) => {
  const isMonthGranularity = granularity === 'month'
  const addSteps = isMonthGranularity ? addMonths : addDays
  const limitYears = isMonthGranularity ? 1 : 10
  let current = addSteps(startDate, step)
  while (!isDateEnabled(current)) {
    if (Math.abs(differenceInYears(startDate, current)) > limitYears) {
      return startDate
    }
    current = addSteps(current, step)
  }
  return current
}

export {
  getBaseDay,
  getBaseMonth,
  moveMonthDown,
  moveMonthUp,
  moveNextDay,
  moveNextMonth,
  moveNextWeek,
  movePrevDay,
  movePrevMonth,
  movePrevWeek
}
