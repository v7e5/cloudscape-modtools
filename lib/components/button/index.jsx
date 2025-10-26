import {forwardRef, memo} from 'react'
import {getBaseProps} from '../internal/base-component'
import {InternalButton} from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'

const Button = memo(
  forwardRef(
    (
      {
        children,
        iconName,
        iconAlign = 'left',
        iconUrl,
        iconSvg,
        iconAlt,
        variant = 'normal',
        loading = false,
        loadingText,
        disabled = false,
        wrapText = true,
        to,
        target,
        rel,
        download,
        formAction = 'submit',
        ariaLabel,
        ariaDescribedby,
        onClick,
        onFollow,
        ariaExpanded,
        ariaControls,
        fullWidth,
        form,
        ...props
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('Button', {
        props: {
          formAction,
          fullWidth,
          iconAlign,
          iconName,
          rel,
          target,
          variant,
          wrapText
        }
      })
      const baseProps = getBaseProps(props)
      return (
        <InternalButton
          {...baseProps}
          {...baseComponentProps}
          ref={ref}
          iconName={iconName}
          iconAlign={iconAlign}
          iconUrl={iconUrl}
          iconSvg={iconSvg}
          iconAlt={iconAlt}
          variant={variant}
          loading={loading}
          loadingText={loadingText}
          disabled={disabled}
          wrapText={wrapText}
          to={to}
          target={target}
          rel={rel}
          download={download}
          formAction={formAction}
          ariaLabel={ariaLabel}
          ariaDescribedby={ariaDescribedby}
          onClick={onClick}
          onFollow={onFollow}
          ariaExpanded={ariaExpanded}
          ariaControls={ariaControls}
          fullWidth={fullWidth}
          form={form}>
          {children}
        </InternalButton>
      )
    }
  )
)

export {
  Button as default
}
