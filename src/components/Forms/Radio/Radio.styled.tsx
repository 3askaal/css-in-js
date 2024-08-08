import { s } from '../../..'

export const SRadio = s.label(
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

export const SRadioInput = s.div(({ checked }) => ({
  position: 'relative',
  display: 'flex',
  width: '1.2rem',
  height: '1.2rem',
  border: 'thick',
  borderColor: 'currentColor',
  borderRadius: '100%',
  color: 'primary',

  '&:before': {
    width: '.7rem',
    height: '.7rem',
    margin: 'auto',
    borderRadius: '100%',
    content: '""',

    ...(checked && {
      backgroundColor: 'currentColor'
    })
  }
}))

export const SRadioLabel = s.div({
  marginLeft: 's'
})
