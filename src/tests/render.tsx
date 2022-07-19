import React from 'react'
import { render } from '@testing-library/react'
import { theme } from '@core'
import { MemoryRouter } from 'react-router-dom'
import { AppWrapper } from '../app/AppWrapper'
import { NavProvider } from '../context/NavContext'

export default (
  ui: any,
  { history, theme: mockedTheme, ...options }: any = {},
) =>
  render(
    <NavProvider>
      <AppWrapper theme={{ ...theme, ...mockedTheme }}>
        <MemoryRouter initialEntries={history} initialIndex={0}>
          {ui}
        </MemoryRouter>
      </AppWrapper>
    </NavProvider>,
    options,
  )
