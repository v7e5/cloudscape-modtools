const awsuiGlobalFlagsSymbol = Symbol.for('awsui-global-flags')
const getTopWindow = () => {
  return window.top
}
const getGlobal = () => {
  return typeof window !== 'undefined' ? window : globalThis
}
const readFlag = (window2, flagName) => {
  const holder = window2
  return holder?.[awsuiGlobalFlagsSymbol]?.[flagName]
}
const getGlobalFlag = flagName => {
  try {
    const ownFlag = readFlag(getGlobal(), flagName)
    if (ownFlag !== void 0) {
      return ownFlag
    }
    return readFlag(getTopWindow(), flagName)
  } catch (e) {
    return void 0
  }
}

export {
  awsuiGlobalFlagsSymbol,
  getGlobalFlag,
  getTopWindow
}
