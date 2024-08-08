import { s, rgba } from '../../'

export const SPopupWrapper = s.div({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 'm',
  zIndex: 9999
})

export const SPopupCloser = s.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: rgba('black', 0.25),
  cursor: 'pointer'
})

export const SPopup = s.div({
  position: 'relative',
  width: '100%',
  maxWidth: '640px',
  borderRadius: 'm',
  backgroundColor: 'grey.15',
  overflow: 'hidden'
})

export const SPopupHeader = s.div({
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'main',
  color: 'primary'
})

export const SPopupHeaderContent = s.div({
  flexGrow: 1,
  alignItems: 'center',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupContent = s.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupFooter = s.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupCloseButton = s.div({
  paddingX: 's',
  cursor: 'pointer'
})
