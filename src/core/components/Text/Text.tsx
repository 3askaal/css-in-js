import React from 'react'
import { s } from '../../utils'

const SText = s.p(({ as }: any) => ({
  lineHeight: 1.6,

  ...(as === 'small' && {
    fontSize: '.8em',
  }),
}))

export const Text = ({ type = 'p', ...props }: any) => {
  return <SText sRef="Text" as={type} {...props} />
}
