import {useCallback, useEffect, useMemo, useRef, useState, memo} from 'react'
import clsx from 'clsx'
import customCssProps from '../internal/generated/custom-css-properties'
import {Flash, focusFlashById} from './flash'
import InternalIcon from '../icon/internal'
import {TransitionGroup} from 'react-transition-group'
import {Transition} from '../internal/components/transition'
import styles from './styles.css.js'
import {
  counterTypes,
  getFlashTypeCount,
  getItemColor,
  getVisibleCollapsedItems
} from './utils'
import {animate, getDOMRects} from '../internal/animate'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {useFlashbar} from './common'
import {throttle} from '../internal/utils/throttle'
import {scrollElementIntoView} from '../internal/utils/scrollable-containers'
import {findUpUntil} from '../internal/utils/dom'
import {useInternalI18n} from '../i18n/context'
import {getVisualContextClassname} from '../internal/components/visual-context'
import {useEffectOnUpdate} from '../internal/hooks/use-effect-on-update'

const maxNonCollapsibleItems = 1
const resizeListenerThrottleDelay = 100
const CollapsibleFlashbar = memo(({items, ...restProps}) => {
  const [enteringItems, setEnteringItems] = useState([])
  const [exitingItems, setExitingItems] = useState([])
  const [isFlashbarStackExpanded, setIsFlashbarStackExpanded] = useState(false)
  const getElementsToAnimate = useCallback(() => {
    const flashElements = isFlashbarStackExpanded
      ? expandedItemRefs.current
      : collapsedItemRefs.current
    return {...flashElements, notificationBar: notificationBarRef.current}
  }, [isFlashbarStackExpanded])
  const prepareAnimations = useCallback(() => {
    const rects = getDOMRects(getElementsToAnimate())
    setInitialAnimationState(rects)
  }, [getElementsToAnimate])
  const {
    baseProps,
    breakpoint,
    isReducedMotion,
    isVisualRefresh,
    mergedRef,
    ref
  } = useFlashbar({
    items,
    ...restProps,
    onItemsAdded: newItems => {
      setEnteringItems([...enteringItems, ...newItems])
    },
    onItemsChanged: options => {
      if (options?.allItemsHaveId && !options?.isReducedMotion) {
        prepareAnimations()
      }
    },
    onItemsRemoved: removedItems => {
      setExitingItems([...exitingItems, ...removedItems])
    }
  })
  const collapsedItemRefs = useRef({})
  const expandedItemRefs = useRef({})
  const [initialAnimationState, setInitialAnimationState] = useState(null)
  const listElementRef = useRef(null)
  const notificationBarRef = useRef(null)
  const [transitioning, setTransitioning] = useState(false)
  const flashbarElementId = useUniqueId('flashbar')
  const itemCountElementId = useUniqueId('item-count')
  if (items.length <= maxNonCollapsibleItems && isFlashbarStackExpanded) {
    setIsFlashbarStackExpanded(false)
  }
  const animateFlash = !isReducedMotion
  const toggleCollapseExpand = () => {
    if (!isReducedMotion) {
      prepareAnimations()
    }
    setIsFlashbarStackExpanded(prev => !prev)
  }
  useEffect(() => {
    if (isFlashbarStackExpanded && items?.length) {
      const mostRecentItem = items[0]
      if (mostRecentItem.id !== void 0) {
        focusFlashById(ref.current, mostRecentItem.id)
      }
    }
  }, [isFlashbarStackExpanded])
  useEffectOnUpdate(() => {
    if (!isFlashbarStackExpanded && notificationBarRef.current) {
      scrollElementIntoView(notificationBarRef.current)
    }
  }, [isFlashbarStackExpanded])
  const updateBottomSpacing = useMemo(
    () =>
      throttle(() => {
        const listElement = listElementRef?.current
        const flashbar = listElement?.parentElement
        if (listElement && flashbar) {
          flashbar.classList.remove(styles.floating)
          const windowHeight = window.innerHeight
          const outerElement =
            findUpUntil(
              flashbar,
              element => element.getAttribute('role') === 'region'
            ) || flashbar
          const applySpacing =
            isFlashbarStackExpanded &&
            Math.ceil(outerElement.getBoundingClientRect().bottom) >=
              windowHeight
          if (!applySpacing) {
            flashbar.classList.add(styles.floating)
          }
        }
      }, resizeListenerThrottleDelay),
    [isFlashbarStackExpanded]
  )
  useEffect(() => {
    window.addEventListener('resize', updateBottomSpacing)
    return () => {
      window.removeEventListener('resize', updateBottomSpacing)
      updateBottomSpacing.cancel()
    }
  }, [updateBottomSpacing])
  const {i18nStrings} = restProps
  const i18n = useInternalI18n('flashbar')
  const ariaLabel = i18n('i18nStrings.ariaLabel', i18nStrings?.ariaLabel)
  const notificationBarText = i18n(
    'i18nStrings.notificationBarText',
    i18nStrings?.notificationBarText
  )
  const notificationBarAriaLabel = i18n(
    'i18nStrings.notificationBarAriaLabel',
    i18nStrings?.notificationBarAriaLabel
  )
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
  useEffect(() => {
    if (initialAnimationState) {
      updateBottomSpacing()
      animate({
        elements: getElementsToAnimate(),
        oldState: initialAnimationState,
        newElementInitialState: ({top}) => ({scale: 0.9, y: -0.2 * top}),
        onTransitionsEnd: () => setTransitioning(false)
      })
      setTransitioning(true)
      setInitialAnimationState(null)
    }
  }, [
    updateBottomSpacing,
    getElementsToAnimate,
    initialAnimationState,
    isFlashbarStackExpanded
  ])
  const isCollapsible = items.length > maxNonCollapsibleItems
  const countByType = getFlashTypeCount(items)
  const numberOfColorsInStack = new Set(items.map(getItemColor)).size
  const maxSlots = Math.max(numberOfColorsInStack, 3)
  const stackDepth = Math.min(maxSlots, items.length)
  const itemsToShow = isFlashbarStackExpanded
    ? items.map((item, index) => ({...item, expandedIndex: index}))
    : getVisibleCollapsedItems(items, stackDepth).map((item, index) => ({
        ...item,
        collapsedIndex: index
      }))
  const getItemId = item => item.id ?? item.expandedIndex ?? 0
  const hasEntered = item =>
    enteringItems.some(_item => _item.id && _item.id === item.id)
  const hasLeft = item => !('expandedIndex' in item)
  const hasEnteredOrLeft = item => hasEntered(item) || hasLeft(item)
  const showInnerContent = item =>
    isFlashbarStackExpanded ||
    hasLeft(item) ||
    ('expandedIndex' in item && item.expandedIndex === 0)
  const shouldUseStandardAnimation = (item, index) =>
    index === 0 && hasEnteredOrLeft(item)
  const getAnimationElementId = item => `flash-${getItemId(item)}`
  const renderList = () => (
    <ul
      ref={listElementRef}
      className={clsx(
        styles['flash-list'],
        isFlashbarStackExpanded ? styles.expanded : styles.collapsed,
        transitioning && styles['animation-running'],
        initialAnimationState && styles['animation-ready'],
        isVisualRefresh && styles['visual-refresh']
      )}
      id={flashbarElementId}
      aria-label={ariaLabel}
      aria-describedby={isCollapsible ? itemCountElementId : void 0}
      style={
        !isFlashbarStackExpanded || transitioning
          ? {
              [customCssProps.flashbarStackDepth]: stackDepth
            }
          : void 0
      }>
      <ListWrapper withMotion={!isReducedMotion}>
        {itemsToShow.map((item, index) => (
          <Transition
            key={getItemId(item)}
            in={!hasLeft(item)}
            onStatusChange={status => {
              if (status === 'entered') {
                setEnteringItems([])
              } else if (status === 'exited') {
                setExitingItems([])
              }
            }}>
            {(state, transitionRootElement) => (
              <li
                aria-hidden={!showInnerContent(item)}
                className={
                  showInnerContent(item)
                    ? clsx(
                        styles['flash-list-item'],
                        !isFlashbarStackExpanded && styles.item,
                        !collapsedItemRefs.current[
                          getAnimationElementId(item)
                        ] && styles['expanded-only']
                      )
                    : clsx(
                        styles.flash,
                        styles[`flash-type-${item.type ?? 'info'}`],
                        styles.item
                      )
                }
                ref={element => {
                  if (isFlashbarStackExpanded) {
                    expandedItemRefs.current[getAnimationElementId(item)] =
                      element
                  } else {
                    collapsedItemRefs.current[getAnimationElementId(item)] =
                      element
                  }
                }}
                style={
                  !isFlashbarStackExpanded || transitioning
                    ? {
                        [customCssProps.flashbarStackIndex]:
                          item.collapsedIndex ?? item.expandedIndex ?? index
                      }
                    : void 0
                }
                key={getItemId(item)}>
                {showInnerContent(item) && (
                  <Flash
                    className={clsx(
                      animateFlash && styles['flash-with-motion'],
                      isVisualRefresh && styles['flash-refresh']
                    )}
                    key={getItemId(item)}
                    ref={
                      shouldUseStandardAnimation(item, index)
                        ? transitionRootElement
                        : void 0
                    }
                    transitionState={
                      shouldUseStandardAnimation(item, index) ? state : void 0
                    }
                    i18nStrings={iconAriaLabels}
                    {...item}
                  />
                )}
              </li>
            )}
          </Transition>
        ))}
      </ListWrapper>
    </ul>
  )
  return (
    <div
      {...baseProps}
      className={clsx(
        baseProps.className,
        styles.flashbar,
        styles[`breakpoint-${breakpoint}`],
        styles.stack,
        isCollapsible && styles.collapsible,
        items.length === 2 && styles['short-list'],
        isFlashbarStackExpanded && styles.expanded,
        isVisualRefresh && styles['visual-refresh']
      )}
      ref={mergedRef}>
      {isFlashbarStackExpanded && renderList()}
      {isCollapsible && (
        <div
          className={clsx(
            styles['notification-bar'],
            isVisualRefresh && styles['visual-refresh'],
            isFlashbarStackExpanded ? styles.expanded : styles.collapsed,
            transitioning && styles['animation-running'],
            items.length === 2 && styles['short-list'],
            getVisualContextClassname('flashbar')
          )}
          onClick={toggleCollapseExpand}
          ref={notificationBarRef}>
          <span
            aria-live='polite'
            className={styles.status}
            role='status'
            id={itemCountElementId}>
            {notificationBarText && (
              <h2 className={styles.header}>{notificationBarText}</h2>
            )}
            <span className={styles['item-count']}>
              {counterTypes.map(({type, labelName, iconName}) => (
                <NotificationTypeCount
                  key={type}
                  iconName={iconName}
                  label={iconAriaLabels[labelName]}
                  count={countByType[type]}
                />
              ))}
            </span>
          </span>
          <button
            aria-controls={flashbarElementId}
            aria-describedby={itemCountElementId}
            aria-expanded={isFlashbarStackExpanded}
            aria-label={notificationBarAriaLabel}
            className={clsx(
              styles.button,
              isFlashbarStackExpanded && styles.expanded
            )}>
            <InternalIcon
              className={styles.icon}
              size='normal'
              name='angle-down'
            />
          </button>
        </div>
      )}
      {!isFlashbarStackExpanded && renderList()}
    </div>
  )
})

const NotificationTypeCount = memo(({iconName, label, count}) => {
  return (
    <span className={styles['type-count']}>
      <span aria-label={label} role='img'>
        <span title={label} aria-hidden='true'>
          <InternalIcon name={iconName} />
        </span>
      </span>
      <span className={styles['count-number']}>{count}</span>
    </span>
  )
})
const ListWrapper = memo(({children, withMotion}) =>
  withMotion ? (
    <TransitionGroup component={null}>{children}</TransitionGroup>
  ) : (
    <>{children}</>
  )
)

export {
  CollapsibleFlashbar as default
}
