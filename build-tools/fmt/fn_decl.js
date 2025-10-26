#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  writeFileSync(
    _f,
    ['checkColumnWidths', 'checkSortingState', 'checkSafeUrlRecursively']
      .flatMap(e => root.findAll(e))
      .filter(n => n.parent().kind() === 'function_declaration')
      .map(n =>
        n.parent().parent().kind() === 'export_statement'
          ? n.parent().parent()
          : n.parent()
      )
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
