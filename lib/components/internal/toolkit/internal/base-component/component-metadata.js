import {useEffect, useRef} from 'react'

const COMPONENT_METADATA_KEY = '________z________'
const useComponentMetadata = (componentName, packageVersion) => {
  const elementRef = useRef(null)
  useEffect(() => {
    if (elementRef.current) {
      const node = elementRef.current
      const metadata = {name: componentName, version: packageVersion}
      Object.freeze(metadata)
      Object.defineProperty(node, COMPONENT_METADATA_KEY, {
        value: metadata,
        writable: false,
        configurable: true
      })
    }
  })
  return elementRef
}

export {
  useComponentMetadata
}
