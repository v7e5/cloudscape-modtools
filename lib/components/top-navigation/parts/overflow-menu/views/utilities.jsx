import {useEffect, useRef, memo} from 'react'
import FocusLock from '../../../../internal/components/focus-lock'
import Header from '../header'
import {UtilityMenuItem} from '../menu-item'
import styles from '../../../styles.css.js'
import {useUniqueId} from '../../../../internal/hooks/use-unique-id'

const UtilitiesView = memo(
  ({headerText, dismissIconAriaLabel, onClose, items = [], focusIndex}) => {
    const headerId = useUniqueId('overflow-menu-header')
    const ref = useRef(null)
    useEffect(() => {
      if (typeof focusIndex === 'number') {
        ref.current?.focus()
      }
    }, [focusIndex])
    return (
      <FocusLock autoFocus={true}>
        <Header dismissIconAriaLabel={dismissIconAriaLabel} onClose={onClose}>
          <span id={headerId}>{headerText}</span>
        </Header>
        <ul
          className={styles['overflow-menu-list']}
          aria-labelledby={headerId}>
          {items.map((utility, index) => (
            <UtilityMenuItem
              key={index}
              index={index}
              ref={index === focusIndex ? ref : void 0}
              onClose={onClose}
              {...utility}
            />
          ))}
        </ul>
      </FocusLock>
    )
  }
)

export {
  UtilitiesView as default
}
