const CONSTRAINED_PAGE_HEIGHT = 400
const MAIN_PANEL_MIN_HEIGHT = 250
const CONSTRAINED_MAIN_PANEL_MIN_HEIGHT = 40
const getSplitPanelDefaultSize = position => {
  if (typeof document === 'undefined') {
    return 0
  }
  return position === 'side'
    ? document.documentElement.clientWidth / 3
    : document.documentElement.clientHeight / 2
}
const getLimitedValue = (min, value, max) => {
  if (min > max) {
    return min
  }
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

export {
  CONSTRAINED_MAIN_PANEL_MIN_HEIGHT,
  CONSTRAINED_PAGE_HEIGHT,
  MAIN_PANEL_MIN_HEIGHT,
  getLimitedValue,
  getSplitPanelDefaultSize
}
