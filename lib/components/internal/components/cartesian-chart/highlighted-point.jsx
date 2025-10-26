import {forwardRef, memo} from 'react'
import styles from './styles.css.js'

const HighlightedPoint = memo(
  forwardRef(
    ({point, role = 'group', ariaLabel, ariaHasPopup, ariaExpanded}, ref) => {
      if (!point) {
        return null
      }
      return (
        <g
          ref={ref}
          role={role}
          aria-label={ariaLabel}
          aria-haspopup={ariaHasPopup}
          aria-expanded={ariaExpanded}>
          <circle
            key={point.key}
            aria-hidden='true'
            className={styles['vertical-marker-circle-active']}
            cx={point.x}
            cy={point.y}
            r={4}
            stroke={point.color}
            fill={point.color}
          />
        </g>
      )
    }
  )
)

export {
  HighlightedPoint as default
}
