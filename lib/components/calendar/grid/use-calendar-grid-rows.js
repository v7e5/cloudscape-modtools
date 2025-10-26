import {useMemo} from 'react'
import {normalizeStartOfWeek} from '../../internal/utils/locale/'
import {getCalendarMonth} from 'mnth'

const useCalendarGridRows = ({baseDate, granularity, locale, startOfWeek}) => {
  const isMonthPicker = granularity === 'month'
  const rows = useMemo(
    () =>
      isMonthPicker
        ? getCalendarYear(baseDate)
        : getCalendarMonth(baseDate, {
            firstDayOfWeek: normalizeStartOfWeek(startOfWeek, locale)
          }),
    [baseDate, isMonthPicker, startOfWeek, locale]
  )
  return rows
}
const getCalendarYear = date => {
  const year = date.getFullYear()
  return new Array(4)
    .fill(0)
    .map((_, i) =>
      new Array(3).fill(0).map((_2, j) => new Date(year, i * 3 + j))
    )
}

export {
  useCalendarGridRows as default
}
