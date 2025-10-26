import {
  getDateLabel,
  renderMonthAndYear,
  renderYear
} from '../calendar/utils/intl'

const isValidFullDate = ({date, granularity}) => {
  const regex =
    granularity === 'month' ? /^\d{4}-\d{2}(-\d{2})?$/ : /^\d{4}-\d{2}-\d{2}$/
  return !!date.match(regex)
}
const getSelectedDateLabel = ({date, granularity, locale}) => {
  return granularity === 'month'
    ? renderMonthAndYear(locale, date)
    : getDateLabel(locale, date)
}
const getBaseDateLabel = ({date, granularity, locale}) => {
  return granularity === 'month'
    ? renderYear(locale, date)
    : renderMonthAndYear(locale, date)
}

export {
  getBaseDateLabel,
  getSelectedDateLabel,
  isValidFullDate
}
