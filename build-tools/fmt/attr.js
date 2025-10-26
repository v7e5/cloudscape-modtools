#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _ex_attr = [
    'data-awsui-referrer-id',
  ]

  writeFileSync(
    _f,
    root
      .findAll(_k.jsx_attribute)
      .filter(n => _ex_attr.includes(n.find(_k.property_identifier).text()))
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
