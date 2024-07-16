import { type FC, useRef } from 'react'
import { ChevronDown as ChevronDownIcon } from 'react-feather'
import { SSelect, SSelectInput, SSelectIcon } from './Select.styled'

export interface SelectProps {
  options: Array<{ label: string; value: any; selected?: boolean; }>;
  multi?: boolean;

}

export const Select: FC<SelectProps> = ({ options, multi, onChange, value, ...props }) => {
  const selectRef = useRef()

  const getSelectedValues = () => Array.from(selectRef.current?.options || [])
    .map((option, index) => option.selected && options[index].value)
    .filter((value) => value !== false)

  const handleOnChange = () => {
    const selectedValues = getSelectedValues()
    onChange(multi ? selectedValues : selectedValues[0])
  }

  return (
    <SSelect sref="Select" {...props}>
      <SSelectInput
        sref="SelectInput"
        multiple={multi}
        onChange={handleOnChange}
        value={value}
        ref={selectRef}
      >
        { options?.map((option, index) => (
          <option {...option} key={`select-option-${index}`}>{ option.label }</option>
        )) }
      </SSelectInput>
      <SSelectIcon sref="SelectIcon">
        <ChevronDownIcon />
      </SSelectIcon>
    </SSelect>
  )
}

Select.displayName = 'Select'
