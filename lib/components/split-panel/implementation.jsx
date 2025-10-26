import {useState, useEffect, useRef, forwardRef, memo} from 'react'
import clsx from 'clsx'
import {InternalButton} from '../button/internal'
import {getBaseProps} from '../internal/base-component'
import {useSplitPanelContext} from '../internal/context/split-panel-context'
import PanelResizeHandle from '../internal/components/panel-resize-handle'
import PreferencesModal from './preferences-modal'
import {usePointerEvents} from '../app-layout/utils/use-pointer-events'
import {useKeyboardEvents} from '../app-layout/utils/use-keyboard-events'
import {useMergeRefs} from '../internal/hooks/use-merge-refs'
import {Transition} from '../internal/components/transition'
import {useVisualRefresh} from '../internal/hooks/use-visual-mode'
import {useUniqueId} from '../internal/hooks/use-unique-id'
import {SplitPanelContentSide} from './side'
import {SplitPanelContentBottom} from './bottom'
import {useInternalI18n} from '../i18n/context'
import globalVars from '../internal/styles/global-vars'
import {createWidgetizedForwardRef} from '../internal/widgets'
import styles from './styles.css.js'
import testUtilStyles from './test-classes/styles.css.js'

const SplitPanelImplementation = memo(
  forwardRef(
    (
      {
        header,
        children,
        hidePreferencesButton = false,
        closeBehavior = 'collapse',
        i18nStrings,
        ...restProps
      },
      __internalRootRef
    ) => {
      const isRefresh = useVisualRefresh()
      const {
        position,
        topOffset,
        bottomOffset,
        rightOffset,
        contentWidthStyles,
        isOpen,
        isForcedPosition,
        onPreferencesChange,
        onResize,
        onToggle,
        size,
        relativeSize,
        setSplitPanelToggle,
        refs
      } = useSplitPanelContext()
      const baseProps = getBaseProps(restProps)
      const i18n = useInternalI18n('split-panel')
      const [isPreferencesOpen, setPreferencesOpen] = useState(false)
      const appLayoutMaxWidth =
        isRefresh && position === 'bottom' ? contentWidthStyles : void 0
      const openButtonAriaLabel = i18n(
        'i18nStrings.openButtonAriaLabel',
        i18nStrings?.openButtonAriaLabel
      )
      useEffect(() => {
        setSplitPanelToggle({
          displayed: closeBehavior === 'collapse',
          ariaLabel: openButtonAriaLabel
        })
      }, [setSplitPanelToggle, openButtonAriaLabel, closeBehavior])
      const splitPanelRefObject = useRef(null)
      const sizeControlProps = {
        position,
        panelRef: splitPanelRefObject,
        handleRef: refs.slider,
        onResize
      }
      const onSliderPointerDown = usePointerEvents(sizeControlProps)
      const onKeyDown = useKeyboardEvents(sizeControlProps)
      const contentStyle = {
        [globalVars.stickyVerticalTopOffset]: topOffset,
        [globalVars.stickyVerticalBottomOffset]: bottomOffset
      }
      const panelHeaderId = useUniqueId('split-panel-header')
      const wrappedHeader = (
        <div className={styles.header} style={appLayoutMaxWidth}>
          <h2
            className={clsx(
              styles['header-text'],
              testUtilStyles['header-text']
            )}
            id={panelHeaderId}>
            {header}
          </h2>
          <div className={styles['header-actions']}>
            {!hidePreferencesButton && isOpen && (
              <>
                <InternalButton
                  className={testUtilStyles['preferences-button']}
                  iconName='settings'
                  variant='icon'
                  onClick={() => setPreferencesOpen(true)}
                  formAction='none'
                  ariaLabel={i18n(
                    'i18nStrings.preferencesTitle',
                    i18nStrings?.preferencesTitle
                  )}
                  ref={refs.preferences}
                />
                <span className={styles.divider} />
              </>
            )}
            {isOpen ? (
              <InternalButton
                className={testUtilStyles['close-button']}
                iconName={
                  isRefresh && closeBehavior === 'collapse'
                    ? position === 'side'
                      ? 'angle-right'
                      : 'angle-down'
                    : 'close'
                }
                variant='icon'
                onClick={onToggle}
                formAction='none'
                ariaLabel={i18n(
                  'i18nStrings.closeButtonAriaLabel',
                  i18nStrings?.closeButtonAriaLabel
                )}
                ariaExpanded={isOpen}
              />
            ) : position === 'side' ? null : (
              <InternalButton
                className={testUtilStyles['open-button']}
                iconName='angle-up'
                variant='icon'
                formAction='none'
                ariaLabel={i18n(
                  'i18nStrings.openButtonAriaLabel',
                  i18nStrings?.openButtonAriaLabel
                )}
                ref={refs.toggle}
                ariaExpanded={isOpen}
              />
            )}
          </div>
        </div>
      )
      const resizeHandle = (
        <PanelResizeHandle
          ref={refs.slider}
          className={testUtilStyles.slider}
          ariaLabel={i18n(
            'i18nStrings.resizeHandleAriaLabel',
            i18nStrings?.resizeHandleAriaLabel
          )}
          ariaValuenow={
            position === 'bottom' ? relativeSize : 100 - relativeSize
          }
          position={position}
          onKeyDown={onKeyDown}
          onPointerDown={onSliderPointerDown}
        />
      )
      useEffect(() => {
        const root = splitPanelRefObject.current
        if (root) {
          const property = 'transform'
          const temporaryValue = 'translateZ(0)'
          const valueBefore = root.style[property]
          root.style[property] = temporaryValue
          void root.offsetHeight
          root.style[property] = valueBefore
        }
      }, [rightOffset, __internalRootRef])
      const mergedRef = useMergeRefs(splitPanelRefObject, __internalRootRef)
      if (closeBehavior === 'hide' && !isOpen) {
        return <></>
      }
      if (isRefresh && !isOpen && position === 'side') {
        return <></>
      }
      return (
        <Transition in={isOpen ?? false}>
          {(state, transitioningElementRef) => (
            <>
              {position === 'side' && (
                <SplitPanelContentSide
                  style={contentStyle}
                  resizeHandle={resizeHandle}
                  baseProps={baseProps}
                  isOpen={isOpen}
                  splitPanelRef={mergedRef}
                  cappedSize={size}
                  onToggle={onToggle}
                  openButtonAriaLabel={i18n(
                    'i18nStrings.openButtonAriaLabel',
                    i18nStrings?.openButtonAriaLabel
                  )}
                  toggleRef={refs.toggle}
                  header={wrappedHeader}
                  panelHeaderId={panelHeaderId}>
                  {children}
                </SplitPanelContentSide>
              )}
              {position === 'bottom' && (
                <SplitPanelContentBottom
                  style={contentStyle}
                  resizeHandle={resizeHandle}
                  baseProps={baseProps}
                  isOpen={isOpen}
                  splitPanelRef={mergedRef}
                  cappedSize={size}
                  onToggle={onToggle}
                  header={wrappedHeader}
                  panelHeaderId={panelHeaderId}
                  state={state}
                  transitioningElementRef={transitioningElementRef}
                  appLayoutMaxWidth={appLayoutMaxWidth}>
                  {children}
                </SplitPanelContentBottom>
              )}
              {isPreferencesOpen && (
                <PreferencesModal
                  visible={true}
                  preferences={{position}}
                  disabledSidePosition={
                    position === 'bottom' && isForcedPosition
                  }
                  isRefresh={isRefresh}
                  i18nStrings={{
                    header: i18n(
                      'i18nStrings.preferencesTitle',
                      i18nStrings?.preferencesTitle
                    ),
                    confirm: i18n(
                      'i18nStrings.preferencesConfirm',
                      i18nStrings?.preferencesConfirm
                    ),
                    cancel: i18n(
                      'i18nStrings.preferencesCancel',
                      i18nStrings?.preferencesCancel
                    ),
                    positionLabel: i18n(
                      'i18nStrings.preferencesPositionLabel',
                      i18nStrings?.preferencesPositionLabel
                    ),
                    positionDescription: i18n(
                      'i18nStrings.preferencesPositionDescription',
                      i18nStrings?.preferencesPositionDescription
                    ),
                    positionBottom: i18n(
                      'i18nStrings.preferencesPositionBottom',
                      i18nStrings?.preferencesPositionBottom
                    ),
                    positionSide: i18n(
                      'i18nStrings.preferencesPositionSide',
                      i18nStrings?.preferencesPositionSide
                    )
                  }}
                  onConfirm={preferences => {
                    onPreferencesChange({...preferences})
                    setPreferencesOpen(false)
                  }}
                  onDismiss={() => {
                    setPreferencesOpen(false)
                  }}
                />
              )}
            </>
          )}
        </Transition>
      )
    }
  )
)
const createWidgetizedSplitPanel = createWidgetizedForwardRef(
  SplitPanelImplementation
)

export {
  SplitPanelImplementation,
  createWidgetizedSplitPanel
}
