const ARROW_OFFSET = 12
const PRIORITY_MAPPING = {
  top: [
    'top-center',
    'top-right',
    'top-left',
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'right-top',
    'right-bottom',
    'left-top',
    'left-bottom'
  ],
  bottom: [
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'top-center',
    'top-right',
    'top-left',
    'right-top',
    'right-bottom',
    'left-top',
    'left-bottom'
  ],
  left: [
    'left-top',
    'left-bottom',
    'right-top',
    'right-bottom',
    'bottom-center',
    'top-center',
    'bottom-left',
    'top-left',
    'bottom-right',
    'top-right'
  ],
  right: [
    'right-top',
    'right-bottom',
    'left-top',
    'left-bottom',
    'bottom-center',
    'top-center',
    'bottom-right',
    'top-right',
    'bottom-left',
    'top-left'
  ]
}
const RECTANGLE_CALCULATIONS = {
  'top-center': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart - body.blockSize - arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 -
        body.inlineSize / 2,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'top-right': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart - body.blockSize - arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 -
        ARROW_OFFSET -
        arrow.inlineSize / 2,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'top-left': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart - body.blockSize - arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 +
        ARROW_OFFSET +
        arrow.inlineSize / 2 -
        body.inlineSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'bottom-center': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart + trigger.blockSize + arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 -
        body.inlineSize / 2,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'bottom-right': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart + trigger.blockSize + arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 -
        ARROW_OFFSET -
        arrow.inlineSize / 2,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'bottom-left': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart + trigger.blockSize + arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart +
        trigger.inlineSize / 2 +
        ARROW_OFFSET +
        arrow.inlineSize / 2 -
        body.inlineSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'right-top': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart +
        trigger.blockSize / 2 -
        ARROW_OFFSET -
        arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart + trigger.inlineSize + arrow.blockSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'right-bottom': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart +
        trigger.blockSize / 2 -
        body.blockSize +
        ARROW_OFFSET +
        arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart + trigger.inlineSize + arrow.blockSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'left-top': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart +
        trigger.blockSize / 2 -
        ARROW_OFFSET -
        arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart - body.inlineSize - arrow.blockSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  },
  'left-bottom': ({body, trigger, arrow}) => {
    return {
      insetBlockStart:
        trigger.insetBlockStart +
        trigger.blockSize / 2 -
        body.blockSize +
        ARROW_OFFSET +
        arrow.blockSize,
      insetInlineStart:
        trigger.insetInlineStart - body.inlineSize - arrow.blockSize,
      inlineSize: body.inlineSize,
      blockSize: body.blockSize
    }
  }
}
const fitIntoContainer = (inner, outer) => {
  let {insetInlineStart, inlineSize, insetBlockStart, blockSize} = inner
  if (insetInlineStart < outer.insetInlineStart) {
    inlineSize = insetInlineStart + inlineSize - outer.insetInlineStart
    insetInlineStart = outer.insetInlineStart
  } else if (
    insetInlineStart + inlineSize >
    outer.insetInlineStart + outer.inlineSize
  ) {
    inlineSize = outer.insetInlineStart + outer.inlineSize - insetInlineStart
  }
  if (insetBlockStart < outer.insetBlockStart) {
    blockSize = insetBlockStart + blockSize - outer.insetBlockStart
    insetBlockStart = outer.insetBlockStart
  } else if (
    insetBlockStart + blockSize >
    outer.insetBlockStart + outer.blockSize
  ) {
    blockSize = outer.insetBlockStart + outer.blockSize - insetBlockStart
  }
  return {insetInlineStart, inlineSize, insetBlockStart, blockSize}
}
const getTallestRect = (rect1, rect2) => {
  return rect1.blockSize >= rect2.blockSize ? rect1 : rect2
}
const getIntersection = rectangles => {
  let boundingBox = null
  for (const currentRect of rectangles) {
    if (!boundingBox) {
      boundingBox = currentRect
      continue
    }
    const insetInlineStart = Math.max(
      boundingBox.insetInlineStart,
      currentRect.insetInlineStart
    )
    const insetBlockStart = Math.max(
      boundingBox.insetBlockStart,
      currentRect.insetBlockStart
    )
    const insetInlineEnd = Math.min(
      boundingBox.insetInlineStart + boundingBox.inlineSize,
      currentRect.insetInlineStart + currentRect.inlineSize
    )
    const insetBlockEnd = Math.min(
      boundingBox.insetBlockStart + boundingBox.blockSize,
      currentRect.insetBlockStart + currentRect.blockSize
    )
    if (insetInlineEnd < insetInlineStart || insetBlockEnd < insetBlockStart) {
      return null
    }
    boundingBox = {
      insetInlineStart,
      insetBlockStart,
      inlineSize: insetInlineEnd - insetInlineStart,
      blockSize: insetBlockEnd - insetBlockStart
    }
  }
  return boundingBox
}
const intersectRectangles = rectangles => {
  const boundingBox = getIntersection(rectangles)
  return boundingBox && boundingBox.blockSize * boundingBox.inlineSize
}
const calculatePosition = ({
  preferredPosition,
  fixedInternalPosition,
  trigger,
  arrow,
  body,
  container,
  viewport,

  renderWithPortal,
  allowVerticalOverflow
}) => {
  let bestOption = null
  const preferredInternalPositions = fixedInternalPosition
    ? [fixedInternalPosition]
    : PRIORITY_MAPPING[preferredPosition]
  for (const internalPosition2 of preferredInternalPositions) {
    const rect2 = RECTANGLE_CALCULATIONS[internalPosition2]({
      body,
      trigger,
      arrow
    })
    const visibleArea = renderWithPortal
      ? getIntersection([rect2, viewport])
      : getIntersection([rect2, viewport, container])
    const fitsWithoutOverflow =
      visibleArea &&
      visibleArea.inlineSize === body.inlineSize &&
      visibleArea.blockSize === body.blockSize
    if (fitsWithoutOverflow) {
      return {internalPosition: internalPosition2, rect: rect2}
    }
    const newOption = {
      rect: rect2,
      internalPosition: internalPosition2,
      visibleArea
    }
    bestOption = getBestOption(newOption, bestOption)
  }
  const internalPosition = bestOption?.internalPosition || 'right-top'
  const rect = RECTANGLE_CALCULATIONS[internalPosition]({body, trigger, arrow})
  const tallestBoundingContainer = getTallestRect(viewport, container)
  const boundingContainer =
    allowVerticalOverflow && isTopOrBottom(internalPosition)
      ? {
          insetBlockStart: tallestBoundingContainer.insetBlockStart,
          blockSize: tallestBoundingContainer.blockSize,
          insetInlineStart: viewport.insetInlineStart,
          inlineSize: viewport.inlineSize
        }
      : viewport
  const optimizedRect = fitIntoContainer(rect, boundingContainer)
  const scrollable = optimizedRect.blockSize < rect.blockSize
  return {internalPosition, rect: optimizedRect, scrollable}
}
const getBestOption = (option1, option2) => {
  if (!option2?.visibleArea) {
    return option1
  }
  if (!option1.visibleArea) {
    return option2
  }
  if (option1.visibleArea.inlineSize === option2.visibleArea.inlineSize) {
    return option1.visibleArea.blockSize > option2.visibleArea.blockSize
      ? option1
      : option2
  }
  return option1.visibleArea.inlineSize > option2.visibleArea.inlineSize
    ? option1
    : option2
}
const getOffsetDimensions = element => {
  return {offsetHeight: element.offsetHeight, offsetWidth: element.offsetWidth}
}
const getDimensions = element => {
  const computedStyle = getComputedStyle(element)
  return {
    inlineSize: parseFloat(computedStyle.inlineSize),
    blockSize: parseFloat(computedStyle.blockSize)
  }
}
const isTopOrBottom = internalPosition => {
  return ['top', 'bottom'].includes(internalPosition.split('-')[0])
}

export {
  PRIORITY_MAPPING,
  calculatePosition,
  getDimensions,
  getOffsetDimensions,
  intersectRectangles
}
