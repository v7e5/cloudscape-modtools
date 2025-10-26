#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const m0 = e => root.findAll(e)
  const m1 = n => {
    const e = closest(n, 'import_specifier') ?? closest(n, 'export_specifier')

    if (e !== undefined) {
      const _n = e.next()
      return [e, ...(_n?.kind() === ',' ? [_n] : [])]
    }
  }
  const f0 = e => e !== undefined

  writeFileSync(
    _f,
    [
      'SplitPanelProviderProps',
      'FormFieldValidationControlProps',
      'SelectionControlProps',
      'StatusIndicatorProps',
      'StickyColumnsModel'
    ]
      .flatMap(m0)
      .flatMap(m1)
      .filter(f0)
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
