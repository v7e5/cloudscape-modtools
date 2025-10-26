const makeSlotId = (prop, formFieldId, propName) => {
  if (!prop) {
    return void 0
  }
  return `${formFieldId}-${propName}`
}
const getSlotIds = (
  formFieldId,
  label,
  description,
  constraintText,
  errorText,
  warningText
) => {
  const ids = {
    label: makeSlotId(label, formFieldId, 'label'),
    description: makeSlotId(description, formFieldId, 'description'),
    constraint: makeSlotId(constraintText, formFieldId, 'constraint'),
    error: makeSlotId(errorText, formFieldId, 'error'),
    warning: makeSlotId(warningText, formFieldId, 'warning')
  }
  return ids
}
const getAriaDescribedBy = ({error, warning, description, constraint}) => {
  const describedByAttributes = [
    error,
    warning,
    description,
    constraint
  ].filter(e => !!e)
  const describedBy = describedByAttributes.length
    ? describedByAttributes.join(' ')
    : void 0
  return describedBy
}
const getGridDefinition = (stretch, secondaryControlPresent, isRefresh) => {
  let columns
  if (stretch) {
    columns = [{colspan: 12}, {colspan: 12}]
  } else if (isRefresh) {
    columns = [
      {colspan: {default: 12, xs: 8}},
      {colspan: {default: 12, xs: 4}}
    ]
  } else {
    columns = [
      {colspan: {default: 12, xs: 9}},
      {colspan: {default: 12, xs: 3}}
    ]
  }
  if (!secondaryControlPresent) {
    return [columns[0]]
  }
  return columns
}

export {
  getAriaDescribedBy,
  getGridDefinition,
  getSlotIds
}
