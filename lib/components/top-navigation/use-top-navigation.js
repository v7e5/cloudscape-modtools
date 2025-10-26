import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import styles from './styles.css.js'
import {useContainerQuery} from '~/components/internal/toolkit'

const RESPONSIVENESS_BUFFER = 20
const useTopNavigation = ({identity, search, utilities}) => {
  const mainRef = useRef(null)
  const virtualRef = useRef(null)
  const [breakpoint, breakpointRef] = useContainerBreakpoints(['xxs', 's'])
  const hasSearch = !!search
  const hasTitleWithLogo = identity && !!identity.logo && !!identity.title
  const responsiveStates = useMemo(() => {
    return generateResponsiveStateKeys(utilities, hasSearch, hasTitleWithLogo)
  }, [utilities, hasSearch, hasTitleWithLogo])
  const [responsiveState, setResponsiveState] = useState()
  const recalculateFit = useCallback(() => {
    if (!mainRef?.current || !virtualRef.current) {
      setResponsiveState(responsiveStates[0])
      return
    }
    const availableWidth = getContentBoxWidth(
      mainRef.current.querySelector(`.${styles['padding-box']}`)
    )
    if (availableWidth === 0) {
      setResponsiveState(responsiveStates[0])
      return
    }
    const sizeConfiguration = {
      hasSearch,
      availableWidth,

      fullIdentityWidth: virtualRef.current
        .querySelector(`.${styles.identity}`)
        .getBoundingClientRect().width,
      titleWidth:
        virtualRef.current
          .querySelector(`.${styles.title}`)
          ?.getBoundingClientRect().width ?? 0,
      searchSlotWidth:
        virtualRef.current
          .querySelector(`.${styles.search}`)
          ?.getBoundingClientRect().width ?? 0,
      searchUtilityWidth: virtualRef.current
        .querySelector('[data-utility-special="search"]')
        .getBoundingClientRect().width,
      utilitiesLeftPadding: parseFloat(
        getComputedStyle(
          virtualRef.current.querySelector(`.${styles.utilities}`)
        ).paddingLeft || '0px'
      ),
      utilityWithLabelWidths: Array.prototype.slice
        .call(
          virtualRef.current.querySelectorAll(`[data-utility-hide="false"]`)
        )
        .map(element => element.getBoundingClientRect().width),
      utilityWithoutLabelWidths: Array.prototype.slice
        .call(
          virtualRef.current.querySelectorAll(`[data-utility-hide="true"]`)
        )
        .map(element => element.getBoundingClientRect().width),
      menuTriggerUtilityWidth: virtualRef.current
        .querySelector('[data-utility-special="menu-trigger"]')
        .getBoundingClientRect().width
    }
    setResponsiveState(
      determineBestResponsiveState(responsiveStates, sizeConfiguration)
    )
  }, [responsiveStates, hasSearch])
  const [, containerQueryRef] = useContainerQuery(() => {
    recalculateFit()
  }, [recalculateFit])
  const onVirtualMount = useCallback(
    element => {
      virtualRef.current = element
      recalculateFit()
    },
    [recalculateFit]
  )
  const [isSearchMinimized, setSearchMinimized] = useState(true)
  const isSearchExpanded =
    !isSearchMinimized && hasSearch && responsiveState?.hideSearch
  useEffect(() => {
    if (!responsiveState?.hideSearch) {
      setSearchMinimized(true)
    }
  }, [responsiveState])
  useEffect(() => {
    if (isSearchExpanded) {
      mainRef?.current?.querySelector(`.${styles.search} input`)?.focus()
    }
  }, [isSearchExpanded, mainRef])
  const mergedMainRef = useMergeRefs(mainRef, containerQueryRef, breakpointRef)
  return {
    mainRef: mergedMainRef,
    virtualRef: onVirtualMount,
    responsiveState: responsiveState ?? responsiveStates[0],
    breakpoint: breakpoint ?? 'default',
    isSearchExpanded: !!isSearchExpanded,
    onSearchUtilityClick: () =>
      setSearchMinimized(isSearchMinimized2 => !isSearchMinimized2)
  }
}
const getContentBoxWidth = element => {
  const style = getComputedStyle(element)
  return (
    parseFloat(style.width || '0px') -
    parseFloat(style.paddingLeft || '0px') -
    parseFloat(style.paddingRight || '0px')
  )
}
const generateResponsiveStateKeys = (
  utilities,
  canHideSearch,
  canHideTitle
) => {
  const states = [{}]
  if (utilities.some(utility => utility.text)) {
    states.push({hideUtilityText: true})
  }
  if (canHideSearch) {
    states.push({
      hideUtilityText: true,
      hideSearch: true
    })
  }
  const hiddenUtilties = []
  for (let i = 0; i < utilities.length; i++) {
    if (!utilities[i].disableUtilityCollapse) {
      hiddenUtilties.push(i)
      states.push({
        hideUtilityText: true,
        hideSearch: canHideSearch || void 0,
        hideUtilities:
          hiddenUtilties.length > 0 ? hiddenUtilties.slice() : void 0
      })
    }
  }
  if (canHideTitle) {
    states.push({
      hideUtilityText: true,
      hideSearch: canHideSearch || void 0,
      hideUtilities:
        hiddenUtilties.length > 0 ? hiddenUtilties.slice() : void 0,
      hideTitle: true
    })
  }
  return states
}
const determineBestResponsiveState = (possibleStates, sizes) => {
  const {
    hasSearch,
    availableWidth,
    utilitiesLeftPadding,
    fullIdentityWidth,
    titleWidth,
    searchSlotWidth,
    searchUtilityWidth,
    utilityWithLabelWidths,
    utilityWithoutLabelWidths,
    menuTriggerUtilityWidth
  } = sizes
  for (const state of possibleStates) {
    const searchWidth = hasSearch
      ? state.hideSearch
        ? searchUtilityWidth
        : searchSlotWidth
      : 0
    const utilitiesWidth = (
      state.hideUtilityText
        ? utilityWithoutLabelWidths
        : utilityWithLabelWidths
    )
      .filter(
        (_width, i) =>
          !state.hideUtilities || state.hideUtilities.indexOf(i) === -1
      )
      .reduce((sum, width) => sum + width, 0)
    const menuTriggerWidth = state.hideUtilities ? menuTriggerUtilityWidth : 0
    const identityWidth = state.hideTitle
      ? fullIdentityWidth - titleWidth
      : fullIdentityWidth
    const expectedInnerWidth =
      identityWidth +
      searchWidth +
      utilitiesLeftPadding +
      utilitiesWidth +
      menuTriggerWidth
    if (expectedInnerWidth <= availableWidth - RESPONSIVENESS_BUFFER) {
      return state
    }
  }
  return possibleStates[possibleStates.length - 1]
}

export {
  determineBestResponsiveState,
  generateResponsiveStateKeys,
  useTopNavigation
}
