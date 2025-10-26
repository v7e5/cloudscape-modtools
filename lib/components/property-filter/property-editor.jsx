import {useState, memo} from 'react'
import styles from './styles.css.js'
import InternalButton from '../button/internal'
import InternalFormField from '../form-field/internal'

const PropertyEditor = memo(
  ({
    property,
    operator,
    filter,
    operatorForm,
    onCancel,
    onSubmit,
    i18nStrings
  }) => {
    const [value, onChange] = useState(null)
    const submitToken = () =>
      onSubmit({propertyKey: property.propertyKey, operator, value})
    return (
      <div className={styles['property-editor']}>
        <div className={styles['property-editor-form']}>
          <InternalFormField label={property.groupValuesLabel}>
            {operatorForm({value, onChange, operator, filter})}
          </InternalFormField>
        </div>
        <div className={styles['property-editor-actions']}>
          <InternalButton
            variant='link'
            className={styles['property-editor-cancel']}
            onClick={onCancel}>
            {i18nStrings.cancelActionText}
          </InternalButton>
          <InternalButton
            className={styles['property-editor-submit']}
            onClick={submitToken}>
            {i18nStrings.applyActionText}
          </InternalButton>
        </div>
      </div>
    )
  }
)

export {
  PropertyEditor
}
