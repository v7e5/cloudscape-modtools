const normalizeTimeString = timeString => {
  const parts = timeString.split(':')
  while (parts.length < 3) {
    parts.push('00')
  }
  return parts.join(':')
}
const joinDateTime = (dateString, timeString) => {
  return `${dateString}T${timeString}`
}
const splitDateTime = dateStr => {
  const [date = '', time = ''] = dateStr.split('T')
  return {date, time}
}

export {
  joinDateTime,
  normalizeTimeString,
  splitDateTime
}
