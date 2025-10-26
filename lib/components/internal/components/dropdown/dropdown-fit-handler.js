import {getBreakpointValue} from '../../breakpoints'
import {getLogicalBoundingClientRect} from '~/components/internal/toolkit/internal'
import {
  getOverflowParents,
  getOverflowParentDimensions
} from '../../utils/scrollable-containers'
import styles from './styles.css.js'

const AVAILABLE_SPACE_RESERVE_DEFAULT = 50
const AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL = 19
const AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL = 20
const getClosestParentDimensions = element => {
  const parents = getOverflowParents(element).map(element2 => {
    const {blockSize, inlineSize, insetBlockStart, insetInlineStart} =
      getLogicalBoundingClientRect(element2)
    return {
      blockSize,
      inlineSize,
      insetBlockStart,
      insetInlineStart
    }
  })
  return parents.shift()
}
const defaultMaxDropdownWidth = getBreakpointValue('xxs')
const getAvailableSpace = ({
  trigger,
  overflowParents,
  stretchWidth = false,
  stretchHeight = false,
  isMobile
}) => {
  const availableSpaceReserveVertical = stretchHeight
    ? 0
    : isMobile
      ? AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL
      : AVAILABLE_SPACE_RESERVE_DEFAULT
  const availableSpaceReserveHorizontal = stretchWidth
    ? 0
    : isMobile
      ? AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL
      : AVAILABLE_SPACE_RESERVE_DEFAULT
  const {
    insetBlockEnd: triggerBlockEnd,
    insetInlineStart: triggerInlineStart,
    insetInlineEnd: triggerInlineEnd
  } = getLogicalBoundingClientRect(trigger)
  return overflowParents.reduce(
    ({blockStart, blockEnd, inlineStart, inlineEnd}, overflowParent) => {
      const offsetTop = triggerBlockEnd - overflowParent.insetBlockStart
      const currentBlockStart =
        offsetTop - trigger.offsetHeight - availableSpaceReserveVertical
      const currentBlockEnd =
        overflowParent.blockSize - offsetTop - availableSpaceReserveVertical
      const currentInlineStart =
        triggerInlineEnd -
        overflowParent.insetInlineStart -
        availableSpaceReserveHorizontal
      const currentInlineEnd =
        overflowParent.insetInlineStart +
        overflowParent.inlineSize -
        triggerInlineStart -
        availableSpaceReserveHorizontal
      return {
        blockStart: Math.min(blockStart, currentBlockStart),
        blockEnd: Math.min(blockEnd, currentBlockEnd),
        inlineStart: Math.min(inlineStart, currentInlineStart),
        inlineEnd: Math.min(inlineEnd, currentInlineEnd)
      }
    },
    {
      blockStart: Number.MAX_VALUE,
      blockEnd: Number.MAX_VALUE,
      inlineStart: Number.MAX_VALUE,
      inlineEnd: Number.MAX_VALUE
    }
  )
}
const getInteriorAvailableSpace = ({trigger, overflowParents, isMobile}) => {
  const AVAILABLE_SPACE_RESERVE_VERTICAL = isMobile
    ? AVAILABLE_SPACE_RESERVE_MOBILE_VERTICAL
    : AVAILABLE_SPACE_RESERVE_DEFAULT
  const AVAILABLE_SPACE_RESERVE_HORIZONTAL = isMobile
    ? AVAILABLE_SPACE_RESERVE_MOBILE_HORIZONTAL
    : AVAILABLE_SPACE_RESERVE_DEFAULT
  const {
    insetBlockEnd: triggerBlockEnd,
    insetBlockStart: triggerBlockStart,
    insetInlineStart: triggerInlineStart,
    insetInlineEnd: triggerInlineEnd
  } = getLogicalBoundingClientRect(trigger)
  return overflowParents.reduce(
    ({blockStart, blockEnd, inlineStart, inlineEnd}, overflowParent) => {
      const currentBlockStart =
        triggerBlockEnd -
        overflowParent.insetBlockStart -
        AVAILABLE_SPACE_RESERVE_VERTICAL
      const currentBlockEnd =
        overflowParent.blockSize -
        triggerBlockStart +
        overflowParent.insetBlockStart -
        AVAILABLE_SPACE_RESERVE_VERTICAL
      const currentInlineStart =
        triggerInlineStart -
        overflowParent.insetInlineStart -
        AVAILABLE_SPACE_RESERVE_HORIZONTAL
      const currentInlineEnd =
        overflowParent.insetInlineStart +
        overflowParent.inlineSize -
        triggerInlineEnd -
        AVAILABLE_SPACE_RESERVE_HORIZONTAL
      return {
        blockStart: Math.min(blockStart, currentBlockStart),
        blockEnd: Math.min(blockEnd, currentBlockEnd),
        inlineStart: Math.min(inlineStart, currentInlineStart),
        inlineEnd: Math.min(inlineEnd, currentInlineEnd)
      }
    },
    {
      blockStart: Number.MAX_VALUE,
      blockEnd: Number.MAX_VALUE,
      inlineStart: Number.MAX_VALUE,
      inlineEnd: Number.MAX_VALUE
    }
  )
}
const getWidths = ({
  triggerElement,
  dropdownElement,
  desiredMinWidth,
  stretchBeyondTriggerWidth = false
}) => {
  const {inlineSize: triggerInlineSize} =
    getLogicalBoundingClientRect(triggerElement)
  const minWidth = desiredMinWidth
    ? Math.min(triggerInlineSize, desiredMinWidth)
    : triggerInlineSize
  const maxWidth = stretchBeyondTriggerWidth
    ? Math.max(defaultMaxDropdownWidth, triggerInlineSize)
    : Number.MAX_VALUE
  const {inlineSize: requiredWidth} =
    getLogicalBoundingClientRect(dropdownElement)
  const idealWidth = Math.min(Math.max(requiredWidth, minWidth), maxWidth)
  return {idealWidth, minWidth, triggerInlineSize}
}
const hasEnoughSpaceToStretchBeyondTriggerWidth = ({
  triggerElement,
  dropdownElement,
  desiredMinWidth,
  expandToViewport,
  stretchWidth,
  stretchHeight,
  isMobile
}) => {
  const overflowParents = getOverflowParentDimensions({
    element: dropdownElement,
    excludeClosestParent: false,
    expandToViewport,
    canExpandOutsideViewport: stretchHeight
  })
  const {idealWidth} = getWidths({
    triggerElement,
    dropdownElement,
    desiredMinWidth,
    stretchBeyondTriggerWidth: true
  })
  const availableSpace = getAvailableSpace({
    trigger: triggerElement,
    overflowParents,
    stretchWidth,
    stretchHeight,
    isMobile
  })
  return (
    idealWidth <= availableSpace.inlineStart ||
    idealWidth <= availableSpace.inlineEnd
  )
}
const getDropdownPosition = ({
  triggerElement,
  dropdownElement,
  overflowParents,
  minWidth: desiredMinWidth,
  preferCenter = false,
  stretchWidth = false,
  stretchHeight = false,
  isMobile = false,
  stretchBeyondTriggerWidth = false
}) => {
  const availableSpace = getAvailableSpace({
    trigger: triggerElement,
    overflowParents,
    stretchWidth,
    stretchHeight,
    isMobile
  })
  const {idealWidth, minWidth, triggerInlineSize} = getWidths({
    triggerElement,
    dropdownElement,
    desiredMinWidth,
    stretchBeyondTriggerWidth
  })
  let dropInlineStart
  let insetInlineStart = null
  let inlineSize = idealWidth
  if (idealWidth <= availableSpace.inlineEnd) {
    dropInlineStart = false
  } else if (idealWidth <= availableSpace.inlineStart) {
    dropInlineStart = true
  } else {
    dropInlineStart = availableSpace.inlineStart > availableSpace.inlineEnd
    inlineSize = Math.max(
      availableSpace.inlineStart,
      availableSpace.inlineEnd,
      minWidth
    )
  }
  if (preferCenter) {
    const spillOver = (idealWidth - triggerInlineSize) / 2
    const availableOutsideLeft = availableSpace.inlineStart - triggerInlineSize
    const availableOutsideRight = availableSpace.inlineEnd - triggerInlineSize
    const fitsInCenter =
      availableOutsideLeft >= spillOver && availableOutsideRight >= spillOver
    if (fitsInCenter) {
      insetInlineStart = -spillOver
    }
  }
  const dropBlockStart =
    availableSpace.blockEnd < dropdownElement.offsetHeight &&
    availableSpace.blockStart > availableSpace.blockEnd
  const availableHeight = dropBlockStart
    ? availableSpace.blockStart
    : availableSpace.blockEnd
  const croppedHeight = stretchHeight
    ? availableHeight
    : Math.floor(availableHeight / 31) * 31 + 16
  return {
    dropBlockStart,
    dropInlineStart,
    insetInlineStart:
      insetInlineStart === null ? 'auto' : `${insetInlineStart}px`,
    blockSize: `${croppedHeight}px`,
    inlineSize: `${inlineSize}px`
  }
}
const getInteriorDropdownPosition = (
  trigger,
  dropdown,
  overflowParents,
  isMobile
) => {
  const availableSpace = getInteriorAvailableSpace({
    trigger,
    overflowParents,
    isMobile
  })
  const {
    insetBlockEnd: triggerBlockEnd,
    insetBlockStart: triggerBlockStart,
    inlineSize: triggerInlineSize
  } = getLogicalBoundingClientRect(trigger)
  const {
    insetBlockStart: parentDropdownBlockStart,
    blockSize: parentDropdownHeight
  } = getClosestParentDimensions(trigger)
  let dropInlineStart
  let {inlineSize} = getLogicalBoundingClientRect(dropdown)
  const insetBlockStart = triggerBlockStart - parentDropdownBlockStart
  if (inlineSize <= availableSpace.inlineEnd) {
    dropInlineStart = false
  } else if (inlineSize <= availableSpace.inlineStart) {
    dropInlineStart = true
  } else {
    dropInlineStart = availableSpace.inlineStart > availableSpace.inlineEnd
    inlineSize = Math.max(availableSpace.inlineStart, availableSpace.inlineEnd)
  }
  const insetInlineStart = dropInlineStart ? 0 - inlineSize : triggerInlineSize
  const dropBlockStart =
    availableSpace.blockEnd < dropdown.offsetHeight &&
    availableSpace.blockStart > availableSpace.blockEnd
  const insetBlockEnd = dropBlockStart
    ? parentDropdownBlockStart + parentDropdownHeight - triggerBlockEnd
    : 0
  const availableHeight = dropBlockStart
    ? availableSpace.blockStart
    : availableSpace.blockEnd
  const croppedHeight = Math.floor(availableHeight / 31) * 31 + 16
  return {
    dropBlockStart,
    dropInlineStart,
    blockSize: `${croppedHeight}px`,
    inlineSize: `${inlineSize}px`,
    insetBlockStart: `${insetBlockStart}px`,
    insetBlockEnd: `${insetBlockEnd}px`,
    insetInlineStart: `${insetInlineStart}px`
  }
}
const calculatePosition = (
  dropdownElement,
  triggerElement,
  verticalContainerElement,
  interior,
  expandToViewport,
  preferCenter,
  stretchWidth,
  stretchHeight,
  isMobile,
  minWidth,
  stretchBeyondTriggerWidth
) => {
  verticalContainerElement.style.maxBlockSize = ''
  dropdownElement.style.inlineSize = ''
  dropdownElement.style.insetBlockStart = ''
  dropdownElement.style.insetBlockEnd = ''
  dropdownElement.style.insetInlineStart = ''
  dropdownElement.classList.remove(styles['dropdown-drop-left'])
  dropdownElement.classList.remove(styles['dropdown-drop-right'])
  dropdownElement.classList.remove(styles['dropdown-drop-up'])
  const overflowParents = getOverflowParentDimensions({
    element: dropdownElement,
    excludeClosestParent: interior,
    expandToViewport,
    canExpandOutsideViewport: stretchHeight
  })
  const position = interior
    ? getInteriorDropdownPosition(
        triggerElement,
        dropdownElement,
        overflowParents,
        isMobile
      )
    : getDropdownPosition({
        triggerElement,
        dropdownElement,
        overflowParents,
        minWidth,
        preferCenter,
        stretchWidth,
        stretchHeight,
        isMobile,
        stretchBeyondTriggerWidth
      })
  const triggerBox = triggerElement.getBoundingClientRect()
  return [position, triggerBox]
}

export {
  calculatePosition,
  defaultMaxDropdownWidth,
  getAvailableSpace,
  getDropdownPosition,
  getInteriorAvailableSpace,
  getInteriorDropdownPosition,
  getWidths,
  hasEnoughSpaceToStretchBeyondTriggerWidth
}
