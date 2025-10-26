import {forwardRef, memo} from 'react'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {createWidgetizedForwardRef} from '../internal/widgets'
import ClassicAppLayout from './classic'
import RefreshedAppLayout from './visual-refresh'

const AppLayoutImplementation = memo(
  forwardRef((props, ref) => {
    const isRefresh = useVisualRefresh()
    return isRefresh ? (
      <RefreshedAppLayout ref={ref} {...props} />
    ) : (
      <ClassicAppLayout ref={ref} {...props} />
    )
  })
)
const createWidgetizedAppLayout = createWidgetizedForwardRef(
  AppLayoutImplementation
)

export {
  AppLayoutImplementation,
  createWidgetizedAppLayout
}
