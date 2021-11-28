import { s } from '../../../utils'
import { SCheckboxWrapper } from '../Checkbox/Checkbox.styled'

export const SCheckboxGroup = s.div({
  [SCheckboxWrapper]: {
    marginBottom: 's',

    ':last-child': {
      marginBottom: 0,
    },
  },
})
