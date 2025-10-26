import {memo} from 'react'
import clsx from 'clsx'
import {useAppLayoutInternals} from './context'
import {InternalButton} from '../../button/internal'
import TriggerButton from './trigger-button'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'
import {Transition} from '../../internal/components/transition'
import {findUpUntil} from '../../internal/utils/dom'
import customCssProps from '../../internal/generated/custom-css-properties'

const Navigation = memo(() => {
  const {
    ariaLabels,
    disableBodyScroll,
    handleNavigationClick,
    hasDrawerViewportOverlay,
    isMobile,
    navigationOpen,
    isToolsOpen,
    navigation,
    navigationHide,
    navigationRefs,
    navigationWidth,
    toolsHide,
    headerVariant
  } = useAppLayoutInternals()
  if (navigationHide) {
    return null
  }
  const onNavigationClick = event => {
    const hasLink = findUpUntil(
      event.target,
      node => node.tagName === 'A' && !!node.to
    )
    if (hasLink && isMobile) {
      handleNavigationClick(false)
    }
  }
  const isUnfocusable =
    hasDrawerViewportOverlay &&
    (!navigationOpen || (isToolsOpen && !toolsHide))
  return (
    <Transition in={navigationOpen}>
      {(state, transitionEventsRef) => (
        <div
          className={clsx(styles['navigation-container'], {
            [styles['disable-body-scroll']]: disableBodyScroll,
            [styles.unfocusable]: isUnfocusable,
            [testutilStyles['drawer-closed']]: !navigationOpen
          })}
          style={{[customCssProps.navigationWidth]: `${navigationWidth}px`}}>
          {!isMobile && (
            <nav
              aria-hidden={isMobile || navigationOpen}
              aria-label={ariaLabels?.navigation ?? void 0}
              className={clsx(styles['show-navigation'], {
                [styles.animating]: state === 'exiting',
                [styles['is-navigation-open']]: navigationOpen
              })}
              ref={state === 'exiting' ? transitionEventsRef : void 0}>
              <TriggerButton
                ariaLabel={ariaLabels?.navigationToggle}
                ariaExpanded={navigationOpen ? void 0 : false}
                iconName='menu'
                className={testutilStyles['navigation-toggle']}
                onClick={() => handleNavigationClick(true)}
                ref={navigationRefs.toggle}
                highContrastHeader={headerVariant === 'high-contrast'}
              />
            </nav>
          )}
          <nav
            aria-label={ariaLabels?.navigation ?? void 0}
            className={clsx(
              styles.navigation,
              {
                [styles.animating]: state === 'entering',
                [styles['is-navigation-open']]: navigationOpen
              },
              testutilStyles.navigation
            )}
            ref={state !== 'exiting' ? transitionEventsRef : void 0}
            aria-hidden={!navigationOpen}
            onClick={event => {
              onNavigationClick && onNavigationClick(event)
            }}>
            <div className={clsx(styles['animated-content'])}>
              <div className={clsx(styles['hide-navigation'])}>
                <InternalButton
                  ariaLabel={ariaLabels?.navigationClose ?? void 0}
                  iconName={isMobile ? 'close' : 'angle-left'}
                  onClick={() => handleNavigationClick(false)}
                  variant='icon'
                  formAction='none'
                  className={testutilStyles['navigation-close']}
                  ref={navigationRefs.close}
                />
              </div>
              {navigation}
            </div>
          </nav>
        </div>
      )}
    </Transition>
  )
})

export {
  Navigation as default
}
