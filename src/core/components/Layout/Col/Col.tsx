import React from 'react'
import { s } from '../../../utils'

export const SCol = s.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: width ? 0 : 1,

  ...(width && {
    flexBasis: `${width}%`,
    flexShrink: 0,
  }),
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}

Col.displayName = 'Col'
