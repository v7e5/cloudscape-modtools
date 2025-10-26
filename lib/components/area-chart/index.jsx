import {memo} from 'react'
import InternalAreaChart from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const AreaChart = memo(
  ({
    height = 500,
    xScaleType = 'linear',
    yScaleType = 'linear',
    statusType = 'finished',
    detailPopoverSize = 'medium',
    i18nStrings = {},
    ...props
  }) => {
    const baseComponentProps = useBaseComponent('AreaChart', {
      props: {
        detailPopoverSize,
        hideLegend: props.hideLegend,
        hideFilter: props.hideFilter,
        fitHeight: props.fitHeight,
        xScaleType,
        yScaleType
      }
    })
    return (
      <InternalAreaChart
        height={height}
        xScaleType={xScaleType}
        yScaleType={yScaleType}
        statusType={statusType}
        detailPopoverSize={detailPopoverSize}
        i18nStrings={i18nStrings}
        {...props}
        {...baseComponentProps}
      />
    )
  }
)

export {
  AreaChart as default
}
