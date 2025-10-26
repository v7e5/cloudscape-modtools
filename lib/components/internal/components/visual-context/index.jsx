import {useEffect, useState, memo} from 'react'
import clsx from 'clsx'
import {findUpUntil} from '../../utils/dom'

const contextMatch = /awsui-context-([\w-]+)/
const useVisualContext = elementRef => {
  const [value, setValue] = useState('')
  useEffect(() => {
    if (elementRef.current) {
      const contextParent = findUpUntil(
        elementRef.current,
        node => !!node.className.match(contextMatch)
      )
      setValue(contextParent?.className.match(contextMatch)[1] ?? '')
    }
  }, [elementRef])
  return value
}
const getVisualContextClassname = contextName => {
  return `awsui-context-${contextName}`
}
const VisualContext = memo(({contextName, className, children}) => {
  return (
    <div className={clsx(getVisualContextClassname(contextName), className)}>
      {children}
    </div>
  )
})

export {
  VisualContext as default,
  getVisualContextClassname,
  useVisualContext
}
