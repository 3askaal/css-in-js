import { s } from '../../..'

export const SElementGroup = s.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',

  ':first-child': {
    borderTopRightRadius: '0 !important',
    borderBottomRightRadius: '0 !important'
  },

  ':last-child': {
    borderTopLeftRadius: '0 !important',
    borderBottomLeftRadius: '0 !important'
  },

  ':not(:first-child):not(:last-child)': {
    borderRadius: '0 !important'
  },

  ':not(:last-child)': {
    borderRight: '0 !important'
  }
})

export const ElementGroup = (props) => {
  return <SElementGroup {...props} />
}

ElementGroup.displayName = 'ElementGroup'
