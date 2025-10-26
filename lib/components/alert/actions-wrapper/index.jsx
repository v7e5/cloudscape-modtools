import {memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import InternalButton from '../../button/internal'

const createActionButton = (
  testUtilClasses,
  action,
  buttonText,
  onButtonClick
) => {
  if (!action && buttonText) {
    action = (
      <InternalButton
        className={testUtilClasses.actionButton}
        onClick={onButtonClick}
        formAction='none'>
        {buttonText}
      </InternalButton>
    )
  }
  return action ? (
    <div className={testUtilClasses.actionSlot}>{action}</div>
  ) : null
}
const ActionsWrapper = memo(
  ({
    className,
    testUtilClasses,
    action,
    discoveredActions,
    buttonText,
    onButtonClick
  }) => {
    const actionButton = createActionButton(
      testUtilClasses,
      action,
      buttonText,
      onButtonClick
    )
    if (!actionButton && discoveredActions.length === 0) {
      return null
    }
    return (
      <div className={clsx(styles.root, className)}>
        {actionButton}
        {discoveredActions}
      </div>
    )
  }
)

export {
  ActionsWrapper
}
