const setDayIndex = (date, dayIndex) => {
  const diff = dayIndex - date.getDay()
  date.setDate(date.getDate() + diff)
}
const renderDayName = (locale, dayIndex, mode) => {
  const tempDate = new Date()
  setDayIndex(tempDate, dayIndex)
  return tempDate.toLocaleDateString(locale, {weekday: mode})
}
const renderMonthAndYear = (locale, baseDate) => {
  const result = baseDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long'
  })
  return result
}
const renderYear = (locale, date) => {
  return date.toLocaleDateString(locale, {
    year: 'numeric'
  })
}
const dayLabelCache = new Map()
const getDateLabel = (locale, date, mode = 'full') => {
  const cacheKey = locale + date.getTime() + mode
  const cachedValue = dayLabelCache.get(cacheKey)
  if (cachedValue) {
    return cachedValue
  }
  const value = date.toLocaleDateString(locale, {
    weekday: mode === 'full' ? 'long' : void 0,
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  dayLabelCache.set(cacheKey, value)
  return value
}
const renderTimeLabel = (locale, date, format) => {
  let options = {}
  if (format === 'hh') {
    options = {hour: '2-digit'}
  }
  if (format === 'hh:mm') {
    options = {hour: '2-digit', minute: '2-digit'}
  }
  const value = date.toLocaleTimeString(locale, options)
  return value
}

export {
  getDateLabel,
  renderDayName,
  renderMonthAndYear,
  renderTimeLabel,
  renderYear
}
