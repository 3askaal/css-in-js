import React from 'react'
import { s } from '../../../utils'

export const SCol = s.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: width ? 0 : 1,

  ...(width && {
    flexShrink: 0,
  }),
}))

export const Col = ({ width, ...props }: any) => {
  return <SCol sRef="Col" {...props} width={width} s={{ flexBasis: width }} />
}

Col.displayName = 'Col'
