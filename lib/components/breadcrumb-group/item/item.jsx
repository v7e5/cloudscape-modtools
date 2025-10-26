import {useEffect, useRef, useState, memo} from 'react'
import {Link} from '@remix-run/react'
import InternalIcon from '../../icon/internal'
import styles from './styles.css.js'
import clsx from 'clsx'
import {fireCancelableEvent, isPlainLeftClick} from '../../internal/events'
import Tooltip from '../../internal/components/tooltip'
import {getEventDetail} from '../utils'

const BreadcrumbItemWithPopover = memo(
  ({item, isLast, anchorAttributes, ...itemAttributes}) => {
    const [showPopover, setShowPopover] = useState(false)
    const textRef = useRef(null)
    const virtualTextRef = useRef(null)
    const isTruncated = (textRef2, virtualTextRef2) => {
      if (
        !textRef2 ||
        !virtualTextRef2 ||
        !textRef2.current ||
        !virtualTextRef2.current
      ) {
        return false
      }
      const virtualTextWidth =
        virtualTextRef2.current.getBoundingClientRect().width
      const textWidth = textRef2.current.getBoundingClientRect().width
      if (virtualTextWidth > textWidth) {
        return true
      }
      return false
    }
    const popoverContent = <Tooltip trackRef={textRef} value={item.text} />
    useEffect(() => {
      const onKeyDown = event => {
        if (event.key === 'Escape') {
          setShowPopover(false)
        }
      }
      if (showPopover) {
        document.addEventListener('keydown', onKeyDown)
      }
      return () => {
        document.removeEventListener('keydown', onKeyDown)
      }
    }, [showPopover])
    return (
      <>
        <Item
          isLast={isLast}
          {...itemAttributes}
          onFocus={() => {
            isTruncated(textRef, virtualTextRef) && setShowPopover(true)
          }}
          onBlur={() => setShowPopover(false)}
          onMouseEnter={() => {
            isTruncated(textRef, virtualTextRef) && setShowPopover(true)
          }}
          onMouseLeave={() => setShowPopover(false)}
          anchorAttributes={anchorAttributes}>
          <span className={styles.text} ref={textRef}>
            {item.text}
          </span>
          <span className={styles['virtual-item']} ref={virtualTextRef}>
            {item.text}
          </span>
        </Item>
        {showPopover && popoverContent}
      </>
    )
  }
)
const Item = memo(({anchorAttributes, children, isLast, ...itemAttributes}) =>
  isLast ? (
    <span {...itemAttributes}>{children}</span>
  ) : (
    <Link {...itemAttributes} {...anchorAttributes}>
      {children}
    </Link>
  )
)
const BreadcrumbItem = memo(
  ({
    item,
    onClick,
    onFollow,
    isDisplayed,
    isLast = false,
    isCompressed = false
  }) => {
    const preventDefault = event => event.preventDefault()
    const onClickHandler = event => {
      if (isPlainLeftClick(event)) {
        fireCancelableEvent(onFollow, getEventDetail(item), event)
      }
      fireCancelableEvent(onClick, getEventDetail(item), event)
    }
    const itemAttributes = {
      className: clsx(styles.anchor, {[styles.compressed]: isCompressed})
    }
    const anchorAttributes = {
      to: item.to || '#',
      onClick: isLast ? preventDefault : onClickHandler
    }
    return (
      <div className={clsx(styles.breadcrumb, isLast && styles.last)}>
        {isDisplayed && isCompressed ? (
          <BreadcrumbItemWithPopover
            item={item}
            isLast={isLast}
            anchorAttributes={anchorAttributes}
            {...itemAttributes}
          />
        ) : (
          <Item
            isLast={isLast}
            anchorAttributes={anchorAttributes}
            {...itemAttributes}>
            <span className={styles.text}>{item.text}</span>
          </Item>
        )}
        {!isLast ? (
          <span className={styles.icon}>
            <InternalIcon name='angle-right' />
          </span>
        ) : null}
      </div>
    )
  }
)

export {
  BreadcrumbItem
}
