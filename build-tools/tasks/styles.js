#!/usr/bin/node

const {
  buildThemedComponentsInternal
} = require('@cloudscape-design/theming-build/internal')
const {join, basename} = require('path')
const themes = require('../utils/themes')
const workspace = require('../utils/workspace')

const rootDir = join(__dirname, '../../')

const getTheme = themePath =>
  require(join(rootDir, workspace.compiledStyleDictionary, themePath)).default

themes.map(async theme => {
  const designTokensOutputDir = join(
    workspace.targetPath,
    theme.designTokensDir
  )
  const primary = getTheme(theme.primaryThemePath)
  const secondary = theme.secondaryThemePaths
    ? theme.secondaryThemePaths.map((path) => getTheme(path))
    : []

  const styleDictionaryName = basename(theme.primaryThemePath)

  const metadata = require(join(
    rootDir,
    `${workspace.compiledStyleDictionary}/${styleDictionaryName}/metadata`
  )).default
  const exposed = []
  const themeable = []
  const variablesMap = {}
  const descriptions = {};

  Object.entries(metadata).forEach(([token, meta]) => {
    if (meta.public) {
      exposed.push(token)
    }
    if (meta.themeable) {
      themeable.push(token)
    }
    if (meta.sassName) {
      variablesMap[token] = meta.sassName.substring(1)
    }
    if (meta.description) {
      descriptions[token] = meta.description;
    }
  })

  await buildThemedComponentsInternal({
    primary,
    secondary,
    exposed,
    themeable,
    variablesMap,
    scssDir: workspace.sourcePath,
    componentsOutputDir: theme.outputPath,
    skip: designTokensOutputDir ? [] : ['design-tokens'],
    designTokensOutputDir,
    designTokensFileName: theme.designTokensOutput,
    descriptions,
    jsonSchema: true
  })
})
