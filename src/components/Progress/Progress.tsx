import { s } from '../../core'

export const SProgress = s.div({
  display: 'flex',
  flexGrow: 1,
  height: '8px',
  border: 'main',
  borderColor: 'primary'
})

export const SProgressActive = s.div(({ amount }) => ({
  display: 'inline-flex',
  width: amount && `${amount}%`,
  height: '100%',
  backgroundColor: 'primary'
}))

export const Progress = ({ amount, ...props }) => {
  return (
    <SProgress sref="Progress" {...props}>
      <SProgressActive sref="ProgressActive" amount={amount} />
    </SProgress>
  )
}

Progress.displayName = 'Progress'
