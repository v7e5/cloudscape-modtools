import {useRef} from 'react'
import {fireNonCancelableEvent} from '../../internal/events'

const useLoadItems = ({onLoadItems, options, statusType}) => {
  const prevFilteringText = useRef(void 0)
  const fireLoadItems = filteringText => {
    if (prevFilteringText.current === filteringText) {
      return
    }
    prevFilteringText.current = filteringText
    fireNonCancelableEvent(onLoadItems, {
      filteringText,
      firstPage: true,
      samePage: false
    })
  }
  const handleLoadMore = () => {
    const firstPage = options.length === 0
    statusType === 'pending' &&
      fireNonCancelableEvent(onLoadItems, {
        firstPage,
        samePage: false,
        filteringText: prevFilteringText.current || ''
      })
  }
  const handleRecoveryClick = () =>
    fireNonCancelableEvent(onLoadItems, {
      firstPage: false,
      samePage: true,
      filteringText: prevFilteringText.current || ''
    })
  return {
    fireLoadItems,
    handleLoadMore,
    handleRecoveryClick
  }
}

export {
  useLoadItems
}
