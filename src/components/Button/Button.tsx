import { s } from '../../core'

export const SButton = s.button(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingY: 'xs',
    paddingX: 'm',
    borderRadius: 'm',
    backgroundColor: 'primary',
    color: 'white',
    cursor: 'pointer',
    transition: 'all .3s ease',

    '&:hover': {
      backgroundColor: 'primaryDark'
    },

    '> * + *': {
      marginLeft: 'xxs'
    }
  },
  {
    outline: {
      border: 'main',
      borderColor: 'primary',
      backgroundColor: 'transparent',
      color: 'primary',

      '&:hover': {
        borderColor: 'primaryDark',
        backgroundColor: 'primaryDark',
        color: 'white'
      }
    },
    secondary: {
      borderColor: 'secondary',
      backgroundColor: 'secondary',

      '&:hover': {
        borderColor: 'secondaryDark',
        backgroundColor: 'secondaryDark'
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
