import {memo} from 'react'
import clsx from 'clsx'
import InternalIcon from '../icon/internal'
import InternalSpinner from '../spinner/internal'
import styles from './styles.css.js'

const getIconAlign = props => {
  const standalone =
    props.variant === 'icon' || props.variant === 'inline-icon'
  return standalone ? 'left' : props.iconAlign
}
const IconWrapper = memo(
  ({iconName, iconUrl, iconAlt, iconSvg, iconSize, badge, ...props}) => {
    if (!iconName && !iconUrl && !iconSvg) {
      return null
    }
    return (
      <InternalIcon
        className={clsx(
          styles.icon,
          styles[`icon-${getIconAlign(props)}`],
          props.iconClass
        )}
        name={iconName}
        url={iconUrl}
        svg={iconSvg}
        alt={iconAlt}
        size={iconSize}
        badge={badge}
      />
    )
  }
)

const LeftIcon = memo(props => {
  if (props.loading) {
    return (
      <InternalSpinner className={clsx(styles.icon, styles['icon-left'])} />
    )
  } else if (getIconAlign(props) === 'left') {
    return <IconWrapper {...props} />
  }
  return null
})

const RightIcon = memo(props => {
  if (getIconAlign(props) === 'right') {
    return <IconWrapper {...props} />
  }
  return null
})

export {
  LeftIcon,
  RightIcon
}
