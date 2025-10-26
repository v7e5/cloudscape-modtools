import {useRef, memo} from 'react'
import clsx from 'clsx'
import InternalBox from '../../../box/internal'
import {KeyCode} from '../../keycode'
import SeriesMarker from '../chart-series-marker'
import styles from './styles.css.js'
import {useInternalI18n} from '../../../i18n/context'
import handleKey from '../../utils/handle-key'

const ChartLegend = memo(
  ({
    series,
    onHighlightChange,
    highlightedSeries,
    legendTitle,
    ariaLabel,
    plotContainerRef
  }) => {
    const i18n = useInternalI18n('[charts]')
    const containerRef = useRef(null)
    const segmentsRef = useRef([])
    const highlightedSeriesIndex = findSeriesIndex(series, highlightedSeries)
    const highlightInlineStart = () => {
      const currentIndex = highlightedSeriesIndex ?? 0
      const nextIndex =
        currentIndex - 1 >= 0 ? currentIndex - 1 : series.length - 1
      segmentsRef.current[nextIndex]?.focus()
    }
    const highlightInlineEnd = () => {
      const currentIndex = highlightedSeriesIndex ?? 0
      const nextIndex = currentIndex + 1 < series.length ? currentIndex + 1 : 0
      segmentsRef.current[nextIndex]?.focus()
    }
    const handleKeyPress = event => {
      if (event.keyCode === KeyCode.right || event.keyCode === KeyCode.left) {
        event.preventDefault()
        handleKey(event, {
          onInlineStart: () => highlightInlineStart(),
          onInlineEnd: () => highlightInlineEnd()
        })
      }
    }
    const handleSelection = index => {
      if (series[index].datum !== highlightedSeries) {
        onHighlightChange(series[index].datum)
      }
    }
    const handleBlur = event => {
      if (
        event.relatedTarget === null ||
        (containerRef.current &&
          !containerRef.current.contains(event.relatedTarget) &&
          !plotContainerRef?.current?.contains(event.relatedTarget))
      ) {
        onHighlightChange(null)
      }
    }
    const handleMouseOver = s => {
      if (s !== highlightedSeries) {
        onHighlightChange(s)
      }
    }
    const handleMouseLeave = () => {
      onHighlightChange(null)
    }
    return (
      <>
        <div
          ref={containerRef}
          role='toolbar'
          aria-label={
            legendTitle || i18n('i18nStrings.legendAriaLabel', ariaLabel)
          }
          className={styles.root}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}>
          {legendTitle && (
            <InternalBox fontWeight='bold' className={styles.title}>
              {legendTitle}
            </InternalBox>
          )}
          <div className={styles.list}>
            {series.map((s, index) => {
              const someHighlighted = highlightedSeries !== null
              const isHighlighted = highlightedSeries === s.datum
              const isDimmed = someHighlighted && !isHighlighted
              return (
                <div
                  role='button'
                  key={index}
                  aria-pressed={isHighlighted}
                  className={clsx(styles.marker, {
                    [styles['marker--dimmed']]: isDimmed,
                    [styles['marker--highlighted']]: isHighlighted
                  })}
                  ref={elem => {
                    if (elem) {
                      segmentsRef.current[index] = elem
                    } else {
                      delete segmentsRef.current[index]
                    }
                  }}
                  tabIndex={
                    index === highlightedSeriesIndex ||
                    (highlightedSeriesIndex === void 0 && index === 0)
                      ? 0
                      : -1
                  }
                  onFocus={() => handleSelection(index)}
                  onClick={() => handleSelection(index)}
                  onMouseOver={() => handleMouseOver(s.datum)}
                  onMouseLeave={handleMouseLeave}>
                  <SeriesMarker color={s.color} type={s.type} /> {s.label}
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
)

const findSeriesIndex = (series, targetSeries) => {
  for (let index = 0; index < series.length; index++) {
    if (series[index].datum === targetSeries) {
      return index
    }
  }
  return void 0
}

export {
  ChartLegend as default
}
