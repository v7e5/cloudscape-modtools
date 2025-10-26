import {useRef} from 'react'
import {fireNonCancelableEvent} from '../internal/events/'

const useLoadItems = (
  onLoadItems,
  focusFilteringText,
  currentFilteringProperty,
  currentFilteringText,
  currentFilteringOperator
) => {
  const focusIn = useRef(false)
  const handleBlur = () => {
    focusIn.current = true
  }
  const fireLoadItems = detail => {
    fireNonCancelableEvent(onLoadItems, {
      ...detail,
      filteringText: currentFilteringText ?? detail.filteringText ?? '',
      filteringProperty: currentFilteringProperty,
      filteringOperator: currentFilteringOperator
    })
    focusIn.current = false
  }
  const handleFocus = () => {
    if (focusIn.current) {
      fireLoadItems({
        firstPage: true,
        samePage: false,
        filteringText: focusFilteringText
      })
    }
  }
  const handleLoadItems = ({detail}) => fireLoadItems(detail)
  return {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onLoadItems: handleLoadItems
  }
}

export {
  useLoadItems
}
