import { s } from '../../../utils'
import { SRadioWrapper } from '../Radio/Radio.styled'

export const SRadioGroup = s.div({
  [SRadioWrapper]: {
    marginBottom: 's',

    ':last-child': {
      marginBottom: 0,
    },
  },
})
