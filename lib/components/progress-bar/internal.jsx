import {memo} from 'react'
import clsx from 'clsx'
import InternalBox from '../box/internal'
import {InternalButton} from '../button/internal'
import InternalStatusIndicator from '../status-indicator/internal'
import styles from './styles.css.js'

const MAX_VALUE = 100
const clamp = (value, lowerLimit, upperLimit) => {
  return Math.max(Math.min(value, upperLimit), lowerLimit)
}
const Progress = memo(
  ({value, isInFlash, ariaLabel, ariaLabelledby, ariaDescribedby}) => {
    const roundedValue = Math.round(value)
    const progressValue = clamp(roundedValue, 0, MAX_VALUE)
    return (
      <div className={styles['progress-container']}>
        <progress
          className={clsx(
            styles.progress,
            progressValue >= MAX_VALUE && styles.complete,
            isInFlash && styles['progress-in-flash']
          )}
          max={MAX_VALUE}
          value={progressValue}
          aria-label={ariaLabel}
          aria-labelledby={!ariaLabel ? ariaLabelledby : void 0}
          aria-describedby={ariaDescribedby}
        />
        <span aria-hidden='true' className={styles['percentage-container']}>
          <InternalBox
            className={styles.percentage}
            variant='small'
            color={
              isInFlash ? 'inherit' : void 0
            }>{`${progressValue}%`}</InternalBox>
        </span>
      </div>
    )
  }
)
const SmallText = memo(({color, children, className, id}) => {
  return (
    <InternalBox
      className={clsx(styles['word-wrap'], className)}
      variant='small'
      display='block'
      color={color}
      id={id}>
      {children}
    </InternalBox>
  )
})
const ResultButton = memo(({onClick, children}) => {
  return (
    <div className={styles['result-button']}>
      <InternalButton formAction='none' onClick={onClick}>
        {children}
      </InternalButton>
    </div>
  )
})
const ResultState = memo(
  ({isInFlash, resultText, resultButtonText, status, onClick}) => {
    const hasResultButton = !!resultButtonText
    if (isInFlash) {
      return (
        <div
          className={styles[`result-container-${status}`]}
          aria-live='polite'
          aria-atomic='true'>
          <span className={styles['result-text']}>{resultText}</span>
        </div>
      )
    }
    return (
      <div
        className={styles[`result-container-${status}`]}
        aria-live='polite'
        aria-atomic='true'>
        <span
          className={clsx(hasResultButton && styles['with-result-button'])}>
          <InternalStatusIndicator
            type={status === 'success' ? 'success' : 'error'}>
            <span className={styles['result-text']}>{resultText}</span>
          </InternalStatusIndicator>
        </span>
        {hasResultButton && (
          <ResultButton onClick={onClick}>{resultButtonText}</ResultButton>
        )}
      </div>
    )
  }
)

export {
  Progress,
  ResultState,
  SmallText
}
