import { css, createGlobalStyle } from 'styled-components'

// Doesn't work responsively

export const IdealGlobalStyle: any = createGlobalStyle<any>(({ theme }) =>
  css({
    '*': {
      boxSizing: 'border-box',
    },

    html: {
      display: 'flex',
      width: '100%',
      minHeight: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      fontSize: theme?.rootFontSizes,
    },

    body: {
      display: 'flex',
      width: '100%',
    },

    'body > div': {
      display: 'flex',
      width: '100%',
    },
  }),
)
