import {findUpUntil} from './dom'

const getOverflowParents = element => {
  const parents = []
  let node = element
  while ((node = node.parentElement) && node !== document.body) {
    getComputedStyle(node).overflow !== 'visible' && parents.push(node)
  }
  return parents
}
const getOverflowParentDimensions = ({
  element,
  excludeClosestParent = false,
  expandToViewport = false,
  canExpandOutsideViewport = false
}) => {
  const parents = expandToViewport
    ? []
    : getOverflowParents(element).map(el => {
        const {height, width, top, left} = el.getBoundingClientRect()
        return {
          blockSize: canExpandOutsideViewport ? el.scrollHeight : height,
          inlineSize: width,
          insetBlockStart: top,
          insetInlineStart: left
        }
      })
  if (canExpandOutsideViewport && !expandToViewport) {
    const documentDimensions = document.documentElement.getBoundingClientRect()
    parents.push({
      inlineSize: Math.max(
        documentDimensions.width,
        document.documentElement.clientWidth
      ),
      blockSize: Math.max(
        documentDimensions.height,
        document.documentElement.clientHeight
      ),
      insetBlockStart: documentDimensions.top,
      insetInlineStart: documentDimensions.left
    })
  } else {
    parents.push({
      blockSize: window.innerHeight,
      inlineSize: window.innerWidth,
      insetBlockStart: 0,
      insetInlineStart: 0
    })
  }
  if (excludeClosestParent && !expandToViewport) {
    parents.shift()
  }
  return parents
}
const scrollElementIntoView = (
  element,
  options = {block: 'nearest', inline: 'nearest'}
) => {
  element?.scrollIntoView?.(options)
}
const calculateScroll = ({insetBlockStart, blockSize}) => {
  if (insetBlockStart < 0) {
    return insetBlockStart
  } else if (insetBlockStart + blockSize > window.innerHeight) {
    if (blockSize > window.innerHeight) {
      return insetBlockStart
    } else {
      return insetBlockStart + blockSize - window.innerHeight
    }
  }
  return 0
}
const scrollRectangleIntoView = (box, scrollableParent) => {
  const scrollAmount = calculateScroll(box)
  if (scrollAmount) {
    ;(scrollableParent || window).scrollBy(0, scrollAmount)
  }
}
const getFirstScrollableParent = element => {
  return (
    findUpUntil(element, el => {
      const overflows = el.scrollHeight > el.clientHeight
      return (
        overflows &&
        ['scroll', 'auto'].includes(getComputedStyle(el).overflowY)
      )
    }) || void 0
  )
}

export {
  calculateScroll,
  getFirstScrollableParent,
  getOverflowParentDimensions,
  getOverflowParents,
  scrollElementIntoView,
  scrollRectangleIntoView
}
