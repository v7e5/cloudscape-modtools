#!/usr/bin/node

const fs = require('fs');
const {writeFile} = require('../utils/files')

writeFile('lib/components/index.js', fs.readdirSync('lib/components')
  .filter(e => !['i18n', 'contexts', 'internal'].includes(e))
  .map(f => `export {default as ${
    f.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join('')
    }} from './${f}'`)
  .join('\n')
  .replace('Form', 'FormContainer')
)
