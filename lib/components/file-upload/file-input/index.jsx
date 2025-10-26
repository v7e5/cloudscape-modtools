import {useEffect, useRef, useState, forwardRef, memo} from 'react'
import InternalButton from '../../button/internal'
import styles from './styles.css.js'
import {useFormFieldContext} from '../../contexts/form-field'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import {joinStrings} from '../../internal/utils/strings'
import ScreenreaderOnly from '../../internal/components/screenreader-only'
import useForwardFocus from '../../internal/hooks/forward-focus'
import clsx from 'clsx'

const FileInput = memo(
  forwardRef(
    (
      {
        accept,
        ariaRequired,
        multiple,
        value,
        onChange,
        children,
        ...restProps
      },
      ref
    ) => {
      const uploadInputRef = useRef(null)
      const uploadButtonLabelId = useUniqueId('upload-button-label')
      const formFieldContext = useFormFieldContext(restProps)
      const selfControlId = useUniqueId('upload-input')
      const controlId = formFieldContext.controlId ?? selfControlId
      useForwardFocus(ref, uploadInputRef)
      const [isFocused, setIsFocused] = useState(false)
      const onUploadButtonClick = () => uploadInputRef.current?.click()
      const onUploadInputFocus = () => setIsFocused(true)
      const onUploadInputBlur = () => setIsFocused(false)
      const onUploadInputChange = ({target}) => {
        onChange(target.files ? Array.from(target.files) : [])
      }
      const nativeAttributes = {
        'aria-labelledby': joinStrings(
          formFieldContext.ariaLabelledby,
          uploadButtonLabelId
        ),
        'aria-describedby': formFieldContext.ariaDescribedby
      }
      if (formFieldContext.invalid) {
        nativeAttributes['aria-invalid'] = true
      }
      if (ariaRequired) {
        nativeAttributes['aria-required'] = true
      }
      useEffect(() => {
        if (window.DataTransfer) {
          const dataTransfer = new DataTransfer()
          for (const file of value) {
            dataTransfer.items.add(file)
          }
          uploadInputRef.current.files = dataTransfer.files
        }
        if (uploadInputRef.current) {
          uploadInputRef.current.value = ''
        }
      }, [value])
      return (
        <div className={styles['file-input-container']}>
          {}
          {}
          <input
            id={controlId}
            ref={uploadInputRef}
            type='file'
            hidden={false}
            multiple={multiple}
            accept={accept}
            onChange={onUploadInputChange}
            onFocus={onUploadInputFocus}
            onBlur={onUploadInputBlur}
            className={styles['upload-input']}
            {...nativeAttributes}
          />
          {}
          {}
          <InternalButton
            iconName='upload'
            formAction='none'
            onClick={onUploadButtonClick}
            className={clsx(
              styles['upload-button'],
              isFocused && styles['force-focus-outline']
            )}
            __nativeAttributes={{tabIndex: -1, 'aria-hidden': true}}>
            {children}
          </InternalButton>
          {}
          <ScreenreaderOnly id={uploadButtonLabelId}>
            {children}
          </ScreenreaderOnly>
        </div>
      )
    }
  )
)

export {
  FileInput as default
}
