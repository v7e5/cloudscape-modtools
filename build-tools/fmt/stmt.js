#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _fl = n => n.text().slice(1, -1).trim().length === 0

  let _stmt = root.findAll(_k.statement_block).filter(_fl)

  if (_stmt.length === 0) {
    return
  }

  const _ex = [
    'for_statement',
    'for_in_statement',
    'do_statement',
    'while_statement',
    'function_declaration',
    'else_clause',
    'if_statement'
  ]

  const _m = n => n.parent()
  const _fl_x = n => _ex.includes(n.kind())

  _stmt = _stmt.map(_m).filter(_fl_x)

  if (_stmt.length === 0) {
    return
  }

  const _mm = n => {
    if (n.kind() !== 'if_statement') {
      return n
    }
    const _p = n.parent()
    return _p.kind() === 'else_clause' ? _p : n
  }

  writeFileSync(
    _f,
    _stmt.map(_mm).reduce(_rdx, src.split('')).join('').replaceAll(delta, '')
  )
})(process.argv[2])
