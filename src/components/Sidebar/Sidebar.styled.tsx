import { s } from '@core'
import { rgba } from '../../core'

export const SSidebar = s.div(({ isOpen }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  maxWidth: '70%',
  flexShrink: 0,
  left: 0,
  top: 0,
  bottom: 0,
  transform: [
    isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    null,
    null,
    null,
    'translateX(0%)',
  ],
  backgroundColor: 'grey10',
  zIndex: 200,
  transition: 'all .25s ease',

  a: {
    textDecoration: 'none',
  },
}))

export const SSidebarContent = s.div({
  overflowY: 'scroll',
})

export const SSidebarToggle = s.button({
  display: ['flex', null, null, null, 'none'],
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  left: '100%',
  top: 0,
  width: '2.8rem',
  height: '2.8rem',
  margin: 's',
  cursor: 'pointer',
  borderRadius: 's',
  backgroundColor: 'grey10',
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
