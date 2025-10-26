import {RuntimeContentWrapper} from '../internal/plugins/helpers'
import {sortByPriority} from '../internal/plugins/helpers/utils'
import {fireNonCancelableEvent} from '../internal/events'

const convertRuntimeDrawers = drawers => {
  const converted = drawers.map(
    ({mountContent, unmountContent, trigger, ...runtimeDrawer}) => ({
      ...runtimeDrawer,
      ariaLabels: {
        drawerName: runtimeDrawer.ariaLabels.content ?? '',
        ...runtimeDrawer.ariaLabels
      },
      trigger: {
        iconSvg: <span dangerouslySetInnerHTML={{__html: trigger.iconSvg}} />
      },
      content: (
        <RuntimeContentWrapper
          key={runtimeDrawer.id}
          mountContent={mountContent}
          unmountContent={unmountContent}
        />
      ),
      onResize: event => {
        fireNonCancelableEvent(runtimeDrawer.onResize, {
          size: event.detail.size,
          id: runtimeDrawer.id
        })
      }
    })
  )
  const sorted = sortByPriority(converted)
  return {
    before: sorted.filter(item => (item.orderPriority ?? 0) > 0),
    after: sorted.filter(item => (item.orderPriority ?? 0) <= 0)
  }
}

export {
  convertRuntimeDrawers
}
