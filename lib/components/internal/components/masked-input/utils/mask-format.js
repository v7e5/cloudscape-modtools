import {padLeftZeros} from '../../../utils/strings'
import {insertAt} from './strings'

class MaskFormat {
  separator
  inputSeparators
  segments
  positionFormats = new Map()
  constructor({separator, inputSeparators = [], segments}) {
    this.segments = []
    this.separator = separator
    this.inputSeparators = [...inputSeparators, separator]
    this.enrichSegmentDefinitions(segments)
  }
  tryAppendSeparator(value) {
    const withSeparator = `${value}${this.separator}`
    return this.isValid(withSeparator) ? withSeparator : value
  }
  isSeparator(key) {
    return this.inputSeparators.indexOf(key) !== -1
  }
  isValid(value) {
    const inputSegments = value.split(this.separator)
    if (inputSegments.length > this.segments.length) {
      return false
    }
    return inputSegments.every((segmentValue, i) => {
      const segment = this.segments[i]
      if (segmentValue === '') {
        if (i === inputSegments.length - 1) {
          return true
        } else {
          return false
        }
      }
      if (!segmentValue.match(/^\d+$/)) {
        return false
      }
      if (
        segmentValue.length < segment.length &&
        i !== inputSegments.length - 1
      ) {
        return false
      }
      const intValue = parseInt(segmentValue, 10)
      if (segmentValue.length > segment.length) {
        return false
      }
      if (intValue < segment.min || intValue > segment.max(value)) {
        if (
          i === inputSegments.length - 1 &&
          segmentValue.length < segment.length
        ) {
          return true
        }
        return false
      }
      return true
    })
  }
  getValidValue(value) {
    let validValue = value
    do {
      if (this.isValid(validValue)) {
        return this.tryAppendSeparator(validValue)
      }
      validValue = validValue.substring(0, validValue.length - 1)
    } while (validValue.length > 0)
    return ''
  }
  autoComplete(value) {
    const [lastSegmentValue, ...completeSegmentValues] = value
      .split(this.separator)
      .reverse()
    const lastSegment = this.segments[completeSegmentValues.length]
    const paddedLastSegmentValue = this.padWithDefaultValue(
      lastSegmentValue,
      lastSegment
    )
    const partial = [
      ...completeSegmentValues.reverse(),
      paddedLastSegmentValue
    ]
    while (partial.length < this.segments.length) {
      const nextSegment = this.segments[partial.length]
      const segmentValue = this.padWithDefaultValue('', nextSegment)
      partial.push(segmentValue)
    }
    value = partial.join(this.separator)
    value = this.correctMinMaxValues(value)
    return value
  }
  getSegmentValueWithAddition(position, value, enteredDigit) {
    const segment = this.positionFormats.get(position)
    const segmentValue = value.substr(segment.start, segment.length)
    const segmentPosition = position - segment.start
    const newValue = insertAt(
      segmentValue,
      enteredDigit,
      segmentPosition,
      segmentPosition + 1
    )
    return parseInt(newValue, 10)
  }
  replaceDigitsWithZeroes(value, cursorStart, cursorEnd) {
    const position = this.isCursorAtSeparator(cursorStart)
      ? cursorStart + 1
      : cursorStart
    if (this.isCursorAtSeparator(cursorStart)) {
      cursorStart++
    }
    if (!this.isSegmentStart(cursorStart)) {
      const segment = this.positionFormats.get(cursorStart)
      value = insertAt(
        value,
        padLeftZeros('', segment.end - cursorStart),
        cursorStart,
        segment.end
      )
      cursorStart = segment.end + 1
    }
    let currentSegment
    while (
      cursorStart < cursorEnd &&
      (currentSegment = this.positionFormats.get(cursorStart + 1))
    ) {
      const insertionEnd = Math.min(cursorEnd, currentSegment.end)
      value = insertAt(
        value,
        padLeftZeros('', insertionEnd - currentSegment.start),
        currentSegment.start,
        insertionEnd
      )
      cursorStart = insertionEnd + 1
    }
    value = this.correctMinMaxValues(value)
    return {
      value,
      position
    }
  }
  handleSeparatorInput(value, position) {
    if (position === value.length && !this.isSegmentStart(position)) {
      const segment = this.positionFormats.get(position)
      let segmentValue = value.substr(segment.start, segment.length)
      segmentValue = this.padWithDefaultValue(segmentValue, segment)
      value = insertAt(value, segmentValue, segment.start, segment.end)
      value = this.correctMinMaxValues(value)
      return {
        value,
        position: value.length
      }
    }
  }
  isCursorAtSeparator(position) {
    return (
      0 < position &&
      position < this.getMaxLength() &&
      this.positionFormats.get(position) === void 0
    )
  }
  isSegmentStart(position) {
    return position === 0 || this.isCursorAtSeparator(position - 1)
  }
  getSegmentMaxValue(value, position) {
    return this.positionFormats.get(position).max(value)
  }
  getSegmentMinValue(value, position) {
    return this.positionFormats.get(position).min
  }
  getMaxLength() {
    const last = this.segments[this.segments.length - 1]
    return last.start + last.length
  }
  deleteSeparator(value, position) {
    value = insertAt(value, '0', position - 2, position - 1)
    return {
      value: this.correctMinMaxValues(value),
      position: position - 2
    }
  }
  deleteDigit(value, position) {
    value = insertAt(value, '0', position - 1, position)
    const length = value.length
    if (value.slice(length - 2) === '0:') {
      value = value.slice(0, length - 2)
    }
    return {
      value: this.correctMinMaxValues(value),
      position: position - 1
    }
  }
  correctMinMaxValues(value) {
    let segment = this.positionFormats.get(0)
    while (segment && value.length >= segment.end) {
      const segmentValue = parseInt(
        value.substr(segment.start, segment.length),
        10
      )
      const segmentMax = segment.max(value)
      if (segmentValue < segment.min) {
        let toInsert = segment.min.toFixed()
        toInsert = padLeftZeros(toInsert, segment.length)
        value = insertAt(value, toInsert, segment.start, segment.end)
      }
      if (segmentValue > segmentMax) {
        value = insertAt(
          value,
          segmentMax.toFixed(),
          segment.start,
          segment.end
        )
      }
      segment = this.positionFormats.get(segment.end + 1)
    }
    return value.substr(0, this.segments[this.segments.length - 1].end)
  }
  formatPastedText(text, value, cursorStart, cursorEnd) {
    const keyArr = text.trim().split('')
    let position = cursorStart
    let formattedValue = value
    if (cursorEnd > cursorStart && cursorEnd === value.length) {
      formattedValue = value.slice(0, cursorStart)
    }
    for (const key of keyArr) {
      if (position >= this.getMaxLength()) {
        break
      }
      const result = this.processKey(formattedValue, key, position)
      formattedValue = result.value
      position = result.position
    }
    return this.tryAppendSeparator(formattedValue)
  }
  processKey(initialValue, key, initialPosition) {
    let value = initialValue
    let position = initialPosition
    if (this.isSeparator(key)) {
      const result = this.handleSeparatorInput(value, position)
      if (result) {
        value = result.value
        position = result.position
      }
    } else {
      const isCursorAtEnd = position === value.length
      const segmentValue = this.getSegmentValueWithAddition(
        position,
        value,
        key
      )
      const segmentMaxValue = this.getSegmentMaxValue(value, position)
      const segmentMinValue = this.getSegmentMinValue(value, position)
      const firstDigitGreater =
        parseInt(key, 10) > parseInt(segmentMaxValue.toFixed()[0], 10)
      const isValidPosition =
        isCursorAtEnd || segmentValue.toFixed().length === 1
      const exceedsMaxAtSegmentStart =
        this.isSegmentStart(position) && isValidPosition && firstDigitGreater
      if (exceedsMaxAtSegmentStart) {
        value = insertAt(value, `0${key}`, position, position + 2)
        position += 2
      } else if (
        segmentValue > segmentMaxValue &&
        this.isSegmentStart(position)
      ) {
        value = insertAt(
          value,
          segmentMaxValue.toFixed(),
          position,
          position + segmentMaxValue.toFixed().length
        )
        position += segmentMaxValue.toFixed().length
      } else if (segmentValue > segmentMaxValue) {
        value = insertAt(
          value,
          segmentMaxValue.toFixed(),
          position - 1,
          position + 1
        )
        position += 1
      } else if (
        segmentValue < segmentMinValue &&
        !this.isSegmentStart(position)
      ) {
        value = insertAt(
          value,
          segmentMinValue.toFixed(),
          position,
          position + 1
        )
        position += 1
      } else {
        value = insertAt(value, key, position, position + 1)
        position += 1
      }
    }
    value = this.tryAppendSeparator(value)
    if (this.isCursorAtSeparator(position)) {
      position++
    }
    return {value, position}
  }
  padWithDefaultValue(segmentValue, segment) {
    let defaultValue = (segment.default || segment.min).toFixed()
    defaultValue = padLeftZeros(defaultValue, segment.length)
    return insertAt(
      defaultValue,
      segmentValue,
      segment.length - segmentValue.length,
      segment.length
    )
  }
  enrichSegmentDefinitions(segments) {
    this.positionFormats = new Map()
    this.segments = []
    let position = 0
    for (const segment of segments) {
      const max = segment.max
      const fullSegment = {
        ...segment,
        max: typeof max === 'number' ? () => max : max,
        start: position,
        end: position + segment.length
      }
      this.segments.push(fullSegment)
      for (let j = 0; j < fullSegment.length; j++) {
        this.positionFormats.set(position++, fullSegment)
      }
      position++
    }
  }
}

export {
  MaskFormat as default
}
