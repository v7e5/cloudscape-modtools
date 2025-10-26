import {formatTimeOffsetISO} from './format-time-offset'

const format_date_iso_default = ({
  date: isoDate,
  hideTimeOffset,
  isDateOnly,
  timeOffset
}) => {
  const formattedOffset =
    hideTimeOffset || isDateOnly
      ? ''
      : formatTimeOffsetISO(isoDate, timeOffset)
  return isoDate + formattedOffset
}

export {
  format_date_iso_default as default
}
