const getTextWidth = textNode => {
  if (textNode.getComputedTextLength) {
    return textNode.getComputedTextLength()
  }
  return -1
}

export {
  getTextWidth
}
