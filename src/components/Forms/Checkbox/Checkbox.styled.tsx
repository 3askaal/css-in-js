import { s } from '../../..'

export const SCheckbox = s.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  {
    disabled: {
      opacity: 0.6,
      pointerEvents: 'none'
    }
  }
)

export const SCheckboxInput = s.div(({ checked }) => ({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.2rem',
  height: '1.2rem',
  border: 'thick',
  borderColor: 'currentColor',
  borderRadius: 'm',
  color: 'primary',
  cursor: 'pointer',

  '&:before': {
    width: '.7rem',
    height: '.7rem',
    m: 'auto',
    borderRadius: 'xs',
    content: '""',

    ...(checked && {
      backgroundColor: 'currentColor'
    })
  }
}))

export const SCheckboxLabel = s.div({
  ml: 's'
})
