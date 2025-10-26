import {useContainerQuery} from '~/components/internal/toolkit'

const useContainerWidth = (defaultValue = 0, threshold = 1) => {
  const [width, ref] = useContainerQuery((rect, prev) => {
    if (prev === null) {
      return rect.contentBoxWidth
    }
    return Math.abs(prev - rect.contentBoxWidth) >= threshold
      ? rect.contentBoxWidth
      : prev
  })
  return [width ?? defaultValue, ref]
}

export {
  useContainerWidth as default
}
