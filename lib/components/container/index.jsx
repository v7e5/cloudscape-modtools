import {memo} from 'react'
import {InternalContainerAsSubstep} from './internal'
import {getExternalProps} from '../internal/utils/external-props'
import useBaseComponent from '../internal/hooks/use-base-component'

const Container = memo(
  ({
    variant = 'default',
    disableHeaderPaddings = false,
    disableContentPaddings = false,
    fitHeight = false,
    ...props
  }) => {
    const baseComponentProps = useBaseComponent('Container', {
      props: {
        disableContentPaddings,
        disableHeaderPaddings,
        fitHeight,
        variant
      }
    })
    const externalProps = getExternalProps(props)
    return (
      <InternalContainerAsSubstep
        variant={variant}
        disableContentPaddings={disableContentPaddings}
        disableHeaderPaddings={disableHeaderPaddings}
        fitHeight={fitHeight}
        {...props}
        {...externalProps}
        {...baseComponentProps}
      />
    )
  }
)

export {
  Container as default
}
