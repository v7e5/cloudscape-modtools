import {useInternalI18n} from '../i18n/context'
import {getDateLabel, renderMonthAndYear} from './utils/intl'

const useCalendarLabels = ({
  granularity,
  locale,
  i18nStrings,
  previousMonthAriaLabel,
  nextMonthAriaLabel,
  todayAriaLabel
}) => {
  const i18n = useInternalI18n('calendar')
  const isMonthPicker = granularity === 'month'
  const previousButtonLabel = isMonthPicker
    ? i18n(
        'i18nStrings.previousYearAriaLabel',
        i18nStrings?.previousYearAriaLabel
      )
    : i18n(
        'previousMonthAriaLabel',
        i18nStrings?.previousMonthAriaLabel ?? previousMonthAriaLabel
      )
  const nextButtonLabel = isMonthPicker
    ? i18n('i18nStrings.nextYearAriaLabel', i18nStrings?.nextYearAriaLabel)
    : i18n(
        'nextMonthAriaLabel',
        i18nStrings?.nextMonthAriaLabel ?? nextMonthAriaLabel
      )
  const currentDateLabel = isMonthPicker
    ? i18n(
        'i18nStrings.currentMonthAriaLabel',
        i18nStrings?.currentMonthAriaLabel
      )
    : i18n('todayAriaLabel', i18nStrings?.todayAriaLabel ?? todayAriaLabel)
  const renderDate = date =>
    isMonthPicker
      ? date.toLocaleString(locale, {month: 'short'})
      : date.getDate().toString()
  const renderDateAnnouncement = (date, isCurrentDate) => {
    const formattedDate = isMonthPicker
      ? renderMonthAndYear(locale, date)
      : getDateLabel(locale, date, 'short')
    if (isCurrentDate && currentDateLabel) {
      return formattedDate + '. ' + currentDateLabel
    }
    return formattedDate
  }
  const renderHeaderText = date =>
    isMonthPicker
      ? date.getFullYear().toString()
      : renderMonthAndYear(locale, date)
  return {
    previousButtonLabel,
    nextButtonLabel,
    renderDate,
    renderDateAnnouncement,
    renderHeaderText
  }
}

export {
  useCalendarLabels as default
}
