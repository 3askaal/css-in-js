import { useContext } from 'react'
import { Container, Spacer } from '../../../../src'
import { NavContext } from '../../context/NavContext'

export const DocsView = () => {
  const { docs } = useContext(NavContext)

  return (
    <Container s={{ paddingY: 'xxl', maxWidth: '800px' }}>
      <Spacer size="xxl" s={{ alignItems: 'center' }}>
        { docs.map(({ section: DocSection }) => DocSection) }
      </Spacer>
    </Container>
  )
}
