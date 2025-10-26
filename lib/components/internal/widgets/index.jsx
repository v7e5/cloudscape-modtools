import {forwardRef} from 'react'
import {getGlobalFlag} from '../utils/global-flags'
import {useVisualRefresh} from '../hooks/use-visual-mode'

const createWidgetizedComponent = Implementation => {
  return Loader => {
    return props => {
      const isRefresh = useVisualRefresh()
      if (isRefresh && getGlobalFlag('appLayoutWidget') && Loader) {
        return <Loader {...props} />
      }
      return <Implementation {...props} />
    }
  }
}
const createWidgetizedForwardRef = Implementation => {
  return Loader => {
    return forwardRef((props, ref) => {
      const isRefresh = useVisualRefresh()
      if (isRefresh && getGlobalFlag('appLayoutWidget') && Loader) {
        return <Loader ref={ref} {...props} />
      }
      return <Implementation ref={ref} {...props} />
    })
  }
}

export {
  createWidgetizedComponent,
  createWidgetizedForwardRef
}
