import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import RadioButton from '../radio-group/radio-button'
import styles from './styles.css.js'
import {fireNonCancelableEvent} from '../internal/events'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'

const Tile = memo(
  forwardRef(({item, selected, name, breakpoint, onChange}, forwardedRef) => {
    const internalRef = useRef(null)
    const isVisualRefresh = useVisualRefresh()
    const mergedRef = useMergeRefs(internalRef, forwardedRef)
    return (
      <div
        className={clsx(
          styles['tile-container'],
          {[styles['has-metadata']]: item.description || item.image},
          {[styles.selected]: selected},
          {[styles.disabled]: !!item.disabled},
          {[styles.refresh]: isVisualRefresh},
          styles[`breakpoint-${breakpoint}`]
        )}
        data-value={item.value}
        onClick={() => {
          if (item.disabled) {
            return
          }
          internalRef.current?.focus()
          if (!selected) {
            fireNonCancelableEvent(onChange, {value: item.value})
          }
        }}>
        <div
          className={clsx(styles.control, {
            [styles['no-image']]: !item.image
          })}>
          <RadioButton
            checked={selected}
            ref={mergedRef}
            name={name}
            value={item.value}
            label={item.label}
            description={item.description}
            disabled={item.disabled}
            controlId={item.controlId}
          />
        </div>
        {item.image && (
          <div
            className={clsx(styles.image, {
              [styles.disabled]: !!item.disabled
            })}>
            {item.image}
          </div>
        )}
      </div>
    )
  })
)

export {
  Tile
}
