import { s } from '@core'

export const SPreviewComponent = s.div({
  marginBottom: 'l',
  border: 'main',
  borderColor: 'grey30',
  borderRadius: 'm',
})

export const SPreviewComponentContent = s.div({
  display: 'flex',
  width: '100%',
  padding: 'l',

  '> * + *': {
    marginTop: 's',
  },
})
