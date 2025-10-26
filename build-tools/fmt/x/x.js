#!/usr/bin/node
const cl = console.log
const wl = s => process.stdout.write(s.toString())

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('../kind.js')
const {closest, dump, delta, _rdx} = require('../util.js')
const {produce, nothing} = require('immer')

const _nf = n => n !== undefined
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

  cl(
    [spip, pi].flat()
    .reduce(_rdx, src.split(''))
    .join('')
  )


})(__dirname + '/a.tsx')
