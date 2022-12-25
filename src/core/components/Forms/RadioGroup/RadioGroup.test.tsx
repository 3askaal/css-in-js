import React from 'react'
import { render, fireEvent } from '@tests'
import { RadioGroup } from '@core'

describe.skip('RadioGroup', () => {
  it('change options', () => {
    const onChange = jest.fn()

    const { queryAllByTestId } = render(
      <RadioGroup
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3, isChecked: true },
          { label: 'Option 4', value: 4 },
        ]}
        onChange={onChange}
      />,
    )

    const checkboxLabels = queryAllByTestId('checkbox-label')
    fireEvent.click(checkboxLabels[0])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith([1, 3])
  })
})
