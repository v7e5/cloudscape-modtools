import {getTrackableValue} from '../utils'

const SELECTION_ITEM = 'selection-item'
const SELECTION_ROOT = 'selection-root'
class ItemSet {
  constructor(trackBy, items) {
    this.trackBy = trackBy
    items.forEach(this.put)
  }
  trackBy
  map = new Map()
  put = item =>
    this.map.set.call(this.map, getTrackableValue(this.trackBy, item), item)
  has = item =>
    this.map.has.call(this.map, getTrackableValue(this.trackBy, item))
  forEach = this.map.forEach.bind(this.map)
}
const focusMarkers = {
  item: {['data-' + SELECTION_ITEM]: 'item'},
  all: {['data-' + SELECTION_ITEM]: 'all'},
  root: {['data-' + SELECTION_ROOT]: 'true'}
}

export {
  ItemSet,
  SELECTION_ITEM,
  SELECTION_ROOT,
  focusMarkers
}
