#!/usr/bin/node

const {readFileSync, writeFileSync} = require('node:fs')
const {tsx} = require('@ast-grep/napi')
const {delta, _rdx} = require('./util.js');
;
;(_f => {
  let src = readFileSync(_f, 'utf-8')
  const root = tsx.parse(src).root()

  writeFileSync(
    _f,
    [
      'warnOnce',
      'checkOptionValueField',
      'checkSafeUrl',
      'initAwsUiVersions',
      'sendDismissMetric',
      'sendRenderMetric',
      'sendToggleMetric',
      'usePerformanceMarks',
      'useTelemetry',
      'checkSafeUrlRecursively',
      'FunnelMetrics.$$$_X',
      'metrics.$$$_X',
      'useLatencyMetrics',
      'applyDisplayName'
    ]
      .flatMap(e => root.findAll(e + '($$$_X)'))
      .map(n => n.parent())
      .reduce(_rdx, src.split(''))
      .join('')
      .replaceAll(delta, '')
  )
})(process.argv[2])
