import { s } from '../../utils'

export const SMenuItem = s.div({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  borderLeft: 'main',
  borderColor: 'primary',
  cursor: 'pointer',
  paddingX: 's',

  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: 'primaryDark',
      borderColor: 'primaryDark',
      color: 'white',
    },
  },
})
