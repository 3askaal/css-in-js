import { s } from '../../..'

export const SBox = s.div({})

export const Box = (props) => {
  return <SBox sref="Box" {...props} />
}

Box.displayName = 'Box'
