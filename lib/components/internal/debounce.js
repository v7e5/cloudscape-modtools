const DEBOUNCE_DEFAULT_DELAY = 200
const debounce = (func, delay = DEBOUNCE_DEFAULT_DELAY) => {
  let timeout
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      func(...args)
    }, delay)
  }
}

export {
  DEBOUNCE_DEFAULT_DELAY,
  debounce as default
}
