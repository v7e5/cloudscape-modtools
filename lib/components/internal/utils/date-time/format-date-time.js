import {formatDate} from './format-date'
import {formatTime} from './format-time'

const formatDateTime = date => {
  return formatDate(date) + 'T' + formatTime(date)
}

export {
  formatDateTime
}
