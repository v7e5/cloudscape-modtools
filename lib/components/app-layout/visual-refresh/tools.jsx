import {memo} from 'react'
import clsx from 'clsx'
import {InternalButton} from '../../button/internal'
import {useAppLayoutInternals} from './context'
import TriggerButton from './trigger-button'
import styles from './styles.css.js'
import testutilStyles from '../test-classes/styles.css.js'
import splitPanelTestUtilStyles from '../../split-panel/test-classes/styles.css.js'
import {Transition} from '../../internal/components/transition'
import customCssProps from '../../internal/generated/custom-css-properties'

const Tools = memo(({children}) => {
  const {
    ariaLabels,
    disableBodyScroll,
    drawers,
    handleSplitPanelClick,
    handleToolsClick,
    hasDrawerViewportOverlay,
    isMobile,
    isSplitPanelOpen,
    isToolsOpen,
    loseToolsFocus,
    splitPanel,
    splitPanelControlId,
    splitPanelDisplayed,
    splitPanelPosition,
    splitPanelRefs,
    splitPanelToggle,
    tools,
    toolsControlId,
    toolsHide,
    toolsRefs,
    toolsWidth,
    headerVariant
  } = useAppLayoutInternals()
  const hasSplitPanel = !!splitPanel && splitPanelPosition === 'side'
  const hasToolsForm = getToolsFormStatus(
    hasSplitPanel && splitPanelDisplayed,
    isMobile,
    isSplitPanelOpen,
    isToolsOpen,
    toolsHide
  )
  const hasToolsFormPersistence = getToolsFormPersistence(
    hasSplitPanel,
    isSplitPanelOpen,
    isToolsOpen,
    toolsHide
  )
  const isUnfocusable = hasDrawerViewportOverlay && !isToolsOpen
  if ((toolsHide && !hasSplitPanel) || drawers) {
    return null
  }
  return (
    <Transition in={isToolsOpen ?? false}>
      {(state, transitionEventsRef) => (
        <div
          className={clsx(styles['tools-container'], {
            [styles['disable-body-scroll']]: disableBodyScroll,
            [styles.unfocusable]: isUnfocusable,
            [testutilStyles['drawer-closed']]: !isToolsOpen
          })}
          style={{
            [customCssProps.toolsAnimationStartingOpacity]: `${
              hasSplitPanel && isSplitPanelOpen ? 1 : 0
            }`,
            [customCssProps.toolsWidth]: `${toolsWidth}px`
          }}
          onBlur={e => {
            if (
              !e.relatedTarget ||
              !e.currentTarget.contains(e.relatedTarget)
            ) {
              loseToolsFocus()
            }
          }}>
          {children}
          {!toolsHide && (
            <aside
              id={toolsControlId}
              aria-hidden={!isToolsOpen ? true : false}
              aria-label={ariaLabels?.tools ?? void 0}
              className={clsx(
                styles.tools,
                {
                  [styles.animating]: state === 'entering',
                  [styles['has-tools-form-persistence']]:
                    hasToolsFormPersistence,
                  [styles['is-tools-open']]: isToolsOpen
                },
                testutilStyles.tools
              )}
              ref={state !== 'exiting' ? transitionEventsRef : void 0}>
              <div className={clsx(styles['animated-content'])}>
                <div className={clsx(styles['hide-tools'])}>
                  <InternalButton
                    ariaLabel={ariaLabels?.toolsClose ?? void 0}
                    iconName={isMobile ? 'close' : 'angle-right'}
                    onClick={() => handleToolsClick(false)}
                    variant='icon'
                    formAction='none'
                    className={testutilStyles['tools-close']}
                    ref={toolsRefs.close}
                  />
                </div>
                {tools}
              </div>
            </aside>
          )}
          {!isMobile && (
            <aside
              aria-hidden={!hasToolsForm ? true : false}
              aria-label={ariaLabels?.tools ?? void 0}
              className={clsx(styles['show-tools'], {
                [styles.animating]: state === 'exiting',
                [styles['has-tools-form']]: hasToolsForm,
                [styles['has-tools-form-persistence']]: hasToolsFormPersistence
              })}
              ref={state === 'exiting' ? transitionEventsRef : void 0}
              data-testid='side-split-panel-drawer'>
              {!toolsHide && (
                <TriggerButton
                  ariaLabel={ariaLabels?.toolsToggle}
                  ariaControls={toolsControlId}
                  ariaExpanded={isToolsOpen}
                  iconName='status-info'
                  onClick={() => handleToolsClick(!isToolsOpen)}
                  selected={hasSplitPanel && isToolsOpen}
                  className={testutilStyles['tools-toggle']}
                  ref={toolsRefs.toggle}
                  highContrastHeader={headerVariant === 'high-contrast'}
                />
              )}
              {hasSplitPanel && splitPanelToggle.displayed && (
                <TriggerButton
                  ariaLabel={splitPanelToggle.ariaLabel}
                  ariaControls={splitPanelControlId}
                  ariaExpanded={!!isSplitPanelOpen}
                  iconName='view-vertical'
                  onClick={() => handleSplitPanelClick()}
                  selected={hasSplitPanel && isSplitPanelOpen}
                  className={splitPanelTestUtilStyles['open-button']}
                  ref={splitPanelRefs.toggle}
                  highContrastHeader={headerVariant === 'high-contrast'}
                />
              )}
            </aside>
          )}
        </div>
      )}
    </Transition>
  )
})

const getToolsFormStatus = (
  hasSplitPanel,
  isMobile,
  isSplitPanelOpen,
  isToolsOpen,
  toolsHide
) => {
  let hasToolsForm = false
  if (!isMobile) {
    if (hasSplitPanel && !toolsHide) {
      hasToolsForm = true
    }
    if (hasSplitPanel && !isSplitPanelOpen && toolsHide) {
      hasToolsForm = true
    }
    if (!hasSplitPanel && !toolsHide && !isToolsOpen) {
      hasToolsForm = true
    }
  }
  return hasToolsForm
}
const getToolsFormPersistence = (
  hasSplitPanel,
  isSplitPanelOpen,
  isToolsOpen,
  toolsHide
) => {
  let hasToolsFormPersistence = false
  if (hasSplitPanel && !toolsHide && (isSplitPanelOpen || isToolsOpen)) {
    hasToolsFormPersistence = true
  }
  return hasToolsFormPersistence
}

export {
  Tools as default
}
