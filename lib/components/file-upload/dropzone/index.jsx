import {useEffect, useState, memo} from 'react'
import styles from './styles.css.js'
import clsx from 'clsx'
import InternalIcon from '../../icon/internal'

const useDropzoneVisible = multiple => {
  const [isDropzoneVisible, setDropzoneVisible] = useState(false)
  useEffect(() => {
    let dragTimer = null
    const onDocumentDragOver = event => {
      event.preventDefault()
      let files = 0
      for (
        let item = 0;
        item < (event.dataTransfer?.items.length || 0);
        item++
      ) {
        if (event.dataTransfer?.items[item].kind === 'file') {
          files++
        }
      }
      if (files > 0 && (multiple || files === 1)) {
        setDropzoneVisible(true)
        dragTimer && clearTimeout(dragTimer)
      }
    }
    const onDocumentDragLeave = event => {
      event.preventDefault()
      dragTimer = setTimeout(() => setDropzoneVisible(false), 25)
    }
    const onDocumentDrop = event => {
      event.preventDefault()
      dragTimer = setTimeout(() => setDropzoneVisible(false), 25)
    }
    document.addEventListener('dragover', onDocumentDragOver, false)
    document.addEventListener('dragleave', onDocumentDragLeave, false)
    document.addEventListener('drop', onDocumentDrop, false)
    return () => {
      dragTimer && clearTimeout(dragTimer)
      document.removeEventListener('dragover', onDocumentDragOver)
      document.removeEventListener('dragleave', onDocumentDragLeave)
      document.removeEventListener('drop', onDocumentDrop)
    }
  }, [multiple])
  return isDropzoneVisible
}
const Dropzone = memo(({onChange, children}) => {
  const [isDropzoneHovered, setDropzoneHovered] = useState(false)
  const onDragOver = event => {
    event.preventDefault()
    if (event.dataTransfer) {
      setDropzoneHovered(true)
      event.dataTransfer.dropEffect = 'copy'
    }
  }
  const onDragLeave = event => {
    event.preventDefault()
    setDropzoneHovered(false)
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'none'
    }
  }
  const onDrop = event => {
    event.preventDefault()
    setDropzoneHovered(false)
    onChange(Array.from(event.dataTransfer.files))
  }
  return (
    <div
      className={clsx(
        styles.dropzone,
        isDropzoneHovered && styles['dropzone-hovered']
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}>
      <InternalIcon name='upload' />
      <span>{children}</span>
    </div>
  )
})

export {
  Dropzone,
  useDropzoneVisible
}
