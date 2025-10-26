import {memo} from 'react'
import {InternalButton} from '../../button/internal'
import styles from '../styles.css.js'

const HeaderPrevButton = memo(({ariaLabel, onChange}) => {
  return (
    <InternalButton
      iconName='angle-left'
      ariaLabel={ariaLabel}
      variant='icon'
      onClick={() => onChange(-1)}
      formAction='none'
      className={styles['calendar-prev-btn']}
    />
  )
})

const HeaderNextButton = memo(({ariaLabel, onChange}) => {
  return (
    <InternalButton
      iconName='angle-right'
      ariaLabel={ariaLabel}
      variant='icon'
      onClick={() => onChange(1)}
      formAction='none'
      className={styles['calendar-next-btn']}
    />
  )
})

export {
  HeaderNextButton,
  HeaderPrevButton
}
