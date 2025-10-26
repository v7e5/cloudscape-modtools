import {useState} from 'react'

const useOpenState = ({onOpen, onClose}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openedWithKeyboard, setOpenedWithKeyboard] = useState(false)
  const openDropdown = isKeyboard => {
    if (!isOpen) {
      setIsOpen(true)
      setOpenedWithKeyboard(!!isKeyboard)
      onOpen?.()
    }
  }
  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false)
      onClose?.()
    }
  }
  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown()
    } else {
      openDropdown(false)
    }
  }
  return {
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    openedWithKeyboard
  }
}

export {
  useOpenState
}
