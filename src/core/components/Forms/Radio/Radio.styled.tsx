import { s } from '../../../utils'

export const SRadio = s.div(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.4rem',
    height: '1.4rem',
    flexShrink: 0,
    cursor: 'pointer',
    border: 'thick',
    color: 'currentColor',
    borderColor: 'currentColor',
    borderRadius: '100%',
    padding: 'xxs',
  },
  {},
  '_checkbox',
)

export const SRadioIndicator = s.div(
  {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  },
  {
    isChecked: {
      backgroundColor: 'currentColor',
    },
  },
  '_indicator',
)

export const SRadioInput = s.input(
  {
    display: 'none',
  },
  {},
  '_input',
)

export const SRadioLabel = s.div(
  {
    marginLeft: 's',
  },
  {},
  '_label',
)

export const SRadioWrapper = s.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'primary',
  },
  {
    isDisabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },
)
