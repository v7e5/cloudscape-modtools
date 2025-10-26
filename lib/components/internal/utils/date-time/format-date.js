import {padLeftZeros} from '../strings'

const formatDate = (value, granularity = 'day') => {
  const year = value.getFullYear()
  const month = padLeftZeros(`${value.getMonth() + 1}`, 2)
  if (granularity === 'month') {
    return `${year}-${month}`
  }
  const date = padLeftZeros(`${value.getDate()}`, 2)
  return `${year}-${month}-${date}`
}

export {
  formatDate
}
