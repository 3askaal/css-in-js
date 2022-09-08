import React from 'react'
import { s } from '../../../utils'
import { SCol } from '..'

export const SRow = s.div(
  ({ theme, s: { flexWrap = 'wrap' } = {}, gutter = 'm' }: any) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap,
    justifyContent: 'center',
    width: gutter && `calc(100% + ${theme.space[gutter]})`,
    marginLeft: gutter && `calc(-${theme.space[gutter]} / 2)`,
    marginRight: gutter && `calc(-${theme.space[gutter]} / 2)`,
    height: '100%',

    [SCol]: {
      paddingLeft: gutter && `calc(${theme.space[gutter]} / 2)`,
      paddingRight: gutter && `calc(${theme.space[gutter]} / 2)`,
      marginBottom: flexWrap === 'wrap' && gutter && `calc(${theme.space[gutter]})`,
    },
  }),
)

export const Row = (props: any) => {
  return <SRow sRef="Row" {...props} />
}

Row.displayName = 'Row'
