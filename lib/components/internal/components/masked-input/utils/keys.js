import {KeyCode} from '../../../keycode'

const isSpecialCommand = keyCode => {
  return keyCode > 7 && keyCode < 47 && keyCode !== KeyCode.space
}
const isClipboardCommand = (ctrlKey, metaKey) => ctrlKey || metaKey
const isCommand = (keyCode, ctrlKey, metaKey) =>
  isSpecialCommand(keyCode) || isClipboardCommand(ctrlKey, metaKey)
const isDigit = char => !isNaN(parseInt(char, 10))

export {
  isCommand,
  isDigit
}
