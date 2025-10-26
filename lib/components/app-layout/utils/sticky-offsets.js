import globalVars from '../../internal/styles/global-vars'

const getStickyOffsetVars = (
  headerHeight,
  footerHeight,
  stickyNotificationsHeight,
  mobileToolbarHeight,
  disableBodyScroll,
  isMobile
) => {
  return {
    [globalVars.stickyVerticalTopOffset]: `calc(${
      !disableBodyScroll ? headerHeight : 0
    }px + ${isMobile ? mobileToolbarHeight : stickyNotificationsHeight})`,
    [globalVars.stickyVerticalBottomOffset]: `${
      !disableBodyScroll ? footerHeight : 0
    }px`
  }
}

export {
  getStickyOffsetVars
}
