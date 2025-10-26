import debounce from '../../debounce'
import {sortByPriority} from '../helpers/utils'

class ActionButtonsController {
  listeners = []
  actions = []
  scheduleUpdate = debounce(() => {
    this.listeners.forEach(listener => listener(this.actions))
  }, 0)
  registerAction = action => {
    this.actions.push(action)
    this.actions = sortByPriority(this.actions)
    this.scheduleUpdate()
  }
  clearRegisteredActions = () => {
    this.actions = []
  }
  onActionRegistered = listener => {
    this.listeners.push(listener)
    this.scheduleUpdate()
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener)
    }
  }
  installPublic(api = {}) {
    api.registerAction ??= this.registerAction
    return api
  }
  installInternal(internalApi = {}) {
    internalApi.clearRegisteredActions ??= this.clearRegisteredActions
    internalApi.onActionRegistered ??= this.onActionRegistered
    return internalApi
  }
}

export {
  ActionButtonsController
}
