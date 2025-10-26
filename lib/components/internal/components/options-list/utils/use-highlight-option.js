import {useCallback, useState} from 'react'

class HighlightType {
  constructor(type, moveFocus = type === 'keyboard') {
    this.type = type
    this.moveFocus = moveFocus
  }
}
const useHighlightedOption = ({options, isHighlightable}) => {
  const [highlightedIndex, setHighlightedIndexState] = useState(-1)
  const [highlightType, setHighlightType] = useState(
    new HighlightType('keyboard')
  )
  const setHighlightedIndex = useCallback((index, highlightType2) => {
    setHighlightedIndexState(index)
    setHighlightType(highlightType2)
  }, [])
  const highlightedOption =
    options[highlightedIndex] && isHighlightable(options[highlightedIndex])
      ? options[highlightedIndex]
      : void 0
  const moveHighlightFrom = (
    direction,
    startIndex = highlightedIndex,
    highlightType2
  ) => {
    const fromBottomEnd = startIndex === -1 && direction === -1
    let newIndex = fromBottomEnd ? options.length : startIndex
    do {
      newIndex += direction
    } while (options[newIndex] && !isHighlightable(options[newIndex]))
    if (options[newIndex]) {
      setHighlightedIndex(newIndex, highlightType2)
    }
  }
  const moveHighlight = (direction, highlightType2) =>
    moveHighlightFrom(direction, highlightedIndex, highlightType2)
  const highlightOption = useCallback(
    (option, highlightType2) => {
      const index = options.indexOf(option)
      setHighlightedIndex(index, highlightType2)
    },
    [options, setHighlightedIndex]
  )
  return [
    {highlightType, highlightedIndex, highlightedOption},
    {
      setHighlightedIndexWithMouse: (index, moveFocus = false) =>
        setHighlightedIndex(index, new HighlightType('mouse', moveFocus)),
      moveHighlightWithKeyboard: direction =>
        moveHighlight(direction, new HighlightType('keyboard')),
      highlightOptionWithKeyboard: option =>
        highlightOption(option, new HighlightType('keyboard')),
      resetHighlightWithKeyboard: () =>
        setHighlightedIndex(-1, new HighlightType('keyboard')),
      goHomeWithKeyboard: () =>
        moveHighlightFrom(1, -1, new HighlightType('keyboard')),
      goEndWithKeyboard: () =>
        moveHighlightFrom(-1, options.length, new HighlightType('keyboard'))
    }
  ]
}

export {
  HighlightType,
  useHighlightedOption
}
