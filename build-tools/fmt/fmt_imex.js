#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _imp_st = root.findAll(_k.import_statement)
  const _exp_st = root.findAll(_k.export_statement)

  if (_imp_st.length === 0 && _exp_st.length === 0) {
    return
  }

  src = [..._imp_st, ..._exp_st].reduce(_rdx, src.split('')).join('')

  const _m = n => n.text()

  writeFileSync(_f, (
    _imp_st.map(_m).join('\n')
    + '\n\n' + src + '\n\n'
    + _exp_st.map(_m).join('\n'))
    .replaceAll(delta, ''))

})(process.argv[2])
