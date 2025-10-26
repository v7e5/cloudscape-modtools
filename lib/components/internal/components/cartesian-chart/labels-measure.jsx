import {memo, useEffect, Fragment} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {useContainerQuery} from '~/components/internal/toolkit'

const LabelsMeasure = memo(
  ({scale, ticks, tickFormatter, autoWidth, maxLabelsWidth}) => {
    const [width, ref] = useContainerQuery(rect => rect.contentBoxWidth)
    useEffect(() => {
      autoWidth(width || 0)
    }, [autoWidth, width])
    const labelMapper = value => {
      const scaledValue = scale.d3Scale(value)
      if (scaledValue === void 0 || !isFinite(scaledValue)) {
        return null
      }
      const formattedValue = tickFormatter
        ? tickFormatter(value)
        : value.toString()
      const lines = (formattedValue + '').split('\n')
      return (
        <Fragment key={`${value}`}>
          {lines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={styles['labels-inline-start__label']}
              aria-hidden='true'>
              {line}
            </div>
          ))}
        </Fragment>
      )
    }
    return (
      <div
        ref={ref}
        className={clsx(
          styles['labels-inline-start'],
          styles['labels-inline-start--hidden']
        )}
        style={{maxWidth: maxLabelsWidth}}>
        {ticks.map(labelMapper)}
      </div>
    )
  }
)

export {
  LabelsMeasure as default
}
