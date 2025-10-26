import {useContext, memo} from 'react'
import clsx from 'clsx'
import {useContainerBreakpoints} from '../internal/hooks/container-queries'
import styles from './styles.css.js'
import {CollectionLabelContext} from '../internal/context/collection-label-context'
import {useUniqueId} from '../internal/hooks/use-unique-id'

const ToolsHeader = memo(({header, filter, pagination, preferences}) => {
  const [breakpoint, ref] = useContainerBreakpoints(['xs'])
  const isHeaderString = typeof header === 'string'
  const assignHeaderId = useContext(CollectionLabelContext).assignId
  const headingId = useUniqueId('heading')
  if (assignHeaderId !== void 0 && isHeaderString) {
    assignHeaderId(headingId)
  }
  const isSmall = breakpoint === 'default'
  const hasTools = filter || pagination || preferences
  return (
    <>
      {isHeaderString ? <span id={headingId}>{header}</span> : header}
      {hasTools && (
        <div
          ref={ref}
          className={clsx(styles.tools, isSmall && styles['tools-small'])}>
          {filter && <div className={styles['tools-filtering']}>{filter}</div>}
          <div className={styles['tools-align-right']}>
            {pagination && (
              <div className={styles['tools-pagination']}>{pagination}</div>
            )}
            {preferences && (
              <div className={styles['tools-preferences']}>{preferences}</div>
            )}
          </div>
        </div>
      )}
    </>
  )
})

export {
  ToolsHeader as default
}
