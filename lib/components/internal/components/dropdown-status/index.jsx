import {memo} from 'react'
import InternalLink from '../../../link/internal'
import InternalStatusIndicator from '../../../status-indicator/internal'
import {fireNonCancelableEvent} from '../../events'
import {usePrevious} from '../../hooks/use-previous'
import styles from './styles.css.js'

const DropdownStatus = memo(({children}) => {
  return <div className={styles.root}>{children}</div>
})

const useDropdownStatus = ({
  statusType,
  empty,
  loadingText,
  finishedText,
  filteringResultsText,
  errorText,
  recoveryText,
  isEmpty,
  isNoMatch,
  isFiltered,
  noMatch,
  onRecoveryClick,
  hasRecoveryCallback = false,
  errorIconAriaLabel
}) => {
  const previousStatusType = usePrevious(statusType)
  const statusResult = {isSticky: true, content: null}
  if (statusType === 'loading') {
    statusResult.content = (
      <InternalStatusIndicator type={'loading'}>
        {loadingText}
      </InternalStatusIndicator>
    )
  } else if (statusType === 'error') {
    statusResult.content = (
      <span>
        <InternalStatusIndicator
          type='error'
          __display='inline'
          __animate={previousStatusType !== 'error'}
          iconAriaLabel={errorIconAriaLabel}>
          {errorText}
        </InternalStatusIndicator>{' '}
        {!!recoveryText && hasRecoveryCallback && (
          <InternalLink
            onFollow={() => fireNonCancelableEvent(onRecoveryClick)}
            variant='recovery'
            className={styles.recovery}>
            {recoveryText}
          </InternalLink>
        )}
      </span>
    )
  } else if (isEmpty && empty) {
    statusResult.content = empty
  } else if (isNoMatch && noMatch) {
    statusResult.content = noMatch
  } else if (isFiltered && filteringResultsText) {
    statusResult.content = filteringResultsText
  } else if (statusType === 'finished' && finishedText) {
    statusResult.content = finishedText
    statusResult.isSticky = false
  }
  return statusResult
}

export {
  DropdownStatus as default,
  useDropdownStatus
}
