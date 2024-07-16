import { s } from '../../../core'

export const SWrapper = s.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: 'm'
})

export const Wrapper = (props) => {
  return <SWrapper sref="Wrapper" {...props} />
}

Wrapper.displayName = 'Wrapper'
