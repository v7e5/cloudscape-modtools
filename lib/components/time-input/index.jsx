import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalTimeInput from './internal'

const TimeInput = memo(
  forwardRef(
    (
      {format = 'hh:mm:ss', use24Hour = true, autoComplete = true, ...props},
      ref
    ) => {
      const baseComponentProps = useBaseComponent('TimeInput', {
        props: {
          autoFocus: props.autoFocus,
          disableBrowserAutocorrect: props.disableBrowserAutocorrect,
          format,
          readOnly: props.readOnly,
          use24Hour
        }
      })
      return (
        <InternalTimeInput
          format={format}
          use24Hour={use24Hour}
          autoComplete={autoComplete}
          {...props}
          {...baseComponentProps}
          ref={ref}
        />
      )
    }
  )
)

export {
  TimeInput as default
}
