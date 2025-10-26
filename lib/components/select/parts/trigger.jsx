import {forwardRef, memo} from 'react'
import {useMergeRefs} from '../../internal/hooks/use-merge-refs'
import clsx from 'clsx'
import ButtonTrigger from '../../internal/components/button-trigger'
import styles from './styles.css.js'
import Option from '../../internal/components/option'
import {useUniqueId} from '../../internal/hooks/use-unique-id'
import {joinStrings} from '../../internal/utils/strings'
import {useVisualRefresh} from '../../internal/hooks/use-visual-mode'

const Trigger = memo(
  forwardRef(
    (
      {
        ariaLabelledby,
        ariaDescribedby,
        controlId,
        invalid,
        warning,
        triggerProps,
        selectedOption,
        selectedOptions,
        triggerVariant,
        inFilteringToken,
        isOpen,
        placeholder,
        disabled
      },
      ref
    ) => {
      const isVisualRefresh = useVisualRefresh()
      const generatedId = useUniqueId()
      const id = controlId ?? generatedId
      const triggerContentId = useUniqueId('trigger-content-')
      let ariaLabelledbyIds = joinStrings(ariaLabelledby, triggerContentId)
      let triggerContent = null
      if (triggerVariant === 'tokens') {
        if (selectedOptions?.length) {
          triggerContent = (
            <span
              className={clsx(
                styles['inline-token-trigger'],
                disabled && styles['inline-token-trigger--disabled'],
                isVisualRefresh && styles['visual-refresh']
              )}>
              <span className={styles['inline-token-list']}>
                {selectedOptions.map(({label}, i) => (
                  <span key={i} className={styles['inline-token']}>
                    {label}
                  </span>
                ))}
              </span>
              <span
                className={styles['inline-token-counter']}
                id={triggerContentId}>
                <span className={styles['inline-token-hidden-placeholder']}>
                  {placeholder}
                </span>
                <span>({selectedOptions.length})</span>
              </span>
            </span>
          )
          ariaLabelledbyIds = ariaLabelledby
        } else {
          triggerContent = (
            <span
              aria-disabled='true'
              className={clsx(styles.placeholder, styles.trigger)}
              id={triggerContentId}>
              {placeholder}
            </span>
          )
        }
      } else if (!selectedOption) {
        triggerContent = (
          <span
            aria-disabled='true'
            className={clsx(styles.placeholder, styles.trigger)}
            id={triggerContentId}>
            {placeholder}
          </span>
        )
      } else if (triggerVariant === 'option') {
        triggerContent = (
          <Option
            id={triggerContentId}
            option={{...selectedOption, disabled}}
            triggerVariant={true}
          />
        )
      } else {
        triggerContent = (
          <span id={triggerContentId} className={styles.trigger}>
            {selectedOption.label || selectedOption.value}
          </span>
        )
      }
      const mergedRef = useMergeRefs(triggerProps.ref, ref)
      return (
        <ButtonTrigger
          {...triggerProps}
          id={id}
          ref={mergedRef}
          pressed={isOpen}
          disabled={disabled}
          invalid={invalid}
          warning={warning && !invalid}
          inFilteringToken={inFilteringToken}
          inlineTokens={triggerVariant === 'tokens'}
          ariaDescribedby={ariaDescribedby}
          ariaLabelledby={ariaLabelledbyIds}>
          {triggerContent}
        </ButtonTrigger>
      )
    }
  )
)

export {
  Trigger as default
}
