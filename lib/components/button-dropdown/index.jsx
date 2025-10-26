import {forwardRef, memo} from 'react'
import InternalButtonDropdown from './internal'
import {getBaseProps} from '../internal/base-component'
import useBaseComponent from '../internal/hooks/use-base-component'

const ButtonDropdown = memo(
  forwardRef(
    (
      {
        items,
        variant = 'normal',
        loading = false,
        loadingText,
        disabled = false,
        expandableGroups = false,
        expandToViewport = false,
        ariaLabel,
        children,
        onItemClick,
        onItemFollow,
        mainAction,
        ...props
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('ButtonDropdown', {
        props: {expandToViewport, expandableGroups, variant}
      })
      const baseProps = getBaseProps(props)
      return (
        <InternalButtonDropdown
          {...baseProps}
          {...baseComponentProps}
          ref={ref}
          items={items}
          variant={variant}
          loading={loading}
          loadingText={loadingText}
          disabled={disabled}
          expandableGroups={expandableGroups}
          expandToViewport={expandToViewport}
          ariaLabel={ariaLabel}
          onItemClick={onItemClick}
          onItemFollow={onItemFollow}
          mainAction={mainAction}>
          {children}
        </InternalButtonDropdown>
      )
    }
  )
)

export {
  ButtonDropdown as default
}
