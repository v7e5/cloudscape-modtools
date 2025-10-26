import {memo} from 'react'

const ResizeHandleIcon = memo(({className}) => {
  return (
    <svg
      focusable={false}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      aria-hidden={true}>
      <line strokeWidth='2' x1='2' y1='5' x2='14' y2='5' />
      <line strokeWidth='2' x1='14' y1='10' x2='2' y2='10' />
    </svg>
  )
})

export {
  ResizeHandleIcon as default
}
