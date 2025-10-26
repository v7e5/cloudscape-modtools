import {memo} from 'react'
import styles from '../styles.css.js'
import {HeaderPrevButton, HeaderNextButton} from './header-button'

const CalendarHeader = memo(
  ({formattedDate, onChange, previousLabel, nextLabel, headingId}) => {
    return (
      <div className={styles['calendar-header']}>
        <HeaderPrevButton ariaLabel={previousLabel} onChange={onChange} />
        <h2 className={styles['calendar-header-title']} id={headingId}>
          {formattedDate}
        </h2>
        <HeaderNextButton ariaLabel={nextLabel} onChange={onChange} />
      </div>
    )
  }
)

export {
  CalendarHeader as default
}
