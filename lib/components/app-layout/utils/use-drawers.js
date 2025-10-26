import {useEffect, useRef, useState} from 'react'
import {useStableCallback} from '~/components/internal/toolkit/internal'
import {useControllable} from '../../internal/hooks/use-controllable'
import {fireNonCancelableEvent} from '../../internal/events'
import {awsuiPluginsInternal} from '../../internal/plugins/api'
import {sortByPriority} from '../../internal/plugins/helpers/utils'
import {convertRuntimeDrawers} from '../runtime-api'
import {togglesConfig} from '../toggles'

const TOOLS_DRAWER_ID = 'awsui-internal-tools'
const getToolsDrawerItem = props => {
  if (props.toolsHide) {
    return null
  }
  const {iconName, getLabels} = togglesConfig.tools
  const {mainLabel, closeLabel, openLabel} = getLabels(props.ariaLabels)
  return {
    id: TOOLS_DRAWER_ID,
    content: props.tools,
    resizable: false,
    ariaLabels: {
      triggerButton: openLabel,
      closeButton: closeLabel,
      drawerName: mainLabel ?? ''
    },
    trigger: {
      iconName
    }
  }
}
const useRuntimeDrawers = (
  disableRuntimeDrawers,
  activeDrawerId,
  onActiveDrawerChange
) => {
  const [runtimeDrawers, setRuntimeDrawers] = useState({before: [], after: []})
  const onActiveDrawerChangeStable = useStableCallback(onActiveDrawerChange)
  const drawerWasOpenRef = useRef(false)
  drawerWasOpenRef.current = drawerWasOpenRef.current || !!activeDrawerId
  useEffect(() => {
    if (disableRuntimeDrawers) {
      return
    }
    const unsubscribe = awsuiPluginsInternal.appLayout.onDrawersRegistered(
      drawers => {
        setRuntimeDrawers(convertRuntimeDrawers(drawers))
        if (!drawerWasOpenRef.current) {
          const defaultActiveDrawer = sortByPriority(drawers).find(
            drawer => drawer.defaultActive
          )
          if (defaultActiveDrawer) {
            onActiveDrawerChangeStable(defaultActiveDrawer.id)
          }
        }
      }
    )
    return () => {
      unsubscribe()
      setRuntimeDrawers({before: [], after: []})
    }
  }, [disableRuntimeDrawers, onActiveDrawerChangeStable])
  return runtimeDrawers
}
const applyToolsDrawer = (toolsProps, runtimeDrawers) => {
  const drawers = [...runtimeDrawers.before, ...runtimeDrawers.after]
  if (drawers.length === 0) {
    return null
  }
  const toolsItem = getToolsDrawerItem(toolsProps)
  if (toolsItem) {
    drawers.unshift(toolsItem)
  }
  return drawers
}
const useDrawers = (
  {
    drawers,
    activeDrawerId: controlledActiveDrawerId,
    onDrawerChange,
    __disableRuntimeDrawers: disableRuntimeDrawers
  },
  ariaLabels,
  toolsProps
) => {
  const [activeDrawerId = null, setActiveDrawerId] = useControllable(
    controlledActiveDrawerId,
    onDrawerChange,
    null,
    {
      componentName: 'AppLayout',
      controlledProp: 'activeDrawerId',
      changeHandler: 'onChange'
    }
  )
  const [drawerSizes, setDrawerSizes] = useState({})
  const onActiveDrawerResize = ({id, size}) => {
    setDrawerSizes(oldSizes => ({...oldSizes, [id]: size}))
    fireNonCancelableEvent(activeDrawer?.onResize, {id, size})
  }
  const onActiveDrawerChange = newDrawerId => {
    setActiveDrawerId(newDrawerId)
    if (hasOwnDrawers) {
      fireNonCancelableEvent(onDrawerChange, {activeDrawerId: newDrawerId})
    } else if (!toolsProps.toolsHide) {
      toolsProps.onToolsToggle(newDrawerId === TOOLS_DRAWER_ID)
    }
  }
  const hasOwnDrawers = !!drawers
  const runtimeDrawers = useRuntimeDrawers(
    disableRuntimeDrawers,
    activeDrawerId,
    onActiveDrawerChange
  )
  const combinedDrawers = drawers
    ? [...runtimeDrawers.before, ...drawers, ...runtimeDrawers.after]
    : applyToolsDrawer(toolsProps, runtimeDrawers)
  let activeDrawerIdResolved =
    toolsProps?.toolsOpen && !hasOwnDrawers ? TOOLS_DRAWER_ID : activeDrawerId
  const activeDrawer = combinedDrawers?.find(
    drawer => drawer.id === activeDrawerIdResolved
  )
  activeDrawerIdResolved = activeDrawer?.id ?? null
  const activeDrawerSize = activeDrawerIdResolved
    ? drawerSizes[activeDrawerIdResolved] ??
      activeDrawer?.defaultSize ??
      toolsProps.toolsWidth
    : 0
  const minDrawerSize = Math.min(activeDrawer?.defaultSize ?? 290, 290)
  return {
    ariaLabelsWithDrawers: ariaLabels,
    drawers: combinedDrawers || void 0,
    activeDrawer,
    activeDrawerId: activeDrawerIdResolved,
    activeDrawerSize,
    minDrawerSize,
    onActiveDrawerChange,
    onActiveDrawerResize
  }
}

export {
  TOOLS_DRAWER_ID,
  useDrawers
}
