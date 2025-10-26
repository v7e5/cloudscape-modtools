import {memo} from 'react'
import {InternalContainerAsSubstep} from '../container/internal'

const ExpandableSectionContainer = memo(
  ({
    className,
    children,
    header,
    variant,
    expanded,
    disableContentPaddings,
    __internalRootRef,
    ...rest
  }) => {
    if (variant === 'container' || variant === 'stacked') {
      return (
        <InternalContainerAsSubstep
          {...rest}
          className={className}
          header={header}
          variant={variant === 'stacked' ? 'stacked' : 'default'}
          disableContentPaddings={disableContentPaddings || !expanded}
          disableHeaderPaddings={true}
          __hiddenContent={!expanded}
          __internalRootRef={__internalRootRef}>
          {children}
        </InternalContainerAsSubstep>
      )
    }
    return (
      <div className={className} {...rest} ref={__internalRootRef}>
        {header}
        {children}
      </div>
    )
  }
)

export {
  ExpandableSectionContainer
}
