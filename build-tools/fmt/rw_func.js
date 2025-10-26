#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')

const rw_func_dec = src => {
  const root = tsx.parse(src).root()
  const fn = root
    .findAll('function $F($$$A) {$$$B}')
    .filter(n => !n.has('this'))

  if (fn.length === 0) {
    return src
  }

  const _r = (a, v) =>
    a.replace(
      v.text(),
      () =>
        `const ${v.getMatch('F').text()} = ${
          v.has('await ') ? 'async ' : ''
        }(${v
          .getMultipleMatches('A')
          .map(e => e.text())
          .join('')}) => {\n${v
          .getMultipleMatches('B')
          .map(e => e.text())
          .join('\n')}\n}`
    )

  return fn.reduce(_r, src)
}

const rw_func_exp = src => {
  const root = tsx.parse(src).root()
  const fn = root.findAll('function($$$A){$$$B}').filter(n => !n.has('this'))

  if (fn.length === 0) {
    return src
  }

  const _r = (a, v) =>
    a.replace(
      v.text(),
      () =>
        `${v.has('await') ? 'async ' : ''}(${v
          .getMultipleMatches('A')
          .map(e => e.text())
          .join('')}) => {\n${v
          .getMultipleMatches('B')
          .map(e => e.text())
          .join('\n')}\n}`
    )

  return fn.reduce(_r, src)
}
;(_f => {
  const out = [rw_func_dec, rw_func_exp].reduce(
    (a, v) => v(a),
    readFileSync(_f ?? process.stdin.fd, 'utf-8')
  )

  if (_f === undefined) {
    process.stdout.write(out)
  } else {
    writeFileSync(_f, out)
  }
})(process.argv[2])
