import {memo, useEffect, useRef} from 'react'
import clsx from 'clsx'
import ScreenreaderOnly from '../screenreader-only'
import styles from './styles.css.js'

const LiveRegion = memo(
  ({
    assertive = false,
    delay = 10,
    visible = false,
    tagName: TagName = 'span',
    children,
    id,
    source,
    ...restProps
  }) => {
    const sourceRef = useRef(null)
    const targetRef = useRef(null)
    useEffect(() => {
      const getSourceContent = () => {
        if (source) {
          return source
            .map(item => {
              if (!item) {
                return void 0
              }
              if (typeof item === 'string') {
                return item
              }
              if (item.current) {
                return extractInnerText(item.current)
              }
            })
            .filter(Boolean)
            .join(' ')
        }
        if (sourceRef.current) {
          return extractInnerText(sourceRef.current)
        }
      }
      const updateLiveRegion = () => {
        const sourceContent = getSourceContent()
        if (targetRef.current && sourceContent) {
          const targetContent = extractInnerText(targetRef.current)
          if (targetContent !== sourceContent) {
            targetRef.current.innerText = sourceContent
          }
        }
      }
      let timeoutId
      if (delay) {
        timeoutId = setTimeout(updateLiveRegion, delay)
      } else {
        updateLiveRegion()
      }
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    })
    return (
      <>
        {visible && !source && (
          <TagName ref={sourceRef} id={id} className={styles.source}>
            {children}
          </TagName>
        )}
        <ScreenreaderOnly
          {...restProps}
          className={clsx(styles.root, restProps.className)}>
          {!visible && !source && (
            <TagName
              ref={sourceRef}
              aria-hidden='true'
              className={styles.source}>
              {children}
            </TagName>
          )}
          <span
            ref={targetRef}
            aria-atomic='true'
            aria-live={assertive ? 'assertive' : 'polite'}
          />
        </ScreenreaderOnly>
      </>
    )
  }
)

const extractInnerText = node => {
  return (node.innerText || '').replace(/\s+/g, ' ').trim()
}

export {
  LiveRegion as default
}
