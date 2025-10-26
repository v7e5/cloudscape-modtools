import {
  useCallback,
  useImperativeHandle,
  useRef,
  forwardRef,
  memo
} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getCardsPerRow} from './cards-layout-helper'
import {getBaseProps} from '../internal/base-component'
import ToolsHeader from '../table/tools-header'
import {getItemKey} from '../table/utils'
import {
  SelectionControl,
  focusMarkers,
  useSelectionFocusMove,
  useSelection
} from '../table/selection'
import {InternalContainerAsSubstep} from '../container/internal'
import InternalStatusIndicator from '../status-indicator/internal'
import stickyScrolling from '../table/sticky-scrolling'
import useBaseComponent from '../internal/hooks/use-base-component'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import LiveRegion from '../internal/components/live-region'
import useMouseDownTarget from '../internal/hooks/use-mouse-down-target'
import {useMobile} from '../internal/hooks/use-mobile'
import {useInternalI18n} from '../i18n/context'
import {useContainerQuery} from '~/components/internal/toolkit'
import {CollectionLabelContext} from '../internal/context/collection-label-context'
import {LinkDefaultVariantContext} from '../internal/context/link-default-variant-context'

const Cards = memo(
  forwardRef(
    (
      {
        items = [],
        cardDefinition,
        cardsPerRow = [],
        header,
        filter,
        pagination,
        preferences,
        empty,
        loading,
        loadingText,
        trackBy,
        selectedItems,
        selectionType,
        isItemDisabled,
        onSelectionChange,
        ariaLabels,
        visibleSections,
        stickyHeader,
        stickyHeaderVerticalOffset,
        variant = 'container',
        renderAriaLive,
        firstIndex = 1,
        totalItemsCount,
        entireCardClickable,
        ...rest
      },
      ref
    ) => {
      const {__internalRootRef} = useBaseComponent('Cards', {
        props: {entireCardClickable, selectionType, stickyHeader, variant}
      })
      const baseProps = getBaseProps(rest)
      const isRefresh = useVisualRefresh()
      const isMobile = useMobile()
      const computedVariant = isRefresh ? variant : 'container'
      const headerIdRef = useRef(void 0)
      const setHeaderRef = useCallback(id => {
        headerIdRef.current = id
      }, [])
      const isLabelledByHeader = !ariaLabels?.cardsLabel && !!header
      const [columns, measureRef] = useContainerQuery(
        ({contentBoxWidth}) => getCardsPerRow(contentBoxWidth, cardsPerRow),
        [cardsPerRow]
      )
      const refObject = useRef(null)
      const mergedRef = useMergeRefs(measureRef, refObject, __internalRootRef)
      const getMouseDownTarget = useMouseDownTarget()
      const i18n = useInternalI18n('cards')
      const {isItemSelected, getItemSelectionProps} = useSelection({
        items,
        trackBy,
        selectedItems,
        selectionType,
        isItemDisabled,
        onSelectionChange,
        ariaLabels: {
          itemSelectionLabel: ariaLabels?.itemSelectionLabel,
          selectionGroupLabel: i18n(
            'ariaLabels.selectionGroupLabel',
            ariaLabels?.selectionGroupLabel
          )
        }
      })
      const hasToolsHeader = header || filter || pagination || preferences
      const hasFooterPagination =
        isMobile && variant === 'full-page' && !!pagination
      const headerRef = useRef(null)
      const {scrollToTop, scrollToItem} = stickyScrolling(refObject, headerRef)
      stickyHeader = !isMobile && stickyHeader
      const onCardFocus = event => {
        if (
          stickyHeader &&
          !event.currentTarget.contains(getMouseDownTarget())
        ) {
          scrollToItem(event.currentTarget)
        }
      }
      useImperativeHandle(
        ref,
        () => ({
          scrollToTop: () => {
            if (stickyHeader) {
              scrollToTop()
            }
          }
        }),
        [stickyHeader, scrollToTop]
      )
      let status
      if (loading) {
        status = (
          <div className={styles.loading}>
            <InternalStatusIndicator type='loading'>
              <LiveRegion visible={true}>{loadingText}</LiveRegion>
            </InternalStatusIndicator>
          </div>
        )
      } else if (empty && !items.length) {
        status = <div className={styles.empty}>{empty}</div>
      }
      return (
        <LinkDefaultVariantContext.Provider
          value={{defaultVariant: 'primary'}}>
          <div
            {...baseProps}
            className={clsx(baseProps.className, styles.root)}
            ref={mergedRef}>
            <InternalContainerAsSubstep
              header={
                hasToolsHeader && (
                  <div
                    className={clsx(
                      styles.header,
                      isRefresh && styles['header-refresh'],
                      styles[`header-variant-${computedVariant}`]
                    )}>
                    <CollectionLabelContext.Provider
                      value={{assignId: setHeaderRef}}>
                      <ToolsHeader
                        header={header}
                        filter={filter}
                        pagination={pagination}
                        preferences={preferences}
                      />
                    </CollectionLabelContext.Provider>
                  </div>
                )
              }
              footer={
                hasFooterPagination && (
                  <div className={styles['footer-pagination']}>
                    {pagination}
                  </div>
                )
              }
              disableContentPaddings={true}
              disableHeaderPaddings={computedVariant === 'full-page'}
              variant={
                computedVariant === 'container' ? 'cards' : computedVariant
              }
              __stickyHeader={stickyHeader}
              __stickyOffset={stickyHeaderVerticalOffset}
              __headerRef={headerRef}
              __fullPage={computedVariant === 'full-page'}
              __disableFooterDivider={true}>
              <div
                className={clsx(
                  hasToolsHeader && styles['has-header'],
                  isRefresh && styles.refresh,
                  styles[`header-variant-${computedVariant}`]
                )}>
                {!!renderAriaLive && !!firstIndex && (
                  <LiveRegion>
                    <span>
                      {renderAriaLive({
                        totalItemsCount,
                        firstIndex,
                        lastIndex: firstIndex + items.length - 1
                      })}
                    </span>
                  </LiveRegion>
                )}
                {status ?? (
                  <CardsList
                    items={items}
                    cardDefinition={cardDefinition}
                    trackBy={trackBy}
                    selectionType={selectionType}
                    columns={columns}
                    isItemSelected={isItemSelected}
                    getItemSelectionProps={getItemSelectionProps}
                    visibleSections={visibleSections}
                    onFocus={onCardFocus}
                    ariaLabel={ariaLabels?.cardsLabel}
                    ariaLabelledby={
                      isLabelledByHeader && headerIdRef.current
                        ? headerIdRef.current
                        : void 0
                    }
                    entireCardClickable={entireCardClickable}
                  />
                )}
              </div>
            </InternalContainerAsSubstep>
          </div>
        </LinkDefaultVariantContext.Provider>
      )
    }
  )
)

const CardsList = memo(
  ({
    items,
    cardDefinition,
    trackBy,
    selectionType,
    columns,
    isItemSelected,
    getItemSelectionProps,
    visibleSections,
    onFocus,
    ariaLabelledby,
    ariaLabel,
    entireCardClickable
  }) => {
    const selectable = !!selectionType
    const canClickEntireCard = selectable && entireCardClickable
    const isRefresh = useVisualRefresh()
    const {moveFocusDown, moveFocusUp} = useSelectionFocusMove(
      selectionType,
      items.length
    )
    let visibleSectionsDefinition = cardDefinition.sections || []
    visibleSectionsDefinition = visibleSections
      ? visibleSectionsDefinition.filter(
          section => section.id && visibleSections.indexOf(section.id) !== -1
        )
      : visibleSectionsDefinition
    let listRole = void 0
    let listItemRole = void 0
    if (selectable) {
      listRole = 'group'
      listItemRole = 'presentation'
    }
    return (
      <ol
        className={clsx(styles.list, styles[`list-grid-${columns || 1}`])}
        role={listRole}
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        {...(focusMarkers && focusMarkers.root)}>
        {items.map((item, index) => (
          <li
            className={clsx(styles.card, {
              [styles['card-selectable']]: selectable,
              [styles['card-selected']]: selectable && isItemSelected(item)
            })}
            key={getItemKey(trackBy, item, index)}
            onFocus={onFocus}
            {...(focusMarkers && focusMarkers.item)}
            role={listItemRole}>
            <div
              className={clsx(
                styles['card-inner'],
                isRefresh && styles.refresh
              )}
              onClick={
                canClickEntireCard
                  ? event => {
                      getItemSelectionProps?.(item).onChange()
                      event.currentTarget.querySelector('input')?.focus()
                    }
                  : void 0
              }>
              <div className={styles['card-header']}>
                <div className={styles['card-header-inner']}>
                  {cardDefinition.header ? cardDefinition.header(item) : ''}
                </div>
                {getItemSelectionProps && (
                  <div className={styles['selection-control']}>
                    <SelectionControl
                      onFocusDown={moveFocusDown}
                      onFocusUp={moveFocusUp}
                      {...getItemSelectionProps(item)}
                    />
                  </div>
                )}
              </div>
              {visibleSectionsDefinition.map(
                ({width = 100, header, content, id}, index2) => (
                  <div
                    key={id || index2}
                    className={styles.section}
                    style={{width: `${width}%`}}>
                    {header ? (
                      <div className={styles['section-header']}>{header}</div>
                    ) : (
                      ''
                    )}
                    {content ? (
                      <div className={styles['section-content']}>
                        {content(item)}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )
              )}
            </div>
          </li>
        ))}
      </ol>
    )
  }
)

export {
  Cards as default
}
