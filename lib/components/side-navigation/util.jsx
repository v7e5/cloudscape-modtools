const hasActiveLink = (items, activeHref) => {
  for (const item of items) {
    if (
      (item.type === 'link' ||
        item.type === 'link-group' ||
        item.type === 'expandable-link-group') &&
      item.to === activeHref
    ) {
      return true
    }
    if (
      (item.type === 'section' ||
        item.type === 'link-group' ||
        item.type === 'expandable-link-group') &&
      hasActiveLink(item.items, activeHref)
    ) {
      return true
    }
  }
  return false
}
const generateExpandableItemsMapping = (
  items,
  mapping = new WeakMap(),
  expandableParents = []
) => {
  items.forEach(item => {
    const nextLevelParents = expandableParents.slice()
    if (item.type === 'section' || item.type === 'expandable-link-group') {
      mapping.set(item, expandableParents)
      nextLevelParents.unshift(item)
    }
    if (
      item.type === 'section' ||
      item.type === 'link-group' ||
      item.type === 'expandable-link-group'
    ) {
      generateExpandableItemsMapping(item.items, mapping, nextLevelParents)
    }
  })
  return mapping
}

export {
  generateExpandableItemsMapping,
  hasActiveLink
}
