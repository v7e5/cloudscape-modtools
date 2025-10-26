const getExternalProps = props => {
  const externalPropNames = Object.keys(props).filter(
    propName => propName.indexOf('__') !== 0
  )
  return externalPropNames.reduce((acc, propName) => {
    acc[propName] = props[propName]
    return acc
  }, {})
}

export {
  getExternalProps
}
