import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'

const ChartSeriesMarker = memo(({type = 'line', color}) => {
  return (
    <span
      className={clsx(styles.marker, styles[`marker--${type}`])}
      style={{backgroundColor: color}}
      aria-hidden='true'
    />
  )
})

export {
  ChartSeriesMarker as default
}
