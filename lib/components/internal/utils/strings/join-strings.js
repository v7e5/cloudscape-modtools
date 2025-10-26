const joinStrings = (...strings) => {
  return strings.filter(Boolean).join(' ') || void 0
}

export {
  joinStrings
}
