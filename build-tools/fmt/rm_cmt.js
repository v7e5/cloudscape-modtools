#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const cm = root.findAll(_k.comment)

  if(cm.length === 0) {
    return
  }

  writeFileSync(_f,
    cm.reduce(_rdx, src.split('')).join('').replaceAll(delta, '')
  )
})(process.argv[2])
