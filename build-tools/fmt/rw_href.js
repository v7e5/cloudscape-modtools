#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')

;(_f => {
  const srx = 'href'
  const rpl = 'to'
  const offset = rpl.length - srx.length

  const rdx = (a, v, i) => {
    const r = v.range()
    return a.slice(0, r.start.index + (i * offset))
      + rpl + a.slice(r.end.index + (i * offset))
  }
  const _fl = n => n.text() === srx

  const rdo = (src, v) => {
    const root = tsx.parse(src).root()
    const h = root.findAll(_k[v]).filter(_fl)
    if(h.length === 0) {
      return src
    }

    return h.reduce(rdx, src)
  }

  writeFileSync(_f, [
    'identifier',
    'property_identifier',
    'shorthand_property_identifier',
    'shorthand_property_identifier_pattern',
  ].reduce(rdo, readFileSync(_f, 'utf-8')))
})(process.argv[2])
