import { s } from '../../../core'

export const SSpacer = s.div(({ size = 'm', s: { flexDirection = 'column' } = {} }) => ({
  display: 'flex',
  flexDirection,
  width: '100%',

  '> * + *': {
    ...(flexDirection === 'column' && {
      marginTop: size
    }),

    ...(flexDirection === 'row' && {
      marginLeft: size
    })
  }
}))

export const Spacer = (props) => {
  return <SSpacer sref="Spacer" {...props} />
}

Spacer.displayName = 'Spacer'
