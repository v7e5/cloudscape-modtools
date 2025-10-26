import {useMemo, memo} from 'react'
import {fireNonCancelableEvent} from '../../events'
import InternalStatusIndicator from '../../../status-indicator/internal'
import InternalLink from '../../../link/internal'
import styles from './styles.css.js'
import {useInternalI18n} from '../../../i18n/context'

const getChartStatus = ({externalData, visibleData, statusType}) => {
  const isEmpty = !visibleData || visibleData.length === 0
  const isNoMatch = isEmpty && visibleData.length !== externalData.length
  const showChart = statusType === 'finished' && !isEmpty
  return {isEmpty, isNoMatch, showChart}
}
const ChartStatusContainer = memo(
  ({
    statusType,
    errorText,
    loadingText,
    recoveryText,
    noMatch,
    empty,
    onRecoveryClick,
    isNoMatch,
    isEmpty,
    showChart
  }) => {
    const i18n = useInternalI18n('[charts]')
    const statusContainer = useMemo(() => {
      const handleRecoveryClick = event => {
        event.preventDefault()
        fireNonCancelableEvent(onRecoveryClick)
      }
      if (statusType === 'error') {
        const renderedRecoveryText = i18n('recoveryText', recoveryText)
        return (
          <span>
            <InternalStatusIndicator type='error'>
              {i18n('errorText', errorText)}
            </InternalStatusIndicator>{' '}
            {!!renderedRecoveryText && !!onRecoveryClick && (
              <InternalLink onFollow={handleRecoveryClick} variant='recovery'>
                {renderedRecoveryText}
              </InternalLink>
            )}
          </span>
        )
      }
      if (statusType === 'loading') {
        return (
          <InternalStatusIndicator type='loading'>
            {i18n('loadingText', loadingText)}
          </InternalStatusIndicator>
        )
      }
      if (isNoMatch) {
        return <div className={styles.empty}>{noMatch}</div>
      }
      if (isEmpty) {
        return <div className={styles.empty}>{empty}</div>
      }
    }, [
      i18n,
      statusType,
      onRecoveryClick,
      isEmpty,
      isNoMatch,
      recoveryText,
      loadingText,
      errorText,
      empty,
      noMatch
    ])
    return (
      <div className={styles.root} aria-live='polite' aria-atomic='true'>
        {!showChart && statusContainer}
      </div>
    )
  }
)

export {
  ChartStatusContainer as default,
  getChartStatus
}
