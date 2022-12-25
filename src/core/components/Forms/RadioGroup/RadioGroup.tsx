import { filter, map } from 'lodash'
import React, { FC, ReactElement, useState } from 'react'
import { SRadioGroup } from './RadioGroup.styled'
import { keyGen } from '../../../utils'
import { Radio, RadioProps } from '../Radio/Radio'

export interface RadioGroupProps {
  options: RadioProps[]
  onChange?: any
}

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  onChange,
}: RadioGroupProps): ReactElement => {
  const [items, setItems] = useState(options)

  function onChangeHandler(value: boolean, index: number) {
    const newItems = items.map((item) => ({ ...item, isChecked: false }))
    newItems[index].isChecked = value
    setItems(newItems)
    if (onChange) onChange(map(filter(newItems, 'isChecked'), 'value'))
  }

  return (
    <SRadioGroup sRef="RadioGroup" data-testid="checkbox-group">
      {items.map((checkboxProps: any, index: number) => (
        <Radio
          type="radio"
          {...checkboxProps}
          name="radio1"
          onChange={(value: boolean) => onChangeHandler(value, index)}
          key={keyGen()}
        />
      )) || null}
    </SRadioGroup>
  )
}


RadioGroup.displayName = 'RadioGroup'
