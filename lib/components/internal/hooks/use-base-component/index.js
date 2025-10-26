import {useComponentMetadata} from '../../toolkit/internal'
import {PACKAGE_VERSION} from '../../environment'
import useFocusVisible from '../focus-visible'

const useBaseComponent = (componentName, componentConfiguration) => {
  useFocusVisible()
  const elementRef = useComponentMetadata(
    componentName,
    PACKAGE_VERSION,
    componentConfiguration
  )
  return {__internalRootRef: elementRef}
}

export {
  useBaseComponent as default
}
