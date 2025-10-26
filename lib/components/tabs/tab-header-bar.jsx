import {useRef, useState, useEffect, forwardRef, memo} from 'react'
import {Link} from '@remix-run/react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {InternalButton} from '../button/internal'
import handleKey from '../internal/utils/handle-key'
import {KeyCode} from '../internal/keycode'
import {
  onPaginationClick,
  hasHorizontalOverflow,
  hasInlineStartOverflow,
  hasInlineEndOverflow,
  scrollIntoView
} from './scroll-utils'
import {hasModifierKeys, isPlainLeftClick} from '../internal/events'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {useInternalI18n} from '../i18n/context'
import {useContainerQuery} from '~/components/internal/toolkit'
import {
  SingleTabStopNavigationContext,
  useSingleTabStopNavigation
} from '../internal/context/single-tab-stop-navigation-context'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {getAllFocusables} from '../internal/components/focus-lock/utils'

const tabSelector = '[role="tab"]'
const activeTabSelector = '[role="tab"][aria-selected="true"]'
const TabHeaderBar = memo(
  ({
    onChange,
    activeTabId,
    tabs,
    variant,
    idNamespace,
    ariaLabel,
    ariaLabelledby,
    i18nStrings
  }) => {
    const headerBarRef = useRef(null)
    const activeTabHeaderRef = useRef(null)
    const inlineStartOverflowButton = useRef(null)
    const i18n = useInternalI18n('tabs')
    const isVisualRefresh = useVisualRefresh()
    const containerObjectRef = useRef(null)
    const [widthChange, containerMeasureRef] = useContainerQuery(
      rect => rect.contentBoxWidth
    )
    const containerRef = useMergeRefs(containerObjectRef, containerMeasureRef)
    const tabRefs = useRef(new Map())
    const [horizontalOverflow, setHorizontalOverflow] = useState(false)
    const [inlineStartOverflow, setInlineStartOverflow] = useState(false)
    const [inlineEndOverflow, setInlineEndOverflow] = useState(false)
    useEffect(() => {
      if (headerBarRef.current) {
        setHorizontalOverflow(
          hasHorizontalOverflow(
            headerBarRef.current,
            inlineStartOverflowButton
          )
        )
        setInlineStartOverflow(hasInlineStartOverflow(headerBarRef.current))
        setInlineEndOverflow(hasInlineEndOverflow(headerBarRef.current))
      }
    }, [widthChange, tabs])
    const scrollIntoViewIfPossible = smooth => {
      if (!activeTabId) {
        return
      }
      const activeTabRef = tabRefs.current.get(activeTabId)
      if (activeTabRef && activeTabRef.parentElement && headerBarRef.current) {
        scrollIntoView(
          activeTabRef.parentElement,
          headerBarRef.current,
          smooth
        )
      }
    }
    useEffect(() => {
      requestAnimationFrame(() => {
        scrollIntoViewIfPossible(false)
      })
    }, [horizontalOverflow, widthChange, tabs.length])
    useEffect(() => {
      scrollIntoViewIfPossible(true)
    }, [activeTabId])
    useEffect(() => {
      if (headerBarRef.current?.contains(document.activeElement)) {
        if (document.activeElement !== activeTabHeaderRef.current) {
          activeTabHeaderRef.current?.focus({preventScroll: true})
        }
      }
    }, [activeTabId])
    const onScroll = () => {
      if (headerBarRef.current) {
        setInlineStartOverflow(hasInlineStartOverflow(headerBarRef.current))
        setInlineEndOverflow(hasInlineEndOverflow(headerBarRef.current))
      }
    }
    const classes = clsx({
      [styles['tabs-header']]: true,
      [styles['tabs-header-with-divider']]:
        variant === 'default' || isVisualRefresh
    })
    const leftButtonClasses = clsx({
      [styles['pagination-button']]: true,
      [styles['pagination-button-left']]: true,
      [styles['pagination-button-left-scrollable']]: inlineStartOverflow
    })
    const rightButtonClasses = clsx({
      [styles['pagination-button']]: true,
      [styles['pagination-button-right']]: true,
      [styles['pagination-button-right-scrollable']]: inlineEndOverflow
    })
    const focusables = useRef(new Set())
    const focusHandlers = useRef(new Map())
    const focusablesState = useRef(new WeakMap())
    const focusTarget = useRef(null)
    const registerFocusable = (focusableElement, changeHandler) => {
      focusables.current.add(focusableElement)
      focusHandlers.current.set(focusableElement, changeHandler)
      const isFocusable = !!focusablesState.current.get(focusableElement)
      const newIsFocusable = focusTarget.current === focusableElement
      if (newIsFocusable !== isFocusable) {
        focusablesState.current.set(focusableElement, newIsFocusable)
        changeHandler(newIsFocusable)
      }
      return () => unregisterFocusable(focusableElement)
    }
    const unregisterFocusable = focusable => {
      focusables.current.delete(focusable)
      focusHandlers.current.delete(focusable)
    }
    const updateFocusTarget = () => {
      focusTarget.current = getSingleFocusable()
      for (const focusableElement of focusables.current) {
        const isFocusable =
          focusablesState.current.get(focusableElement) ?? false
        const newIsFocusable = focusTarget.current === focusableElement
        if (newIsFocusable !== isFocusable) {
          focusablesState.current.set(focusableElement, newIsFocusable)
          focusHandlers.current.get(focusableElement)(newIsFocusable)
        }
      }
    }
    const getSingleFocusable = () => {
      if (!containerObjectRef.current) {
        return null
      }
      const tabElements = Array.from(
        containerObjectRef.current.querySelectorAll(tabSelector)
      )
      return (
        tabElements.find(tab => tab.matches(activeTabSelector)) ??
        tabElements.find(tab => !tab.disabled) ??
        null
      )
    }
    useEffect(() => {
      updateFocusTarget()
    })
    const onFocus = () => {
      updateFocusTarget()
    }
    const onBlur = () => {
      updateFocusTarget()
    }
    const onKeyDown = event => {
      const specialKeys = [
        KeyCode.right,
        KeyCode.left,
        KeyCode.end,
        KeyCode.home,
        KeyCode.pageUp,
        KeyCode.pageDown
      ]
      if (
        hasModifierKeys(event) ||
        specialKeys.indexOf(event.keyCode) === -1
      ) {
        return
      }
      if (!containerObjectRef.current || !focusTarget.current) {
        return
      }
      event.preventDefault()
      const focusables2 = getFocusablesFrom(containerObjectRef.current)
      const activeIndex = focusables2.indexOf(focusTarget.current)
      handleKey(event, {
        onHome: () => focusElement(focusables2[0]),
        onEnd: () => focusElement(focusables2[focusables2.length - 1]),
        onInlineStart: () =>
          focusElement(
            focusables2[
              circleIndex(activeIndex - 1, [0, focusables2.length - 1])
            ]
          ),
        onInlineEnd: () =>
          focusElement(
            focusables2[
              circleIndex(activeIndex + 1, [0, focusables2.length - 1])
            ]
          ),
        onPageDown: () =>
          inlineEndOverflow && onPaginationClick(headerBarRef, 'forward'),
        onPageUp: () =>
          inlineStartOverflow && onPaginationClick(headerBarRef, 'backward')
      })
    }
    const focusElement = element => {
      element.focus()
      const tabsById = tabs.reduce(
        (map, tab) => map.set(tab.id, tab),
        new Map()
      )
      for (const [tabId, tabTriggerElement] of tabRefs.current.entries()) {
        if (tabId !== activeTabId && tabTriggerElement === element) {
          onChange({
            activeTabId: tabId,
            activeTabHref: tabsById.get(tabId)?.to
          })
          break
        }
      }
    }
    const getFocusablesFrom = target => {
      const isElementDisabled = element => {
        if (element instanceof HTMLButtonElement) {
          return (
            element.disabled &&
            element.getAttribute('aria-selected') !== 'true'
          )
        }
        return false
      }
      return getAllFocusables(target).filter(
        el => focusables.current.has(el) && !isElementDisabled(el)
      )
    }
    return (
      <div className={classes} ref={containerRef}>
        {horizontalOverflow && (
          <span ref={inlineStartOverflowButton} className={leftButtonClasses}>
            <InternalButton
              formAction='none'
              variant='icon'
              iconName='angle-left'
              disabled={!inlineStartOverflow}
              __focusable={true}
              onClick={() => onPaginationClick(headerBarRef, 'backward')}
              ariaLabel={i18n(
                'i18nStrings.scrollLeftAriaLabel',
                i18nStrings?.scrollLeftAriaLabel
              )}
            />
          </span>
        )}
        <SingleTabStopNavigationContext.Provider
          value={{navigationActive: true, registerFocusable}}>
          <ul
            role='tablist'
            className={styles['tabs-header-list']}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            ref={headerBarRef}
            onScroll={onScroll}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}>
            {tabs.map(renderTabHeader)}
          </ul>
        </SingleTabStopNavigationContext.Provider>
        {horizontalOverflow && (
          <span className={rightButtonClasses}>
            <InternalButton
              formAction='none'
              variant='icon'
              iconName='angle-right'
              disabled={!inlineEndOverflow}
              __focusable={true}
              onClick={() => onPaginationClick(headerBarRef, 'forward')}
              ariaLabel={i18n(
                'i18nStrings.scrollRightAriaLabel',
                i18nStrings?.scrollRightAriaLabel
              )}
            />
          </span>
        )}
      </div>
    )
    const renderTabHeader = tab => {
      const clickTab = event => {
        if (tab.disabled) {
          event.preventDefault()
          return
        }
        const specialKey = !isPlainLeftClick(event)
        if (specialKey && tab.to) {
          return
        }
        event.preventDefault()
        if (!tab.to) {
          const clickedTabRef = tabRefs.current.get(tab.id)
          if (clickedTabRef) {
            if (clickedTabRef && clickedTabRef !== document.activeElement) {
              clickedTabRef.focus({preventScroll: true})
            }
          }
        }
        if (tab.id === activeTabId) {
          return
        }
        onChange({activeTabId: tab.id, activeTabHref: tab.to})
      }
      const classes2 = clsx({
        [styles['tabs-tab-link']]: true,
        [styles.refresh]: isVisualRefresh,
        [styles['tabs-tab-active']]: activeTabId === tab.id && !tab.disabled,
        [styles['tabs-tab-disabled']]: tab.disabled
      })
      const commonProps = {
        className: classes2,
        role: 'tab',
        'aria-selected': tab.id === activeTabId,
        'aria-controls': `${idNamespace}-${tab.id}-panel`,
        'data-testid': tab.id,
        id: getTabElementId({namespace: idNamespace, tabId: tab.id}),
        children: <span className={styles['tabs-tab-label']}>{tab.label}</span>
      }
      if (tab.disabled) {
        commonProps['aria-disabled'] = 'true'
      } else {
        commonProps.onClick = clickTab
      }
      const setElement = tabElement => {
        if (tab.id === activeTabId) {
          activeTabHeaderRef.current = tabElement
        }
        tabRefs.current.set(tab.id, tabElement)
      }
      return (
        <li className={styles['tabs-tab']} role='presentation' key={tab.id}>
          <TabTrigger ref={setElement} tab={tab} elementProps={commonProps} />
        </li>
      )
    }
  }
)

const TabTrigger = memo(
  forwardRef(({tab, elementProps}, ref) => {
    const refObject = useRef(null)
    const mergedRef = useMergeRefs(refObject, ref)
    const {tabIndex} = useSingleTabStopNavigation(refObject)
    return tab.to ? (
      <Link
        {...elementProps}
        to={tab.to}
        ref={mergedRef}
        tabIndex={tabIndex}
      />
    ) : (
      <button
        {...elementProps}
        type='button'
        disabled={tab.disabled}
        ref={mergedRef}
        tabIndex={tabIndex}
      />
    )
  })
)
const getTabElementId = ({namespace, tabId}) => {
  return namespace + '-' + tabId
}
const circleIndex = (index, [from, to]) => {
  if (index < from) {
    return to
  }
  if (index > to) {
    return from
  }
  return index
}

export {
  TabHeaderBar,
  getTabElementId
}
