import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { FormResetStyle, GlobalStyle } from '@core'
import { MdxComponents } from '../config/mdx.config'
import { SApp } from './App.styled'

export const AppWrapper = ({ children, theme }: any) => (
  <ThemeProvider theme={theme}>
    <SApp>
      <GlobalStyle />
      <FormResetStyle />
      <BrowserRouter>
        <MDXProvider components={MdxComponents}>{children}</MDXProvider>
      </BrowserRouter>
    </SApp>
  </ThemeProvider>
)
