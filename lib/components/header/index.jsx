import {memo} from 'react'
import InternalHeader from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Header = memo(({variant = 'h2', ...props}) => {
  const baseComponentProps = useBaseComponent('Header', {
    props: {headingTagOverride: props.headingTagOverride, variant}
  })
  return (
    <InternalHeader variant={variant} {...props} {...baseComponentProps} />
  )
})

export {
  Header as default
}
