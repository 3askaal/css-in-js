import React from 'react'
import { styled } from '../../../utils'

export const SCol = styled.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: width,
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}
