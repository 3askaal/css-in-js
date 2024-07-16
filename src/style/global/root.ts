import { createGlobalStyle } from 'styled-components'
import { parse } from '../../core'

export const RootStyle = createGlobalStyle(({ theme, ...props }) => parse(
  {
    '*': {
      boxSizing: 'border-box'
    },

    html: {
      minHeight: '100%',
      fontSize: theme?.rootFontSizes,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      scrollBehavior: 'smooth'
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
  },
  { theme, ...props }
))
