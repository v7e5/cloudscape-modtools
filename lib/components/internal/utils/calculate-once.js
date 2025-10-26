const calculateOnce = callback => {
  let result = void 0
  return () => {
    if (result === void 0) {
      result = callback()
    }
    return result
  }
}

export {
  calculateOnce
}
