import {forwardRef, useRef, memo} from 'react'
import {useStickyScrollbar} from './use-sticky-scrollbar'
import {useMergeRefs} from '../../internal/hooks/use-merge-refs'
import clsx from 'clsx'
import styles from './styles.css.js'
import {browserScrollbarSize} from '../../internal/utils/browser-scrollbar-size'
import {useVisualRefresh} from '../../internal/hooks/use-visual-mode'

const StickyScrollbar = memo(
  forwardRef(({wrapperRef, tableRef, onScroll, hasStickyColumns}, ref) => {
    const isVisualRefresh = useVisualRefresh()
    const scrollbarRef = useRef(null)
    const scrollbarContentRef = useRef(null)
    const mergedRef = useMergeRefs(ref, scrollbarRef)
    const offsetScrollbar =
      hasStickyColumns || browserScrollbarSize().height === 0
    useStickyScrollbar(
      scrollbarRef,
      scrollbarContentRef,
      tableRef,
      wrapperRef,
      offsetScrollbar
    )
    return (
      <div
        ref={mergedRef}
        className={clsx(
          styles['sticky-scrollbar'],
          offsetScrollbar && styles['sticky-scrollbar-offset'],
          isVisualRefresh && styles['is-visual-refresh']
        )}
        onScroll={onScroll}>
        <div
          ref={scrollbarContentRef}
          className={styles['sticky-scrollbar-content']}
        />
      </div>
    )
  })
)

export {
  StickyScrollbar as default
}
