import {memo} from 'react'
import {getBaseProps} from '../internal/base-component'
import InternalGrid from './internal'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import useBaseComponent from '../internal/hooks/use-base-component'

const Grid = memo(
  ({gridDefinition = [], disableGutters = false, children, ...restProps}) => {
    const baseComponentProps = useBaseComponent('Grid', {
      props: {disableGutters}
    })
    const baseProps = getBaseProps(restProps)
    const [breakpoint, ref] = useContainerBreakpoints(void 0)
    return (
      <InternalGrid
        {...baseProps}
        {...baseComponentProps}
        ref={ref}
        __breakpoint={breakpoint}
        gridDefinition={gridDefinition}
        disableGutters={disableGutters}>
        {children}
      </InternalGrid>
    )
  }
)

export {
  Grid as default
}
