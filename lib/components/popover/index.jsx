import {memo} from 'react'
import InternalPopover from './internal'
import {getExternalProps} from '../internal/utils/external-props'
import useBaseComponent from '../internal/hooks/use-base-component'

const Popover = memo(
  ({
    position = 'right',
    size = 'medium',
    fixedWidth = false,
    triggerType = 'text',
    dismissButton = true,
    renderWithPortal = false,
    wrapTriggerText = true,
    header,
    ...rest
  }) => {
    const baseComponentProps = useBaseComponent('Popover', {
      props: {
        dismissButton,
        fixedWidth,
        position,
        renderWithPortal,
        size,
        triggerType
      }
    })
    const externalProps = getExternalProps(rest)
    return (
      <InternalPopover
        header={header}
        position={position}
        size={size}
        fixedWidth={fixedWidth}
        triggerType={triggerType}
        dismissButton={dismissButton}
        renderWithPortal={renderWithPortal}
        wrapTriggerText={wrapTriggerText}
        {...externalProps}
        {...baseComponentProps}
      />
    )
  }
)

export {
  Popover as default
}
