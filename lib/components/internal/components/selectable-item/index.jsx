import {useRef, useEffect, forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getBaseProps} from '../../base-component'

const SelectableItem = memo(
  forwardRef(
    (
      {
        children: content,
        ariaSelected,
        ariaChecked,
        selected,
        highlighted,
        disabled,
        hasBackground,
        isParent,
        isChild,
        virtualPosition,
        padBottom,
        isNextSelected,
        useInteractiveGroups,
        screenReaderContent,
        ariaPosinset,
        ariaSetsize,
        highlightType,
        ...restProps
      },
      ref
    ) => {
      const {className, ...rest} = getBaseProps(restProps)
      const classNames = clsx(className, styles['selectable-item'], {
        [styles.selected]: selected,
        [styles.highlighted]: highlighted,
        [styles['has-background']]: hasBackground,
        [styles.parent]: isParent,
        [styles.child]: isChild,
        [styles['is-keyboard']]: highlightType === 'keyboard',
        [styles.disabled]: disabled,
        [styles.virtual]: virtualPosition !== void 0,
        [styles['pad-bottom']]: padBottom,
        [styles['next-item-selected']]: isNextSelected,
        [styles.interactiveGroups]: useInteractiveGroups
      })
      const contentRef = useRef(null)
      const screenReaderContentRef = useRef(null)
      useEffect(() => {
        if (highlighted && screenReaderContent) {
          if (contentRef.current) {
            contentRef.current.setAttribute('aria-hidden', 'true')
          }
          if (screenReaderContentRef.current) {
            screenReaderContentRef.current.textContent = screenReaderContent
          }
        }
      }, [
        highlighted,
        screenReaderContent,
        contentRef,
        screenReaderContentRef
      ])
      const style =
        virtualPosition !== void 0
          ? {
              transform: `translateY(${virtualPosition}px)`
            }
          : void 0
      const a11yProperties = {
        'aria-disabled': disabled
      }
      if (isParent && !useInteractiveGroups) {
        a11yProperties['aria-hidden'] = true
      }
      if (ariaSelected !== void 0) {
        a11yProperties['aria-selected'] = ariaSelected
      }
      if (ariaChecked !== void 0) {
        a11yProperties['aria-checked'] = ariaChecked
      }
      if (ariaPosinset && ariaSetsize) {
        a11yProperties['aria-posinset'] = ariaPosinset
        a11yProperties['aria-setsize'] = ariaSetsize
      }
      return (
        <li
          role='option'
          className={classNames}
          style={style}
          {...a11yProperties}
          {...rest}>
          <div className={styles['option-content']} ref={contentRef}>
            {content}
          </div>
          <div className={styles['measure-strut']} ref={ref} />
          <div
            className={styles['screenreader-content']}
            ref={screenReaderContentRef}
          />
        </li>
      )
    }
  )
)

export {
  SelectableItem as default
}
