import balanced from 'balanced-match'

const findUpUntil = (node, callback) => {
  let current = node
  while (current && !callback(current)) {
    current = current.parentElement
    while (current && !(current instanceof HTMLElement)) {
      current = current.parentElement
    }
  }
  return current
}
const getContainingBlock = startElement => {
  if (!startElement.parentElement) {
    return null
  }
  return findUpUntil(startElement.parentElement, element => {
    const computedStyle = getComputedStyle(element)
    return (
      (!!computedStyle.transform && computedStyle.transform !== 'none') ||
      (!!computedStyle.perspective && computedStyle.perspective !== 'none') ||
      (!!computedStyle.containerType &&
        computedStyle.containerType !== 'normal') ||
      computedStyle.contain
        ?.split(' ')
        .some(s => ['layout', 'paint', 'strict', 'content'].includes(s))
    )
  })
}
const cssVariableExpression = /--.+?\s*,\s*(.+)/
const parseCssVariable = value => {
  if (window.CSS?.supports?.('color', 'var(--dummy, #000)') ?? false) {
    return value
  }
  const varIndex = value.lastIndexOf('var(')
  if (varIndex === -1) {
    return value
  }
  const expr = balanced('(', ')', value.substr(varIndex))
  if (!expr) {
    return value
  }
  const match = expr.body.match(cssVariableExpression)
  return match ? match[1] : value
}

export {
  findUpUntil,
  getContainingBlock,
  parseCssVariable
}
