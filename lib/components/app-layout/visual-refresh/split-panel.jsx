import {memo} from 'react'
import clsx from 'clsx'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'
import {SPLIT_PANEL_MIN_WIDTH, SplitPanelProvider} from '../split-panel'
import {Transition} from '../../internal/components/transition'
import customCssProps from '../../internal/generated/custom-css-properties'

const SplitPanel = memo(({children}) => {
  const {
    footerHeight,
    handleSplitPanelClick,
    handleSplitPanelPreferencesChange,
    handleSplitPanelResize,
    headerHeight,
    isSplitPanelForcedPosition,
    isSplitPanelOpen,
    setSplitPanelReportedSize,
    setSplitPanelReportedHeaderHeight,
    setSplitPanelToggle,
    splitPanelPosition,
    splitPanelRefs,
    splitPanelSize
  } = useAppLayoutInternals()
  const props = {
    bottomOffset: 0,
    getMaxHeight: () => {
      const availableHeight =
        document.documentElement.clientHeight - headerHeight - footerHeight
      return availableHeight < 400
        ? availableHeight - 40
        : availableHeight - 250
    },
    maxWidth:
      typeof document !== 'undefined'
        ? document.documentElement.clientWidth
        : Number.POSITIVE_INFINITY,
    isForcedPosition: isSplitPanelForcedPosition,
    isOpen: isSplitPanelOpen,
    leftOffset: 0,
    onPreferencesChange: handleSplitPanelPreferencesChange,
    onResize: handleSplitPanelResize,
    onToggle: handleSplitPanelClick,
    position: splitPanelPosition,
    reportSize: setSplitPanelReportedSize,
    reportHeaderHeight: setSplitPanelReportedHeaderHeight,
    rightOffset: 0,
    size: splitPanelSize || 0,
    topOffset: 0,
    setSplitPanelToggle,
    refs: splitPanelRefs
  }
  return <SplitPanelProvider {...props}>{children}</SplitPanelProvider>
})

const SplitPanelBottom = memo(() => {
  const {
    disableBodyScroll,
    hasOpenDrawer,
    navigationOpen,
    isSplitPanelOpen,
    splitPanel,
    splitPanelPosition,
    splitPanelReportedSize,
    splitPanelReportedHeaderHeight
  } = useAppLayoutInternals()
  if (!splitPanel) {
    return null
  }
  return (
    <Transition in={isSplitPanelOpen ?? false} exit={false}>
      {(state, transitionEventsRef) => (
        <section
          className={clsx(
            styles['split-panel-bottom'],
            styles[`position-${splitPanelPosition}`],
            {
              [styles.animating]: state === 'entering',
              [styles['disable-body-scroll']]: disableBodyScroll,
              [styles['has-open-drawer']]: hasOpenDrawer,
              [styles['is-navigation-open']]: navigationOpen,
              [styles['is-split-panel-open']]: isSplitPanelOpen
            }
          )}
          ref={transitionEventsRef}
          style={{
            [customCssProps.splitPanelReportedSize]: `${splitPanelReportedSize}px`,
            [customCssProps.splitPanelReportedHeaderSize]: `${splitPanelReportedHeaderHeight}px`
          }}>
          {splitPanelPosition === 'bottom' && splitPanel}
        </section>
      )}
    </Transition>
  )
})

const SplitPanelSide = memo(() => {
  const {
    isSplitPanelOpen,
    splitPanel,
    splitPanelPosition,
    splitPanelMaxWidth,
    splitPanelControlId,
    isToolsOpen,
    activeDrawerId
  } = useAppLayoutInternals()
  if (!splitPanel) {
    return null
  }
  return (
    <section
      id={splitPanelControlId}
      aria-hidden={
        !isSplitPanelOpen || splitPanelPosition === 'bottom' ? true : false
      }
      className={clsx(
        styles['split-panel-side'],
        styles[`position-${splitPanelPosition}`],
        {
          [styles['is-split-panel-open']]: isSplitPanelOpen,
          [styles['has-open-drawer']]: !!activeDrawerId || isToolsOpen
        }
      )}
      style={{
        [customCssProps.splitPanelMaxWidth]: `${splitPanelMaxWidth}px`,
        [customCssProps.splitPanelMinWidth]: `${SPLIT_PANEL_MIN_WIDTH}px`
      }}>
      {splitPanelPosition === 'side' && splitPanel}
    </section>
  )
})

const getSplitPanelPosition = (
  isSplitPanelForcedPosition,
  splitPanelPreferences
) => {
  let splitPanelPosition = 'bottom'
  if (
    !isSplitPanelForcedPosition &&
    splitPanelPreferences?.position === 'side'
  ) {
    splitPanelPosition = 'side'
  }
  return splitPanelPosition
}
SplitPanel.Bottom = SplitPanelBottom
SplitPanel.Side = SplitPanelSide

export {
  SplitPanel as default,
  getSplitPanelPosition
}
