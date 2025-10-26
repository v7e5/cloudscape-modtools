import {forwardRef, memo} from 'react'
import clsx from 'clsx'
import flattenChildren from 'react-keyed-flatten-children'
import {getBaseProps} from '../internal/base-component'
import {matchBreakpointMapping} from '../internal/breakpoints'
import styles from './styles.css.js'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'

const InternalGrid = memo(
  forwardRef(
    (
      {
        __breakpoint,
        gridDefinition = [],
        disableGutters = false,
        children,
        __responsiveClassName,
        __internalRootRef = null,
        ...restProps
      },
      ref
    ) => {
      let [defaultBreakpoint, defaultRef] = useContainerBreakpoints(void 0)
      if (__breakpoint !== void 0) {
        defaultBreakpoint = __breakpoint
        defaultRef = ref
      }
      const baseProps = getBaseProps(restProps)
      const flattenedChildren = flattenChildren(children)
      const mergedRef = useMergeRefs(defaultRef, __internalRootRef)
      return (
        <div
          {...baseProps}
          className={clsx(
            styles.grid,
            baseProps.className,
            {[styles['no-gutters']]: disableGutters},
            __responsiveClassName
              ? __responsiveClassName(defaultBreakpoint)
              : null
          )}
          ref={mergedRef}>
          {flattenedChildren.map((child, i) => {
            const key = child.key
            return (
              <div
                key={key ? String(key) : void 0}
                className={clsx(
                  styles['grid-column'],
                  getColumnClassNames(
                    'colspan',
                    gridDefinition[i]?.colspan,
                    defaultBreakpoint
                  ),
                  getColumnClassNames(
                    'offset',
                    gridDefinition[i]?.offset,
                    defaultBreakpoint
                  ),
                  getColumnClassNames(
                    'pull',
                    gridDefinition[i]?.pull,
                    defaultBreakpoint
                  ),
                  getColumnClassNames(
                    'push',
                    gridDefinition[i]?.push,
                    defaultBreakpoint
                  )
                )}>
                <div className={styles['restore-pointer-events']}>{child}</div>
              </div>
            )
          })}
        </div>
      )
    }
  )
)
const getColumnClassNames = (prop, mapping, breakpoint) => {
  if (typeof mapping === 'number') {
    return styles[`${prop}-${mapping}`]
  }
  if (breakpoint === null || mapping === void 0) {
    return null
  }
  return styles[`${prop}-${matchBreakpointMapping(mapping, breakpoint)}`]
}

export {
  InternalGrid as default
}
