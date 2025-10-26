import {memo} from 'react'
import clsx from 'clsx'
import {getBaseProps} from '../internal/base-component'
import InternalStatusIndicator from '../status-indicator/internal'
import styles from './styles.css.js'
import LiveRegion from '../internal/components/live-region'
import {useInternalI18n} from '../i18n/context'
import {createWidgetizedComponent} from '../internal/widgets'

const DrawerImplementation = memo(
  ({
    header,
    children,
    loading,
    i18nStrings,
    __internalRootRef,
    ...restProps
  }) => {
    const baseProps = getBaseProps(restProps)
    const i18n = useInternalI18n('drawer')
    const containerProps = {
      ...baseProps,
      className: clsx(baseProps.className, styles.drawer)
    }
    return loading ? (
      <div {...containerProps} ref={__internalRootRef}>
        <InternalStatusIndicator type='loading'>
          <LiveRegion visible={true}>
            {i18n('i18nStrings.loadingText', i18nStrings?.loadingText)}
          </LiveRegion>
        </InternalStatusIndicator>
      </div>
    ) : (
      <div {...containerProps} ref={__internalRootRef}>
        {header && <div className={clsx(styles.header)}>{header}</div>}
        <div className={clsx(styles['test-utils-drawer-content'])}>
          {children}
        </div>
      </div>
    )
  }
)

const createWidgetizedDrawer = createWidgetizedComponent(DrawerImplementation)

export {
  DrawerImplementation,
  createWidgetizedDrawer
}
