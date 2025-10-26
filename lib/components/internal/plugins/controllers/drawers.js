import debounce from '../../debounce'

class DrawersController {
  drawers = []
  drawersRegistrationListener = null
  scheduleUpdate = debounce(() => {
    this.drawersRegistrationListener?.(this.drawers)
  }, 0)
  registerDrawer = config => {
    this.drawers = this.drawers.concat(config)
    this.scheduleUpdate()
  }
  onDrawersRegistered = listener => {
    if (this.drawersRegistrationListener !== null) {
      console.warn(
        '[AwsUi] [runtime drawers] multiple app layout instances detected'
      )
    }
    this.drawersRegistrationListener = listener
    this.scheduleUpdate()
    return () => {
      this.drawersRegistrationListener = null
    }
  }
  clearRegisteredDrawers = () => {
    this.drawers = []
  }
  installPublic(api = {}) {
    api.registerDrawer ??= this.registerDrawer
    return api
  }
  installInternal(internalApi = {}) {
    internalApi.clearRegisteredDrawers ??= this.clearRegisteredDrawers
    internalApi.onDrawersRegistered ??= this.onDrawersRegistered
    return internalApi
  }
}

export {
  DrawersController
}
