import {useRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {StickyHeaderContext, useStickyHeader} from './use-sticky-header'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useMobile} from '../internal/hooks/use-mobile'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import styles from './styles.css.js'
import {useModalContext} from '../internal/context/modal-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {ContainerHeaderContextProvider} from '../internal/context/container-header'
import {getGlobalFlag} from '../internal/utils/global-flags'

const InternalContainerAsSubstep = memo(props => {
  const modalContext = useModalContext()
  return <InternalContainer {...props} />
})

const InternalContainer = memo(
  ({
    header,
    footer,
    children,
    variant = 'default',
    disableHeaderPaddings = false,
    disableContentPaddings = false,
    fitHeight,
    media,
    __stickyOffset,
    __mobileStickyOffset,
    __stickyHeader = false,
    __internalRootRef = null,
    __disableFooterDivider = false,
    __disableFooterPaddings = false,
    __hiddenContent = false,
    __headerRef,
    __fullPage = false,
    __disableStickyMobile = true,
    ...restProps
  }) => {
    const isMobile = useMobile()
    const isRefresh = useVisualRefresh()
    const baseProps = getBaseProps(restProps)
    const rootRef = useRef(null)
    const headerRef = useRef(null)
    const {isSticky, isStuck, stickyStyles} = useStickyHeader(
      rootRef,
      headerRef,
      __stickyHeader,
      __stickyOffset,
      __mobileStickyOffset,
      __disableStickyMobile,
      __fullPage && isRefresh && !isMobile
    )
    const contentId = useUniqueId()
    const hasDynamicHeight = isRefresh && variant === 'full-page'
    const mergedRef = useMergeRefs(rootRef, __internalRootRef)
    const headerMergedRef = useMergeRefs(headerRef, __headerRef)
    const shouldHaveStickyStyles = isSticky && !isMobile
    const hasMedia = !!media?.content
    const hasToolbar = getGlobalFlag('appLayoutWidget')
    const mediaPosition = media?.position ?? 'top'
    return (
      <div
        {...baseProps}
        className={clsx(
          baseProps.className,
          styles.root,
          styles[`variant-${variant}`],
          fitHeight && styles['fit-height'],
          hasMedia &&
            (mediaPosition === 'side'
              ? styles['with-side-media']
              : styles['with-top-media']),
          shouldHaveStickyStyles && [styles['sticky-enabled']],
          isRefresh && styles.refresh
        )}
        ref={mergedRef}>
        {hasMedia && (
          <div
            className={clsx(
              styles[`media-${mediaPosition === 'side' ? 'side' : 'top'}`],
              styles.media
            )}
            style={
              mediaPosition === 'top'
                ? {height: media?.height || ''}
                : {width: media?.width || ''}
            }>
            {media.content}
          </div>
        )}
        <div
          id={contentId}
          className={clsx(
            styles['content-wrapper'],
            fitHeight && styles['content-wrapper-fit-height']
          )}>
          {header && (
            <ContainerHeaderContextProvider>
              <StickyHeaderContext.Provider value={{isStuck}}>
                <div
                  className={clsx(
                    isRefresh && styles.refresh,
                    styles.header,
                    styles[`header-variant-${variant}`],
                    {
                      [styles['header-sticky-disabled']]:
                        __stickyHeader && !isSticky,
                      [styles['header-sticky-enabled']]: isSticky,
                      [styles['header-dynamic-height']]: hasDynamicHeight,
                      [styles['header-stuck']]: isStuck,
                      [styles['with-paddings']]: !disableHeaderPaddings,
                      [styles['with-toolbar']]: hasToolbar,
                      [styles['with-hidden-content']]:
                        !children || __hiddenContent,
                      [styles['header-with-media']]: hasMedia
                    }
                  )}
                  {...stickyStyles}
                  ref={headerMergedRef}>
                  {isStuck && !isMobile && isRefresh && __fullPage && (
                    <div className={styles['header-cover']} />
                  )}
                  {header}
                </div>
              </StickyHeaderContext.Provider>
            </ContainerHeaderContextProvider>
          )}
          <div
            className={clsx(
              styles.content,
              fitHeight && styles['content-fit-height'],
              {
                [styles['with-paddings']]: !disableContentPaddings
              }
            )}>
            {children}
          </div>
          {footer && (
            <div
              className={clsx(styles.footer, {
                [styles['with-divider']]: !__disableFooterDivider,
                [styles['with-paddings']]: !__disableFooterPaddings
              })}>
              {footer}
            </div>
          )}
        </div>
      </div>
    )
  }
)

export {
  InternalContainerAsSubstep,
  InternalContainer as default
}
