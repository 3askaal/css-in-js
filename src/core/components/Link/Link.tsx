import React, { ReactElement, FC } from 'react'
import { s } from '../../utils'

export const SLink = s.a({
  textDecoration: 'underline',
  color: 'primary',

  '@media (hover: hover)': {
    ':hover': {
      color: 'primaryDark',
    },
  },
})

export const Link: FC<any> = ({ to, ...props }: any): ReactElement => {
  return <SLink sRef="Link" href={to || null} {...props} />
}

Link.displayName = 'Link'
