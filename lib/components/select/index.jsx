import {forwardRef, memo} from 'react'
import InternalSelect from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'
import {getExternalProps} from '../internal/utils/external-props'

const Select = memo(
  forwardRef(
    (
      {
        options = [],
        filteringType = 'none',
        statusType = 'finished',
        triggerVariant = 'label',
        ...restProps
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Select', {
        props: {
          autoFocus: restProps.autoFocus,
          expandToViewport: restProps.expandToViewport,
          filteringType,
          triggerVariant,
          virtualScroll: restProps.virtualScroll
        }
      })
      const externalProps = getExternalProps(restProps)
      return (
        <InternalSelect
          options={options}
          filteringType={filteringType}
          statusType={statusType}
          triggerVariant={triggerVariant}
          {...externalProps}
          {...baseComponentProps}
          ref={ref}
        />
      )
    }
  )
)

export {
  Select as default
}
