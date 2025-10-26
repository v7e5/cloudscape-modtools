import {memo} from 'react'
import styles from './styles.css.js'
import LiveRegion from '../../internal/components/live-region'
import {applyTrackBy} from '../utils'

const ItemsLoader = memo(
  ({
    item,
    loadingStatus,
    renderLoaderPending,
    renderLoaderLoading,
    renderLoaderError,
    trackBy
  }) => {
    let content = null
    if (loadingStatus === 'pending' && renderLoaderPending) {
      content = renderLoaderPending({item})
    } else if (loadingStatus === 'loading' && renderLoaderLoading) {
      content = (
        <LiveRegion visible={true}>{renderLoaderLoading({item})}</LiveRegion>
      )
    } else if (loadingStatus === 'error' && renderLoaderError) {
      content = (
        <LiveRegion visible={true}>{renderLoaderError({item})}</LiveRegion>
      )
    }
    let parentTrackId = item && trackBy ? applyTrackBy(trackBy, item) : void 0
    parentTrackId = typeof parentTrackId === 'string' ? parentTrackId : void 0
    return (
      <div
        data-root={item ? 'false' : 'true'}
        data-parentrow={parentTrackId}
        className={styles['items-loader']}>
        {content}
      </div>
    )
  }
)

export {
  ItemsLoader
}
