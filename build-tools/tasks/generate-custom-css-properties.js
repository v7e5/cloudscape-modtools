#!/usr/bin/node

const path = require('path')
const {writeFile} = require('../utils/files')
const {getHashDigest} = require('loader-utils')
const customCssPropertiesList = require('../../src/internal/generated/custom-css-properties/list')

const outputBasePath = path.join(
  __dirname,
  '../../src/internal/generated/custom-css-properties'
)

const hash = getHashDigest(
  Buffer.from(JSON.stringify(customCssPropertiesList)),
  'md5',
  'base36',
  6
)

const getHashedProperty = (property) => {
  return `--awsui-${property.replace(
    /[A-Z]/g,
    (m) => '-' + m.toLowerCase()
  )}-${hash}`
}

writeFile(
  path.join(outputBasePath, 'index.ts'),
  'const customCSSPropertiesMap = {\n' +
    customCssPropertiesList
      .map((property) => `  "${property}": "${getHashedProperty(property)}",`)
      .join('\n') +
    '\n};\nexport default customCSSPropertiesMap;'
)
writeFile(
  path.join(outputBasePath, 'index.scss'),
  `${customCssPropertiesList
    .map((property) => `$${property}: ${getHashedProperty(property)};`)
    .join('\n')}
    `
)
