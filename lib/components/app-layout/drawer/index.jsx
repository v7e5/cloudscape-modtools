import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {ToggleButton, CloseButton, togglesConfig} from '../toggles'
import testutilStyles from '../test-classes/styles.css.js'
import styles from './styles.css.js'
import OverflowMenu from './overflow-menu'
import {useContainerQuery} from '~/components/internal/toolkit'
import {useDensityMode} from '~/components/internal/toolkit/internal'
import {splitItems} from './drawers-helpers'
import {TOOLS_DRAWER_ID} from '../utils/use-drawers'

const Drawer = memo(
  forwardRef(
    (
      {
        id,
        contentClassName,
        toggleClassName,
        closeClassName,
        width,
        type,
        toggleRefs,
        topOffset,
        bottomOffset,
        ariaLabels,
        children,
        hideOpenButton,
        isOpen,
        isHidden,
        isMobile,
        onToggle,
        onClick,
        onLoseFocus,
        resizeHandle
      },
      ref
    ) => {
      const openButtonWrapperRef = useRef(null)
      const {TagName, iconName} = togglesConfig[type]
      const {mainLabel, closeLabel, openLabel} = ariaLabels
      const drawerContentWidthOpen = isMobile ? void 0 : width
      const drawerContentWidth = isOpen ? drawerContentWidthOpen : void 0
      const regularOpenButton = (
        <TagName
          ref={openButtonWrapperRef}
          aria-label={mainLabel}
          className={styles.toggle}
          aria-hidden={isOpen}>
          <ToggleButton
            ref={toggleRefs.toggle}
            className={toggleClassName}
            iconName={iconName}
            ariaLabel={openLabel}
            onClick={() => onToggle(true)}
            ariaExpanded={isOpen ? void 0 : false}
          />
        </TagName>
      )
      return (
        <div
          ref={ref}
          className={clsx(styles.drawer, {
            [styles.hide]: isHidden,
            [styles['drawer-closed']]: !isOpen,
            [testutilStyles['drawer-closed']]: !isOpen,
            [styles['drawer-mobile']]: isMobile
          })}
          style={{width: drawerContentWidth}}
          onBlur={
            onLoseFocus
              ? e => {
                  if (
                    !e.relatedTarget ||
                    !e.currentTarget.contains(e.relatedTarget)
                  ) {
                    onLoseFocus(e)
                  }
                }
              : void 0
          }
          onClick={event => {
            if (onClick) {
              onClick(event)
            }
            if (!isOpen) {
              if (
                openButtonWrapperRef.current === event.target ||
                !openButtonWrapperRef.current?.contains(event.target)
              ) {
                onToggle(true)
              }
            }
          }}>
          <div
            id={id}
            style={{
              width: drawerContentWidth,
              top: topOffset,
              bottom: bottomOffset
            }}
            className={clsx(
              styles['drawer-content'],
              styles['drawer-content-clickable'],
              contentClassName
            )}>
            {!isMobile && !hideOpenButton && regularOpenButton}
            <TagName
              className={clsx(resizeHandle && styles['drawer-resize-content'])}
              aria-label={mainLabel}
              aria-hidden={!isOpen}>
              {!isMobile && isOpen && (
                <div className={styles['resize-handle-wrapper']}>
                  {resizeHandle}
                </div>
              )}
              <CloseButton
                ref={toggleRefs.close}
                className={closeClassName}
                ariaLabel={closeLabel}
                onClick={() => {
                  onToggle(false)
                }}
              />
              {children}
            </TagName>
          </div>
        </div>
      )
    }
  )
)
const DrawerTrigger = memo(
  forwardRef(
    (
      {
        testUtilsClassName,
        ariaLabel,
        ariaExpanded,
        ariaControls,
        badge,
        itemId,
        isActive,
        trigger,
        onClick
      },
      ref
    ) => (
      <div
        className={clsx(
          styles['drawer-trigger'],
          isActive && styles['drawer-trigger-active']
        )}
        onClick={onClick}>
        <ToggleButton
          ref={ref}
          className={testUtilsClassName}
          iconName={trigger.iconName}
          iconSvg={trigger.iconSvg}
          ariaLabel={ariaLabel}
          ariaExpanded={ariaExpanded}
          ariaControls={ariaControls}
          badge={badge}
          testId={itemId && `awsui-app-layout-trigger-${itemId}`}
        />
      </div>
    )
  )
)
const DrawerTriggersBar = memo(
  ({
    isMobile,
    topOffset,
    bottomOffset,
    activeDrawerId,
    ariaLabels,
    drawers,
    drawerRefs,
    onDrawerChange
  }) => {
    const containerRef = useRef(null)
    const previousActiveDrawerId = useRef(activeDrawerId)
    const [containerHeight, triggersContainerRef] = useContainerQuery(
      rect => rect.contentBoxHeight
    )
    const isCompactMode = useDensityMode(containerRef) === 'compact'
    if (activeDrawerId) {
      previousActiveDrawerId.current = activeDrawerId
    }
    const getIndexOfOverflowItem = () => {
      if (containerHeight) {
        const ITEM_HEIGHT = isCompactMode ? 34 : 38
        const overflowSpot = containerHeight / 1.5
        const index = Math.floor(overflowSpot / ITEM_HEIGHT)
        return index
      }
      return 0
    }
    const {visibleItems, overflowItems} = splitItems(
      drawers,
      getIndexOfOverflowItem(),
      activeDrawerId
    )
    const overflowMenuHasBadge = !!overflowItems.find(item => item.badge)
    return (
      <div
        className={clsx(
          styles.drawer,
          styles['drawer-closed'],
          testutilStyles['drawer-closed'],
          {
            [styles['drawer-mobile']]: isMobile,
            [styles.hide]: drawers.length === 1 && !!activeDrawerId
          }
        )}
        ref={containerRef}>
        <div
          ref={triggersContainerRef}
          style={{top: topOffset, bottom: bottomOffset}}
          className={clsx(styles['drawer-content'], {
            [styles['drawer-content-clickable']]: drawers.length === 1
          })}
          onClick={
            drawers.length === 1
              ? () =>
                  onDrawerChange(
                    drawers[0].id !== activeDrawerId ? drawers[0].id : null
                  )
              : void 0
          }>
          {!isMobile && (
            <aside aria-label={ariaLabels?.drawers} role='region'>
              <div
                className={clsx(styles['drawer-triggers-wrapper'])}
                role='toolbar'
                aria-orientation='vertical'>
                {visibleItems.map((item, index) => {
                  return (
                    <DrawerTrigger
                      key={index}
                      testUtilsClassName={clsx(
                        testutilStyles['drawers-trigger'],
                        item.id === TOOLS_DRAWER_ID &&
                          testutilStyles['tools-toggle']
                      )}
                      ariaExpanded={activeDrawerId === item.id}
                      ref={
                        item.id === previousActiveDrawerId.current
                          ? drawerRefs.toggle
                          : void 0
                      }
                      ariaLabel={item.ariaLabels?.triggerButton}
                      ariaControls={
                        activeDrawerId === item.id ? item.id : void 0
                      }
                      trigger={item.trigger}
                      badge={item.badge}
                      itemId={item.id}
                      isActive={activeDrawerId === item.id}
                      onClick={
                        drawers.length !== 1
                          ? () =>
                              onDrawerChange(
                                item.id !== activeDrawerId ? item.id : null
                              )
                          : void 0
                      }
                    />
                  )
                })}
                {overflowItems.length > 0 && (
                  <div className={clsx(styles['drawer-trigger'])}>
                    <OverflowMenu
                      ariaLabel={
                        overflowMenuHasBadge
                          ? ariaLabels?.drawersOverflowWithBadge
                          : ariaLabels?.drawersOverflow
                      }
                      items={overflowItems}
                      onItemClick={({detail}) => onDrawerChange(detail.id)}
                    />
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    )
  }
)

export {
  Drawer,
  DrawerTriggersBar
}
