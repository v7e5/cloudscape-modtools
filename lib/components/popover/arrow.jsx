import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'

const Arrow = memo(props => {
  const isVisualRefresh = useVisualRefresh()
  return (
    <div
      className={clsx(
        styles.arrow,
        props.position && styles[`arrow-position-${props.position}`]
      )}>
      <div className={styles['arrow-outer']} />
      <div
        className={clsx(
          styles['arrow-inner'],
          isVisualRefresh && styles.refresh
        )}
      />
    </div>
  )
})

export {
  Arrow as default
}
