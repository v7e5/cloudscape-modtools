import msg from './messages/all.en.json'

const useInternalI18n = k => (j, o) => o ?? msg[k][j]

const useLocale = () => 'en-US'

export {
  useLocale,
  useInternalI18n
}
