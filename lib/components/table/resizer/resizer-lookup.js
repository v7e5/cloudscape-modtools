import {findUpUntil} from '~/components/internal/toolkit/dom'
import tableStyles from '../styles.css.js'
import resizerStyles from './styles.css.js'
import {getOverflowParents} from '../../internal/utils/scrollable-containers'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'

const getResizerElements = resizerElement => {
  if (!resizerElement) {
    return null
  }
  const header = findUpUntil(
    resizerElement,
    element => element.tagName.toLowerCase() === 'th'
  )
  if (!header) {
    return null
  }
  const tableRoot = findUpUntil(
    header,
    element => element.className.indexOf(tableStyles.root) > -1
  )
  if (!tableRoot) {
    return null
  }
  const table = tableRoot.querySelector(`table`)
  if (!table) {
    return null
  }
  const tracker = tableRoot.querySelector(`.${resizerStyles.tracker}`)
  if (!tracker) {
    return null
  }
  const scrollParent = getOverflowParents(header)[0]
  if (!scrollParent) {
    return null
  }
  return {header, table, tracker, scrollParent}
}
const getHeaderWidth = resizerElement => {
  const header =
    resizerElement &&
    findUpUntil(
      resizerElement,
      element => element.tagName.toLowerCase() === 'th'
    )
  return header ? getLogicalBoundingClientRect(header).inlineSize : 0
}

export {
  getHeaderWidth,
  getResizerElements
}
