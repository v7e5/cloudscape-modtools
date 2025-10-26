const getMenuItemProps = ({disabled, parent, expanded}) => ({
  role: 'menuitem',
  'aria-disabled': disabled ? 'true' : void 0,
  'aria-haspopup': parent ? 'true' : void 0,
  'aria-expanded': expanded ? 'true' : parent ? 'false' : void 0
})
const getMenuItemCheckboxProps = ({disabled, checked}) => ({
  role: 'menuitemcheckbox',
  'aria-disabled': disabled ? 'true' : void 0,
  'aria-checked': checked ? 'true' : 'false'
})

export {
  getMenuItemCheckboxProps,
  getMenuItemProps
}
