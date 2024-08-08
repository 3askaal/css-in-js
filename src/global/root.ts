import { s } from '../s'

export const RootStyle = s(({ theme }) => ({
  '*': {
    boxSizing: 'border-box'
  },

  ':root': {
    minHeight: '100%',
    fontSize: theme.rootFontSizes,
    scrollBehavior: 'smooth',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased'
  },

  a: {
    color: 'primary',
    textDecoration: 'underline',

    '&:hover': {
      color: 'primaryDark'
    }
  },

  svg: {
    display: 'block'
  }
}))
