import {useEffect, useState, memo} from 'react'
import styles from './styles.css.js'

const FileOptionThumbnail = memo(({file}) => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    if (URL.createObjectURL) {
      const src = URL.createObjectURL(file)
      setImageSrc(src)
      return () => {
        URL.revokeObjectURL(src)
      }
    }
  }, [file])
  return (
    <div className={styles['file-option-thumbnail']} aria-hidden={true}>
      <img
        className={styles['file-option-thumbnail-image']}
        alt={file.name}
        src={imageSrc}
      />
    </div>
  )
})

export {
  FileOptionThumbnail
}
