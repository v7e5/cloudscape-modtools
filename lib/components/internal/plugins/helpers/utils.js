const sortByPriority = items => {
  return items.slice().sort((a, b) => {
    if (b.orderPriority !== a.orderPriority) {
      return Math.sign((b.orderPriority ?? 0) - (a.orderPriority ?? 0))
    }
    return b.id < a.id ? 1 : -1
  })
}

export {
  sortByPriority
}
