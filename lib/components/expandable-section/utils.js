const variantSupportsDescription = variant => {
  return ['container', 'default', 'footer'].includes(variant)
}
const variantSupportsInteractiveElements = variant => {
  return ['container', 'compact'].includes(variant)
}

export {
  variantSupportsDescription,
  variantSupportsInteractiveElements
}
