import {memo} from 'react'
import styles from './styles.css.js'

const VerticalGridLines = memo(({ticks, scale, height}) => {
  return (
    <g aria-hidden='true'>
      {ticks.map(tick => {
        const x = scale.d3Scale(tick) ?? NaN
        return (
          isFinite(x) && (
            <line
              key={tick}
              className={styles.grid}
              x1={x}
              y1={0}
              x2={x}
              y2={height}
            />
          )
        )
      })}
    </g>
  )
})

export {
  VerticalGridLines as default
}
