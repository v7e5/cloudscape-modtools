import {useEffect, useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {nodeContains} from '~/components/internal/toolkit/dom'
import {getBaseProps} from '../../base-component'
import PopoverContainer from '../../../popover/container'
import PopoverBody from '../../../popover/body'
import popoverStyles from '../../../popover/styles.css.js'
import {useMergeRefs} from '../../hooks/use-merge-refs'
import styles from './styles.css.js'
import {nodeBelongs} from '../../utils/node-belongs'

const ChartPopover = memo(
  memo(
    forwardRef(
      (
        {
          position = 'right',
          size = 'medium',
          fixedWidth = false,
          dismissButton = false,
          dismissAriaLabel,
          children,
          title,
          trackRef,
          trackKey,
          onDismiss,
          container,
          onMouseEnter,
          onMouseLeave,
          onBlur,
          ...restProps
        },
        ref
      ) => {
        const baseProps = getBaseProps(restProps)
        const popoverObjectRef = useRef(null)
        const popoverRef = useMergeRefs(popoverObjectRef, ref)
        useEffect(() => {
          const onDocumentClick = event => {
            if (
              event.target &&
              !nodeBelongs(popoverObjectRef.current, event.target) &&
              !nodeContains(container, event.target)
            ) {
              onDismiss(true)
            }
          }
          document.addEventListener('mousedown', onDocumentClick, {
            capture: true
          })
          return () => {
            document.removeEventListener('mousedown', onDocumentClick, {
              capture: true
            })
          }
        }, [container, onDismiss])
        const isPinned = dismissButton
        return (
          <div
            {...baseProps}
            className={clsx(
              popoverStyles.root,
              styles.root,
              baseProps.className
            )}
            ref={popoverRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onBlur={onBlur}
            tabIndex={-1}>
            <PopoverContainer
              size={size}
              fixedWidth={fixedWidth}
              position={position}
              trackRef={trackRef}
              trackKey={trackKey}
              arrow={position2 => (
                <div
                  className={clsx(
                    popoverStyles.arrow,
                    popoverStyles[`arrow-position-${position2}`]
                  )}>
                  <div className={popoverStyles['arrow-outer']} />
                  <div className={popoverStyles['arrow-inner']} />
                </div>
              )}
              keepPosition={true}
              allowVerticalOverflow={true}
              allowScrollToFit={isPinned}>
              <div className={styles['hover-area']}>
                <PopoverBody
                  dismissButton={dismissButton}
                  dismissAriaLabel={dismissAriaLabel}
                  header={title}
                  onDismiss={onDismiss}
                  overflowVisible='content'
                  className={styles['popover-body']}>
                  {children}
                </PopoverBody>
              </div>
            </PopoverContainer>
          </div>
        )
      }
    )
  )
)

export {
  ChartPopover as default
}
