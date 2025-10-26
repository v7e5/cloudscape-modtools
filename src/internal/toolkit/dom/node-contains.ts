const nodeContains = (parent, descendant) => {
  if (!parent || !descendant || !('nodeType' in descendant)) {
    return false
  }
  return parent.contains(descendant)
}

export {
  nodeContains as default
}
