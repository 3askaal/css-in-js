import { s } from '../../../../src'

export const SLogo = s.div(({ theme }) => ({
  backgroundImage: `linear-gradient(
      to bottom,
      ${theme.colors.secondary} 25%,
      ${theme.colors.primary} 100%)
    `,
  fontFamily: 'logo',
  fontSize: '4.2rem',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}))
