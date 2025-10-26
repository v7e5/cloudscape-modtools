import {getTestOptionIndexes} from '../../internal/components/options-list/utils/test-indexes'

const getItemProps = ({
  option,
  index,
  getOptionProps,
  filteringValue,
  checkboxes = false
}) => {
  const optionProps = getOptionProps(option, index)
  optionProps.filteringValue = filteringValue
  const {inGroupIndex, groupIndex, throughIndex} =
    getTestOptionIndexes(option) || {}
  return {
    ...optionProps,
    hasCheckbox: checkboxes,
    ['data-group-index']: groupIndex,
    ['data-child-index']: inGroupIndex,
    ['data-test-index']: throughIndex
  }
}

export {
  getItemProps
}
