#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _imp_st_fl = n => n.find(_k.string_fragment).text() === 'react'
  const _imp_st = root.findAll(_k.import_statement).filter(_imp_st_fl)

  if (_imp_st.length === 0) {
    return
  }

  const _r_rm_imp = (a, v) => a.replace(v.text(), '')
  src = _imp_st.reduce(_r_rm_imp, src)

  const _imp_qual = root.findAll('React.$X').map(e => e.getMatch('X').text())

  const _r_rm_qual = (a, v) => a.replace('React.' + v, () => v)
  src = _imp_qual.reduce(_r_rm_qual, src)

  writeFileSync(
    _f,
    'import {' +
      [
        ...new Set([
          ..._imp_st
            .flatMap(n => n.findAll(_k.named_imports))
            .flatMap(n => n.findAll(_k.identifier))
            .map(n => n.text()),
          ..._imp_qual
        ])
      ].join(', ') +
      "} from 'react'\n" +
      src
  )
})(process.argv[2])
