import {memo} from 'react'
import clsx from 'clsx'
import InternalBox from '../../../box/internal'
import styles from './styles.css.js'

const AxisLabel = memo(({title, axis, position}) => {
  if (!title) {
    return null
  }
  return (
    <InternalBox
      className={clsx(
        styles['axis-label'],
        axis === 'x' ? styles['axis-label--x'] : styles['axis-label--y']
      )}
      fontWeight='bold'
      textAlign={position === 'left' ? 'left' : 'center'}
      margin={{bottom: position === 'left' ? 'l' : 'n'}}>
      <span aria-hidden='true'>{title}</span>
    </InternalBox>
  )
})

export {
  AxisLabel as default
}
