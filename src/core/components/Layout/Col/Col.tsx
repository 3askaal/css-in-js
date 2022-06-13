import React from 'react'
import { s } from '../../../utils'

export const SCol = s.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,

  ...(width && {
    flexGrow: 0,
    flexBasis: `${width}%`,
    flexShrink: 0,
  }),
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}

Col.displayName = 'Col'
