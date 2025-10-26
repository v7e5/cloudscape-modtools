import {useMemo, useCallback, memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import {fireNonCancelableEvent, fireCancelableEvent} from '../internal/events'
import {Header, NavigationItemsList} from './parts'
import {generateExpandableItemsMapping} from './util'
import styles from './styles.css.js'
import {createWidgetizedComponent} from '../internal/widgets'

const SideNavigationImplementation = memo(
  ({
    header,
    activeHref,
    items = [],
    onFollow,
    onChange,
    __internalRootRef,
    ...props
  }) => {
    const baseProps = getBaseProps(props)
    const parentMap = useMemo(
      () => generateExpandableItemsMapping(items),
      [items]
    )
    const onChangeHandler = useCallback(
      (item, expanded) => {
        fireNonCancelableEvent(onChange, {
          item,
          expanded,
          expandableParents: parentMap.get(item)
        })
      },
      [onChange, parentMap]
    )
    const onFollowHandler = useCallback(
      (item, sourceEvent) => {
        fireCancelableEvent(onFollow, item, sourceEvent)
      },
      [onFollow]
    )
    return (
      <div
        {...baseProps}
        className={clsx(styles.root, baseProps.className)}
        ref={__internalRootRef}>
        {header && (
          <Header
            definition={header}
            activeHref={activeHref}
            fireChange={onChangeHandler}
            fireFollow={onFollowHandler}
          />
        )}
        {items && (
          <div className={styles['list-container']}>
            <NavigationItemsList
              variant='root'
              items={items}
              fireFollow={onFollowHandler}
              fireChange={onChangeHandler}
              activeHref={activeHref}
            />
          </div>
        )}
      </div>
    )
  }
)

const createWidgetizedSideNavigation = createWidgetizedComponent(
  SideNavigationImplementation
)

export {
  SideNavigationImplementation,
  createWidgetizedSideNavigation
}
