import {memo} from 'react'
import clsx from 'clsx'
import {useNavigate} from '../router'
import Header from '../header'
import {SubmenuItem} from '../menu-item'
import {useUniqueId} from '../../../../internal/hooks/use-unique-id'
import FocusLock from '../../../../internal/components/focus-lock'
import styles from '../../../styles.css.js'
import {
  fireCancelableEvent,
  isPlainLeftClick
} from '../../../../internal/events'

const SubmenuView = memo(
  ({
    onClose,
    utilityIndex,
    headerText,
    headerSecondaryText,
    dismissIconAriaLabel,
    backIconAriaLabel,
    definition
  }) => {
    const navigate = useNavigate()
    const headerId = useUniqueId('overflow-menu-header')
    return (
      <FocusLock autoFocus={true}>
        <Header
          secondaryText={headerSecondaryText}
          dismissIconAriaLabel={dismissIconAriaLabel}
          backIconAriaLabel={backIconAriaLabel}
          onClose={onClose}
          onBack={() => navigate('utilities', {utilityIndex})}>
          <span id={headerId}>{headerText}</span>
        </Header>
        <ul
          className={clsx(
            styles['overflow-menu-list'],
            styles['overflow-menu-list-submenu']
          )}
          aria-labelledby={headerId}>
          {definition.items.map((item, index) => (
            <SubmenuItem
              key={index}
              {...item}
              onClick={(event, item2) => {
                if (item2.to && isPlainLeftClick(event)) {
                  fireCancelableEvent(
                    definition.onItemFollow,
                    {id: item2.id, to: item2.to, external: item2.external},
                    event
                  )
                }
                fireCancelableEvent(
                  definition.onItemClick,
                  {id: item2.id, to: item2.to, external: item2.external},
                  event
                )
                onClose?.()
              }}
            />
          ))}
        </ul>
      </FocusLock>
    )
  }
)

export {
  SubmenuView as default
}
