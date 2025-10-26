import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalMultiselect from './internal'

const Multiselect = memo(
  forwardRef(
    (
      {
        options = [],
        filteringType = 'none',
        statusType = 'finished',
        selectedOptions = [],
        keepOpen = true,
        hideTokens = false,
        ...restProps
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Multiselect', {
        props: {
          autoFocus: restProps.autoFocus,
          expandToViewport: restProps.expandToViewport,
          filteringType,
          hideTokens,
          keepOpen,
          tokenLimit: restProps.tokenLimit,
          virtualScroll: restProps.virtualScroll
        }
      })
      const inlineTokens = Boolean(restProps.inlineTokens)
      return (
        <InternalMultiselect
          options={options}
          filteringType={filteringType}
          statusType={statusType}
          selectedOptions={selectedOptions}
          keepOpen={keepOpen}
          hideTokens={hideTokens}
          inlineTokens={inlineTokens}
          {...restProps}
          {...baseComponentProps}
          ref={ref}
        />
      )
    }
  )
)

export {
  Multiselect as default
}
