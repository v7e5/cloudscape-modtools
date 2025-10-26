import {useState, memo} from 'react'
import {
  addMonths,
  endOfDay,
  isAfter,
  isBefore,
  isSameMonth,
  startOfDay,
  startOfMonth
} from 'date-fns'
import styles from '../styles.css.js'
import SpaceBetween from '../../space-between/internal'
import CalendarHeader from './header'
import {Grids} from './grids'
import clsx from 'clsx'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import {getDateLabel, renderTimeLabel} from '../../calendar/utils/intl'
import LiveRegion from '../../internal/components/live-region'
import {
  normalizeLocale,
  normalizeStartOfWeek
} from '../../internal/utils/locale'
import {
  parseDate,
  splitDateTime,
  formatDateTime
} from '../../internal/utils/date-time'
import {getBaseDay} from '../../calendar/utils/navigation'
import {useMobile} from '../../internal/hooks/use-mobile/'
import RangeInputs from './range-inputs'
import {findDateToFocus, findMonthToDisplay} from './utils'
import {useInternalI18n} from '../../i18n/context'

const DateRangePickerCalendar = memo(
  ({
    value,
    setValue,
    locale = '',
    startOfWeek,
    isDateEnabled = () => true,
    i18nStrings,
    dateOnly = false,
    timeInputFormat = 'hh:mm:ss',
    customAbsoluteRangeControl
  }) => {
    const isSingleGrid = useMobile()
    const normalizedLocale = normalizeLocale('DateRangePicker', locale)
    const normalizedStartOfWeek = normalizeStartOfWeek(
      startOfWeek,
      normalizedLocale
    )
    const i18n = useInternalI18n('date-range-picker')
    const [announcement, setAnnouncement] = useState('')
    const [currentMonth, setCurrentMonth] = useState(() =>
      findMonthToDisplay(value, isSingleGrid)
    )
    const [focusedDate, setFocusedDate] = useState(() => {
      if (value.start.date) {
        const startDate = parseDate(value.start.date)
        if (isSameMonth(startDate, currentMonth)) {
          return startDate
        }
        if (
          !isSingleGrid &&
          isSameMonth(startDate, addMonths(currentMonth, -1))
        ) {
          return startDate
        }
      }
      return findDateToFocus(
        parseDate(value.start.date),
        currentMonth,
        isDateEnabled
      )
    })
    const updateCurrentMonth = startDate => {
      if (startDate.length >= 8) {
        const newCurrentMonth = startOfMonth(parseDate(startDate))
        setCurrentMonth(
          isSingleGrid ? newCurrentMonth : addMonths(newCurrentMonth, 1)
        )
      }
    }
    const announceStart = startDate => {
      return (
        i18n('i18nStrings.startDateLabel', i18nStrings?.startDateLabel) +
        ', ' +
        getDateLabel(normalizedLocale, startDate) +
        ', ' +
        i18n('i18nStrings.startTimeLabel', i18nStrings?.startTimeLabel) +
        ', ' +
        renderTimeLabel(normalizedLocale, startDate, timeInputFormat) +
        '. '
      )
    }
    const announceEnd = endDate => {
      return (
        i18n('i18nStrings.endDateLabel', i18nStrings?.endDateLabel) +
        ', ' +
        getDateLabel(normalizedLocale, endDate) +
        ', ' +
        i18n('i18nStrings.endTimeLabel', i18nStrings?.endTimeLabel) +
        ', ' +
        renderTimeLabel(normalizedLocale, endDate, timeInputFormat) +
        '. '
      )
    }
    const renderSelectedAbsoluteRangeAriaLive = i18n(
      'i18nStrings.renderSelectedAbsoluteRangeAriaLive',
      i18nStrings?.renderSelectedAbsoluteRangeAriaLive,
      format => (startDate, endDate) => format({startDate, endDate})
    )
    const announceRange = (startDate, endDate) => {
      if (!renderSelectedAbsoluteRangeAriaLive) {
        return `${getDateLabel(
          normalizedLocale,
          startDate
        )} \u2013 ${getDateLabel(normalizedLocale, endDate)}`
      }
      return renderSelectedAbsoluteRangeAriaLive(
        getDateLabel(normalizedLocale, startDate),
        getDateLabel(normalizedLocale, endDate)
      )
    }
    const onSelectDateHandler = selectedDate => {
      const {start, end} = value
      let newStart = void 0
      let newEnd = void 0
      let announcement2 = ''
      if (!start.date && !end.date) {
        newStart = startOfDay(selectedDate)
        announcement2 = announceStart(newStart)
      } else if (start.date && end.date) {
        newStart = startOfDay(selectedDate)
        newEnd = null
        announcement2 = announceStart(newStart)
      } else if (start.date && !end.date) {
        const parsedStartDate = parseDate(start.date)
        if (isBefore(selectedDate, parsedStartDate)) {
          newStart = startOfDay(selectedDate)
          newEnd = endOfDay(parsedStartDate)
          announcement2 =
            announceStart(newStart) + announceRange(newStart, newEnd)
        } else {
          newEnd = endOfDay(selectedDate)
          announcement2 =
            announceEnd(newEnd) + announceRange(parsedStartDate, newEnd)
        }
      } else if (!start.date && end.date) {
        const existingEndDate = parseDate(end.date)
        if (isAfter(selectedDate, existingEndDate)) {
          newStart = startOfDay(existingEndDate)
          newEnd = endOfDay(selectedDate)
          announcement2 = announceEnd(newEnd) + announceRange(newStart, newEnd)
        } else {
          newStart = startOfDay(selectedDate)
          announcement2 =
            announceStart(newStart) + announceRange(newStart, existingEndDate)
        }
      }
      const formatValue = (date, previous) => {
        if (date === null) {
          return {date: '', time: ''}
        } else if (date === void 0) {
          return previous
        }
        return splitDateTime(formatDateTime(date))
      }
      setValue({
        start: formatValue(newStart, value.start),
        end: formatValue(newEnd, value.end)
      })
      setAnnouncement(announcement2)
    }
    const onHeaderChangeMonthHandler = newCurrentMonth => {
      setCurrentMonth(newCurrentMonth)
      const newBaseDateMonth = isSingleGrid
        ? newCurrentMonth
        : addMonths(newCurrentMonth, -1)
      const newBaseDate = getBaseDay(newBaseDateMonth, isDateEnabled)
      setFocusedDate(newBaseDate)
    }
    const onChangeStartDate = value2 => {
      setValue(oldValue => ({
        ...oldValue,
        start: {...oldValue.start, date: value2}
      }))
      updateCurrentMonth(value2)
    }
    const interceptedSetValue = newValue => {
      setValue(oldValue => {
        const updated =
          typeof newValue === 'function' ? newValue(oldValue) : newValue
        updateCurrentMonth(updated.start.date)
        return updated
      })
    }
    const headingIdPrefix = useUniqueId('date-range-picker-calendar-heading')
    return (
      <>
        <div
          className={clsx(styles['calendar-container'], {
            [styles['one-grid']]: isSingleGrid
          })}>
          <SpaceBetween size='s'>
            <div
              className={clsx(styles.calendar, {
                [styles['one-grid']]: isSingleGrid
              })}>
              <CalendarHeader
                baseDate={currentMonth}
                locale={normalizedLocale}
                onChangeMonth={onHeaderChangeMonthHandler}
                previousMonthLabel={i18nStrings?.previousMonthAriaLabel}
                nextMonthLabel={i18nStrings?.nextMonthAriaLabel}
                isSingleGrid={isSingleGrid}
                headingIdPrefix={headingIdPrefix}
              />
              <Grids
                isSingleGrid={isSingleGrid}
                locale={normalizedLocale}
                baseDate={currentMonth}
                focusedDate={focusedDate}
                onFocusedDateChange={setFocusedDate}
                isDateEnabled={isDateEnabled}
                onSelectDate={onSelectDateHandler}
                onChangeMonth={setCurrentMonth}
                startOfWeek={normalizedStartOfWeek}
                todayAriaLabel={i18nStrings?.todayAriaLabel}
                selectedStartDate={parseDate(value.start.date, true)}
                selectedEndDate={parseDate(value.end.date, true)}
                headingIdPrefix={headingIdPrefix}
              />
            </div>
            <RangeInputs
              startDate={value.start.date}
              onChangeStartDate={onChangeStartDate}
              startTime={value.start.time}
              onChangeStartTime={value2 =>
                setValue(oldValue => ({
                  ...oldValue,
                  start: {...oldValue.start, time: value2}
                }))
              }
              endDate={value.end.date}
              onChangeEndDate={value2 =>
                setValue(oldValue => ({
                  ...oldValue,
                  end: {...oldValue.end, date: value2}
                }))
              }
              endTime={value.end.time}
              onChangeEndTime={value2 =>
                setValue(oldValue => ({
                  ...oldValue,
                  end: {...oldValue.end, time: value2}
                }))
              }
              i18nStrings={i18nStrings}
              dateOnly={dateOnly}
              timeInputFormat={timeInputFormat}
            />
            {customAbsoluteRangeControl && (
              <div>
                {customAbsoluteRangeControl(value, interceptedSetValue)}
              </div>
            )}
          </SpaceBetween>
        </div>
        <LiveRegion className={styles['calendar-aria-live']}>
          {announcement}
        </LiveRegion>
      </>
    )
  }
)

export {
  DateRangePickerCalendar as default
}
