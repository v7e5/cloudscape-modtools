import {useEffect, useRef, useState, memo} from 'react'
import {
  addMonths,
  addYears,
  isSameDay,
  isSameMonth,
  isSameYear
} from 'date-fns'
import styles from './styles.css.js'
import CalendarHeader from './header'
import Grid from './grid'
import {normalizeLocale} from '../internal/utils/locale'
import {formatDate, parseDate} from '../internal/utils/date-time'
import {fireNonCancelableEvent} from '../internal/events/'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {getBaseDay, getBaseMonth} from './utils/navigation'
import {useDateCache} from '../internal/hooks/use-date-cache/'
import {useUniqueId} from '../internal/hooks/use-unique-id/'
import useCalendarLabels from './use-calendar-labels'
import useCalendarGridRows from './grid/use-calendar-grid-rows'
import useCalendarGridKeyboardNavigation from './grid/use-calendar-grid-keyboard-navigation'
import CalendarGridHeader from './grid/calendar-grid-header'

const Calendar = memo(
  ({
    value,
    locale = '',
    startOfWeek,
    isDateEnabled = () => true,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    onChange,
    __internalRootRef,
    i18nStrings,
    granularity = 'day',
    previousMonthAriaLabel,
    nextMonthAriaLabel,
    todayAriaLabel,
    ...rest
  }) => {
    const baseProps = getBaseProps(rest)
    const normalizedLocale = normalizeLocale('Calendar', locale)
    const gridWrapperRef = useRef(null)
    const [focusedDate, setFocusedDate] = useState(null)
    const valueDateCache = useDateCache()
    const focusedDateCache = useDateCache()
    const parsedValue = value && value.length >= 4 ? parseDate(value) : null
    const memoizedValue = parsedValue ? valueDateCache(parsedValue) : null
    const defaultDisplayedDate = memoizedValue ?? new Date()
    const [displayedDate, setDisplayedDate] = useState(defaultDisplayedDate)
    const headingId = useUniqueId('calendar-heading')
    const isMonthPicker = granularity === 'month'
    const baseDate = isMonthPicker
      ? getBaseMonth(displayedDate, isDateEnabled)
      : getBaseDay(displayedDate, isDateEnabled)
    const isSameDate = isMonthPicker ? isSameMonth : isSameDay
    const isSamePage = isMonthPicker ? isSameYear : isSameMonth
    const isCurrentPage = date => isMonthPicker || isSameMonth(date, baseDate)
    const {
      previousButtonLabel,
      nextButtonLabel,
      renderDate,
      renderDateAnnouncement,
      renderHeaderText
    } = useCalendarLabels({
      granularity,
      i18nStrings,
      locale: normalizedLocale,
      previousMonthAriaLabel,
      nextMonthAriaLabel,
      todayAriaLabel
    })
    const gridRows = useCalendarGridRows({
      baseDate,
      granularity,
      startOfWeek,
      locale: normalizedLocale
    })
    useEffect(() => {
      memoizedValue &&
        setDisplayedDate(prev =>
          prev.getTime() !== memoizedValue.getTime() ? memoizedValue : prev
        )
    }, [memoizedValue])
    const selectFocusedDate = (selected, baseDate2) => {
      if (
        selected &&
        isDateEnabled(selected) &&
        isSamePage(selected, baseDate2)
      ) {
        return selected
      }
      const today = new Date()
      if (isDateEnabled(today) && isSamePage(today, baseDate2)) {
        return today
      }
      if (isDateEnabled(baseDate2)) {
        return baseDate2
      }
      return null
    }
    const focusableDate =
      focusedDate || selectFocusedDate(memoizedValue, baseDate)
    const onHeaderChangePageHandler = amount => {
      const movePage = isMonthPicker ? addYears : addMonths
      const newDate = movePage(baseDate, amount)
      onChangePageHandler(newDate)
    }
    const onChangePageHandler = newDate => {
      setDisplayedDate(newDate)
      setFocusedDate(null)
    }
    const onGridFocusDateHandler = date => {
      if (date) {
        setFocusedDate(date ? focusedDateCache(date) : null)
      }
    }
    const onGridSelectDateHandler = date => {
      fireNonCancelableEvent(onChange, {value: formatDate(date, granularity)})
      setFocusedDate(null)
    }
    const onGridBlur = event => {
      const newFocusTargetIsInGrid =
        event.relatedTarget &&
        gridWrapperRef.current?.contains(event.relatedTarget)
      if (!newFocusTargetIsInGrid) {
        setFocusedDate(null)
      }
    }
    const onGridKeyDownHandler = useCalendarGridKeyboardNavigation({
      baseDate,
      focusableDate,
      granularity,
      isDateEnabled,
      onChangePage: onChangePageHandler,
      onFocusDate: onGridFocusDateHandler,
      onSelectDate: onGridSelectDateHandler
    })
    const headerText = renderHeaderText(baseDate)
    return (
      <div
        ref={__internalRootRef}
        {...baseProps}
        role='group'
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        className={clsx(styles.root, styles.calendar, baseProps.className)}>
        <div className={styles['calendar-inner']}>
          <CalendarHeader
            formattedDate={headerText}
            onChange={onHeaderChangePageHandler}
            previousLabel={previousButtonLabel}
            nextLabel={nextButtonLabel}
            headingId={headingId}
          />
          <div onBlur={onGridBlur} ref={gridWrapperRef}>
            <Grid
              isDateEnabled={isDateEnabled}
              focusedDate={focusedDate}
              focusableDate={focusableDate}
              onSelectDate={onGridSelectDateHandler}
              onFocusDate={onGridFocusDateHandler}
              onChangePage={onChangePageHandler}
              selectedDate={memoizedValue}
              ariaLabelledby={headingId}
              header={
                isMonthPicker ? null : (
                  <CalendarGridHeader
                    locale={normalizedLocale}
                    rows={gridRows}
                  />
                )
              }
              rows={gridRows}
              isCurrentPage={isCurrentPage}
              renderDate={renderDate}
              renderDateAnnouncement={renderDateAnnouncement}
              isSameDate={isSameDate}
              onGridKeyDownHandler={onGridKeyDownHandler}
            />
          </div>
        </div>
      </div>
    )
  }
)

export {
  Calendar as default
}
