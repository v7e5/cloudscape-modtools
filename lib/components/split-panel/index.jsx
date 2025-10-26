import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import {SplitPanelInternal} from './internal'

const SplitPanel = memo(
  ({
    hidePreferencesButton = false,
    closeBehavior = 'collapse',
    ...restProps
  }) => {
    const {__internalRootRef} = useBaseComponent('SplitPanel', {
      props: {closeBehavior, hidePreferencesButton}
    })
    return (
      <SplitPanelInternal
        {...restProps}
        ref={__internalRootRef}
        hidePreferencesButton={hidePreferencesButton}
        closeBehavior={closeBehavior}
      />
    )
  }
)

export {
  SplitPanel as default
}
