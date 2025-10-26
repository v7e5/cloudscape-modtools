const setElementWidths = (element, styles) => {
  const setProperty = property => {
    const value = styles[property]
    let widthCssValue = ''
    if (typeof value === 'number') {
      widthCssValue = value + 'px'
    }
    if (typeof value === 'string') {
      widthCssValue = value
    }
    if (element.style[property] !== widthCssValue) {
      element.style[property] = widthCssValue
    }
  }
  setProperty('width')
  setProperty('minWidth')
  setProperty('maxWidth')
}

export {
  setElementWidths
}
