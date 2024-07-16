import { s } from '../../core'

export const SLabel = s.span(
  {
    display: 'inline-flex',
    alignItems: 'center',
    paddingX: 'xs',
    border: 'main',
    borderColor: 'primary',
    borderRadius: 'm',
    backgroundColor: 'primary',
    color: 'white',
    fontSize: 's'
  },
  {
    outline: {
      backgroundColor: 'transparent',
      color: 'primary'
    },
    secondary: {
      borderColor: 'secondary',
      backgroundColor: 'secondary'
    }
  }
)

export const Label = ({ ...props }) => <SLabel {...props} />

Label.displayName = 'Label'
