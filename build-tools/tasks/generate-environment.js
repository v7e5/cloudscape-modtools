#!/usr/bin/node

const path = require('path')
const {writeFile} = require('../utils/files')
const themes = require('../utils/themes')
const workspace = require('../utils/workspace')

const filepath = 'internal/environment'

themes.forEach(theme => {
  writeFile(path.join(theme.outputPath, filepath) + '.js',
`const PACKAGE_SOURCE ='${workspace.packageSource}';
const PACKAGE_VERSION = '${workspace.packageVersion}';
const THEME = '${theme.name}';
const ALWAYS_VISUAL_REFRESH = true;

export {
  PACKAGE_SOURCE,
  PACKAGE_VERSION,
  THEME,
  ALWAYS_VISUAL_REFRESH
}`)
})
