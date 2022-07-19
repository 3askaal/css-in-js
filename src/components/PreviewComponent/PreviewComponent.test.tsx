import React from 'react'
import { render, fireEvent } from '@tests'
import { Input, Checkbox } from '@core'
import { PreviewComponent } from './PreviewComponent'

describe('PreviewComponent', () => {
  it('renders with code block', () => {
    const { queryByTestId } = render(
      <PreviewComponent>
        <Input />
      </PreviewComponent>,
    )

    expect(queryByTestId('preview-component-code')).toBeTruthy()
  })

  it('renders with onchange block - input', () => {
    const { queryByTestId } = render(
      <PreviewComponent>
        <Input data-testid="test-input" />
      </PreviewComponent>,
    )

    const testInput: any = queryByTestId('test-input')

    expect(queryByTestId('preview-component-code-onchange')).toBeNull()
    fireEvent.change(testInput, { target: { value: 'test value' } })
    expect(queryByTestId('preview-component-code-onchange')).toBeTruthy()
  })

  it('renders with onchange block - checkbox', () => {
    const { queryByTestId } = render(
      <PreviewComponent>
        <Checkbox data-testid="test-checkbox" />
      </PreviewComponent>,
    )

    const testCheckbox: any = queryByTestId('test-checkbox')

    expect(queryByTestId('preview-component-code-onchange')).toBeNull()
    fireEvent.click(testCheckbox)
    expect(queryByTestId('preview-component-code-onchange')).toBeTruthy()
  })
})
