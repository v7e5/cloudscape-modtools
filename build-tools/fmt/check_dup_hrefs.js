#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const x = root.find('export function checkDuplicateHrefs($$$_X){$$$_X}')

  if (x === null) {
    return
  }

  writeFileSync(_f, src.replace(x.text(), () => ''))
})(process.argv[2])
