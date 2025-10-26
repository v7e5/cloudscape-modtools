import {useMemo} from 'react'

const useMergeRefs = (...refs) => {
  return useMemo(() => {
    if (refs.every(ref => ref === null || ref === void 0)) {
      return null
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value)
        } else if (ref !== null && ref !== void 0) {
          ref.current = value
        }
      })
    }
  }, refs)
}

export {
  useMergeRefs
}
