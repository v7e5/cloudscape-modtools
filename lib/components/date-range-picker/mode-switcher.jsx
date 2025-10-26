import {memo} from 'react'
import InternalSegmentedControl from '../segmented-control/internal'
import styles from './styles.css.js'
import {useInternalI18n} from '../i18n/context'

const ModeSwitcher = memo(({i18nStrings, mode, onChange}) => {
  const i18n = useInternalI18n('date-range-picker')
  return (
    <InternalSegmentedControl
      className={styles['mode-switch']}
      selectedId={mode}
      label={i18nStrings?.modeSelectionLabel}
      options={[
        {
          id: 'relative',
          text: i18n(
            'i18nStrings.relativeModeTitle',
            i18nStrings?.relativeModeTitle
          )
        },
        {
          id: 'absolute',
          text: i18n(
            'i18nStrings.absoluteModeTitle',
            i18nStrings?.absoluteModeTitle
          )
        }
      ]}
      onChange={e => onChange(e.detail.selectedId)}
    />
  )
})

export {
  ModeSwitcher as default
}
