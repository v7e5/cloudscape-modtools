import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import styles from './styles.css.js'
import {useFormFieldContext} from '../internal/context/form-field-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {Tile} from './tile'
import useRadioGroupForwardFocus from '../internal/hooks/forward-focus/radio-group'

const COLUMN_TRIGGERS = ['default', 'xxs', 'xs']
const InternalTiles = memo(
  forwardRef(
    (
      {
        name,
        value,
        items,
        ariaLabel,
        ariaRequired,
        ariaControls,
        columns,
        onChange,
        __internalRootRef = null,
        ...rest
      },
      ref
    ) => {
      const baseProps = getBaseProps(rest)
      const {ariaDescribedby, ariaLabelledby} = useFormFieldContext(rest)
      const generatedName = useUniqueId('awsui-tiles-')
      const [tileRef, tileRefIndex] = useRadioGroupForwardFocus(
        ref,
        items,
        value
      )
      const [breakpoint, breakpointRef] =
        useContainerBreakpoints(COLUMN_TRIGGERS)
      const mergedRef = useMergeRefs(breakpointRef, __internalRootRef)
      const columnCount = getColumnCount(items, columns)
      return (
        <div
          role='radiogroup'
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          aria-required={ariaRequired}
          aria-controls={ariaControls}
          {...baseProps}
          className={clsx(baseProps.className, styles.root)}
          ref={mergedRef}>
          <div
            className={clsx(styles.columns, styles[`column-${columnCount}`])}>
            {items &&
              items.map((item, index) => (
                <Tile
                  ref={index === tileRefIndex ? tileRef : void 0}
                  key={item.value}
                  item={item}
                  selected={item.value === value}
                  name={name || generatedName}
                  breakpoint={breakpoint}
                  onChange={onChange}
                />
              ))}
          </div>
        </div>
      )
    }
  )
)
const getColumnCount = (items, columns) => {
  if (columns) {
    return columns
  }
  const nItems = items ? items.length : 0
  const columnsLookup = {
    0: 1,
    1: 1,
    2: 2,
    4: 2,
    8: 2
  }
  return columnsLookup[nItems] || 3
}

export {
  InternalTiles as default
}
