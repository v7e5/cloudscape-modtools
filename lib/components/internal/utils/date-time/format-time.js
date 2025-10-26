import {padLeftZeros} from '../strings'

const formatTime = value => {
  const hours = padLeftZeros(`${value.getHours()}`, 2)
  const minutes = padLeftZeros(`${value.getMinutes()}`, 2)
  const seconds = padLeftZeros(`${value.getSeconds()}`, 2)
  return `${hours}:${minutes}:${seconds}`
}

export {
  formatTime
}
