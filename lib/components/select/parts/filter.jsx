import {forwardRef, memo} from 'react'
import InternalInput from '../../input/internal'
import styles from './styles.css.js'

const Filter = memo(
  forwardRef(({filteringType, ...filterProps}, ref) => {
    if (filteringType === 'none') {
      return null
    }
    return (
      <InternalInput
        ref={ref}
        type='visualSearch'
        className={styles.filter}
        autoComplete={false}
        disableBrowserAutocorrect={true}
        invalid={false}
        __noBorderRadius={true}
        {...filterProps}
        __nativeAttributes={{
          'aria-expanded': true,
          'aria-haspopup': true,
          role: 'combobox',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          ...filterProps.__nativeAttributes
        }}
      />
    )
  })
)

export {
  Filter as default
}
