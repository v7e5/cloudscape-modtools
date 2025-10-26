import {forwardRef, memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'

const CONTENT_MIN_HEIGHT_BOUNDARY = 40
const CartesianChartContainer = memo(
  forwardRef(
    (
      {
        minHeight,
        fitHeight,
        leftAxisLabel,
        leftAxisLabelMeasure,
        bottomAxisLabel,
        chartPlot,
        popover
      },
      ref
    ) => {
      if (fitHeight) {
        return (
          <div
            className={clsx(styles['chart-container'], styles['fit-height'])}
            ref={ref}>
            {leftAxisLabel}
            <div
              className={clsx(
                styles['chart-container-outer'],
                styles['fit-height']
              )}>
              {leftAxisLabelMeasure}
              <div className={styles['chart-container-inner']}>
                <div
                  className={clsx(
                    styles['chart-container-plot-wrapper'],
                    styles['fit-height']
                  )}
                  style={{
                    minHeight: Math.max(minHeight, CONTENT_MIN_HEIGHT_BOUNDARY)
                  }}>
                  <div
                    className={clsx(
                      styles['chart-container-plot'],
                      styles['fit-height']
                    )}>
                    {chartPlot}
                  </div>
                </div>
                <div
                  className={clsx(
                    styles['chart-container-bottom-labels'],
                    styles['fit-height']
                  )}>
                  {bottomAxisLabel}
                </div>
              </div>
              {popover}
            </div>
          </div>
        )
      }
      return (
        <div className={styles['chart-container']} ref={ref}>
          {leftAxisLabel}
          <div className={styles['chart-container-outer']}>
            {leftAxisLabelMeasure}
            <div className={styles['chart-container-inner']}>
              {chartPlot}
              {bottomAxisLabel}
            </div>
            {popover}
          </div>
        </div>
      )
    }
  )
)

export {
  CartesianChartContainer
}
