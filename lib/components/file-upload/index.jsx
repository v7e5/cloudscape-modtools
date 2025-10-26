import {forwardRef, memo} from 'react'
import InternalFileUpload from './internal'
import useBaseComponent from '../internal/hooks/use-base-component'
import {getExternalProps} from '../internal/utils/external-props'

const FileUpload = memo(
  forwardRef(
    (
      {
        multiple,
        showFileSize,
        showFileLastModified,
        showFileThumbnail,
        ...restProps
      },
      ref
    ) => {
      const baseComponentProps = useBaseComponent('FileUpload', {
        props: {
          multiple,
          showFileLastModified,
          showFileSize,
          showFileThumbnail,
          tokenLimit: restProps.tokenLimit
        }
      })
      const externalProps = getExternalProps(restProps)
      return (
        <InternalFileUpload
          ref={ref}
          multiple={multiple}
          showFileSize={showFileSize}
          showFileLastModified={showFileLastModified}
          showFileThumbnail={showFileThumbnail}
          {...externalProps}
          {...baseComponentProps}
        />
      )
    }
  )
)

export {
  FileUpload as default
}
