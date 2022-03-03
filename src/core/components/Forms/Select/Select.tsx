import React, { ReactElement, FC, useRef, useState } from 'react'
import { findIndex, forEach } from 'lodash'
import { ChevronDown as ChevronDownIcon } from 'react-feather'
import { SSelect, SSelectWrapper, SSelectIcon } from './Select.styled'
import { keyGen } from '../../../utils'

interface SelectOptionProps {
  label: string
  value: any
  selected?: boolean
}

interface SelectProps {
  options: SelectOptionProps[]
  multi?: boolean
  block?: boolean
  onChange?: any
  value?: any
}

export const Select: FC<SelectProps> = ({
  options,
  multi,
  block,
  onChange,
  value: defaultValue,
}: SelectProps): ReactElement => {
  const selectRef: any = useRef()
  const [currentValue, setCurrentValue] = useState(defaultValue)

  function onSelectChange() {
    if (multi) {
      const indexes: any[] = []

      forEach(selectRef?.current?.options, (option: any, index: number) => {
        if (option.selected) {
          indexes.push(index)
        }
      })

      setCurrentValue(indexes.join(','))

      const values = indexes.map((index: number) => {
        return options[index].value
      })

      onChange(values)
    } else {
      const index: number = findIndex(selectRef?.current?.options, 'selected')
      setCurrentValue(index.toString())
      onChange(options[index].value)
    }
  }

  return (
    <SSelectWrapper sRef="Select_Wrapper" s={{ width: block && '100%' }}>
      <SSelect
        sRef="Select"
        multiple={multi}
        onChange={onSelectChange}
        data-testid="select"
        value={currentValue}
        ref={selectRef}
      >
        {options &&
          options.map((option: SelectOptionProps, index: number) => (
            <option
              value={option.value || index}
              key={keyGen()}
              selected={option.selected}
              data-testid="select-option"
            >
              {option.label}
            </option>
          ))}
      </SSelect>
      <SSelectIcon sRef="SelectIcon">
        <ChevronDownIcon />
      </SSelectIcon>
    </SSelectWrapper>
  )
}
