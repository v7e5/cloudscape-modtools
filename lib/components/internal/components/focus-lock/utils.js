const tabbables = [
  'button:enabled',
  'select:enabled',
  'textarea:enabled',
  'input:enabled',
  'a[href]',
  'area[href]',
  'summary',
  'iframe',
  'object',
  'embed',
  'audio[controls]',
  'video[controls]',
  '[tabindex]',
  '[contenteditable]',
  '[autofocus]'
].join(',')
const getAllFocusables = container => {
  return Array.prototype.slice.call(container.querySelectorAll(tabbables))
}
const getFocusables = container => {
  return getAllFocusables(container).filter(element => element.tabIndex !== -1)
}
const getFirstFocusable = container => {
  const focusables = getFocusables(container)
  return focusables[0] ?? null
}
const getLastFocusable = container => {
  const focusables = getFocusables(container)
  return focusables[focusables.length - 1] ?? null
}

export {
  getAllFocusables,
  getFirstFocusable,
  getFocusables,
  getLastFocusable
}
