const WIDTHS = [1920, 1400, 1200, 992, 768]
const defaultCardsPerRow = WIDTHS.map((value, index, widths) => ({
  minWidth: value,
  cards: widths.length + 1 - index
}))
const getCardsPerRow = (width, config) => {
  if (config.length === 0) {
    config = defaultCardsPerRow
  }
  let cardsPerRow = 1
  const sortedConfig = config
    .slice()
    .map(value => ({
      minWidth: value.minWidth || 0,
      cards: value.cards
    }))
    .sort((a, b) => b.minWidth - a.minWidth)
  sortedConfig.some(layout => {
    if (width >= layout.minWidth) {
      cardsPerRow = layout.cards
      return true
    }
  })
  return cardsPerRow
}

export {
  getCardsPerRow
}
