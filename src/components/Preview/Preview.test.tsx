import React from 'react'
import { render } from '@tests'
import { Card } from '@core'
import { Preview } from './Preview'

describe('Preview', () => {
  it('renders with title', () => {
    const { getByTestId } = render(
      <Preview title="title">
        <Card>Card</Card>
      </Preview>,
    )

    expect(getByTestId('preview-title')).toBeTruthy()
  })

  it('renders with component', () => {
    const { queryAllByTestId } = render(
      <Preview>
        <Card>Card</Card>
      </Preview>,
    )

    expect(queryAllByTestId('preview-component').length).toBe(1)
  })

  it('renders with multiple components', () => {
    const { queryAllByTestId } = render(
      <Preview>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </Preview>,
    )

    expect(queryAllByTestId('preview-component').length).toBe(3)
  })
})
