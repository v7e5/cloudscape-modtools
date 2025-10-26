import {memo} from 'react'
import InternalExpandableSection from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const ExpandableSection = memo(({variant = 'default', ...props}) => {
  const baseComponentProps = useBaseComponent('ExpandableSection', {
    props: {
      disableContentPaddings: props.disableContentPaddings,
      headingTagOverride: props.headingTagOverride,
      variant
    }
  })
  return (
    <InternalExpandableSection
      variant={variant}
      {...props}
      {...baseComponentProps}
    />
  )
})

export {
  ExpandableSection as default
}
