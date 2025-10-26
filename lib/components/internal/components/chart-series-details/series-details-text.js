import styles from './styles.css.js'
import expandabeleSectionHeaderStyles from '../../../expandable-section/styles.css.js'

const getSeriesDetailsText = element => {
  const elementsWithText = Array.from(
    element.querySelectorAll(
      `.${styles.announced},.${expandabeleSectionHeaderStyles.header}`
    )
  )
  return elementsWithText
    .map(element2 => {
      if (element2 instanceof HTMLElement) {
        return element2.innerText
          ?.split('\n')
          .map(s => s.trim())
          .join(' ')
          .trim()
      }
    })
    .filter(Boolean)
    .join(', ')
}

export {
  getSeriesDetailsText as default
}
