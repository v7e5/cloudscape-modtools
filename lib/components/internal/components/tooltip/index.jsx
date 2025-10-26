import {memo} from 'react'
import clsx from 'clsx'
import {Transition} from '../transition'
import PopoverContainer from '../../../popover/container'
import PopoverBody from '../../../popover/body'
import Portal from '../portal'
import popoverStyles from '../../../popover/styles.css.js'
import styles from './styles.css.js'

const Tooltip = memo(({value, trackRef}) => {
  return (
    <Portal>
      <div className={styles.root}>
        <Transition in={true}>
          {() => (
            <PopoverContainer
              trackRef={trackRef}
              trackKey={value}
              size='small'
              fixedWidth={false}
              position='top'
              arrow={position => (
                <div
                  className={clsx(
                    popoverStyles.arrow,
                    popoverStyles[`arrow-position-${position}`]
                  )}>
                  <div className={popoverStyles['arrow-outer']} />
                  <div className={popoverStyles['arrow-inner']} />
                </div>
              )}>
              <PopoverBody
                dismissButton={false}
                dismissAriaLabel={void 0}
                onDismiss={void 0}
                header={void 0}>
                {value}
              </PopoverBody>
            </PopoverContainer>
          )}
        </Transition>
      </div>
    </Portal>
  )
})

export {
  Tooltip as default
}
