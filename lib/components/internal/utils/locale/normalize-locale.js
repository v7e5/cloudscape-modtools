import {mergeLocales} from './merge-locales'

const normalizeLocale = (component, locale) => {
  locale = checkLocale(component, locale)
  const browserLocale = getBrowserLocale()
  if (locale) {
    return mergeLocales(locale, browserLocale)
  }
  const htmlLocale = checkLocale(
    component,
    getHtmlElement()?.getAttribute('lang')
  )
  if (htmlLocale) {
    return mergeLocales(htmlLocale, browserLocale)
  }
  return browserLocale
}
const checkLocale = (component, locale) => {
  if (!locale || locale === '') {
    return ''
  }
  locale = locale && locale.replace(/^([a-z]{2})_/, '$1-')
  if (locale && !locale.match(/^[a-z]{2}(-[A-Z]{2})?$/)) {
    locale = ''
  }
  return locale
}
const getHtmlElement = () => {
  return typeof document !== 'undefined'
    ? document.querySelector('html')
    : null
}
const getBrowserLocale = () => {
  return new Intl.DateTimeFormat().resolvedOptions().locale
}

export {
  normalizeLocale
}
