const getOptionId = (menuId, index) => {
  if (index < 0) {
    return void 0
  }
  return `${menuId}-option-${index}`
}

export {
  getOptionId
}
