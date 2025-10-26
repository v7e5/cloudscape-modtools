import {memo} from 'react'
import styles from './styles.css.js'
import LiveRegion from '../internal/components/live-region'

const LIVE_REGION_DELAY = 2e3
const SearchResults = memo(({id, children}) => {
  return (
    <span className={styles.results}>
      <LiveRegion delay={LIVE_REGION_DELAY} visible={true}>
        <span id={id}>{children}</span>
      </LiveRegion>
    </span>
  )
})

export {
  SearchResults
}
