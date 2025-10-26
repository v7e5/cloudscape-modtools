const attr = ['id', 'className', 'name', 'value', 'onKeyUp', 'onKeyDown']

const _f = e => e[0].startsWith('data-') || attr.includes(e[0])

const getBaseProps = props =>
  Object.fromEntries(Object.entries(props).filter(_f))

export {
  getBaseProps
}
