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
    const a = root.findAll(e)

    return [
      a.map(n =>
        closest(closest(n, 'call_expression'), 'expression_statement')
      ),

      a.map(n => closest(n, 'type_arguments')),

      a.map(n => closest(n, 'jsx_attribute') ?? closest(n, 'jsx_expression')),

      a.map(n =>
        closest(
          closest(closest(n, 'subscript_expression'), 'assignment_expression'),
          'expression_statement'
        )
      ),

      a.flatMap(n => {
        const _p = closest(closest(n, 'computed_property_name'), 'pair')
        const _n = _p?.next()
        return [_p, ...(_n?.kind() === ',' ? [_n] : [])]
      }),

      a.map(n =>
        closest(closest(n, 'assignment_expression'), 'expression_statement')
      ),

      root
        .findAll(_k.property_identifier)
        .filter(n => n.text() === e)
        .map(
          n => closest(n, 'property_signature') ?? closest(n, 'jsx_attribute')
        )
        .flatMap(n => {
          const _n = n.next()
          return [n, ...(_n.kind() === ';' ? [_n] : [])]
        }),

      root
        .findAll(_k.shorthand_property_identifier_pattern)
        .filter(n => n.text() === e)
        .flatMap(n => {
          const _n = n.next()
          return [n, ...(_n.kind() === ',' ? [_n] : [])]
        })
    ].flat()
  }

  writeFileSync(
    _f,
    [
      'useFunnelSubStep',
      'getFieldSlotSeletor',
      'funnelNextOrSubmitAttempt',
      'funnelSubmit',
      'funnelAttributes',
      'analyticsAttributes',
      'DATA_ATTR_ANALYTICS_ALERT',
      'DATA_ATTR_ANALYTICS_FLASHBAR',
      'DATA_ATTR_FIELD_ERROR',
      'DATA_ATTR_FIELD_LABEL',
      'DATA_ATTR_FUNNEL_KEY',
      'DATA_ATTR_FUNNEL_VALUE',
      'FUNNEL_KEY_FUNNEL_NAME',
      'FUNNEL_KEY_SUBSTEP_NAME',
      'funnelNameSelector ',
      'funnelType',
      'funnelNameSelectors',
      '__funnelSubStepProps',
      '__subStepRef',
    ]
      .flatMap(_m)
      .filter(n => n !== undefined)
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
