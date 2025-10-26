import {useEffect, useRef, useState, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {fireCancelableEvent, isPlainLeftClick} from '../internal/events'
import VisualContext from '../internal/components/visual-context'
import {useEffectOnUpdate} from '../internal/hooks/use-effect-on-update'
import {useTopNavigation} from './use-top-navigation'
import Utility from './parts/utility'
import OverflowMenu from './parts/overflow-menu'
import {ButtonTrigger} from '../internal/components/menu-dropdown'
import styles from './styles.css.js'
import {useInternalI18n} from '../i18n/context'

const InternalTopNavigation = memo(
  ({
    __internalRootRef,
    identity,
    i18nStrings,
    utilities,
    search,
    ...restProps
  }) => {
    const baseProps = getBaseProps(restProps)
    const {
      mainRef,
      virtualRef,
      breakpoint,
      responsiveState,
      isSearchExpanded,
      onSearchUtilityClick
    } = useTopNavigation({identity, search, utilities})
    const [overflowMenuOpen, setOverflowMenuOpen] = useState(false)
    const overflowMenuTriggerRef = useRef(null)
    const isNarrowViewport = breakpoint === 'default'
    const isMediumViewport = breakpoint === 'xxs'
    const isLargeViewport = breakpoint === 's'
    const i18n = useInternalI18n('top-navigation')
    const onIdentityClick = event => {
      if (isPlainLeftClick(event)) {
        fireCancelableEvent(identity.onFollow, {}, event)
      }
    }
    const toggleOverflowMenu = () => {
      setOverflowMenuOpen(overflowMenuOpen2 => !overflowMenuOpen2)
    }
    const menuTriggerVisible =
      !isSearchExpanded && responsiveState.hideUtilities
    useEffect(() => {
      setOverflowMenuOpen(false)
    }, [menuTriggerVisible])
    useEffectOnUpdate(() => {
      if (!overflowMenuOpen) {
        overflowMenuTriggerRef.current?.focus()
      }
    }, [overflowMenuOpen])
    const content = isVirtual => {
      const Wrapper = isVirtual ? 'div' : 'header'
      const showIdentity = isVirtual || !isSearchExpanded
      const showTitle = isVirtual || !responsiveState.hideTitle
      const showSearchSlot =
        search &&
        (isVirtual || !responsiveState.hideSearch || isSearchExpanded)
      const showSearchUtility =
        isVirtual || (search && responsiveState.hideSearch)
      const showUtilities = isVirtual || !isSearchExpanded
      const showMenuTrigger = isVirtual || menuTriggerVisible
      return (
        <Wrapper
          ref={isVirtual ? virtualRef : mainRef}
          aria-hidden={isVirtual ? true : void 0}
          className={clsx(styles['top-navigation'], {
            [styles.virtual]: isVirtual,
            [styles.hidden]: isVirtual,
            [styles.narrow]: isNarrowViewport,
            [styles.medium]: isMediumViewport
          })}>
          <div className={styles['padding-box']}>
            {showIdentity && (
              <div
                className={clsx(
                  styles.identity,
                  !identity.logo && styles['no-logo']
                )}>
                <Link
                  className={styles['identity-link']}
                  to={identity.to}
                  onClick={onIdentityClick}>
                  {identity.logo && (
                    <img
                      role='img'
                      src={identity.logo?.src}
                      alt={identity.logo?.alt}
                      className={clsx(styles.logo, {
                        [styles.narrow]: isNarrowViewport
                      })}
                    />
                  )}
                  {showTitle && (
                    <span className={styles.title}>{identity.title}</span>
                  )}
                </Link>
              </div>
            )}
            {showSearchSlot && (
              <div className={styles.inputs}>
                <div
                  className={clsx(
                    styles.search,
                    !isVirtual && isSearchExpanded && styles['search-expanded']
                  )}>
                  {search}
                </div>
              </div>
            )}
            <div className={styles.utilities}>
              {showSearchUtility && (
                <div
                  className={clsx(
                    styles['utility-wrapper'],
                    styles['utility-type-button'],
                    styles['utility-type-button-link'],
                    {
                      [styles.narrow]: isNarrowViewport,
                      [styles.medium]: isMediumViewport
                    }
                  )}
                  data-utility-special='search'>
                  <Utility
                    hideText={true}
                    definition={{
                      type: 'button',
                      iconName: isSearchExpanded ? 'close' : 'search',
                      ariaLabel: isSearchExpanded
                        ? i18n(
                            'i18nStrings.searchDismissIconAriaLabel',
                            i18nStrings?.searchDismissIconAriaLabel
                          )
                        : i18n(
                            'i18nStrings.searchIconAriaLabel',
                            i18nStrings?.searchIconAriaLabel
                          ),
                      onClick: onSearchUtilityClick
                    }}
                  />
                </div>
              )}
              {showUtilities &&
                utilities
                  .filter(
                    (_utility, i) =>
                      isVirtual ||
                      !responsiveState.hideUtilities ||
                      responsiveState.hideUtilities.indexOf(i) === -1
                  )
                  .map((utility, i) => {
                    const hideText = !!responsiveState.hideUtilityText
                    const isLast =
                      (isVirtual || !showMenuTrigger) &&
                      i === utilities.length - 1
                    const offsetRight =
                      isLast && isLargeViewport ? 'xxl' : isLast ? 'l' : void 0
                    return (
                      <div
                        key={i}
                        className={clsx(
                          styles['utility-wrapper'],
                          styles[`utility-type-${utility.type}`],
                          utility.type === 'button' &&
                            styles[
                              `utility-type-button-${
                                utility.variant ?? 'link'
                              }`
                            ],
                          {
                            [styles.narrow]: isNarrowViewport,
                            [styles.medium]: isMediumViewport
                          }
                        )}
                        data-utility-index={i}
                        data-utility-hide={`${hideText}`}>
                        <Utility
                          hideText={hideText}
                          definition={utility}
                          offsetRight={offsetRight}
                        />
                      </div>
                    )
                  })}
              {isVirtual &&
                utilities.map((utility, i) => {
                  const hideText = !responsiveState.hideUtilityText
                  const isLast = !showMenuTrigger && i === utilities.length - 1
                  const offsetRight =
                    isLast && isLargeViewport ? 'xxl' : isLast ? 'l' : void 0
                  return (
                    <div
                      key={i}
                      className={clsx(
                        styles['utility-wrapper'],
                        styles[`utility-type-${utility.type}`],
                        utility.type === 'button' &&
                          styles[
                            `utility-type-button-${utility.variant ?? 'link'}`
                          ],
                        {
                          [styles.narrow]: isNarrowViewport,
                          [styles.medium]: isMediumViewport
                        }
                      )}
                      data-utility-index={i}
                      data-utility-hide={`${hideText}`}>
                      <Utility
                        hideText={hideText}
                        definition={utility}
                        offsetRight={offsetRight}
                      />
                    </div>
                  )
                })}
              {showMenuTrigger && (
                <div
                  className={clsx(
                    styles['utility-wrapper'],
                    styles['utility-type-menu-dropdown'],
                    {
                      [styles.narrow]: isNarrowViewport,
                      [styles.medium]: isMediumViewport
                    }
                  )}
                  data-utility-special='menu-trigger'>
                  <ButtonTrigger
                    expanded={overflowMenuOpen}
                    onClick={toggleOverflowMenu}
                    offsetRight='l'
                    ref={!isVirtual ? overflowMenuTriggerRef : void 0}>
                    {i18n(
                      'i18nStrings.overflowMenuTriggerText',
                      i18nStrings?.overflowMenuTriggerText
                    )}
                  </ButtonTrigger>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      )
    }
    return (
      <div {...baseProps} ref={__internalRootRef}>
        <VisualContext contextName='top-navigation'>
          {}
          {content(true)}
          {content(false)}
          {menuTriggerVisible && overflowMenuOpen && (
            <div className={styles['overflow-menu-drawer']}>
              <OverflowMenu
                headerText={i18nStrings?.overflowMenuTitleText}
                dismissIconAriaLabel={
                  i18nStrings?.overflowMenuDismissIconAriaLabel
                }
                backIconAriaLabel={i18nStrings?.overflowMenuBackIconAriaLabel}
                items={utilities.filter(
                  (utility, i) =>
                    (!responsiveState.hideUtilities ||
                      responsiveState.hideUtilities.indexOf(i) !== -1) &&
                    !utility.disableUtilityCollapse
                )}
                onClose={toggleOverflowMenu}
              />
            </div>
          )}
        </VisualContext>
      </div>
    )
  }
)

export {
  InternalTopNavigation as default
}
