#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _imp_st = root
    .findAll(_k.import_statement)
    .filter(n =>
      n.find(_k.string_fragment).text().includes('check-controlled')
    )

  if (_imp_st.length === 0) {
    return
  }

  let _a_src = src.split('')

  _a_src = _imp_st.reduce(_rdx, _a_src)

  _a_src = _imp_st
    .map(n => n.find(_k.identifier).text())
    .flatMap(e => root.findAll(e + '($$$_A)'))
    .map(n => n.parent())
    .filter(n => n.kind() === 'expression_statement')
    .reduce(_rdx, _a_src)

  writeFileSync(_f, _a_src.join('').replaceAll(delta, ''))
})(process.argv[2])
