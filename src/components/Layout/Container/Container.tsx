import { s } from '../../../core'

export const SContainer = s.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  maxWidth: '1200px'
})

export const Container = (props) => {
  return <SContainer sref="Container" {...props} />
}

Container.displayName = 'Container'
