import {memo} from 'react'
import CollapsibleFlashbar from './collapsible-flashbar'
import NonCollapsibleFlashbar from './non-collapsible-flashbar'

const Flashbar = memo(props => {
  if (props.stackItems) {
    return <CollapsibleFlashbar {...props} />
  } else {
    return <NonCollapsibleFlashbar {...props} />
  }
})

export {
  Flashbar as default
}
