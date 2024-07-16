import { s } from '../../../core'
import { SCheckbox } from '../Checkbox/Checkbox.styled'

export const SCheckboxGroup = s.div({
  [SCheckbox]: {
    marginBottom: 'xs',

    ':last-child': {
      marginBottom: 0
    }
  }
})
