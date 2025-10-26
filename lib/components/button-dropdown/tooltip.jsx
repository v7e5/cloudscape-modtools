import {useRef, useState, memo} from 'react'
import Arrow from '../popover/arrow'
import PopoverContainer from '../popover/container'
import PopoverBody from '../popover/body'
import Portal from '../internal/components/portal'
import {usePortalModeClasses} from '../internal/hooks/use-portal-mode-classes'
import {useReducedMotion} from '~/components/internal/toolkit/internal'

const DEFAULT_OPEN_TIMEOUT_IN_MS = 120
const Tooltip = memo(({children, content, position = 'right'}) => {
  const ref = useRef(null)
  const isReducedMotion = useReducedMotion(ref)
  const {open, triggerProps} = useTooltipOpen(
    isReducedMotion ? 0 : DEFAULT_OPEN_TIMEOUT_IN_MS
  )
  const portalClasses = usePortalModeClasses(ref)
  return (
    <span ref={ref} {...triggerProps}>
      {children}
      {open && (
        <Portal>
          <span className={portalClasses}>
            <PopoverContainer
              size='small'
              fixedWidth={false}
              position={position}
              trackRef={ref}
              arrow={memo(position2 => <Arrow position={position2} />)}
              renderWithPortal={true}
              zIndex={7e3}>
              <PopoverBody
                dismissButton={false}
                dismissAriaLabel={void 0}
                header={null}
                onDismiss={() => {}}
                overflowVisible='both'>
                <span
                  data-testid='button-dropdown-disabled-reason'
                  role='tooltip'>
                  {content}
                </span>
              </PopoverBody>
            </PopoverContainer>
          </span>
        </Portal>
      )}
    </span>
  )
})

const useTooltipOpen = timeout => {
  const handle = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const close = () => {
    clearTimeout(handle.current)
    setIsOpen(false)
  }
  const open = () => setIsOpen(true)
  const openDelayed = () => {
    handle.current = setTimeout(open, timeout)
  }
  const onKeyDown = e => {
    if (isOpen && isEscape(e.key)) {
      e.preventDefault()
      e.stopPropagation()
      close()
    }
  }
  const onFocus = openDelayed
  const onBlur = close
  return {
    open: isOpen,
    triggerProps: {
      onBlur,
      onFocus,
      onKeyDown
    }
  }
}
const isEscape = key => key === 'Escape' || key === 'Esc'

export {
  Tooltip as default
}
