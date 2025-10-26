import {forwardRef, memo} from 'react'
import useBaseComponent from '../internal/hooks/use-base-component'
import InternalLink from './internal'

const Link = memo(
  forwardRef(
    (
      {fontSize = 'body-m', color = 'normal', external = false, ...props},
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Link', {
        props: {
          color,
          external,
          fontSize,
          rel: props.rel,
          target: props.target,
          variant: props.variant
        }
      })
      return (
        <InternalLink
          fontSize={fontSize}
          color={color}
          external={external}
          {...props}
          {...baseComponentProps}
          ref={ref}
        />
      )
    }
  )
)

export {
  Link as default
}
