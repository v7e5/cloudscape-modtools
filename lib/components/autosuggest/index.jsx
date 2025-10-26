import {forwardRef, memo} from 'react'
import InternalAutosuggest from './internal'
import {getExternalProps} from '../internal/utils/external-props'
import useBaseComponent from '../internal/hooks/use-base-component'

const Autosuggest = memo(
  forwardRef(
    (
      {
        filteringType = 'auto',
        statusType = 'finished',
        disableBrowserAutocorrect = false,
        ...props
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Autosuggest', {
        props: {
          autoFocus: props.autoFocus,
          disableBrowserAutocorrect,
          expandToViewport: props.expandToViewport,
          filteringType,
          readOnly: props.readOnly,
          virtualScroll: props.virtualScroll
        }
      })
      const externalProps = getExternalProps(props)
      return (
        <InternalAutosuggest
          filteringType={filteringType}
          statusType={statusType}
          disableBrowserAutocorrect={disableBrowserAutocorrect}
          {...externalProps}
          {...baseComponentProps}
          ref={ref}
        />
      )
    }
  )
)

export {
  Autosuggest as default
}
