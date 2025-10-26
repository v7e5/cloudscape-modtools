import {useRef, memo} from 'react'
import styles from '../styles.css.js'
import clsx from 'clsx'
import {useEffectOnUpdate} from '../../internal/hooks/use-effect-on-update'
import ScreenreaderOnly from '../../internal/components/screenreader-only/'

const Grid = memo(
  ({
    isDateEnabled,
    focusedDate,
    focusableDate,
    onSelectDate,
    selectedDate,
    ariaLabelledby,
    header,
    rows,
    isCurrentPage,
    renderDate,
    renderDateAnnouncement,
    isSameDate,
    onGridKeyDownHandler
  }) => {
    const focusedDateRef = useRef(null)
    useEffectOnUpdate(() => {
      if (focusedDate && focusedDateRef.current) {
        focusedDateRef.current.focus()
      }
    }, [focusedDate])
    const rowLength = rows[0].length
    const denseGrid = rowLength > 3
    return (
      <table
        role='grid'
        className={clsx(
          styles['calendar-grid'],
          denseGrid && styles['calendar-grid-dense']
        )}
        aria-labelledby={ariaLabelledby}>
        {header}
        <tbody onKeyDown={onGridKeyDownHandler}>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles['calendar-row']}>
              {row.map((date, dateIndex) => {
                const isFocusable =
                  !!focusableDate && isSameDate(date, focusableDate)
                const isSelected =
                  !!selectedDate && isSameDate(date, selectedDate)
                const isEnabled = !isDateEnabled || isDateEnabled(date)
                const isCurrentDate = isSameDate(date, new Date())
                let tabIndex = void 0
                if (isFocusable && isEnabled) {
                  tabIndex = 0
                } else if (isEnabled) {
                  tabIndex = -1
                }
                return (
                  <td
                    key={`${rowIndex}:${dateIndex}`}
                    ref={tabIndex === 0 ? focusedDateRef : void 0}
                    tabIndex={tabIndex}
                    aria-current={isCurrentDate ? 'date' : void 0}
                    aria-selected={isEnabled ? isSelected : void 0}
                    aria-disabled={!isEnabled}
                    onClick={isEnabled ? () => onSelectDate(date) : void 0}
                    className={clsx(
                      styles['calendar-grid-cell'],
                      styles['calendar-date'],
                      {
                        [styles['calendar-date-current-page']]:
                          isCurrentPage(date),
                        [styles['calendar-date-enabled']]: isEnabled,
                        [styles['calendar-date-selected']]: isSelected,
                        [styles['calendar-date-current']]: isCurrentDate,
                        [styles['calendar-date-dense']]: denseGrid
                      }
                    )}>
                    <span className={styles['date-inner']} aria-hidden='true'>
                      {renderDate(date)}
                    </span>
                    {}
                    <ScreenreaderOnly>
                      {renderDateAnnouncement(date, isCurrentDate)}
                    </ScreenreaderOnly>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
)

export {
  Grid as default
}
