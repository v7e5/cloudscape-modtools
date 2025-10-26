import {useRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getStickyClassNames} from '../utils'
import {useStickyCellStyles} from '../sticky-columns'
import {useMergeRefs} from '../../internal/hooks/use-merge-refs'
import {getTableColHeaderRoleProps} from '../table-role'
import {useSingleTabStopNavigation} from '../../internal/context/single-tab-stop-navigation-context'

const TableThElement = memo(
  ({
    className,
    style,
    sortingStatus,
    sortingDisabled,
    focusedComponent,
    hidden,
    colIndex,
    columnId,
    stickyState,
    cellRef,
    tableRole,
    children
  }) => {
    const stickyStyles = useStickyCellStyles({
      stickyColumns: stickyState,
      columnId,
      getClassName: props => getStickyClassNames(styles, props)
    })
    const cellRefObject = useRef(null)
    const mergedRef = useMergeRefs(stickyStyles.ref, cellRef, cellRefObject)
    const {tabIndex: cellTabIndex} = useSingleTabStopNavigation(cellRefObject)
    return (
      <th
        data-focus-id={`header-${String(columnId)}`}
        className={clsx(
          className,
          {
            [styles['header-cell-fake-focus']]:
              focusedComponent === `header-${String(columnId)}`,
            [styles['header-cell-sortable']]: sortingStatus,
            [styles['header-cell-sorted']]:
              sortingStatus === 'ascending' || sortingStatus === 'descending',
            [styles['header-cell-disabled']]: sortingDisabled,
            [styles['header-cell-ascending']]: sortingStatus === 'ascending',
            [styles['header-cell-descending']]: sortingStatus === 'descending',
            [styles['header-cell-hidden']]: hidden
          },
          stickyStyles.className
        )}
        style={{...style, ...stickyStyles.style}}
        ref={mergedRef}
        {...getTableColHeaderRoleProps({tableRole, sortingStatus, colIndex})}
        tabIndex={cellTabIndex === -1 ? void 0 : cellTabIndex}>
        {children}
      </th>
    )
  }
)

export {
  TableThElement
}
