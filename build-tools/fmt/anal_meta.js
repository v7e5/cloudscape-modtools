#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const spip = root
    .findAll(_k.shorthand_property_identifier_pattern)
    .filter(e => e.text() === '__analyticsMetadata')
    .flatMap(e => {
      const p = e.parent()
      const n = p.next()
      return [p, ...(n.kind() === ',' ? [n] : [])]
    })

  const pi = root
    .findAll(_k.jsx_attribute)
    .filter(e => e.child(0).text() === '__analyticsMetadata')

  writeFileSync(_f, [spip, pi]
    .flat()
    .reduce(_rdx, src.split(''))
    .join('')
    .replaceAll(delta, '')
  )

})(process.argv[2])
