import React from 'react'
import { s } from '../../../utils'

export const SSpacer = s.div(
  ({ size = 'm', s: { flexDirection = 'column' } = {} }: any) => ({
    display: 'flex',
    width: '100%',
    flexDirection,

    '> * + *': {
      ...(flexDirection === 'column' && {
        marginTop: size,
      }),

      ...(flexDirection === 'row' && {
        marginLeft: size,
      }),
    },
  }),
)

export const Spacer = (props: any) => {
  return <SSpacer sRef="Spacer" {...props} />
}

Spacer.displayName = 'Spacer'
