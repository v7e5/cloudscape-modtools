import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import useForwardFocus from '../internal/hooks/forward-focus'
import MaskedInput from '../internal/components/masked-input'
import styles from './styles.css.js'

const getMaskArgs = (format, use24Hour) => {
  const segments = [
    use24Hour ? {min: 0, max: 23, length: 2} : {min: 1, max: 12, length: 2},
    {min: 0, max: 59, length: 2},
    {min: 0, max: 59, length: 2}
  ]
  return {
    separator: ':',
    segments: segments.slice(0, format.split(':').length)
  }
}
const InternalTimeInput = memo(
  forwardRef(
    (
      {
        format = 'hh:mm:ss',
        use24Hour = true,
        autoComplete = true,
        __internalRootRef = null,
        ...props
      },
      ref
    ) => {
      const inputRef = useRef(null)
      useForwardFocus(ref, inputRef)
      const maskArgs = getMaskArgs(format, use24Hour)
      return (
        <MaskedInput
          {...props}
          __internalRootRef={__internalRootRef}
          ref={inputRef}
          className={clsx(styles.root, props.className)}
          autoComplete={autoComplete}
          disableBrowserAutocorrect={true}
          mask={maskArgs}
        />
      )
    }
  )
)

export {
  InternalTimeInput as default
}
