import {DrawersController} from './controllers/drawers'
import {ActionButtonsController} from './controllers/action-buttons'

const storageKey = Symbol.for('awsui-plugin-api')
const findUpApi = currentWindow => {
  try {
    if (currentWindow?.[storageKey]) {
      return currentWindow[storageKey]
    }
    if (!currentWindow || currentWindow.parent === currentWindow) {
      return void 0
    }
    return findUpApi(currentWindow.parent)
  } catch (ex) {
    return void 0
  }
}
const loadApi = () => {
  if (typeof window === 'undefined') {
    return installApi({})
  }
  const win = window
  const existingApi = findUpApi(win)
  win[storageKey] = installApi(existingApi ?? {})
  return win[storageKey]
}
const {awsuiPlugins, awsuiPluginsInternal} = loadApi()
const installApi = api => {
  api.awsuiPlugins ??= {}
  api.awsuiPluginsInternal ??= {}
  const appLayoutDrawers = new DrawersController()
  api.awsuiPlugins.appLayout = appLayoutDrawers.installPublic(
    api.awsuiPlugins.appLayout
  )
  api.awsuiPluginsInternal.appLayout = appLayoutDrawers.installInternal(
    api.awsuiPluginsInternal.appLayout
  )
  const alertActions = new ActionButtonsController()
  api.awsuiPlugins.alert = alertActions.installPublic(api.awsuiPlugins.alert)
  api.awsuiPluginsInternal.alert = alertActions.installInternal(
    api.awsuiPluginsInternal.alert
  )
  const flashbarActions = new ActionButtonsController()
  api.awsuiPlugins.flashbar = flashbarActions.installPublic(
    api.awsuiPlugins.flashbar
  )
  api.awsuiPluginsInternal.flashbar = flashbarActions.installInternal(
    api.awsuiPluginsInternal.flashbar
  )
  return api
}

export {
  awsuiPlugins,
  awsuiPluginsInternal,
  loadApi
}
