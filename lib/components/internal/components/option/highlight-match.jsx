import {memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'

const splitOnFiltering = (str, highlightText) => {
  if (highlightText.length > 1e5) {
    return {noMatches: [str], matches: null}
  }
  const filteringPattern = highlightText.replace(
    /[-[\]/{}()*+?.\\^$|]/g,
    '\\$&'
  )
  const regexp = new RegExp(filteringPattern, 'gi')
  const noMatches = str.split(regexp)
  const matches = str.match(regexp)
  return {noMatches, matches}
}
const Highlight = memo(({str}) =>
  str ? (
    <span className={clsx(styles['filtering-match-highlight'])}>{str}</span>
  ) : null
)
const HighlightMatch = memo(({str, highlightText}) => {
  if (!str || !highlightText) {
    return <span>{str}</span>
  }
  if (str === highlightText) {
    return <Highlight str={str} />
  }
  const {noMatches, matches} = splitOnFiltering(str, highlightText)
  const highlighted = []
  noMatches.forEach((noMatch, idx) => {
    highlighted.push(<span key={`noMatch-${idx}`}>{noMatch}</span>)
    if (matches && idx < matches.length) {
      highlighted.push(<Highlight key={`match-${idx}`} str={matches[idx]} />)
    }
  })
  return <span>{highlighted}</span>
})

export {
  HighlightMatch as default
}
