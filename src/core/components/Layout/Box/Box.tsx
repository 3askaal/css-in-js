import React from 'react'
import { s } from '../../../utils'

export const SBox: any = s.div()

export const Box = (props: any) => {
  return <SBox sRef="Box" {...props} />
}
