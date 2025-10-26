import {useState, useEffect, forwardRef, useRef, memo} from 'react'
import {useMergeRefs} from '../../hooks/use-merge-refs'
import {getBaseProps} from '../../base-component'
import {fireCancelableEvent, fireNonCancelableEvent} from '../../events'
import {useFormFieldContext} from '../../context/form-field-context'
import InternalInput from '../../../input/internal'
import useMask from './use-mask'
import MaskFormat from './utils/mask-format'

const MaskedInput = memo(
  forwardRef(
    (
      {
        value,
        onBlur,
        onChange,
        onKeyDown,
        mask,
        autofix = false,
        disableAutocompleteOnBlur = false,
        ...rest
      },
      ref
    ) => {
      const baseProps = getBaseProps(rest)
      const formFieldContext = useFormFieldContext(rest)
      const inputRef = useRef(null)
      const [cursorPosition, setCursorPosition] = useState(null)
      useEffect(() => {
        if (cursorPosition !== null) {
          inputRef.current?.setSelectionRange(cursorPosition, cursorPosition)
        }
      }, [cursorPosition, inputRef])
      const {onPaste, ...maskProps} = useMask({
        format: new MaskFormat(mask),
        value,
        inputRef,
        autofix,
        disableAutocompleteOnBlur,
        onChange: value2 =>
          !rest.readOnly && fireNonCancelableEvent(onChange, {value: value2}),
        onKeyDown: event =>
          !rest.readOnly &&
          onKeyDown &&
          fireCancelableEvent(onKeyDown, event.detail, event),
        onBlur: () => fireNonCancelableEvent(onBlur),
        setPosition: setCursorPosition
      })
      const inputProps = {
        ...rest,
        ...baseProps,
        ...formFieldContext,
        ...maskProps
      }
      const mergedRef = useMergeRefs(ref, inputRef)
      return (
        <InternalInput
          {...inputProps}
          ref={mergedRef}
          __nativeAttributes={{
            onPaste
          }}
        />
      )
    }
  )
)

export {
  MaskedInput as default,
  useMask
}
