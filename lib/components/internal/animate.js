const getDOMRects = elements => {
  const rects = {}
  for (const id in elements) {
    const element = elements[id]
    if (element) {
      rects[id] = element.getBoundingClientRect()
    }
  }
  return rects
}
const animate = ({
  oldState,
  elements,
  onTransitionsEnd,
  newElementInitialState
}) => {
  for (const id in elements) {
    const element = elements[id]
    const oldRect = oldState[id]
    if (element) {
      const newRect = element.getBoundingClientRect()
      const noOpTransform = {scale: 1, x: 0, y: 0}
      const calculatedInverseTransform = oldRect
        ? {
            scale: oldRect.width / newRect.width,
            x:
              (oldRect.left + oldRect.right) / 2 -
              (newRect.left + newRect.right) / 2,
            y:
              (oldRect.top + oldRect.bottom) / 2 -
              (newRect.top + newRect.bottom) / 2
          }
        : newElementInitialState
          ? newElementInitialState(newRect)
          : {}
      const inverseTransform = {
        ...noOpTransform,
        ...calculatedInverseTransform
      }
      element.style.transitionProperty = 'none'
      element.style.transform = `scale(${inverseTransform.scale}) translate(${inverseTransform.x}px, ${inverseTransform.y}px)`
      if (!oldRect) {
        element.style.opacity = '0'
      }
    }
  }
  requestAnimationFrame(() => {
    const ongoingAnimations = new Set()
    for (const id in elements) {
      const element = elements[id]
      if (element) {
        const oldRect = oldState[id]
        if (oldRect) {
          element.style.transitionProperty = `transform`
          element.style.transform = ''
        } else {
          element.style.transitionProperty = `transform, opacity`
          element.style.transform = ''
          element.style.opacity = ''
        }
        const onTransitionStart = event => {
          if (event.target === element) {
            ongoingAnimations.add(id)
            element.removeEventListener('transitionstart', onTransitionStart)
          }
        }
        const onTransitionEnd = event => {
          if (event.target === element) {
            element.style.transitionProperty = ''
            element.removeEventListener('transitionstart', onTransitionEnd)
            if (onTransitionsEnd) {
              ongoingAnimations.delete(id)
              if (ongoingAnimations.size === 0) {
                onTransitionsEnd()
              }
            }
          }
        }
        element.addEventListener('transitionstart', onTransitionStart)
        element.addEventListener('transitionend', onTransitionEnd)
      }
    }
  })
}

export {
  animate,
  getDOMRects
}
