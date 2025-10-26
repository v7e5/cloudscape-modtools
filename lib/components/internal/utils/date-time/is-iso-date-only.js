const dateRegex = /^\d{4}-\d{2}-\d{2}$/
const isIsoDateOnly = dateString => {
  return dateRegex.test(dateString)
}

export {
  isIsoDateOnly
}
