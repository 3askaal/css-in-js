import { s } from '../../..'

export const SRow = s.div(({ theme, s: { flexWrap = 'wrap' } = {}, gutter = 'm' }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap,
  justifyContent: 'center',
  width: gutter && `calc(100% + ${theme.space[gutter]})`,
  mx: gutter && `calc(-${theme.space[gutter]} / 2)`,

  '> *': {
    mb: flexWrap === 'wrap' && gutter && `calc(${theme.space[gutter]})`,
    px: gutter && `calc(${theme.space[gutter]} / 2)`
  }
}))

export const Row = (props) => {
  return <SRow sref="Row" {...props} />
}

Row.displayName = 'Row'
