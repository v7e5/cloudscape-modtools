import {useUniqueId} from '../../internal/hooks/use-unique-id'

const useHiddenDescription = description => {
  const id = useUniqueId()
  return {
    targetProps: {
      'aria-describedby': description ? id : void 0
    },
    descriptionEl: description ? (
      <span id={id} hidden={true}>
        {description}
      </span>
    ) : null
  }
}

export {
  useHiddenDescription as default
}
