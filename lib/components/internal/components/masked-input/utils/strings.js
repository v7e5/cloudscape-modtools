const insertAt = (text, toInsert, start, end = start) =>
  text.slice(0, start) + toInsert + text.slice(end)

export {
  insertAt
}
