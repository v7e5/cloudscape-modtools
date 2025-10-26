import {memo} from 'react'
import InternalBox from '../../box/internal'
import InternalSpaceBetween from '../../space-between/internal'
import styles from './styles.css.js'
import * as defaultFormatters from '../default-formatters'
import {FileOptionThumbnail} from './thumbnail'

const FileOption = memo(({file, metadata, i18nStrings}) => {
  const isImage = file.type.startsWith('image/')
  const formatFileSize =
    i18nStrings.formatFileSize ?? defaultFormatters.formatFileSize
  const formatFileLastModified =
    i18nStrings.formatFileLastModified ??
    defaultFormatters.formatFileLastModified
  return (
    <InternalBox className={styles['file-option']}>
      {metadata.showFileThumbnail && isImage && (
        <FileOptionThumbnail file={file} />
      )}
      <div className={styles['file-option-metadata']}>
        <InternalSpaceBetween direction='vertical' size='xxxs'>
          <InternalBox className={styles['file-option-name']}>
            {file.name}
          </InternalBox>
          {metadata.showFileSize && file.size ? (
            <InternalBox
              fontSize='body-s'
              color='text-body-secondary'
              className={styles['file-option-size']}>
              {formatFileSize(file.size)}
            </InternalBox>
          ) : null}
          {metadata.showFileLastModified && file.lastModified ? (
            <InternalBox
              fontSize='body-s'
              color='text-body-secondary'
              className={styles['file-option-last-modified']}>
              {formatFileLastModified(new Date(file.lastModified))}
            </InternalBox>
          ) : null}
        </InternalSpaceBetween>
      </div>
    </InternalBox>
  )
})

export {
  FileOption
}
