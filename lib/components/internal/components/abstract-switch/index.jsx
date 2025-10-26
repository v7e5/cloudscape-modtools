import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {useUniqueId} from '../../hooks/use-unique-id'

const joinString = values => {
  return values.filter(value => !!value).join(' ')
}
const AbstractSwitch = memo(
  ({
    controlId,
    controlClassName,
    outlineClassName,
    showOutline,
    disabled,
    nativeControl,
    styledControl,
    label,
    description,
    descriptionBottomPadding,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    ariaControls,
    onClick,
    __internalRootRef,
    ...rest
  }) => {
    const uniqueId = useUniqueId()
    const id = controlId || uniqueId
    const labelId = `${id}-label`
    const descriptionId = `${id}-description`
    const ariaLabelledByIds = []
    if (label && !ariaLabel) {
      ariaLabelledByIds.push(labelId)
    }
    if (ariaLabelledby) {
      ariaLabelledByIds.push(ariaLabelledby)
    }
    const ariaDescriptions = []
    if (ariaDescribedby) {
      ariaDescriptions.push(ariaDescribedby)
    }
    if (description) {
      ariaDescriptions.push(descriptionId)
    }
    return (
      <span
        {...rest}
        className={clsx(styles.wrapper, rest.className)}
        ref={__internalRootRef}>
        <span
          className={styles['label-wrapper']}
          aria-disabled={disabled ? 'true' : void 0}
          onClick={disabled ? void 0 : onClick}>
          <span className={clsx(styles.control, controlClassName)}>
            {styledControl}
            {nativeControl({
              id,
              disabled,
              className: styles['native-input'],
              'aria-describedby': ariaDescriptions.length
                ? joinString(ariaDescriptions)
                : void 0,
              'aria-labelledby': ariaLabelledByIds.length
                ? joinString(ariaLabelledByIds)
                : void 0,
              'aria-label': ariaLabel,
              'aria-controls': ariaControls
            })}
            <span
              className={clsx(
                styles.outline,
                outlineClassName,
                showOutline && styles['show-outline']
              )}
            />
          </span>
          <span
            className={clsx(
              styles.content,
              !label && !description && styles['empty-content']
            )}>
            {label && (
              <span
                id={labelId}
                className={clsx(styles.label, {
                  [styles['label-disabled']]: disabled
                })}>
                {label}
              </span>
            )}
            {description && (
              <span
                id={descriptionId}
                className={clsx(styles.description, {
                  [styles['description-disabled']]: disabled,
                  [styles['description-bottom-padding']]:
                    descriptionBottomPadding
                })}>
                {description}
              </span>
            )}
          </span>
        </span>
      </span>
    )
  }
)

export {
  AbstractSwitch as default
}
