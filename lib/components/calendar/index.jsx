import {memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalCalendar from './internal'

const Calendar = memo(
  ({
    locale = '',
    isDateEnabled = () => true,
    granularity = 'day',
    ...props
  }) => {
    const baseComponentProps = useBaseComponent('Calendar')
    return (
      <InternalCalendar
        {...props}
        {...baseComponentProps}
        locale={locale}
        isDateEnabled={isDateEnabled}
        granularity={granularity}
      />
    )
  }
)

export {
  Calendar as default
}
