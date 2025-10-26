import {useState, memo} from 'react'
import InternalBox from '../box/internal'
import {InternalButton} from '../button/internal'
import InternalFormField from '../form-field/internal'
import InternalModal from '../modal/internal'
import InternalTiles from '../tiles/internal'
import InternalSpaceBetween from '../space-between/internal'
import sidePositionIconClassic from './icons/side-position'
import bottomPositionIconClassic from './icons/bottom-icon'
import sidePositionIconRefresh from './icons/side-position-refresh'
import bottomPositionIconRefresh from './icons/bottom-icon-refresh'

const PreferencesModal = memo(props => {
  const [position, setPosition] = useState(props.preferences.position)
  const onCancel = () => {
    setPosition(props.preferences.position)
    props.onDismiss()
  }
  const onConfirm = () => {
    props.onConfirm({position})
  }
  return (
    <InternalModal
      size='medium'
      visible={props.visible}
      onDismiss={props.onDismiss}
      header={props.i18nStrings.header}
      closeAriaLabel={props.i18nStrings.cancel}
      footer={
        <InternalBox float='right'>
          <InternalSpaceBetween direction='horizontal' size='xs'>
            <InternalButton
              onClick={onCancel}
              formAction='none'
              variant='link'>
              {props.i18nStrings.cancel}
            </InternalButton>
            <InternalButton onClick={onConfirm} variant='primary'>
              {props.i18nStrings.confirm}
            </InternalButton>
          </InternalSpaceBetween>
        </InternalBox>
      }
      __internalRootRef={props.__internalRootRef}>
      <InternalFormField
        label={props.i18nStrings.positionLabel}
        description={props.i18nStrings.positionDescription}>
        <InternalTiles
          onChange={e => setPosition(e.detail.value)}
          value={position}
          columns={2}
          items={[
            {
              label: props.i18nStrings.positionBottom,
              image: props.isRefresh
                ? bottomPositionIconRefresh
                : bottomPositionIconClassic,
              value: 'bottom'
            },
            {
              label: props.i18nStrings.positionSide,
              image: props.isRefresh
                ? sidePositionIconRefresh
                : sidePositionIconClassic,
              value: 'side',
              disabled: props.disabledSidePosition
            }
          ]}
        />
      </InternalFormField>
    </InternalModal>
  )
})

export {
  PreferencesModal as default
}
