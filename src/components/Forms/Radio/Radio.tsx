import { type ChangeEvent, useState } from 'react'
import { SRadio, SRadioInput, SRadioLabel } from './Radio.styled'

export const Radio = ({ onChange, checked: initChecked, disabled, label, icon, name, ...props }) => {
  const [checked, setIsChecked] = useState(initChecked || false)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    if (onChange) onChange(event.target.checked)
  }

  return (
    <SRadio sref="Radio_Wrapper" disabled={disabled} {...props}>
      <input name={name} type="radio" onChange={handleOnChange} style={{ display: 'none' }} />
      <SRadioInput checked={checked} sref="Radio" />
      {label && <SRadioLabel sref="Radio_Label">{label}</SRadioLabel>}
    </SRadio>
  )
}

Radio.displayName = 'Radio'
