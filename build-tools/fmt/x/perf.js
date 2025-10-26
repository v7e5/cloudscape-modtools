#!/usr/bin/node
const cl = process.stdout.write;

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('../kind.js')
const {dump, closest} = require('../util.js');

const delta = 'Δ';

const time = (c, f, ...a) => {
  const start = performance.now();
  let i;
  for (i = 0; i < c; i++) {
    f(...a);
  }
  return performance.now() - start;
}

const loop = (s, n) => {
  let a = s.split('')
  let r;  let i =0;

  for(i = 0; i < n.length; i++) {
    r = n[i].range()
    a = a.fill(delta, r.start.index, r.end.index)
  }
  return a.join('')
}

const spl = (s, n) => {
  const a = s.split('')
  let d;  let l = 0;  let i = 0;

  for(i = 0; i < n.length; i++) {
    l = n[i].text().length
    d = new Array(l).fill(delta)
    
    a.splice(
      n[i].range()['start']['index'], l, ...d)
  }

  return a.join('')
}

const tospl = (s, n) => {
  let a = s.split('')
  let d;  let l = 0;  let i = 0;

  for(i = 0; i < n.length; i++) {
    l = n[i].text().length
    d = new Array(l).fill(delta)
    
    a = a.toSpliced(
      n[i].range()['start']['index'], l, ...d)
  }

  return a.join('')
}

const feach = (s, n) => {
  let a = s.split('')

  const f = e => {
    const r = e.range()
    a = a.fill(delta, r.start.index, r.end.index)
  }
  n.forEach(f)

  return a.join('')
}

const red = (s, n) => {
  const _rdx = (a, v) => {
    const r = v.range()
    return a.fill(delta, r.start.index, r.end.index)
  }
  return n.reduce(_rdx, s.split('')).join('')
}

const str = (s, n) => {
  let r; let i=0

  for(i = 0; i < n.length; i++) {
    r = n[i].range()
    s = s.slice(0, r.start.index)
      + delta.repeat(n[i].text().length)
      + s.slice(r.end.index)
  }

  return s
}


(() => {
  const _f = __dirname + '/a.tsx'
  const src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _imp_st = root.findAll(_k.import_statement)

  if(_imp_st.length === 0) {
    return
  }

  const _re = /(?:\binterfaces\b|\banalytics\b|\buse-performance-marks\b|\bcheck-safe-url\b|\bis-development\b|\bcheck-option-value-field\b|\btelemetry\b)/
  const _fl = n => _re.test(n.find(_k.string_fragment).text())
  const imp = _imp_st.filter(_fl)

  const cnt = 1000000

  const xt = []

  console.time('loop')
  xt.push(['loop', time(cnt, loop, src, imp) ])
  //loop(src, imp)
  console.timeEnd('loop')

  console.time('spl')
  xt.push(['spl', time(cnt, spl, src, imp) ])
  //spl(src, imp)
  console.timeEnd('spl')

  console.time('tospl')
  xt.push(['tospl', time(cnt, tospl, src, imp) ])
  //tospl(src, imp)
  console.timeEnd('tospl')

  console.time('feach')
  xt.push(['feach', time(cnt, feach, src, imp) ])
  //feach(src, imp)
  console.timeEnd('feach')

  console.time('red')
  xt.push(['red', time(cnt, red, src, imp) ])
  //red(src, imp)
  console.timeEnd('red')

  console.time('str')
  xt.push(['str', time(cnt, str, src, imp) ])
  //str(src, imp)
  console.timeEnd('str')

  //const xt = {
  //  loop  : time(cnt, loop, src, imp),
  //  spl   : time(cnt, spl, src, imp),
  //  tospl : time(cnt, tospl, src, imp),
  //  feach : time(cnt, feach, src, imp),
  //  red   : time(cnt, red, src, imp),
  //  str   : time(cnt, str, src, imp),
  //}

  cl(
    Object.fromEntries(
      xt.toSorted((a, b) => a[1] - b[1])
    )
  )


})()
