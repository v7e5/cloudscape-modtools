#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _em = n => ({
      name: n.field('name').text(),
      alias: n.field('alias')?.text()
    })
  const exports = root.findAll(_k.export_specifier).map(_em)
  const _ex_names = exports.map(e => e.name)

  const _vf = n => (
    _ex_names.includes(n.getMatch('K').text()) &&
    (n.getMatch('V').kind() === 'identifier')
  )

  const vars = root.findAll('var $K = $V').filter(_vf)

  if (vars.length === 0) {
    return
  }

  const _vm = n => [n.getMatch('K').text(), n.getMatch('V').text()]
  const vars_kv = Object.fromEntries(vars.map(_vm))

  src = [...vars, root.find(_k.export_statement)]
    .reduce(_rdx, src.split('')).join('').replaceAll(delta, '')

  const _m = e => (vars_kv[e.name] ?? e.name)
    + ((e.alias !== undefined) ?  ' as ' + e.alias : '')

  writeFileSync(_f, src + `
export {
  ${exports.map(_m).join(',\n  ')}
}`)

})(process.argv[2])
