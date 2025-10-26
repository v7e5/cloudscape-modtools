import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
  memo
} from 'react'
import clsx from 'clsx'
import {StickyHeaderContext} from '../container/use-sticky-header'
import Thead from './thead'
import {useStickyHeader} from './use-sticky-header'
import styles from './styles.css.js'
import {getVisualContextClassname} from '../internal/components/visual-context'
import {getTableRoleProps} from './table-role'

const StickyHeader = memo(
  forwardRef(
    (
      {
        variant,
        theadProps,
        wrapperRef,
        theadRef,
        secondaryWrapperRef,
        onScroll,
        tableRef,
        tableHasHeader,
        contentDensity,
        tableRole
      },
      ref
    ) => {
      const secondaryTheadRef = useRef(null)
      const secondaryTableRef = useRef(null)
      const {isStuck} = useContext(StickyHeaderContext)
      const [focusedComponent, setFocusedComponent] = useState(null)
      const {scrollToRow, scrollToTop} = useStickyHeader(
        tableRef,
        theadRef,
        secondaryTheadRef,
        secondaryTableRef,
        wrapperRef
      )
      useImperativeHandle(ref, () => ({
        scrollToTop,
        scrollToRow,
        setFocus: setFocusedComponent
      }))
      return (
        <div
          className={clsx(
            styles['header-secondary'],
            styles[`variant-${variant}`],
            {
              [styles.stuck]: isStuck,
              [styles['table-has-header']]: tableHasHeader
            }
          )}
          aria-hidden={true}
          tabIndex={-1}
          ref={secondaryWrapperRef}
          onScroll={onScroll}>
          <table
            className={clsx(
              styles.table,
              styles['table-layout-fixed'],
              contentDensity === 'compact' &&
                getVisualContextClassname('compact-table')
            )}
            ref={secondaryTableRef}
            {...getTableRoleProps({tableRole})}>
            <Thead
              ref={secondaryTheadRef}
              sticky={true}
              stuck={isStuck}
              focusedComponent={focusedComponent}
              {...theadProps}
            />
          </table>
        </div>
      )
    }
  )
)

export {
  StickyHeader as default
}
