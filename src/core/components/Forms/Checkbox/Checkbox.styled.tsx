import { s } from '../../../utils'

export const SCheckbox = s.div(
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
    borderRadius: 'm',
    padding: 'xxs',
  },
  {},
  '_checkbox',
)

export const SCheckboxIndicator = s.div(
  {
    width: '100%',
    height: '100%',
    borderRadius: 'xs',
  },
  {
    isChecked: {
      backgroundColor: 'currentColor',
    },
  },
  '_indicator',
)

export const SCheckboxInput = s.input(
  {
    display: 'none',
  },
  {},
  '_input',
)

export const SCheckboxLabel = s.div(
  {
    marginLeft: 's',
  },
  {},
  '_label',
)

export const SCheckboxWrapper = s.label(
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
