import React from 'react'
import { s } from '../../utils'

export const SBody = s.div({
  display: 'flex',
  flexDirection: 'column',

  '> *': {
    lineHeight: 1.6,
  },

  ul: {
    listStyle: 'disc',
    listStylePosition: 'inside',
  },

  a: {
    color: 'primary',

    '@media (hover: hover)': {
      ':hover': {
        color: 'primaryDark',
      },
    },
  },

  '> * + *': {
    marginTop: 'm',
  },
})

export const Body = ({ ...props }: any) => <SBody sRef="Body" {...props} />

Body.displayName = 'Body'
