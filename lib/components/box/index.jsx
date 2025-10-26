import {memo} from 'react'
import InternalBox from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Box = memo(({variant = 'div', margin = {}, padding = {}, ...props}) => {
  const baseComponentProps = useBaseComponent('Box', {
    props: {
      color: props.color,
      display: props.display,
      float: props.float,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      textAlign: props.textAlign,
      variant
    }
  })
  return (
    <InternalBox
      variant={variant}
      margin={margin}
      padding={padding}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  Box as default
}
