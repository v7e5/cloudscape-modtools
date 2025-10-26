const BREAKPOINT_MAPPING = [
  ['xl', 1840],
  ['l', 1320],
  ['m', 1120],
  ['s', 912],
  ['xs', 688],
  ['xxs', 465],
  ['default', -1]
]
const mobileBreakpoint = BREAKPOINT_MAPPING.filter(b => b[0] === 'xs')[0][1]
const BREAKPOINTS_DESCENDING = BREAKPOINT_MAPPING.map(([bp]) => bp)
const matchBreakpointMapping = (subset, actual) => {
  const qualifyingBreakpoints = BREAKPOINT_MAPPING.slice(
    BREAKPOINTS_DESCENDING.indexOf(actual)
  )
  for (const [breakpoint] of qualifyingBreakpoints) {
    const breakpointValue = subset[breakpoint]
    if (breakpointValue !== void 0) {
      return breakpointValue
    }
  }
  return null
}
const getMatchingBreakpoint = (width, breakpointFilter) => {
  for (const [breakpoint, breakpointWidth] of BREAKPOINT_MAPPING) {
    if (
      width > breakpointWidth &&
      (!breakpointFilter || breakpointFilter.indexOf(breakpoint) !== -1)
    ) {
      return breakpoint
    }
  }
  return 'default'
}
const getBreakpointValue = breakpoint => {
  return BREAKPOINT_MAPPING.find(bp => bp[0] === breakpoint)[1]
}

export {
  getBreakpointValue,
  getMatchingBreakpoint,
  matchBreakpointMapping,
  mobileBreakpoint
}
