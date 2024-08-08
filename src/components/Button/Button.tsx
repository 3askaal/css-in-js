import { s } from '../../'

export const SButton = s.button(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingY: 'xs',
    paddingX: 'm',
    backgroundColor: 'primary',
    borderRadius: 'm',
    color: 'white',
    transition: 'all .3s ease',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'primaryDark'
    },

    '> * + *': {
      marginLeft: 'xxs'
    }
  },
  {
    outline: {
      backgroundColor: 'transparent',
      border: 'main',
      borderColor: 'primary',
      color: 'primary',

      '&:hover': {
        backgroundColor: 'primaryDark',
        borderColor: 'primaryDark',
        color: 'white'
      }
    },
    secondary: {
      backgroundColor: 'secondary',
      borderColor: 'secondary',

      '&:hover': {
        backgroundColor: 'secondaryDark',
        borderColor: 'secondaryDark'
      }
    },
    rounded: {
      borderRadius: '2rem'
    },
    block: {
      width: '100%'
    },
    disabled: {
      opacity: 0.6,
      pointerEvents: 'none'
    }
  }
)

export const Button = ({ ...props }) => {
  return <SButton sref="Button" {...props} />
}

Button.displayName = 'Button'
