import {useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {getStickyClassNames} from '../utils'
import {useStickyCellStyles} from '../sticky-columns'
import {getTableCellRoleProps} from '../table-role'
import {useMergeRefs} from '../../internal/hooks/use-merge-refs'
import {useSingleTabStopNavigation} from '../../internal/context/single-tab-stop-navigation-context'
import {ExpandToggleButton} from '../expandable-rows/expand-toggle-button'

const TableTdElement = memo(
  forwardRef(
    (
      {
        className,
        style,
        children,
        wrapLines,
        isRowHeader,
        isFirstRow,
        isLastRow,
        isSelected,
        isNextSelected,
        isPrevSelected,
        nativeAttributes,
        onClick,
        onMouseEnter,
        onMouseLeave,
        isEvenRow,
        stripedRows,
        isVisualRefresh,
        hasSelection,
        hasFooter,
        columnId,
        colIndex,
        stickyState,
        tableRole,
        level,
        isExpandable,
        isExpanded,
        onExpandableItemToggle,
        expandButtonLabel,
        collapseButtonLabel
      },
      ref
    ) => {
      const Element = isRowHeader ? 'th' : 'td'
      nativeAttributes = {
        ...nativeAttributes,
        ...getTableCellRoleProps({tableRole, isRowHeader, colIndex})
      }
      const stickyStyles = useStickyCellStyles({
        stickyColumns: stickyState,
        columnId,
        getClassName: props => getStickyClassNames(styles, props)
      })
      const cellRefObject = useRef(null)
      const mergedRef = useMergeRefs(stickyStyles.ref, ref, cellRefObject)
      const {tabIndex: cellTabIndex} =
        useSingleTabStopNavigation(cellRefObject)
      return (
        <Element
          style={{...style, ...stickyStyles.style}}
          className={clsx(
            className,
            styles['body-cell'],
            wrapLines && styles['body-cell-wrap'],
            isFirstRow && styles['body-cell-first-row'],
            isLastRow && styles['body-cell-last-row'],
            isSelected && styles['body-cell-selected'],
            isNextSelected && styles['body-cell-next-selected'],
            isPrevSelected && styles['body-cell-prev-selected'],
            !isEvenRow && stripedRows && styles['body-cell-shaded'],
            stripedRows && styles['has-striped-rows'],
            isVisualRefresh && styles['is-visual-refresh'],
            hasSelection && styles['has-selection'],
            hasFooter && styles['has-footer'],
            level !== void 0 && styles['body-cell-expandable'],
            level !== void 0 &&
              styles[`expandable-level-${getLevelClassSuffix(level)}`],
            stickyStyles.className
          )}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={mergedRef}
          {...nativeAttributes}
          tabIndex={cellTabIndex === -1 ? void 0 : cellTabIndex}>
          {level !== void 0 && isExpandable && (
            <div className={styles['expandable-toggle-wrapper']}>
              <ExpandToggleButton
                isExpanded={isExpanded}
                onExpandableItemToggle={onExpandableItemToggle}
                expandButtonLabel={expandButtonLabel}
                collapseButtonLabel={collapseButtonLabel}
              />
            </div>
          )}
          <span className={styles['body-cell-content']}>{children}</span>
        </Element>
      )
    }
  )
)
const getLevelClassSuffix = level => {
  return 0 <= level && level <= 9 ? level : 'next'
}

export {
  TableTdElement
}
