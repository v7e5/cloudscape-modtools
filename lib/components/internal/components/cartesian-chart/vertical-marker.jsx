import {forwardRef, memo} from 'react'
import styles from './styles.css.js'

const VerticalMarker = memo(
  forwardRef(({height, showPoints = true, showLine = true, points}, ref) => {
    const [firstPoint] = points || []
    return (
      <g>
        <line
          ref={ref}
          aria-hidden='true'
          className={styles['vertical-marker']}
          style={{visibility: showLine && firstPoint ? 'visible' : 'hidden'}}
          x1={firstPoint?.x}
          x2={firstPoint?.x}
          y1={0}
          y2={height}
        />
        {showPoints &&
          points &&
          points.map(point => (
            <circle
              key={point.key}
              aria-hidden='true'
              className={styles['vertical-marker-circle']}
              cx={point.x}
              cy={point.y}
              r={4}
              stroke={point.color}
            />
          ))}
      </g>
    )
  })
)

export {
  VerticalMarker as default
}
