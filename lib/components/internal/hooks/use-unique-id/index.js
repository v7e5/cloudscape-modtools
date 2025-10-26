import {useId} from 'react'

const useUniqueId = prefix => {
  return (prefix ?? '') + useId()
}

export {
  useUniqueId
}
