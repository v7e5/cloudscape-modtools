import {memo, useEffect, useRef} from 'react'
import {getTextWidth} from './responsive-text-utils'
import {getIsRtl} from '~/components/internal/toolkit/internal'

const ResponsiveText = memo(({x, y, className, children, maxWidth}) => {
  const textRef = useRef(null)
  useEffect(() => {
    const isRtl = getIsRtl(textRef.current)
    renderTextContent(textRef.current, children, maxWidth, isRtl)
  }, [maxWidth, children])
  return (
    <text
      ref={textRef}
      x={x}
      y={y}
      style={{textAnchor: 'end'}}
      className={className}>
      {children}
    </text>
  )
})

const renderTextContent = (textNode, text, maxWidth, isRtl) => {
  let visibleLength = text.length
  while (visibleLength >= 0) {
    textNode.textContent = truncateText(text, visibleLength, isRtl)
    if (getTextWidth(textNode) <= maxWidth) {
      return
    } else {
      visibleLength--
    }
  }
}
const truncateText = (text, maxLength, isRtl) => {
  if (text.length === maxLength) {
    return text
  }
  if (isRtl) {
    return text.slice(text.length - maxLength) + '\u2026'
  }
  return text.slice(0, maxLength) + '\u2026'
}

export {
  ResponsiveText as default,
  renderTextContent
}
