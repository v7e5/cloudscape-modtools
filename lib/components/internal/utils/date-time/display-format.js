const isoToDisplay = value => {
  return value.replace(/-/g, '/')
}
const displayToIso = value => {
  return value.replace(/\//g, '-')
}

export {
  displayToIso,
  isoToDisplay
}
