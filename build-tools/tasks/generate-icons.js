#!/usr/bin/node

const Svgo = require('svgo')
const fs = require('fs')
const path = require('path')
const {writeFile} = require('../utils/files')
const themes = require('../utils/themes')

const svopt = {
  plugins: [
    'preset-default',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{focusable: 'false'}, { 'aria-hidden': 'true' }]
      }
    }
  ]
}

themes.forEach(theme => writeFile(
  path.join(theme.outputPath, '/icon/icons.js'), 'export default '
    + JSON.stringify(Object.fromEntries(
        fs.readdirSync('themes/icons/')
          .filter(e => path.extname(e).toLowerCase() == '.svg')
          .map(e => [
              path.parse(e).name, Svgo.optimize(
              fs.readFileSync('themes/icons/' + e, 'utf-8'),svopt)['data']
            ])))
        .replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'))
)
