const padLeftZeros = (text, length) => {
  while (text.length < length) {
    text = `0${text}`
  }
  return text
}

export {
  padLeftZeros
}
