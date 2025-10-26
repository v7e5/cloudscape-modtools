import {memo} from 'react'
import clsx from 'clsx'
import {Flash} from './flash'
import {TIMEOUT_FOR_ENTERING_ANIMATION} from './constant'
import {TransitionGroup} from 'react-transition-group'
import {Transition} from '../internal/components/transition'
import styles from './styles.css.js'
import {useFlashbar} from './common'
import {useInternalI18n} from '../i18n/context'

const NonCollapsibleFlashbar = memo(({items, i18nStrings, ...restProps}) => {
  const {
    allItemsHaveId,
    baseProps,
    breakpoint,
    isReducedMotion,
    isVisualRefresh,
    mergedRef
  } = useFlashbar({
    items,
    ...restProps
  })
  const i18n = useInternalI18n('flashbar')
  const ariaLabel = i18n('i18nStrings.ariaLabel', i18nStrings?.ariaLabel)
  const iconAriaLabels = {
    errorIconAriaLabel: i18n(
      'i18nStrings.errorIconAriaLabel',
      i18nStrings?.errorIconAriaLabel
    ),
    inProgressIconAriaLabel: i18n(
      'i18nStrings.inProgressIconAriaLabel',
      i18nStrings?.inProgressIconAriaLabel
    ),
    infoIconAriaLabel: i18n(
      'i18nStrings.infoIconAriaLabel',
      i18nStrings?.infoIconAriaLabel
    ),
    successIconAriaLabel: i18n(
      'i18nStrings.successIconAriaLabel',
      i18nStrings?.successIconAriaLabel
    ),
    warningIconAriaLabel: i18n(
      'i18nStrings.warningIconAriaLabel',
      i18nStrings?.warningIconAriaLabel
    )
  }
  const motionDisabled = isReducedMotion || !isVisualRefresh || !allItemsHaveId
  const animateFlash = !isReducedMotion && isVisualRefresh
  const renderFlatItemsWithTransitions = () => {
    if (motionDisabled || !items) {
      return
    }
    return (
      <TransitionGroup
        component='ul'
        className={styles['flash-list']}
        aria-label={ariaLabel}>
        {items.map((item, index) => (
          <Transition
            transitionChangeDelay={{entering: TIMEOUT_FOR_ENTERING_ANIMATION}}
            key={item.id ?? index}
            in={true}>
            {(state, transitionRootElement) => (
              <li className={styles['flash-list-item']}>
                {renderItem(
                  item,
                  item.id ?? index,
                  transitionRootElement,
                  state
                )}
              </li>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    )
  }
  const renderFlatItemsWithoutTransitions = () => {
    if (!motionDisabled || !items) {
      return
    }
    return (
      <ul className={styles['flash-list']} aria-label={ariaLabel}>
        {items.map((item, index) => (
          <li key={item.id ?? index} className={styles['flash-list-item']}>
            {renderItem(item, item.id ?? index)}
          </li>
        ))}
      </ul>
    )
  }
  const renderItem = (item, key, transitionRootElement, transitionState) => {
    return (
      <Flash
        className={clsx(
          animateFlash && styles['flash-with-motion'],
          isVisualRefresh && styles['flash-refresh']
        )}
        key={key}
        ref={transitionRootElement}
        transitionState={transitionState}
        i18nStrings={iconAriaLabels}
        {...item}
      />
    )
  }
  return (
    <div
      {...baseProps}
      className={clsx(
        baseProps.className,
        styles.flashbar,
        styles[`breakpoint-${breakpoint}`]
      )}
      ref={mergedRef}>
      {renderFlatItemsWithTransitions()}
      {renderFlatItemsWithoutTransitions()}
    </div>
  )
})

export {
  NonCollapsibleFlashbar as default
}
