import {memo} from 'react'

const TabTrap = memo(({focusNextCallback, disabled = false}) => {
  return <div tabIndex={disabled ? -1 : 0} onFocus={focusNextCallback} />
})

export {
  TabTrap as default
}
