#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _m = e =>
    root
      .findAll(e)
      .filter(n => n.parent().kind() === 'variable_declarator')
      .map(n => closest(n, 'lexical_declaration'))

  writeFileSync(
    _f,
    ['funnelAttributes', 'analyticsAttributes']
      .flatMap(_m)
      .filter(n => n !== undefined)
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
