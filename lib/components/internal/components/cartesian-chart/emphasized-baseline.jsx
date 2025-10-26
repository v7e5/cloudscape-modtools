import {memo} from 'react'
import clsx from 'clsx'
import {TICK_MARGIN, TICK_LENGTH} from './constants'
import styles from './styles.css.js'

const EmphasizedBaseline = memo(({axis = 'x', width, height, scale}) => {
  const baselineY = scale.d3Scale(0) ?? NaN
  const showYBaseline =
    axis === 'x' && isFinite(baselineY) && baselineY <= height
  if (showYBaseline) {
    return (
      <line
        className={clsx(styles.axis, styles['axis--emphasized'])}
        x1={-TICK_MARGIN}
        x2={width}
        y1={baselineY}
        y2={baselineY}
        aria-hidden='true'
      />
    )
  }
  if (axis === 'y') {
    return (
      <line
        className={clsx(styles.axis, styles['axis--emphasized'])}
        x1={0}
        y1={0}
        x2={0}
        y2={height + TICK_LENGTH}
        aria-hidden='true'
      />
    )
  }
  return null
})

export {
  EmphasizedBaseline as default
}
