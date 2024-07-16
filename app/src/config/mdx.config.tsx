import { kebabCase } from 'lodash'
import { Box, Title } from '../../../src'
import { Code, Section } from '../components'

export const MdxComponents = {
  h1: ({ children }) => (
    <Title as="h1" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  h2: ({ children }) => (
    <Title as="h2" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  h3: ({ children }) => (
    <Title as="h3" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  h4: ({ children }) => (
    <Title as="h4" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  h5: ({ children }) => (
    <Title as="h5" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  h6: ({ children }) => (
    <Title as="h6" id={kebabCase(children)}>
      <Box s={{ display: 'inline-flex', color: 'primary', mr: 's' }}>#</Box>
      { children }
    </Title>
  ),
  pre: ({ children }) => <Code content={children.props.children} />,
  code: ({ children }) => <Code content={children} inline />
}
