import {useRef} from 'react'

const useAutosuggestLoadMore = ({options = [], statusType, onLoadItems}) => {
  const lastFilteringText = useRef(null)
  const fireLoadMore = ({firstPage, samePage, filteringText}) => {
    if (
      filteringText === void 0 ||
      lastFilteringText.current !== filteringText
    ) {
      if (filteringText !== void 0) {
        lastFilteringText.current = filteringText
      }
      onLoadItems({
        filteringText: lastFilteringText.current ?? '',
        firstPage,
        samePage
      })
    }
  }
  const fireLoadMoreOnScroll = () => {
    options.length > 0 &&
      statusType === 'pending' &&
      fireLoadMore({firstPage: false, samePage: false})
  }
  const fireLoadMoreOnRecoveryClick = () =>
    fireLoadMore({firstPage: false, samePage: true})
  const fireLoadMoreOnInputFocus = () =>
    fireLoadMore({firstPage: true, samePage: false, filteringText: ''})
  const fireLoadMoreOnInputChange = filteringText =>
    fireLoadMore({firstPage: true, samePage: false, filteringText})
  return {
    fireLoadMoreOnScroll,
    fireLoadMoreOnRecoveryClick,
    fireLoadMoreOnInputFocus,
    fireLoadMoreOnInputChange
  }
}

export {
  useAutosuggestLoadMore
}
