import {useRef, memo} from 'react'
import clsx from 'clsx'
import InternalStatusIndicator from '../status-indicator/internal'
import styles from './styles.css.js'
import LiveRegion from '../internal/components/live-region'
import {useResizeObserver} from '~/components/internal/toolkit/internal'

const NoDataCell = memo(
  ({
    totalColumnsCount,
    hasFooter,
    loading,
    loadingText,
    empty,
    tableRef,
    containerRef
  }) => {
    const cellContentRef = useRef(null)
    useResizeObserver(
      containerRef,
      ({contentBoxWidth: containerInlineSize}) => {
        if (tableRef.current && cellContentRef.current) {
          const tablePaddingInlineStart =
            parseFloat(
              getComputedStyle(tableRef.current).paddingInlineStart
            ) || 0
          const tablePaddingInlineEnd =
            parseFloat(getComputedStyle(tableRef.current).paddingInlineEnd) ||
            0
          const inlineSize =
            containerInlineSize +
            tablePaddingInlineStart +
            tablePaddingInlineEnd
          cellContentRef.current.style.inlineSize =
            Math.floor(inlineSize) + 'px'
        }
      }
    )
    return (
      <td
        colSpan={totalColumnsCount}
        className={clsx(
          styles['cell-merged'],
          hasFooter && styles['has-footer']
        )}>
        <div
          ref={cellContentRef}
          className={styles['cell-merged-content']}
          data-awsui-table-suppress-navigation={true}>
          {loading ? (
            <InternalStatusIndicator
              type='loading'
              className={styles.loading}
              wrapText={true}>
              <LiveRegion visible={true}>{loadingText}</LiveRegion>
            </InternalStatusIndicator>
          ) : (
            <div className={styles.empty}>{empty}</div>
          )}
        </div>
      </td>
    )
  }
)

export {
  NoDataCell
}
