import React, { ReactElement, FC } from 'react'
import { s } from '../../utils'

export const SProgress = s.div({
  display: 'flex',
  height: '8px',
  flexGrow: 1,
  border: 'main',
  borderColor: 'primary',
})

export const SProgressActive = s.div(({ amount }: any) => ({
  display: 'inline-flex',
  height: '100%',
  width: amount && `${amount}%`,
  backgroundColor: 'primary',
}))

export const Progress: FC<any> = ({ amount, ...props }: any): ReactElement => {
  return (
    <SProgress sRef="Progress" {...props}>
      <SProgressActive sRef="Progress_Active" amount={amount} />
    </SProgress>
  )
}

Progress.displayName = 'Progress'
