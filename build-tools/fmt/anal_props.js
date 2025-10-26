#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const a = root.findAll('const $A = getAnalyticsMetadataProps($$$_X)')

  const b = a
    .flatMap(n => root.findAll(n.getMatch('A').text()))
    .map(n => (n.inside('{...$$$_X}')
      || (n.parent().kind() === 'spread_element'
        && n.parent().parent().kind() === 'jsx_expression'))
        ? n.parent().parent() : n)

  const c = root.findAll('getAnalyticsMetadataProps($$$_X)')

  const z = [...a, ...b, ...c]

  if (z.length === 0) {
    return
  }

  writeFileSync(
    _f,
    z.flat().reduce(_rdx, src.split('')).join('').replaceAll(delta, '')
  )
})(process.argv[2])
