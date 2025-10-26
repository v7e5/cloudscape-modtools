#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const h = [
    ...root.findAll('<a $$$A>$$$B</a>'),
    ...root.findAll('<a $$$A/>'),
  ]

  if(h.length === 0) {
    return
  }

  const l = root.findAll('Link')

  if(l.length !== 0) {
    const rdx = (a, v, i) => {
      const r = v.range()
      return a.slice(0, r.start.index) + 'XinK' + a.slice(r.end.index)
    }

    src = l.reduce(rdx, src)
  }

  const _m = e => e.text()
  const mrdx = (a, v) => {
    const mat = [
      v.getMultipleMatches('A'),
      v.getMultipleMatches('B'),
    ]

    return a.replace(v.text(), () => '<Link \n'
      + mat[0].map(_m).join('\n') + '\n'
      + ((mat[1].length === 0) ? '/>'
        : '>' + mat[1].map(_m).join('\n') + '\n</Link>'
      ))
  }

  writeFileSync(_f,
    "import {Link} from '@remix-run/react';\n" + h.reduce(mrdx, src))
})(process.argv[2])
