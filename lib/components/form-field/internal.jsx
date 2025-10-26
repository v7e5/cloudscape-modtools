import {useRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {
  FormFieldContext,
  useFormFieldContext
} from '../internal/context/form-field-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import InternalGrid from '../grid/internal'
import InternalIcon from '../icon/internal'
import {getAriaDescribedBy, getGridDefinition, getSlotIds} from './util'
import styles from './styles.css.js'
import {joinStrings} from '../internal/utils/strings'
import {useInternalI18n} from '../i18n/context'
import {InfoLinkLabelContext} from '../internal/context/info-link-label-context'
import LiveRegion from '../internal/components/live-region'

const FormFieldError = memo(({id, children, errorIconAriaLabel}) => {
  const i18n = useInternalI18n('form-field')
  const contentRef = useRef(null)
  const i18nErrorIconAriaLabel = i18n(
    'i18nStrings.errorIconAriaLabel',
    errorIconAriaLabel
  )
  return (
    <>
      <div id={id} className={styles.error}>
        <div className={styles['error-icon-shake-wrapper']}>
          <div
            role='img'
            aria-label={i18nErrorIconAriaLabel}
            className={styles['error-icon-scale-wrapper']}>
            <InternalIcon name='status-negative' size='small' />
          </div>
        </div>
        <span className={styles.error__message} ref={contentRef}>
          {children}
        </span>
      </div>
      <LiveRegion
        assertive={true}
        source={[i18nErrorIconAriaLabel, contentRef]}
      />
    </>
  )
})

const FormFieldWarning = memo(({id, children, warningIconAriaLabel}) => {
  const i18n = useInternalI18n('form-field')
  const contentRef = useRef(null)
  const i18nWarningIconAriaLabel = i18n(
    'i18nStrings.warningIconAriaLabel',
    warningIconAriaLabel
  )
  return (
    <>
      <div id={id} className={styles.warning}>
        <div className={styles['warning-icon-shake-wrapper']}>
          <div
            role='img'
            aria-label={i18nWarningIconAriaLabel}
            className={styles['warning-icon-scale-wrapper']}>
            <InternalIcon name='status-warning' size='small' />
          </div>
        </div>
        <span className={styles.warning__message} ref={contentRef}>
          {children}
        </span>
      </div>
      <LiveRegion
        assertive={true}
        source={[i18nWarningIconAriaLabel, contentRef]}
      />
    </>
  )
})

const ConstraintText = memo(({id, hasValidationText, children}) => {
  return (
    <div
      id={id}
      className={clsx(
        styles.constraint,
        hasValidationText && styles['constraint-has-validation-text']
      )}>
      {children}
    </div>
  )
})

const InternalFormField = memo(
  ({
    controlId,
    stretch = false,
    label,
    info,
    i18nStrings,
    children,
    secondaryControl,
    description,
    constraintText,
    errorText,
    warningText,
    __hideLabel,
    __internalRootRef = null,
    __disableGutters = false,
    ...rest
  }) => {
    const baseProps = getBaseProps(rest)
    const isRefresh = useVisualRefresh()
    const instanceUniqueId = useUniqueId('formField')
    const generatedControlId = controlId || instanceUniqueId
    const formFieldId = controlId || generatedControlId
    const showWarning = warningText && !errorText
    const slotIds = getSlotIds(
      formFieldId,
      label,
      description,
      constraintText,
      errorText,
      showWarning ? warningText : void 0
    )
    const ariaDescribedBy = getAriaDescribedBy(slotIds)
    const gridDefinition = getGridDefinition(
      stretch,
      !!secondaryControl,
      isRefresh
    )
    const {
      ariaLabelledby: parentAriaLabelledby,
      ariaDescribedby: parentAriaDescribedby,
      invalid: parentInvalid,
      warning: parentWarning
    } = useFormFieldContext({})
    const contextValuesWithoutControlId = {
      ariaLabelledby:
        joinStrings(parentAriaLabelledby, slotIds.label) || void 0,
      ariaDescribedby:
        joinStrings(parentAriaDescribedby, ariaDescribedBy) || void 0,
      invalid: !!errorText || !!parentInvalid,
      warning:
        (!!warningText && !errorText) || (!!parentWarning && !parentInvalid)
    }
    return (
      <div
        {...baseProps}
        className={clsx(baseProps.className, styles.root)}
        ref={__internalRootRef}>
        <div
          className={clsx(
            styles['label-wrapper'],
            __hideLabel && styles['visually-hidden']
          )}>
          {label && (
            <label
              className={styles.label}
              id={slotIds.label}
              htmlFor={generatedControlId}>
              {label}
            </label>
          )}
          <InfoLinkLabelContext.Provider value={slotIds.label}>
            {!__hideLabel && info && (
              <span className={styles.info}>{info}</span>
            )}
          </InfoLinkLabelContext.Provider>
        </div>
        {description && (
          <div className={styles.description} id={slotIds.description}>
            {description}
          </div>
        )}
        <div
          className={clsx(
            styles.controls,
            __hideLabel && styles['label-hidden']
          )}>
          <InternalGrid
            gridDefinition={gridDefinition}
            disableGutters={__disableGutters}>
            <FormFieldContext.Provider
              value={{
                controlId: generatedControlId,
                ...contextValuesWithoutControlId
              }}>
              {children && <div className={styles.control}>{children}</div>}
            </FormFieldContext.Provider>
            {secondaryControl && (
              <FormFieldContext.Provider value={contextValuesWithoutControlId}>
                <div className={styles['secondary-control']}>
                  {secondaryControl}
                </div>
              </FormFieldContext.Provider>
            )}
          </InternalGrid>
        </div>
        {(constraintText || errorText || warningText) && (
          <div className={styles.hints}>
            {errorText && (
              <FormFieldError
                id={slotIds.error}
                errorIconAriaLabel={i18nStrings?.errorIconAriaLabel}>
                {errorText}
              </FormFieldError>
            )}
            {showWarning && (
              <FormFieldWarning
                id={slotIds.warning}
                warningIconAriaLabel={i18nStrings?.warningIconAriaLabel}>
                {warningText}
              </FormFieldWarning>
            )}
            {constraintText && (
              <ConstraintText
                id={slotIds.constraint}
                hasValidationText={!!errorText || !!warningText}>
                {constraintText}
              </ConstraintText>
            )}
          </div>
        )}
      </div>
    )
  }
)

export {
  ConstraintText,
  FormFieldError,
  FormFieldWarning,
  InternalFormField as default
}
