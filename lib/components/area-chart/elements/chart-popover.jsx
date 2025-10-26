import {memo} from 'react'
import ChartPopover from '../../internal/components/chart-popover'
import ChartSeriesDetails from '../../internal/components/chart-series-details'
import styles from '../styles.css.js'
import ChartPopoverFooter from '../../internal/components/chart-popover-footer'

const AreaChartPopover = memo(
  ({model, highlightDetails, dismissAriaLabel, footer, size, onBlur}) => {
    if (!highlightDetails) {
      return null
    }
    const popoverProps = {
      title: highlightDetails.formattedX,
      trackRef: model.refs.verticalMarker,
      trackKey: highlightDetails.highlightIndex,
      dismissButton: highlightDetails.isPopoverPinned,
      onDismiss: model.handlers.onPopoverDismiss,
      onMouseLeave: model.handlers.onPopoverLeave,
      ref: model.refs.popoverRef
    }
    return (
      <ChartPopover
        {...popoverProps}
        container={model.refs.container.current}
        dismissAriaLabel={dismissAriaLabel}
        size={size}
        onBlur={onBlur}>
        <ChartSeriesDetails details={highlightDetails.seriesDetails} />
        <div className={styles['popover-divider']} />
        <ChartSeriesDetails details={highlightDetails.totalDetails} />
        {footer && <ChartPopoverFooter>{footer}</ChartPopoverFooter>}
      </ChartPopover>
    )
  }
)

export {
  AreaChartPopover as default
}
