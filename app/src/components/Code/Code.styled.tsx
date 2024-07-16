import { s } from '../../../../src'

export const SCode = s.div(({ inline }) => ({
  bgc: 'grey[85]',
  fontSize: '.75em',
  fontFamily: 'code',

  'pre, code': {
    margin: '0 !important'
  },

  ...(inline && {
    display: 'inline-flex',
    marginX: '.25rem',

    '*': {
      lineHeight: 1
    },

    pre: {
      paddingY: '.15rem !important',
      paddingX: '.40rem !important',
      borderRadius: '.5rem'
    }
  })
}))
