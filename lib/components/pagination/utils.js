const range = (from, to) => {
  const result = []
  for (let i = from; i <= to; i++) {
    result.push(i)
  }
  return result
}
const getPaginationState = (currentPageIndex, totalPagesCount, isOpenEnd) => {
  const numberOfControls = 7
  const leftDelta = Math.floor(numberOfControls / 2)
  let rightDelta = leftDelta
  const lowerLimit = 2
  let upperLimit = totalPagesCount - 1
  if (isOpenEnd) {
    rightDelta++
    upperLimit = totalPagesCount + 1
  }
  let leftIndex = currentPageIndex - leftDelta
  let rightIndex = currentPageIndex + rightDelta
  if (leftIndex < lowerLimit) {
    rightIndex += lowerLimit - leftIndex
    leftIndex = lowerLimit
  }
  if (rightIndex > upperLimit) {
    leftIndex -= rightIndex - upperLimit
    rightIndex = upperLimit
  }
  leftIndex = Math.max(leftIndex, 2)
  rightIndex = Math.min(rightIndex, upperLimit)
  const leftDots = leftIndex > 2
  const rightDots = isOpenEnd || rightIndex < upperLimit
  if (leftDots) {
    leftIndex++
  }
  if (rightDots) {
    rightIndex--
  }
  return {leftDots, rightDots, leftIndex, rightIndex}
}

export {
  getPaginationState,
  range
}
