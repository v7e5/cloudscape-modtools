import {memo} from 'react'
import Router, {Route} from './router'
import UtilitiesView from './views/utilities'
import SubmenuView from './views/submenu'
import styles from '../../styles.css.js'
import {useInternalI18n} from '../../../i18n/context'

const OverflowMenu = memo(
  ({
    headerText,
    dismissIconAriaLabel,
    backIconAriaLabel,
    items = [],
    onClose
  }) => {
    const i18n = useInternalI18n('top-navigation')
    const renderedDismissIconAriaLabel = i18n(
      'i18nStrings.overflowMenuDismissIconAriaLabel',
      dismissIconAriaLabel
    )
    const renderedBackIconAriaLabel = i18n(
      'i18nStrings.overflowMenuBackIconAriaLabel',
      backIconAriaLabel
    )
    return (
      <div
        className={styles['overflow-menu']}
        onKeyUp={event => {
          if (event.key === 'Escape') {
            onClose?.()
          }
        }}>
        <Router>
          <Route
            view='utilities'
            element={memo(data => (
              <UtilitiesView
                headerText={i18n(
                  'i18nStrings.overflowMenuTitleText',
                  headerText
                )}
                items={items}
                focusIndex={data?.utilityIndex}
                dismissIconAriaLabel={renderedDismissIconAriaLabel}
                backIconAriaLabel={renderedBackIconAriaLabel}
                onClose={onClose}
              />
            ))}
          />
          <Route
            view='dropdown-menu'
            element={memo(data => (
              <SubmenuView
                headerText={data?.headerText}
                headerSecondaryText={data?.headerSecondaryText}
                dismissIconAriaLabel={renderedDismissIconAriaLabel}
                backIconAriaLabel={renderedBackIconAriaLabel}
                definition={data?.definition}
                utilityIndex={data?.utilityIndex}
                onClose={onClose}
              />
            ))}
          />
        </Router>
      </div>
    )
  }
)

export {
  OverflowMenu as default
}
