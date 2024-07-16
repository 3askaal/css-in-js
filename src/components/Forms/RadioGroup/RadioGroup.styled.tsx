import { s } from '../../../core'
import { SRadio } from '../Radio/Radio.styled'

export const SRadioGroup = s.div({
  [SRadio]: {
    marginBottom: 'xs',

    ':last-child': {
      marginBottom: 0
    }
  }
})
