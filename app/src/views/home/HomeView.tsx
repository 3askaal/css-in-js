import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Spacer, Title, Text, Button } from '../../../../src'
import { SHome } from './Home.styled'
import { Logo, Background } from '../../components'

export const HomeView = () => {
  return (
    <SHome>
      <Background />
      <Container s={{ paddingX: 'm', maxWidth: 'auto', justifyContent: 'center' }}>
        <Spacer size="l">
          <Spacer size="m" s={{ alignItems: 'center' }}>
            <Logo />
            <Spacer size="xs" s={{ textAlign: 'center' }}>
              <Title as="h4" s={{ color: 'grey[80]' }}>
                Personal component library and toolkit for React
              </Title>
              <Text>
                Built with <a target="_blank" href="https://styled-components.com/">Styled Components</a>
              </Text>
            </Spacer>
          </Spacer>
          <Spacer s={{ flexDirection: 'row', justifyContent: 'center' }}>
            <NavLink to="/docs">
              <Button rounded>Docs</Button>
            </NavLink>
            <NavLink to="/components">
              <Button rounded secondary>Components</Button>
            </NavLink>
          </Spacer>
        </Spacer>
      </Container>
    </SHome>
  )
}
