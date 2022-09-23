import { css, keyframes } from 'styled-components'
import { s } from '../../core'

const fadeIn: any = keyframes({
  from: {
    filter: 'blur(5px)',
    opacity: 0,
  },
  to: {
    filter: 'blur(0px)',
    opacity: 1,
  },
})

const beforeAndAfter = {
  content: '"3oilerplate"',
  position: 'absolute',
  display: 'inline-flex',
  justifyContent: 'center',
  width: '100%',
  backgroundSize: '2px 2px',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  zIndex: 0,
}

export const SLogo = s.div(
  ({ theme }) => ({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    fontFamily: 'logo',
    lineHeight: '1.4',

    '> div': {
      position: 'relative',
      backgroundImage: `linear-gradient(
        to bottom,
        ${theme.colors.primary} 25%,
        ${theme.colors.secondary} 100%)
      `,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },

    ':before': {
      ...beforeAndAfter,
      '-webkit-text-stroke-width': '2px',
      '-webkit-text-stroke-color': theme.colors.white,
    },
  }),
  ({ theme }) => css`
    animation: ${fadeIn} ${theme.durations.xxl} ease-in-out
      ${theme.durations.xxl} forwards;
  `,
)
