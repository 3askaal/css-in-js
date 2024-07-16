import { s } from '../../../core'

export const SInput = s.input(
  {
    display: 'flex',
    width: '100%',
    padding: 'xs',
    border: 'thick',
    borderColor: 'primary',
    borderRadius: 'm',
    color: 'black',

    '&::placeholder': {
      color: 'grey[40]'
    }
  },
  {
    block: {
      width: '100%'
    },
    positive: {
      borderColor: 'positive',
      color: 'positive'
    },
    negative: {
      borderColor: 'negative',
      color: 'negative'
    }
  }
)
