const repeat = (value, times) => {
  const array = []
  for (let i = 0; i < times; i++) {
    array[i] = value
  }
  return array
}

export {
  repeat
}
