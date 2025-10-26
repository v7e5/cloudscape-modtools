import {useRef, memo} from 'react'
import clsx from 'clsx'
import customCssProps from '../../internal/generated/custom-css-properties'
import {InternalButton} from '../../button/internal'
import SplitPanel from './split-panel'
import TriggerButton from './trigger-button'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'
import splitPanelTestUtilStyles from '../../split-panel/test-classes/styles.css.js'
import {useContainerQuery} from '~/components/internal/toolkit'
import OverflowMenu from '../drawer/overflow-menu'
import {splitItems} from '../drawer/drawers-helpers'
import {TOOLS_DRAWER_ID} from '../utils/use-drawers'
import {getLimitedValue} from '../../split-panel/utils/size-utils'

const Drawers = memo(() => {
  const {
    disableBodyScroll,
    drawers,
    drawersTriggerCount,
    hasDrawerViewportOverlay,
    hasOpenDrawer,
    navigationOpen,
    navigationHide,
    isMobile
  } = useAppLayoutInternals()
  const isUnfocusable =
    hasDrawerViewportOverlay && navigationOpen && !navigationHide
  if (!drawers || drawersTriggerCount === 0) {
    return null
  }
  return (
    <div
      className={clsx(styles['drawers-container'], {
        [styles['disable-body-scroll']]: disableBodyScroll,
        [styles['has-open-drawer']]: hasOpenDrawer,
        [styles.unfocusable]: isUnfocusable
      })}>
      <SplitPanel.Side />
      <ActiveDrawer/>
      {!isMobile && <DesktopTriggers/>}
    </div>
  )
})

const ActiveDrawer = memo(() => {
  const {
    activeDrawerId,
    ariaLabels,
    drawers,
    drawersRefs,
    handleDrawersClick,
    handleToolsClick,
    hasDrawerViewportOverlay,
    isMobile,
    navigationOpen,
    navigationHide,
    loseDrawersFocus,
    resizeHandle,
    drawerSize,
    drawersMinWidth,
    drawersMaxWidth,
    drawerRef
  } = useAppLayoutInternals()
  const activeDrawer =
    drawers?.find(item => item.id === activeDrawerId) ?? null
  const computedAriaLabels = {
    closeButton: activeDrawerId
      ? activeDrawer?.ariaLabels?.closeButton
      : ariaLabels?.toolsClose,
    content: activeDrawerId
      ? activeDrawer?.ariaLabels?.drawerName
      : ariaLabels?.tools
  }
  const isHidden = !activeDrawerId
  const isUnfocusable =
    isHidden || (hasDrawerViewportOverlay && navigationOpen && !navigationHide)
  const isToolsDrawer = activeDrawerId === TOOLS_DRAWER_ID
  const toolsContent = drawers?.find(
    drawer => drawer.id === TOOLS_DRAWER_ID
  )?.content
  const size = getLimitedValue(drawersMinWidth, drawerSize, drawersMaxWidth)
  return (
    <aside
      id={activeDrawerId ?? void 0}
      aria-hidden={isHidden}
      aria-label={computedAriaLabels.content}
      className={clsx(styles.drawer, {
        [styles['is-drawer-open']]: activeDrawerId,
        [styles.unfocusable]: isUnfocusable,
        [testutilStyles['active-drawer']]: activeDrawerId,
        [testutilStyles.tools]: isToolsDrawer
      })}
      style={{
        ...(!isMobile &&
          drawerSize && {[customCssProps.drawerSize]: `${size}px`})
      }}
      ref={drawerRef}
      onBlur={e => {
        if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
          loseDrawersFocus()
        }
      }}>
      {!isMobile && activeDrawer?.resizable && (
        <div className={styles['drawer-slider']}>{resizeHandle}</div>
      )}
      <div className={styles['drawer-content-container']}>
        <div className={clsx(styles['drawer-close-button'])}>
          <InternalButton
            ariaLabel={computedAriaLabels.closeButton}
            className={clsx({
              [testutilStyles['active-drawer-close-button']]: activeDrawerId,
              [testutilStyles['tools-close']]: isToolsDrawer
            })}
            formAction='none'
            iconName={isMobile ? 'close' : 'angle-right'}
            onClick={() => {
              handleDrawersClick(activeDrawerId)
              handleToolsClick(false)
            }}
            ref={drawersRefs.close}
            variant='icon'
          />
        </div>
        {toolsContent && (
          <div
            className={clsx(
              styles['drawer-content'],
              activeDrawerId !== TOOLS_DRAWER_ID &&
                styles['drawer-content-hidden']
            )}>
            {toolsContent}
          </div>
        )}
        {activeDrawerId !== TOOLS_DRAWER_ID && (
          <div className={styles['drawer-content']}>
            {activeDrawerId && activeDrawer?.content}
          </div>
        )}
      </div>
    </aside>
  )
})

const DesktopTriggers = memo(() => {
  const {
    activeDrawerId,
    drawers,
    drawersAriaLabel,
    drawersOverflowAriaLabel,
    drawersOverflowWithBadgeAriaLabel,
    drawersRefs,
    drawersTriggerCount,
    handleDrawersClick,
    handleSplitPanelClick,
    hasOpenDrawer,
    isSplitPanelOpen,
    splitPanel,
    splitPanelControlId,
    splitPanelDisplayed,
    splitPanelPosition,
    splitPanelRefs,
    splitPanelToggle,
    splitPanelReportedHeaderHeight,
    splitPanelReportedSize,
    headerVariant
  } = useAppLayoutInternals()
  const hasMultipleTriggers = drawersTriggerCount > 1
  const hasSplitPanel =
    splitPanel && splitPanelDisplayed && splitPanelPosition === 'side'
  const previousActiveDrawerId = useRef(activeDrawerId)
  const [containerHeight, triggersContainerRef] = useContainerQuery(
    rect => rect.contentBoxHeight
  )
  if (activeDrawerId) {
    previousActiveDrawerId.current = activeDrawerId
  }
  const splitPanelHeight =
    isSplitPanelOpen && splitPanelPosition === 'bottom'
      ? splitPanelReportedSize
      : splitPanelReportedHeaderHeight
  const getIndexOfOverflowItem = () => {
    if (containerHeight) {
      const ITEM_HEIGHT = 48
      const overflowSpot =
        activeDrawerId && isSplitPanelOpen
          ? (containerHeight - splitPanelReportedHeaderHeight) / 1.5
          : (containerHeight - splitPanelHeight) / 1.5
      const index = Math.floor(overflowSpot / ITEM_HEIGHT)
      let splitPanelItem = 0
      if (hasSplitPanel && splitPanelToggle.displayed) {
        splitPanelItem = 1
      }
      return index - splitPanelItem
    }
    return 0
  }
  const {visibleItems, overflowItems} = splitItems(
    drawers ?? void 0,
    getIndexOfOverflowItem(),
    activeDrawerId
  )
  const overflowMenuHasBadge = !!overflowItems.find(item => item.badge)
  return (
    <aside
      className={clsx(styles['drawers-desktop-triggers-container'], {
        [styles['has-multiple-triggers']]: hasMultipleTriggers,
        [styles['has-open-drawer']]: hasOpenDrawer
      })}
      aria-label={drawersAriaLabel}
      ref={triggersContainerRef}
      role='region'>
      <div
        className={clsx(styles['drawers-trigger-content'], {
          [styles['has-multiple-triggers']]: hasMultipleTriggers,
          [styles['has-open-drawer']]: hasOpenDrawer
        })}
        role='toolbar'
        aria-orientation='vertical'>
        {visibleItems.map(item => {
          return (
            <TriggerButton
              ariaLabel={item.ariaLabels?.triggerButton}
              ariaExpanded={item.id === activeDrawerId}
              ariaControls={activeDrawerId === item.id ? item.id : void 0}
              className={clsx(
                styles['drawers-trigger'],
                testutilStyles['drawers-trigger'],
                item.id === TOOLS_DRAWER_ID && testutilStyles['tools-toggle']
              )}
              iconName={item.trigger.iconName}
              iconSvg={item.trigger.iconSvg}
              key={item.id}
              onClick={() => handleDrawersClick(item.id)}
              ref={
                item.id === previousActiveDrawerId.current
                  ? drawersRefs.toggle
                  : void 0
              }
              selected={item.id === activeDrawerId}
              badge={item.badge}
              testId={`awsui-app-layout-trigger-${item.id}`}
              highContrastHeader={headerVariant === 'high-contrast'}
            />
          )
        })}
        {overflowItems.length > 0 && (
          <OverflowMenu
            items={overflowItems}
            ariaLabel={
              overflowMenuHasBadge
                ? drawersOverflowWithBadgeAriaLabel
                : drawersOverflowAriaLabel
            }
            customTriggerBuilder={memo(
              ({
                onClick,
                triggerRef,
                ariaLabel,
                ariaExpanded,
                testUtilsClass
              }) => (
                <TriggerButton
                  ref={triggerRef}
                  ariaLabel={ariaLabel}
                  ariaExpanded={ariaExpanded}
                  badge={overflowMenuHasBadge}
                  className={clsx(
                    styles['drawers-trigger'],
                    testutilStyles['drawers-trigger'],
                    testUtilsClass
                  )}
                  iconName='ellipsis'
                  onClick={onClick}
                  highContrastHeader={headerVariant === 'high-contrast'}
                />
              )
            )}
            onItemClick={({detail}) => {
              handleDrawersClick(detail.id)
            }}
          />
        )}
        {hasSplitPanel && splitPanelToggle.displayed && (
          <TriggerButton
            ariaLabel={splitPanelToggle.ariaLabel}
            ariaControls={splitPanelControlId}
            ariaExpanded={!!isSplitPanelOpen}
            className={clsx(
              styles['drawers-trigger'],
              splitPanelTestUtilStyles['open-button']
            )}
            iconName='view-vertical'
            onClick={() => handleSplitPanelClick()}
            selected={hasSplitPanel && isSplitPanelOpen}
            ref={splitPanelRefs.toggle}
            highContrastHeader={headerVariant === 'high-contrast'}
          />
        )}
      </div>
    </aside>
  )
})

const MobileTriggers = memo(() => {
  const {
    activeDrawerId,
    drawers,
    drawersAriaLabel,
    drawersOverflowAriaLabel,
    drawersOverflowWithBadgeAriaLabel,
    drawersRefs,
    handleDrawersClick,
    hasDrawerViewportOverlay
  } = useAppLayoutInternals()
  const previousActiveDrawerId = useRef(activeDrawerId)
  if (!drawers) {
    return null
  }
  if (activeDrawerId) {
    previousActiveDrawerId.current = activeDrawerId
  }
  const {visibleItems, overflowItems} = splitItems(drawers, 2, activeDrawerId)
  const overflowMenuHasBadge = !!overflowItems.find(item => item.badge)
  return (
    <aside
      aria-hidden={hasDrawerViewportOverlay}
      className={clsx({
        [styles.unfocusable]: hasDrawerViewportOverlay
      })}
      aria-label={drawersAriaLabel}
      role='region'>
      <div
        className={clsx(styles['drawers-mobile-triggers-container'])}
        role='toolbar'
        aria-orientation='horizontal'>
        {visibleItems.map(item => (
          <InternalButton
            ariaExpanded={item.id === activeDrawerId}
            ariaLabel={item.ariaLabels?.triggerButton}
            className={clsx(
              styles['drawers-trigger'],
              testutilStyles['drawers-trigger'],
              item.id === TOOLS_DRAWER_ID && testutilStyles['tools-toggle']
            )}
            disabled={hasDrawerViewportOverlay}
            ref={
              item.id === previousActiveDrawerId.current
                ? drawersRefs.toggle
                : void 0
            }
            formAction='none'
            iconName={item.trigger.iconName}
            iconSvg={item.trigger.iconSvg}
            badge={item.badge}
            key={item.id}
            onClick={() => handleDrawersClick(item.id)}
            variant='icon'
            __nativeAttributes={{
              'aria-haspopup': true,
              'data-testid': `awsui-app-layout-trigger-${item.id}`
            }}
          />
        ))}
        {overflowItems.length > 0 && (
          <OverflowMenu
            items={overflowItems}
            ariaLabel={
              overflowMenuHasBadge
                ? drawersOverflowWithBadgeAriaLabel
                : drawersOverflowAriaLabel
            }
            onItemClick={({detail}) => handleDrawersClick(detail.id)}
          />
        )}
      </div>
    </aside>
  )
})

export {
  MobileTriggers,
  Drawers as default
}
