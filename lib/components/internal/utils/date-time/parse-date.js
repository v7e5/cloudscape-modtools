const parseDate = (value, strict = false) => {
  const [yearString, monthString, dayString] = value.split('-')
  const year = Number(yearString)
  const month = Number(monthString)
  const day = Number(dayString)
  if (strict) {
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return null
    }
  }
  return new Date(year, (month || 1) - 1, day || 1)
}

export {
  parseDate
}
