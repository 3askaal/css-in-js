import React from 'react'
import { render, fireEvent } from '@tests'
import { TextArea } from '@core'

const initialValue =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore qui alias, cumque ipsum nemo earum beatae itaque. Rerum, doloremque. Necessitatibus quos nostrum ullam minima adipisci molestias corrupti laborum eligendi.'
const changedValue =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore qui alias, cumque ipsum nemo earum beatae itaque. Rerum, doloremque. Necessitatibus quos nostrum.'

describe('TextArea', () => {
  it('works without value', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(<TextArea onChange={onChange} />)

    const textarea = queryByTestId('textarea')
    expect(textarea.value).toBe('')
    fireEvent.change(textarea, { target: { value: changedValue } })
    expect(textarea.value).toBe(changedValue)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(changedValue)
  })

  it('works with value', () => {
    const onChange = jest.fn()

    const { queryByTestId } = render(
      <TextArea value={initialValue} onChange={onChange} />,
    )

    const textarea = queryByTestId('textarea')
    expect(textarea.value).toBe(initialValue)
    fireEvent.change(textarea, { target: { value: changedValue } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(changedValue)
  })
})
