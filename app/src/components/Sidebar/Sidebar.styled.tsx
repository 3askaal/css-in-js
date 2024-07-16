import { rgba, s } from '../../../../src'

export const SSidebar = s.div(({ isOpen }) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  maxWidth: '80%',
  backgroundColor: 'grey[15]',
  zIndex: 200,
  transform: [`translateX(${isOpen ? 0 : -100}%)`, undefined, undefined, 'translateX(0%)'],
  transition: 'all .3s ease',

  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}))

export const SSidebarContent = s.div({
  py: 's',
  px: 'xs',
  overflowY: 'scroll'
})

export const SSidebarToggle = s.button({
  position: 'absolute',
  top: 0,
  left: '100%',
  display: ['flex', undefined, undefined, 'none'],
  alignItems: 'center',
  justifyContent: 'center',
  m: 'l',
  p: 's',
  borderRadius: 's',
  backgroundColor: 'grey[20]',
  cursor: 'pointer'
})

export const SSidebarCloser = s.div(({ theme }) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: rgba(theme.colors.black, 0.5),
  zIndex: 100,
  cursor: 'pointer'
}))
