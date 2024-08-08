import { merge } from 'lodash'
import { createContext, type PropsWithChildren, useMemo } from 'react'
import { theme as defaultTheme } from './theme'
import type { Theme } from './types'

interface ThemeContextProps {
  theme: Theme
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: defaultTheme })

export const ThemeProvider = ({ children, theme }: ThemeContextProps & PropsWithChildren) => {
  const mergedTheme = useMemo(() => merge(theme, defaultTheme), [theme])

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
