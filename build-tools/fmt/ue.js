#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _fl = n =>
    n.getMatch('A').find(_k.statement_block)?.text().slice(1, -1).trim()
      .length === 0
  const _ue = root.findAll('useEffect($A, $_X)').filter(_fl)

  if (_ue.length === 0) {
    return
  }

  const _m = n => closest(n, 'expression_statement')

  writeFileSync(
    _f,
    _ue.map(_m).reduce(_rdx, src.split('')).join('').replaceAll(delta, '')
  )
})(process.argv[2])
