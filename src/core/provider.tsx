import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import { merge } from 'lodash'
import { theme as DEFAULT_THEME } from '../style/theme'

export const ThemeProvider = ({ children, theme }) => {
  return (
    <OriginalThemeProvider theme={merge(DEFAULT_THEME, theme)}>
      { children }
    </OriginalThemeProvider>
  )
}
