#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const fr_fil = n => n.getMatch('X').kind() === 'identifier'
  const fr = root.findAll('forwardRef($X)').filter(fr_fil)

  if(fr.length === 0) {
    return
  }

  const rd = (a, v) => a.replace(v.text(), () => v.getMatch('X').text())
  const rdx = (a, v) => a.replace(
    v.text(), () => 'forwardRef(' + v.text() + ')\n'
  )
  const mp = n => root.find(
    'const ' + n.getMatch('X').text() + ' = $$$X').getMultipleMatches('X')

  writeFileSync(_f, fr.flatMap(mp).reduce(rdx, fr.reduce(rd, src)))
})(process.argv[2])
