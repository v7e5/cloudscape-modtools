#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')

;(_f => {
  let src = readFileSync(_f ?? process.stdin.fd, 'utf-8')
  const root = tsx.parse(src).root()

  const exp = root.findAll('export {$$$X}')
  if (exp.length !== 1) {
    if(_f === undefined) {
      process.stdout.write(src)
    }
    return 
  }

  const r = exp[0].range()
  const fl = n => n.kind() === 'export_specifier'
  const mp  = n => n.text()

  const out = src.slice(0, r.start.index)  + `export {
  ${exp[0].getMultipleMatches('X')
    .filter(fl).map(mp).join(',\n  ')}
}` + ((exp[0].field('source') !== null)
      ? ' from ' + exp[0].field('source').text() : '')
  + src.slice(r.end.index)

  if(_f === undefined) {
    process.stdout.write(out)
  } else {
    writeFileSync(_f, out)
  }

})(process.argv[2])
