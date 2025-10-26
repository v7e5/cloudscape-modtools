#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const mx = root.findAll('memo($X)')

  if (mx.length === 0) {
    return
  }

  const rd = (a, v) => a.replace(v.text(), () => v.getMatch('X').text())

  writeFileSync(_f, mx.reduce(rd, src))

})(process.argv[2])
