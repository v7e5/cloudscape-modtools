import {formatDateTime} from '../internal/utils/date-time'

const KB = 1e3
const MB = 1e3 ** 2
const GB = 1e3 ** 3
const TB = 1e3 ** 4
const formatFileSize = size => {
  if (size < MB) {
    return `${(size / KB).toFixed(2)} KB`
  }
  if (size < GB) {
    return `${(size / MB).toFixed(2)} MB`
  }
  if (size < TB) {
    return `${(size / GB).toFixed(2)} GB`
  }
  return `${(size / TB).toFixed(2)} TB`
}
const formatFileLastModified = date => {
  return formatDateTime(date)
}

export {
  formatFileLastModified,
  formatFileSize
}
