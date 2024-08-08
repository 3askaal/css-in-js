import { s } from '../..'

const SText = s.p(({ as }) => ({
  lineHeight: 1.5,

  ...(as === 'small' && {
    fontSize: '.8em'
  })
}))

export const Text = ({ ...props }) => {
  return <SText sref="Text" {...props} />
}

Text.displayName = 'Text'
