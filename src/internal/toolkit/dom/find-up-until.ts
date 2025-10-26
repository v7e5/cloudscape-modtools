const findUpUntil = (from, test) => {
  let current = from
  while (current && !test(current)) {
    current = current.parentElement
    while (current && !(current instanceof HTMLElement)) {
      current = current.parentElement
    }
  }
  return current
}

export {
  findUpUntil as default
}
