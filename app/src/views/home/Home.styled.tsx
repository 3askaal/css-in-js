import { s } from '../../../../src'

export const SHomeMenu = s.div({
  display: 'flex',
  justifyContent: 'center',
  margin: 'm',

  '> *': {
    fontWeight: 'bold'
  },

  '> * + *': {
    '&:before': {
      marginX: 'm',
      borderColor: 'primary',
      borderLeft: 'thick',
      content: '""'
    }
  }
})

export const SHome = s.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  overflow: 'hidden'
})
