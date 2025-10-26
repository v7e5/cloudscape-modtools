import {memo} from 'react'
import {addMonths} from 'date-fns'
import {InternalButton} from '../../../button/internal'
import styles from '../../styles.css.js'

const PrevMonthButton = memo(({ariaLabel, baseDate, onChangeMonth}) => {
  return (
    <InternalButton
      iconName='angle-left'
      ariaLabel={ariaLabel}
      variant={'icon'}
      onClick={() => onChangeMonth(addMonths(baseDate, -1))}
      formAction='none'
      className={styles['calendar-prev-month-btn']}
    />
  )
})

const NextMonthButton = memo(({ariaLabel, baseDate, onChangeMonth}) => {
  return (
    <InternalButton
      iconName='angle-right'
      ariaLabel={ariaLabel}
      variant={'icon'}
      onClick={() => onChangeMonth(addMonths(baseDate, 1))}
      formAction='none'
      className={styles['calendar-next-month-btn']}
    />
  )
})

export {
  NextMonthButton,
  PrevMonthButton
}
