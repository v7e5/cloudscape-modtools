#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest, delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _fl = n => {
    const j =  n.find(_k.jsx_element) ??
      n.find(_k.jsx_self_closing_element) ?? n.find(_k.jsx_fragment)

    const k = n.ancestors()
      .find(n => n.kind() === 'variable_declarator')?.field('name').text()

    return ((j !== null)
      && (k !== undefined)
      && (k[0].toUpperCase() === k[0])
      && !n.inside('$$$_X.map($$$_X)')
      && !n.inside('$$$_X.forEach($$$_X)')
      && !n.inside('<$$$_X>{$$$_X}</$$$X>')
      && !n.inside('<>{$$$_X}</>')
    )
  }
  const af = root.findAll(_k.arrow_function).filter(_fl)

  if(af.length === 0) {
    return
  }

  const rd = (a, v) => a.replace(v.text(), () => 'memo(' + v.text() + ')\n')
  const mp = n => n.inside('forwardRef($$$_X)') ?
    closest(n, 'call_expression') : n
  src = af.map(mp).reduce(rd, src)

  let react_imp_s = ''
  const _imp_fl = n => n.field('source')
    .find(_k.string_fragment).text() === 'react'
  const react_imp = root.findAll(_k.import_statement).filter(_imp_fl)

  if(react_imp.length === 0) {
    react_imp_s = "import {memo} from 'react';\n"
  } else {
    react_imp_s = 'import {' +
      [...new Set([
        ...react_imp.map(n => n.find(_k.named_imports)).filter(n => n !== null)
          .flatMap(n => n.findAll(_k.import_specifier))
          .map(n => n.text()), 'memo'])
      ].join(', ') + "} from 'react';"

    src = react_imp.reduce(_rdx, src.split('')).join('').replaceAll(delta, '')
  }

  writeFileSync(_f, react_imp_s + src)
})(process.argv[2])
