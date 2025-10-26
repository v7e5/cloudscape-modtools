import {memo} from 'react'
import InternalButtonDropdown from '../../button-dropdown/internal'
import testutilStyles from '../test-classes/styles.css.js'

const OverflowMenu = memo(
  ({items, onItemClick, customTriggerBuilder, ariaLabel}) => {
    return (
      <InternalButtonDropdown
        items={items.map(item => ({
          id: item.id,
          text: item.ariaLabels.drawerName,
          iconName: item.trigger.iconName,
          iconSvg: item.trigger.iconSvg,
          badge: item.badge
        }))}
        className={testutilStyles['overflow-menu']}
        onItemClick={onItemClick}
        ariaLabel={ariaLabel}
        variant='icon'
        customTriggerBuilder={customTriggerBuilder}
        expandToViewport={true}
      />
    )
  }
)

export {
  OverflowMenu as default
}
