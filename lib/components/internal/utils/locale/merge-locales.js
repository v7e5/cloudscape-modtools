const mergeLocales = (locale, fullLocale) => {
  const isShort = locale.length === 2
  if (isShort && fullLocale.indexOf(locale) === 0) {
    return fullLocale
  }
  return locale
}

export {
  mergeLocales
}
