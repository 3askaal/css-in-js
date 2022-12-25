import React, { FC, ReactElement, ChangeEvent, useState } from 'react'
import {
  SRadioWrapper,
  SRadio,
  SRadioInput,
  SRadioIndicator,
  SRadioLabel,
} from './Radio.styled'

export interface RadioProps {
  value?: any;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  icon?: any;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  onChange,
  isChecked: initialIsChecked,
  isDisabled,
  label,
  icon,
  name,
  ...props
}: RadioProps): ReactElement => {
  const [isChecked, setIsChecked]: any = useState(initialIsChecked || false)

  function onChangeHandler(event: any) {
    setIsChecked(event.target.checked)
    if (onChange) onChange(event.target.checked)
  }

  return (
    <SRadioWrapper
      sRef="Radio_Wrapper"
      isDisabled={isDisabled}
      data-testid="radio-label"
      {...props}
    >
      <SRadio sRef="Radio">
        <SRadioInput
          name={name}
          sRef="Radio_Input"
          type="radio"
          onChange={onChangeHandler}
          data-testid="radio"
        />
        <SRadioIndicator sRef="Radio_Indicator" isChecked={isChecked}>
          {icon || null}
        </SRadioIndicator>
      </SRadio>
      {label && <SRadioLabel sRef="Radio_Label">{label}</SRadioLabel>}
    </SRadioWrapper>
  )
}

Radio.displayName = 'Radio'
