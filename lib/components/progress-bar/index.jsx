import {useEffect, useMemo, useState, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getBaseProps} from '../internal/base-component'
import {fireNonCancelableEvent} from '../internal/events'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {Progress, ResultState, SmallText} from './internal'
import {joinStrings} from '../internal/utils/strings'
import useBaseComponent from '../internal/hooks/use-base-component'
import {throttle} from '../internal/utils/throttle'
import LiveRegion from '../internal/components/live-region'

const ASSERTION_FREQUENCY = 5e3
const ProgressBar = memo(
  ({
    value = 0,
    status = 'in-progress',
    variant = 'standalone',
    resultButtonText,
    label,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    description,
    additionalInfo,
    resultText,
    onResultButtonClick,
    ...rest
  }) => {
    const {__internalRootRef} = useBaseComponent('ProgressBar', {
      props: {variant}
    })
    const baseProps = getBaseProps(rest)
    const generatedName = useUniqueId('awsui-progress-bar-')
    const labelId = `${generatedName}-label`
    const isInFlash = variant === 'flash'
    const isInProgressState = status === 'in-progress'
    const descriptionId = useUniqueId('progressbar-description-')
    const additionalInfoId = useUniqueId('progressbar-additional-info-')
    const [announcedValue, setAnnouncedValue] = useState('')
    const throttledAssertion = useMemo(() => {
      return throttle(value2 => {
        setAnnouncedValue(`${value2}%`)
      }, ASSERTION_FREQUENCY)
    }, [])
    useEffect(() => {
      throttledAssertion(value)
    }, [throttledAssertion, value])
    return (
      <div
        {...baseProps}
        className={clsx(
          baseProps.className,
          styles.root,
          variant && styles[variant]
        )}
        ref={__internalRootRef}>
        <div className={isInFlash ? styles['flash-container'] : void 0}>
          <div
            className={clsx(styles['word-wrap'], styles[`label-${variant}`])}
            id={labelId}>
            {label}
          </div>
          {description && (
            <SmallText
              color={isInFlash ? 'inherit' : void 0}
              id={descriptionId}>
              {description}
            </SmallText>
          )}
          <div>
            {isInProgressState ? (
              <>
                <Progress
                  value={value}
                  ariaLabel={ariaLabel}
                  ariaLabelledby={joinStrings(labelId, ariaLabelledby)}
                  ariaDescribedby={joinStrings(
                    description ? descriptionId : void 0,
                    additionalInfo ? additionalInfoId : void 0,
                    ariaDescribedby
                  )}
                  isInFlash={isInFlash}
                />
                <LiveRegion delay={0}>
                  {label}
                  {label ? ': ' : null}
                  {announcedValue}
                </LiveRegion>
              </>
            ) : (
              <ResultState
                resultText={resultText}
                isInFlash={isInFlash}
                resultButtonText={resultButtonText}
                status={status}
                onClick={() => {
                  fireNonCancelableEvent(onResultButtonClick)
                }}
              />
            )}
          </div>
        </div>
        {additionalInfo && (
          <SmallText
            className={styles['additional-info']}
            color={isInFlash ? 'inherit' : void 0}
            id={additionalInfoId}>
            {additionalInfo}
          </SmallText>
        )}
      </div>
    )
  }
)

export {
  ProgressBar as default
}
