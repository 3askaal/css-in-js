import React, { useState } from 'react'
import { s } from '../../../utils'

export const SSwitch = s.div(({ value }: any) => ({
  height: '1.5rem',
  width: '2.5rem',
  borderRadius: '1rem',
  padding: '.25rem',
  // @ts-ignore
  backgroundColor: 'grey30',
  color: 'white',
  cursor: 'pointer',
  transition: 'all .1s linear',

  ...(value && {
    // @ts-ignore
    backgroundColor: 'primary',
  }),
}))

export const SSwitchIndicator = s.div(({ value }: any) => ({
  height: '100%',
  width: '1rem',
  backgroundColor: 'currentColor',
  borderRadius: '1rem',
  transition: 'all .1s linear',

  ...(value && {
    transform: 'translateX(100%)',
  })
}))

export const Switch = ({ onChange, initialValue = false }: any) => {
  const [ value, setValue ] = useState(initialValue);

  function onClick() {
    const newValue = !value
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <SSwitch value={value} onClick={onClick}>
      <SSwitchIndicator value={value} />
    </SSwitch>
  )
}
