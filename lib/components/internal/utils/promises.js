class PromiseCancelledSignal {}
const makeCancellable = promise => {
  let cancelled = false
  const wrapped = promise.then(
    value => {
      if (cancelled) {
        throw new PromiseCancelledSignal()
      }
      return value
    },
    err => {
      if (cancelled) {
        throw new PromiseCancelledSignal()
      }
      throw err
    }
  )
  return {
    promise: wrapped,
    cancel: () => {
      cancelled = true
    },
    isCancelled: () => cancelled
  }
}

export {
  PromiseCancelledSignal,
  makeCancellable
}
