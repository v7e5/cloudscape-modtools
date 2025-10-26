import {
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  forwardRef,
  memo
} from 'react'
import Dropdown from '../dropdown'
import {useFormFieldContext} from '../../context/form-field-context'
import {getBaseProps} from '../../base-component'
import {fireCancelableEvent, fireNonCancelableEvent} from '../../events'
import InternalInput from '../../../input/internal'
import {KeyCode} from '../../keycode'
import styles from './styles.css.js'
import clsx from 'clsx'
import {nodeBelongs} from '../../utils/node-belongs'

const AutosuggestInput = memo(
  forwardRef(
    (
      {
        value,
        onChange,
        onBlur,
        onFocus,
        onKeyUp,
        onKeyDown,
        name,
        placeholder,
        disabled,
        readOnly,
        autoFocus,
        ariaLabel,
        ariaRequired,
        disableBrowserAutocorrect = false,
        expandToViewport,
        ariaControls,
        ariaActivedescendant,
        clearAriaLabel,
        dropdownExpanded = true,
        dropdownContentKey,
        dropdownContentFocusable = false,
        dropdownContent = null,
        dropdownFooter = null,
        dropdownWidth,
        loopFocus,
        onCloseDropdown,
        onDelayedInput,
        onPressArrowDown,
        onPressArrowUp,
        onPressEnter,
        __internalRootRef,
        ...restProps
      },
      ref
    ) => {
      const baseProps = getBaseProps(restProps)
      const formFieldContext = useFormFieldContext(restProps)
      const inputRef = useRef(null)
      const dropdownContentRef = useRef(null)
      const dropdownFooterRef = useRef(null)
      const preventOpenOnFocusRef = useRef(false)
      const preventCloseOnBlurRef = useRef(false)
      const [open, setOpen] = useState(false)
      const openDropdown = () => !readOnly && setOpen(true)
      const closeDropdown = () => {
        setOpen(false)
        fireNonCancelableEvent(onCloseDropdown, null)
      }
      useImperativeHandle(ref, () => ({
        focus(options) {
          if (options?.preventDropdown) {
            preventOpenOnFocusRef.current = true
          }
          inputRef.current?.focus()
        },
        select() {
          inputRef.current?.select()
        },
        open: openDropdown,
        close: closeDropdown
      }))
      const handleBlur = () => {
        if (!preventCloseOnBlurRef.current) {
          closeDropdown()
          fireNonCancelableEvent(onBlur, null)
        }
      }
      const handleFocus = () => {
        if (!preventOpenOnFocusRef.current) {
          openDropdown()
          fireNonCancelableEvent(onFocus, null)
        }
        preventOpenOnFocusRef.current = false
      }
      const fireKeydown = event =>
        fireCancelableEvent(onKeyDown, event.detail, event)
      const handleKeyDown = event => {
        switch (event.detail.keyCode) {
          case KeyCode.down: {
            onPressArrowDown?.()
            openDropdown()
            event.preventDefault()
            break
          }
          case KeyCode.up: {
            onPressArrowUp?.()
            openDropdown()
            event.preventDefault()
            break
          }
          case KeyCode.enter: {
            if (open) {
              if (!onPressEnter?.()) {
                closeDropdown()
              }
              event.preventDefault()
            }
            fireKeydown(event)
            break
          }
          case KeyCode.escape: {
            if (open) {
              event.stopPropagation()
              closeDropdown()
            } else if (value) {
              event.stopPropagation()
              fireNonCancelableEvent(onChange, {value: ''})
            }
            event.preventDefault()
            fireKeydown(event)
            break
          }
          default: {
            fireKeydown(event)
          }
        }
      }
      const handleChange = value2 => {
        openDropdown()
        fireNonCancelableEvent(onChange, {value: value2})
      }
      const handleDelayedInput = value2 => {
        fireNonCancelableEvent(onDelayedInput, {value: value2})
      }
      const handleDropdownMouseDown = event => {
        if (!dropdownContentFocusable) {
          event.preventDefault()
        } else {
          preventCloseOnBlurRef.current = true
          requestAnimationFrame(() => {
            preventCloseOnBlurRef.current = false
          })
        }
      }
      const expanded = open && dropdownExpanded
      const nativeAttributes = {
        name,
        placeholder,
        autoFocus,
        onClick: openDropdown,
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': expanded,
        'aria-controls': open ? ariaControls : void 0,

        'aria-owns': open ? ariaControls : void 0,
        'aria-label': ariaLabel,
        'aria-activedescendant': ariaActivedescendant
      }
      useEffect(() => {
        if (!open) {
          return
        }
        const clickListener = event => {
          if (
            !nodeBelongs(inputRef.current, event.target) &&
            !nodeBelongs(dropdownContentRef.current, event.target) &&
            !nodeBelongs(dropdownFooterRef.current, event.target)
          ) {
            closeDropdown()
          }
        }
        window.addEventListener('mousedown', clickListener)
        return () => {
          window.removeEventListener('mousedown', clickListener)
        }
      }, [open])
      return (
        <div
          {...baseProps}
          className={clsx(baseProps.className, styles.root)}
          ref={__internalRootRef}>
          <Dropdown
            minWidth={dropdownWidth}
            stretchWidth={!dropdownWidth}
            stretchBeyondTriggerWidth={true}
            contentKey={dropdownContentKey}
            onFocus={handleFocus}
            onBlur={handleBlur}
            trigger={
              <InternalInput
                type='visualSearch'
                value={value}
                onChange={event => handleChange(event.detail.value)}
                __onDelayedInput={event =>
                  handleDelayedInput(event.detail.value)
                }
                onKeyDown={handleKeyDown}
                onKeyUp={onKeyUp}
                disabled={disabled}
                disableBrowserAutocorrect={disableBrowserAutocorrect}
                readOnly={readOnly}
                ariaRequired={ariaRequired}
                clearAriaLabel={clearAriaLabel}
                ref={inputRef}
                autoComplete={false}
                __nativeAttributes={nativeAttributes}
                {...formFieldContext}
              />
            }
            onMouseDown={handleDropdownMouseDown}
            open={open && (!!dropdownContent || !!dropdownFooter)}
            footer={
              dropdownFooterRef && (
                <div
                  ref={dropdownFooterRef}
                  className={styles['dropdown-footer']}>
                  {dropdownFooter}
                </div>
              )
            }
            expandToViewport={expandToViewport}
            loopFocus={loopFocus}>
            {open && dropdownContent ? (
              <div
                ref={dropdownContentRef}
                className={styles['dropdown-content']}>
                {dropdownContent}
              </div>
            ) : null}
          </Dropdown>
        </div>
      )
    }
  )
)

export {
  AutosuggestInput as default
}
