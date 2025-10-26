import {memo} from 'react'
import clsx from 'clsx'
import customCssProps from '../../internal/generated/custom-css-properties'
import {useAppLayoutInternals} from './context'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'

const Layout = memo(({children}) => {
  const {
    breadcrumbs,
    contentHeader,
    contentType,
    disableBodyScroll,
    disableContentPaddings,
    drawersTriggerCount,
    footerHeight,
    hasNotificationsContent,
    hasOpenDrawer,
    headerHeight,
    isBackgroundOverlapDisabled,
    isMobile,
    navigationOpen,
    layoutElement,
    layoutWidth,
    mainOffsetLeft,
    maxContentWidth,
    minContentWidth,
    navigationHide,
    notificationsHeight,
    __embeddedViewMode,
    splitPanelPosition,
    splitPanelDisplayed
  } = useAppLayoutInternals()
  const contentFirstChild = getContentFirstChild(
    breadcrumbs,
    contentHeader,
    hasNotificationsContent,
    isMobile
  )
  const hasContentGapLeft = navigationOpen || navigationHide
  const hasContentGapRight = drawersTriggerCount === 0 || hasOpenDrawer
  return (
    <main
      className={clsx(
        styles.layout,
        styles[`content-first-child-${contentFirstChild}`],
        styles[`content-type-${contentType}`],
        styles[`split-panel-position-${splitPanelPosition ?? 'bottom'}`],
        {
          [styles['disable-body-scroll']]: disableBodyScroll,
          [testutilStyles['disable-body-scroll-root']]: disableBodyScroll,
          [styles['disable-content-paddings']]: disableContentPaddings,
          [styles['has-breadcrumbs']]: breadcrumbs && !isMobile,
          [styles['has-content-gap-left']]: hasContentGapLeft,
          [styles['has-content-gap-right']]: hasContentGapRight,
          [styles['has-header']]: contentHeader,
          [styles['has-max-content-width']]:
            maxContentWidth && maxContentWidth > 0,
          [styles['has-split-panel']]: splitPanelDisplayed,
          [styles['is-overlap-disabled']]: isBackgroundOverlapDisabled,
          [styles['is-hide-mobile-toolbar']]: __embeddedViewMode,
          [styles['has-left-toggles-gutter']]: !(
            isMobile ||
            navigationHide ||
            navigationOpen
          ),
          [styles['has-right-toggles-gutter']]:
            !isMobile && !hasContentGapRight
        },
        testutilStyles.root
      )}
      ref={layoutElement}
      style={{
        [customCssProps.headerHeight]: `${headerHeight}px`,
        [customCssProps.footerHeight]: `${footerHeight}px`,
        [customCssProps.layoutWidth]: `${layoutWidth}px`,
        [customCssProps.mainOffsetLeft]: `${mainOffsetLeft}px`,
        ...(maxContentWidth && {
          [customCssProps.maxContentWidth]: `${maxContentWidth}px`
        }),
        ...(minContentWidth && {
          [customCssProps.minContentWidth]: `${minContentWidth}px`
        }),
        [customCssProps.notificationsHeight]: `${notificationsHeight}px`
      }}>
      {children}
    </main>
  )
})

const getContentFirstChild = (
  breadcrumbs,
  contentHeader,
  hasNotificationsContent,
  isMobile
) => {
  let contentFirstChild = 'main'
  if (hasNotificationsContent) {
    contentFirstChild = 'notifications'
  } else if (breadcrumbs && !isMobile) {
    contentFirstChild = 'breadcrumbs'
  } else if (contentHeader) {
    contentFirstChild = 'header'
  }
  return contentFirstChild
}

export {
  Layout as default
}
