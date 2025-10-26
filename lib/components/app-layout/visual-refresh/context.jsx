import {
  createContext,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
  forwardRef,
  memo
} from 'react'
import {DynamicOverlapContext} from '../../internal/context/dynamic-overlap-context'
import {fireNonCancelableEvent} from '../../internal/events'
import {useFocusControl} from '../utils/use-focus-control'
import {getSplitPanelDefaultSize} from '../../split-panel/utils/size-utils'
import {getSplitPanelPosition} from './split-panel'
import {useControllable} from '../../internal/hooks/use-controllable'
import {useSplitPanelFocusControl} from '../utils/use-split-panel-focus-control'
import {useMobile} from '../../internal/hooks/use-mobile'
import {useStableCallback} from '~/components/internal/toolkit/internal'
import useResize from '../utils/use-resize'
import styles from './styles.css.js'
import {useContainerQuery} from '~/components/internal/toolkit'
import useBackgroundOverlap from './use-background-overlap'
import {useDrawers} from '../utils/use-drawers'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import {SPLIT_PANEL_MIN_WIDTH} from '../split-panel'
import {getOffsetInlineStart} from '~/components/internal/toolkit/internal'

const AppLayoutInternalsContext = createContext(null)
const useAppLayoutInternals = () => {
  const ctx = useContext(AppLayoutInternalsContext)
  if (!ctx) {
    throw new Error(
      'Invariant violation: this context is only available inside app layout'
    )
  }
  return ctx
}
const AppLayoutInternalsProvider = memo(
  forwardRef((props, forwardRef) => {
    const {
      toolsHide,
      toolsOpen: controlledToolsOpen,
      navigationHide,
      navigationOpen,
      contentType,
      placement,
      children,
      splitPanel
    } = props
    const isMobile = useMobile()
    const __embeddedViewMode = Boolean(props.__embeddedViewMode)
    const geckoMaxCssLength = ((1 << 30) - 1) / 60
    const halfGeckoMaxCssLength = geckoMaxCssLength / 2
    const maxContentWidth =
      props.maxContentWidth && props.maxContentWidth > halfGeckoMaxCssLength
        ? halfGeckoMaxCssLength
        : props.maxContentWidth ?? 0
    const minContentWidth = props.minContentWidth ?? 280
    const {refs: navigationRefs, setFocus: focusNavButtons} =
      useFocusControl(navigationOpen)
    const handleNavigationClick = useStableCallback(isOpen => {
      focusNavButtons()
      fireNonCancelableEvent(props.onNavigationChange, {open: isOpen})
    })
    useEffect(() => {
      if (isMobile) {
        handleNavigationClick(false)
      }
    }, [isMobile, handleNavigationClick])
    const toolsWidth = props.toolsWidth
    const [isToolsOpen = false, setIsToolsOpen] = useControllable(
      controlledToolsOpen,
      props.onToolsChange,
      false,
      {
        componentName: 'AppLayout',
        controlledProp: 'toolsOpen',
        changeHandler: 'onToolsChange'
      }
    )
    const {
      refs: toolsRefs,
      setFocus: focusToolsButtons,
      loseFocus: loseToolsFocus
    } = useFocusControl(isToolsOpen, true)
    const handleToolsClick = useCallback(
      (isOpen, skipFocusControl) => {
        setIsToolsOpen(isOpen)
        !skipFocusControl && focusToolsButtons()
        fireNonCancelableEvent(props.onToolsChange, {open: isOpen})
      },
      [props.onToolsChange, setIsToolsOpen, focusToolsButtons]
    )
    const [splitPanelMaxWidth, setSplitPanelMaxWidth] = useState(
      SPLIT_PANEL_MIN_WIDTH
    )
    const [isSplitPanelOpen, setIsSplitPanelOpen] = useControllable(
      props.splitPanelOpen,
      props.onSplitPanelToggle,
      false,
      {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelOpen',
        changeHandler: 'onSplitPanelToggle'
      }
    )
    const [splitPanelPreferences, setSplitPanelPreferences] = useControllable(
      props.splitPanelPreferences,
      props.onSplitPanelPreferencesChange,
      void 0,
      {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelPreferences',
        changeHandler: 'onSplitPanelPreferencesChange'
      }
    )
    const {
      refs: splitPanelRefs,
      setLastInteraction: setSplitPanelLastInteraction
    } = useSplitPanelFocusControl([splitPanelPreferences, isSplitPanelOpen])
    const handleSplitPanelClick = useCallback(() => {
      setIsSplitPanelOpen(!isSplitPanelOpen)
      setSplitPanelLastInteraction({
        type: isSplitPanelOpen ? 'close' : 'open'
      })
      fireNonCancelableEvent(props.onSplitPanelToggle, {
        open: !isSplitPanelOpen
      })
    }, [
      props.onSplitPanelToggle,
      isSplitPanelOpen,
      setIsSplitPanelOpen,
      setSplitPanelLastInteraction
    ])
    const isSplitPanelForcedPosition =
      isMobile || SPLIT_PANEL_MIN_WIDTH > splitPanelMaxWidth
    const splitPanelPosition = getSplitPanelPosition(
      isSplitPanelForcedPosition,
      splitPanelPreferences
    )
    const [splitPanelReportedSize, setSplitPanelReportedSize] = useState(0)
    const [splitPanelReportedHeaderHeight, setSplitPanelReportedHeaderHeight] =
      useState(0)
    const [splitPanelToggle, setSplitPanelToggle] = useState({
      displayed: false,
      ariaLabel: void 0
    })
    const splitPanelDisplayed =
      !!(splitPanelToggle.displayed || isSplitPanelOpen) && !!splitPanel
    const splitPanelControlId = useUniqueId('split-panel-')
    const toolsControlId = useUniqueId('tools-')
    const [splitPanelSize, setSplitPanelSize] = useControllable(
      props.splitPanelSize,
      props.onSplitPanelResize,
      getSplitPanelDefaultSize(splitPanelPosition),
      {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelSize',
        changeHandler: 'onSplitPanelResize'
      }
    )
    const handleSplitPanelResize = useCallback(
      size => {
        setSplitPanelSize(size)
        fireNonCancelableEvent(props.onSplitPanelResize, {size})
      },
      [props.onSplitPanelResize, setSplitPanelSize]
    )
    const handleSplitPanelPreferencesChange = useCallback(
      detail => {
        setSplitPanelPreferences(detail)
        setSplitPanelLastInteraction({type: 'position'})
        fireNonCancelableEvent(props.onSplitPanelPreferencesChange, detail)
      },
      [
        props.onSplitPanelPreferencesChange,
        setSplitPanelPreferences,
        setSplitPanelLastInteraction
      ]
    )
    const {
      drawers,
      activeDrawer,
      activeDrawerId,
      minDrawerSize: drawersMinWidth,
      onActiveDrawerChange,
      onActiveDrawerResize,
      activeDrawerSize,
      ...drawersProps
    } = useDrawers(props, props.ariaLabels, {
      ariaLabels: props.ariaLabels,
      toolsHide,
      toolsOpen: isToolsOpen,
      tools: props.tools,
      toolsWidth,
      onToolsToggle: handleToolsClick
    })
    const [drawersMaxWidth, setDrawersMaxWidth] = useState(toolsWidth)
    const hasDrawers = !!drawers && drawers.length > 0
    const {
      refs: drawersRefs,
      setFocus: focusDrawersButtons,
      loseFocus: loseDrawersFocus
    } = useFocusControl(!!activeDrawerId, true, activeDrawerId)
    const drawerRef = useRef(null)
    const {resizeHandle, drawerSize} = useResize(drawerRef, {
      onActiveDrawerResize,
      activeDrawerSize,
      activeDrawer,
      drawersRefs,
      isToolsOpen,
      drawersMaxWidth,
      drawersMinWidth
    })
    const handleDrawersClick = (id, skipFocusControl) => {
      const newActiveDrawerId = id !== activeDrawerId ? id : null
      onActiveDrawerChange(newActiveDrawerId)
      !skipFocusControl && focusDrawersButtons()
    }
    let drawersTriggerCount = drawers ? drawers.length : !toolsHide ? 1 : 0
    if (splitPanelDisplayed && splitPanelPosition === 'side') {
      drawersTriggerCount++
    }
    const hasOpenDrawer =
      !!activeDrawerId ||
      (!toolsHide && isToolsOpen) ||
      (splitPanelDisplayed &&
        splitPanelPosition === 'side' &&
        isSplitPanelOpen)
    const hasDrawerViewportOverlay =
      isMobile &&
      (!!activeDrawerId ||
        (!navigationHide && navigationOpen) ||
        (!toolsHide && isToolsOpen))
    const layoutElement = useRef(null)
    const mainElement = useRef(null)
    const [mainOffsetLeft, setMainOffsetLeft] = useState(0)
    const {hasBackgroundOverlap, updateBackgroundOverlapHeight} =
      useBackgroundOverlap({
        contentHeader: props.contentHeader,
        disableContentHeaderOverlap: props.disableContentHeaderOverlap,
        layoutElement
      })
    useEffect(() => {
      const offsetInlineStart = mainElement?.current
        ? getOffsetInlineStart(mainElement?.current)
        : 0
      setMainOffsetLeft(offsetInlineStart)
    }, [
      placement.inlineSize,
      navigationOpen,
      isToolsOpen,
      splitPanelReportedSize
    ])
    useEffect(() => {
      if (isMobile && (navigationOpen || isToolsOpen || !!activeDrawer)) {
        document.body.classList.add(styles['block-body-scroll'])
      } else {
        document.body.classList.remove(styles['block-body-scroll'])
      }
      return () => {
        document.body.classList.remove(styles['block-body-scroll'])
      }
    }, [isMobile, navigationOpen, isToolsOpen, activeDrawer])
    const [notificationsContainerQuery, notificationsElement] =
      useContainerQuery(rect => rect.contentBoxHeight)
    const notificationsHeight = notificationsContainerQuery ?? 0
    const hasNotificationsContent = notificationsHeight > 0
    let offsetBottom = placement.insetBlockEnd
    if (splitPanelDisplayed && splitPanelPosition === 'bottom') {
      if (isSplitPanelOpen) {
        offsetBottom += splitPanelReportedSize
      } else {
        offsetBottom += splitPanelReportedHeaderHeight
      }
    }
    useEffect(() => {
      const contentGapRight = 50
      const toolsFormOffsetWidth = 120
      const getPanelOffsetWidth = () => {
        if (drawers) {
          return activeDrawerId ? drawerSize : 0
        }
        return isToolsOpen ? toolsWidth : 0
      }
      setSplitPanelMaxWidth(
        placement.inlineSize -
          mainOffsetLeft -
          minContentWidth -
          contentGapRight -
          toolsFormOffsetWidth -
          getPanelOffsetWidth()
      )
      setDrawersMaxWidth(
        placement.inlineSize -
          mainOffsetLeft -
          minContentWidth -
          contentGapRight -
          toolsFormOffsetWidth
      )
    }, [
      activeDrawerId,
      drawerSize,
      drawers,
      navigationOpen,
      isToolsOpen,
      placement.inlineSize,
      mainOffsetLeft,
      minContentWidth,
      toolsWidth
    ])
    useImperativeHandle(
      forwardRef,
      () => {
        return {
          closeNavigationIfNecessary: () => {
            isMobile && handleNavigationClick(false)
          },
          openTools: () => {
            handleToolsClick(true)
          },
          focusToolsClose: () => {
            if (hasDrawers) {
              focusDrawersButtons(true)
            } else {
              focusToolsButtons(true)
            }
          },
          focusActiveDrawer: () => focusDrawersButtons(true),
          focusSplitPanel: () => splitPanelRefs.slider.current?.focus()
        }
      },
      [
        isMobile,
        handleNavigationClick,
        handleToolsClick,
        focusToolsButtons,
        focusDrawersButtons,
        splitPanelRefs.slider,
        hasDrawers
      ]
    )
    return (
      <AppLayoutInternalsContext.Provider
        value={{
          ...props,
          activeDrawerId,
          contentType,
          drawers,
          drawersAriaLabel: drawersProps.ariaLabelsWithDrawers?.drawers,
          drawersOverflowAriaLabel:
            drawersProps.ariaLabelsWithDrawers?.drawersOverflow,
          drawersOverflowWithBadgeAriaLabel:
            drawersProps.ariaLabelsWithDrawers?.drawersOverflowWithBadge,
          drawersRefs,
          drawersMinWidth,
          drawersMaxWidth,
          drawerSize,
          drawerRef,
          resizeHandle,
          drawersTriggerCount,
          headerHeight: placement.insetBlockStart,
          footerHeight: placement.insetBlockEnd,
          hasDrawerViewportOverlay,
          handleDrawersClick,
          handleNavigationClick,
          handleSplitPanelClick,
          handleSplitPanelPreferencesChange,
          handleSplitPanelResize,
          handleToolsClick,
          hasBackgroundOverlap,
          hasNotificationsContent,
          hasOpenDrawer,
          isBackgroundOverlapDisabled:
            props.disableContentHeaderOverlap || !hasBackgroundOverlap,
          isMobile,
          isSplitPanelForcedPosition,
          isSplitPanelOpen,
          isToolsOpen,
          layoutElement,
          layoutWidth: placement.inlineSize,
          loseToolsFocus,
          loseDrawersFocus,
          mainElement,
          mainOffsetLeft,
          maxContentWidth,
          minContentWidth,
          navigationHide,
          navigationRefs,
          notificationsElement,
          notificationsHeight,
          offsetBottom,
          setSplitPanelReportedSize,
          setSplitPanelReportedHeaderHeight,
          splitPanel,
          splitPanelControlId,
          splitPanelDisplayed,
          splitPanelMaxWidth,
          splitPanelPosition,
          splitPanelPreferences,
          splitPanelReportedSize,
          splitPanelReportedHeaderHeight,
          splitPanelSize,
          splitPanelToggle,
          setSplitPanelToggle,
          splitPanelRefs,
          toolsControlId,
          toolsHide,
          toolsOpen: isToolsOpen,
          toolsWidth,
          toolsRefs,
          __embeddedViewMode
        }}>
        <DynamicOverlapContext.Provider value={updateBackgroundOverlapHeight}>
          {children}
        </DynamicOverlapContext.Provider>
      </AppLayoutInternalsContext.Provider>
    )
  })
)

export {
  AppLayoutInternalsProvider,
  useAppLayoutInternals
}
