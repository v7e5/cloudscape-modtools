import {memo} from 'react'
import {add} from 'date-fns'
import styles from '../../styles.css.js'
import {renderMonthAndYear} from '../../../calendar/utils/intl'
import {PrevMonthButton, NextMonthButton} from './header-button'
import LiveRegion from '../../../internal/components/live-region'
import {useInternalI18n} from '../../../i18n/context'

const CalendarHeader = memo(
  ({
    baseDate,
    locale,
    onChangeMonth,
    previousMonthLabel,
    nextMonthLabel,
    isSingleGrid,
    headingIdPrefix
  }) => {
    const i18n = useInternalI18n('calendar')
    const prevMonthLabel = renderMonthAndYear(
      locale,
      add(baseDate, {months: -1})
    )
    const currentMonthLabel = renderMonthAndYear(locale, baseDate)
    return (
      <>
        <div className={styles['calendar-header']}>
          <PrevMonthButton
            ariaLabel={i18n('previousMonthAriaLabel', previousMonthLabel)}
            baseDate={baseDate}
            onChangeMonth={onChangeMonth}
          />
          <h2 className={styles['calendar-header-months-wrapper']}>
            {!isSingleGrid && (
              <span
                className={styles['calendar-header-month']}
                id={`${headingIdPrefix}-prevmonth`}>
                {prevMonthLabel}
              </span>
            )}
            <span
              className={styles['calendar-header-month']}
              id={`${headingIdPrefix}-currentmonth`}>
              {currentMonthLabel}
            </span>
          </h2>
          <NextMonthButton
            ariaLabel={i18n('nextMonthAriaLabel', nextMonthLabel)}
            baseDate={baseDate}
            onChangeMonth={onChangeMonth}
          />
        </div>
        <LiveRegion>
          {isSingleGrid
            ? currentMonthLabel
            : `${prevMonthLabel}, ${currentMonthLabel}`}
        </LiveRegion>
      </>
    )
  }
)

export {
  CalendarHeader as default
}
