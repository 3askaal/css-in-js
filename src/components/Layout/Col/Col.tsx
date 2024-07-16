import { isArray } from 'lodash'
import { s } from '../../../core'

export const SCol = s.div(({ width }) => ({
  flexDirection: 'column',
  flexGrow: 1,
  position: 'relative',

  ...(width !== undefined && {
    flexBasis: isArray(width) ? width.map((w) => `${w}%`) : `${width}%`,
    flexGrow: 0,
    flexShrink: 0,
    minWidth: isArray(width) ? width.map((w) => `${w}%`) : `${width}%`
  })
}))

export const Col = (props) => {
  return <SCol sref="Col" {...props} />
}

Col.displayName = 'Col'
