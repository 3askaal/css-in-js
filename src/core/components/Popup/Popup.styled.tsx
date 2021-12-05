import { s } from '../../utils'

export const SPopupWrapper = s.div({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'm',
  zIndex: 9999,
})

export const SPopupCloser = s.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'misc.overlay',
  cursor: 'pointer'
})

export const SPopup = s.div({
  position: 'relative',
  width: '100%',
  borderRadius: 'm',
  overflow: 'hidden',
  backgroundColor: 'element.background',
  maxWidth: '640px',
})

export const SPopupHeader = s.div({
  display: 'flex',
  borderBottom: 'main',
  color: 'primary',
  alignItems: 'center'
})

export const SPopupHeaderContent = s.div({
  flexGrow: 1,
  paddingY: 's',
  paddingX: 'm',
  alignItems: 'center'
})

export const SPopupContent = s.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm',
})

export const SPopupFooter = s.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm',
})

export const SPopupCloseButton = s.div({
  cursor: 'pointer',
  paddingX: 's'
})
