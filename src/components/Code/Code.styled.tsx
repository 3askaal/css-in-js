import { s } from '@core'

export const SCode = s.div(({ inline }: any) => ({
  flexDirection: 'column',
  backgroundColor: 'code',
  fontFamily: 'code',
  lineHeight: 1.25,
  overflow: 'auto',
  borderRadius: 'm',
  padding: 's',

  ...(!inline && {
    display: 'flex',
  }),

  ...(inline && {
    display: 'inline-flex',
    paddingY: 'xxxs',
    paddingX: 'xs',
    marginX: 'xxxs',
  }),

  '*': {
    fontSize: '.75rem !important',
    backgroundColor: 'transparent !important',
  },

  '> pre': {
    margin: '0 !important',
    padding: '0 !important',
  },
}))
