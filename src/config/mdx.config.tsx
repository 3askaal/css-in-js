import React from 'react'
import { Title, Box } from '@core'
import { kebabCase } from 'lodash'
import { Code, Section } from '@components'

export const MdxComponents = {
  h1: ({ children }: any) => (
    <Title level={1} id={kebabCase(children)} data-testid="mdx-title-1">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  h2: ({ children }: any) => (
    <Title level={2} id={kebabCase(children)} data-testid="mdx-title-2">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  h3: ({ children }: any) => (
    <Title level={3} id={kebabCase(children)} data-testid="mdx-title-3">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  h4: ({ children }: any) => (
    <Title level={4} id={kebabCase(children)} data-testid="mdx-title-4">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  h5: ({ children }: any) => (
    <Title level={5} id={kebabCase(children)} data-testid="mdx-title-5">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  h6: ({ children }: any) => (
    <Title level={6} id={kebabCase(children)} data-testid="mdx-title-6">
      <Box
        s={{
          display: 'inline-flex',
          fontWeight: 'normal',
          marginRight: 's',
          color: 'primary',
        }}
      >
        #
      </Box>
      {children}
    </Title>
  ),
  code: ({ children }: any) => <Code content={children} data-testid="mdx-code" />,
  inlineCode: ({ children }: any) => (
    <Code inline lang={null} data-testid="mdx-inline-code">
      {children}
    </Code>
  ),
  section: ({ children }: any) => <Section data-testid="mdx-section">{ children }</Section>,
}
