import {forwardRef, memo, useEffect, useRef} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../../base-component'
import ChartSeriesMarker from '../chart-series-marker'
import styles from './styles.css.js'
import InternalExpandableSection from '../../../expandable-section/internal'
import getSeriesDetailsText from './series-details-text'
import {useMergeRefs} from '../../hooks/use-merge-refs'

const ChartSeriesDetails = memo(
  forwardRef(
    (
      {
        details,
        expandedSeries,
        setPopoverText,
        setExpandedState,
        compactList,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const className = clsx(baseProps.className, styles.root)
      const detailsRef = useRef(null)
      const mergedRef = useMergeRefs(ref, detailsRef)
      useEffect(() => {
        if (setPopoverText) {
          if (detailsRef.current) {
            setPopoverText(getSeriesDetailsText(detailsRef.current))
          }
          return () => {
            setPopoverText('')
          }
        }
      }, [details, setPopoverText])
      const isExpanded = seriesTitle =>
        !!expandedSeries && expandedSeries.has(seriesTitle)
      return (
        <div {...baseProps} className={className} ref={mergedRef}>
          <ul className={clsx(styles.list, compactList && styles.compact)}>
            {details.map(
              (
                {
                  key,
                  value,
                  markerType,
                  color,
                  isDimmed,
                  subItems,
                  expandableId
                },
                index
              ) => (
                <li
                  key={index}
                  className={clsx({
                    [styles.dimmed]: isDimmed,
                    [styles['list-item']]: true,
                    [styles['with-sub-items']]: subItems?.length,
                    [styles.expandable]: !!expandableId
                  })}>
                  {subItems?.length && !!expandableId ? (
                    <ExpandableSeries
                      itemKey={key}
                      value={value}
                      markerType={markerType}
                      color={color}
                      subItems={subItems}
                      expanded={isExpanded(expandableId)}
                      setExpandedState={state =>
                        setExpandedState &&
                        setExpandedState(expandableId, state)
                      }
                    />
                  ) : (
                    <NonExpandableSeries
                      itemKey={key}
                      value={value}
                      markerType={markerType}
                      color={color}
                      subItems={subItems}
                    />
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )
    }
  )
)

const SubItems = memo(({items, expandable, expanded}) => {
  return (
    <ul className={clsx(styles['sub-items'], expandable && styles.expandable)}>
      {items.map(({key, value}, index) => (
        <li
          key={index}
          className={clsx(
            styles['inner-list-item'],
            styles['key-value-pair'],
            (expanded || !expandable) && styles.announced
          )}>
          <span className={styles.key}>{key}</span>
          <span className={styles.value}>{value}</span>
        </li>
      ))}
    </ul>
  )
})

const ExpandableSeries = memo(
  ({
    itemKey,
    value,
    subItems,
    markerType,
    color,
    expanded,
    setExpandedState
  }) => {
    return (
      <div className={styles['expandable-section']}>
        {markerType && color && (
          <ChartSeriesMarker type={markerType} color={color} />
        )}
        <div className={styles['full-width']}>
          <InternalExpandableSection
            variant='compact'
            headerText={itemKey}
            headerActions={
              <span className={clsx(styles.value, styles.expandable)}>
                {value}
              </span>
            }
            expanded={expanded}
            onChange={({detail}) => setExpandedState(detail.expanded)}>
            <SubItems items={subItems} expandable={true} expanded={expanded} />
          </InternalExpandableSection>
        </div>
      </div>
    )
  }
)

const NonExpandableSeries = memo(
  ({itemKey, value, subItems, markerType, color}) => {
    return (
      <>
        <div className={clsx(styles['key-value-pair'], styles.announced)}>
          <div className={styles.key}>
            {markerType && color && (
              <ChartSeriesMarker type={markerType} color={color} />
            )}
            <span>{itemKey}</span>
          </div>
          <span className={styles.value}>{value}</span>
        </div>
        {subItems && <SubItems items={subItems} />}
      </>
    )
  }
)

export {
  ChartSeriesDetails as default
}
