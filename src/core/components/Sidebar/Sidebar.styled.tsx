import { s } from '../../utils'
import { rgba } from '../../style'

export const SSidebar = s.div(({ isOpen }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '280px',
  maxWidth: '70%',
  backgroundColor: 'element.background',
  color: 'element.color',
  flexShrink: 0,
  left: 0,
  top: 0,
  bottom: 0,
  transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
  transition: 'all .25s ease',
  zIndex: 200,

  a: {
    textDecoration: 'none',
  },
}))

export const SSidebarContent = s.div({
  overflowY: 'scroll',
  height: '100%',
})

export const SSidebarToggle = s.div({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  left: '100%',
  top: 0,
  margin: 'm',
  cursor: 'pointer',
  padding: 0,
  color: 'inherit',
})

export const SSidebarCloser = s.div(({ theme }: any) => ({
  backgroundColor: rgba(theme.colors.black, 0.25),
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
}))
