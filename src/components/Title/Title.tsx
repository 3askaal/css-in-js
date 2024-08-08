import { s } from '../..'

const TitleSizes = {
  h1: '2.5em',
  h2: '2em',
  h3: '1.5em',
  h4: '1.25em',
  h5: '1.125em',
  h6: '1em'
}

const STitle = s.h1(({ as, theme }) => ({
  fontSize: TitleSizes[as],
  fontFamily: theme.fonts.title || 'inherit',
  fontWeight: 'bold',
  lineHeight: 1.6,
  transition: 'all .3s ease'
}))

export const Title = ({ as = 'h1', ...props }) => {
  return <STitle sref="Title" {...props} as={as} {...props} />
}

Title.displayName = 'Title'
