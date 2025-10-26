import {getWeekStartByLocale} from 'weekstart'

const normalizeStartOfWeek = (startOfWeek, locale) => {
  return typeof startOfWeek === 'number'
    ? startOfWeek % 7
    : getWeekStartByLocale(locale)
}

export {
  normalizeStartOfWeek
}
