#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')

;(_f => {
  const root = tsx.parse(readFileSync(_f, 'utf-8')).root()

  writeFileSync(_f, `const KeyCode = ${
  JSON.stringify(
    Object.fromEntries(
      root.findAll(_k.enum_assignment)
        .map(kv => [kv.field('name').text(), +kv.field('value').text()])
    ), null, 2
  )}

export {
  KeyCode
}`)

})(process.argv[2])
