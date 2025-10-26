#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const _k = require('./kind.js')
const {closest} = require('./util.js')
const {delta, _rdx} = require('./util.js')

;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  const _m = e => {
    const out = []
    const ass = root
      .findAll(e + '($$$_X)')
      .map(n => closest(n, 'lexical_declaration'))

    out.push(ass)

    const _idents = ass.flatMap(n =>
      n.findAll(_k.shorthand_property_identifier_pattern)
    )

    const {sans_fn, avec_fn} = (o => {
      const _m = {
        required_parameter: 'avec_fn',
        arrow_function: 'avec_fn'
      }
      const _g = n => _m[n.kind()] ?? 'sans_fn'

      const _o = Object.groupBy(
        o.flatMap(n => root.findAll(n.text())).map(n => n.parent()),
        _g
      )

      return {
        sans_fn: _o?.sans_fn,
        avec_fn: _o?.avec_fn?.map(
          n =>
            closest(n, 'function_declaration') ??
            closest(n, 'lexical_declaration')
        )
      }
    })(_idents ?? [])
    out.push(avec_fn)

    const {sans_hook, avec_hook} = (o => {
      const _m = {
        required_parameter: 'avec_fn',
        arrow_function: 'avec_fn'
      }
      const _g = n =>
        closest(closest(n, 'array'), 'expression_statement')
          ?.find(_k.identifier)
          .text() === 'useEffect'
          ? 'avec_hook'
          : 'sans_hook'

      const _o = Object.groupBy(o, _g)

      return {
        sans_hook: _o?.sans_hook,
        avec_hook: _o?.avec_hook?.map(n =>
          closest(closest(n, 'array'), 'expression_statement')
        )
      }
    })(sans_fn ?? [])
    out.push(avec_hook)

    const {sans_jsx, avec_jsx} = (o => {
      const _m = {
        jsx_attribute: 'avec_jsx',
        jsx_expression: 'avec_jsx'
      }
      const _g = n => _m[n.kind()] ?? 'sans_jsx'

      return Object.groupBy(
        o.map(
          n => closest(n, 'jsx_attribute') ?? closest(n, 'jsx_expression') ?? n
        ),
        _g
      )
    })(sans_hook ?? [])
    out.push(avec_jsx)

    const {sans_prop, avec_prop} = (o => {
      const _m = {
        spread_element: 'avec_prop',
        pair: 'avec_prop'
      }
      const _g = n => _m[n.kind()] ?? 'sans_prop'

      const _o = Object.groupBy(o, _g)

      return {
        sans_prop: _o?.sans_prop,
        avec_prop: _o?.avec_prop?.flatMap(n => {
          const _n = n.next()
          return [n, ...(_n.kind() === ',' ? [_n] : [])]
        })
      }
    })(sans_jsx ?? [])
    out.push(avec_prop)

    const {sans_cond, avec_cond} = (o => {
      const _m = {
        if_statement: 'avec_cond',
        else_clause: 'avec_cond'
      }
      const _g = n => _m[n.kind()] ?? 'sans_cond'

      return Object.groupBy(
        o.map(
          n =>
            closest(closest(n, 'parenthesized_expression'), 'else_clause') ??
            closest(closest(n, 'parenthesized_expression'), 'if_statement') ??
            n
        ),
        _g
      )
    })(sans_prop ?? [])
    out.push(avec_cond)

    const _ex_spi = _idents.map(n => n.text())
    out.push(
      root
        .findAll(_k.shorthand_property_identifier)
        ?.filter(n => _ex_spi.includes(n.text()))
    )

    out.push(
      root
        .findAll(_k.pair)
        ?.filter(n => _ex_spi.includes(n.find(_k.property_identifier)?.text()))
    )

    return out.flat()
  }

  writeFileSync(
    _f,
    ['useFunnel', 'useFunnelNameSelector', 'useFunnelStep', 'useFunnelSubStep']
      .flatMap(_m)
      .filter(n => n !== undefined)
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
