import {useState, useCallback} from 'react'

const useControllable = (
  controlledValue,
  handler,
  defaultValue,
  {componentName, changeHandler, controlledProp}
) => {
  const isControlled = useState(controlledValue !== void 0)[0]
  const [valueState, setValue] = useState(defaultValue)
  const [valueHasBeenSet, setValueHasBeenSet] = useState(false)
  const currentUncontrolledValue = valueHasBeenSet ? valueState : defaultValue
  const setUncontrolledValue = useCallback(
    newValue => {
      setValue(newValue)
      setValueHasBeenSet(true)
    },
    [setValue, setValueHasBeenSet]
  )
  if (isControlled) {
    return [controlledValue, defaultCallback]
  } else {
    return [currentUncontrolledValue, setUncontrolledValue]
  }
}
const defaultCallback = () => {
  return void 0
}

export {
  useControllable
}
