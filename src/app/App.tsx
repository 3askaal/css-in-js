import React from 'react'
import { theme } from '@core'
import './fonts.css'
import { SiteWrapper } from '../components'
import { AppWrapper } from './AppWrapper'
import { Routes } from './Routes'
import { NavProvider } from '../context/NavContext'

export default () => {
  return (
    <NavProvider>
      <AppWrapper
        theme={{
          ...theme,
          breakpoints: ['320px', '420px', '640px', '768px', '1024px', '1440px'],
          rootFontSizes: ['8px', '12px', '14px', '16px'],
          fonts: {
            ...theme.fonts,
            logo: "'Kaushan Script', Helvetica, Arial, sans-serif",
          }
        }}
      >
        <SiteWrapper>
          <Routes />
        </SiteWrapper>
      </AppWrapper>
    </NavProvider>
  )
}
