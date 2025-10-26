#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _imp_st = root.findAll(_k.import_statement)
  const _exp_st = root.findAll(_k.export_statement)

  if (_imp_st.length === 0 && _exp_st.length === 0) {
    return
  }

  const _re =
    /(?:\binterfaces\b|\banalytics\b|\buse-performance-marks\b|\bcheck-safe-url\b|\bis-development\b|\bcheck-option-value-field\b|\btelemetry\b|\buse-latency-metrics\b|\bapply-display-name\b)/
  const _fl = n => _re.test(n.find(_k.string_fragment)?.text())
  src = _imp_st.filter(_fl).reduce(_rdx, src.split('')).join('')
  src = _exp_st.filter(_fl).reduce(_rdx, src.split('')).join('')

  const _re_fg = /(?:(\bindex\b)|((?:\bindex\b)?\.[^./]+))$/

  const _mp_fg = n => n.find(_k.string_fragment)
  const _fl_fg = n => {
    const t = n.text()
    return (
      t.indexOf('styles.css') === -1 &&
      t.indexOf('/') !== -1 &&
      t.indexOf('.') !== -1
    )
  }
  const _mp_fg_mt = n => [n, n.text().match(_re_fg)]
  const _fl_fg_mt = n => n[1] !== null
  const _mp_fg_rg = n => {
    const rg = n[0].range()
    return {
      range: () => ({
        start: {index: rg.start.index + n[1].index},
        end: {index: rg.end.index}
      })
    }
  }

  src = _imp_st
    .map(_mp_fg)
    .filter(_fl_fg)
    .map(_mp_fg_mt)
    .filter(_fl_fg_mt)
    .map(_mp_fg_rg)
    .reduce(_rdx, src.split(''))
    .join('')

  const _ex_toolkit = [
    'ComponentConfiguration',
    'ContainerQueryEntry',
    'initAwsUiVersions',
    'Metrics',
    'useComponentMetrics',
    'useRuntimeVisualRefresh',
    'warnOnce',
    'isDevelopment'
  ]

  const _rd_toolkit = (a, v) => {
    const ni = v
      .findAll(_k.named_imports)
      .flatMap(n => n.findAll(_k.identifier))
      .map(n => n.text())
      .filter(e => !_ex_toolkit.includes(e))

    if (ni.length === 0) {
      return a.replace(v.text(), '')
    }

    return a.replace(
      v.text(),
      () =>
        'import {' +
        ni.join(', ') +
        "} from '" +
        v
          .find(_k.string_fragment)
          .text()
          .replace(
            '@cloudscape-design/component-toolkit',
            '~/components/internal/toolkit'
          ) +
        "';"
    )
  }

  const _fl_toolkit = n =>
    n
      .find(_k.string_fragment)
      .text()
      .startsWith('@cloudscape-design/component-toolkit')

  writeFileSync(
    _f,
    _imp_st.filter(_fl_toolkit).reduce(_rd_toolkit, src).replaceAll(delta, '')
  )
})(process.argv[2])
