import React from 'react'
import { render } from '@tests'
import { List } from '@core'

describe('List', () => {
  it('renders', () => {
    render(<List />)
  })

  it('renders with title', () => {
    render(<List title="test" />)
  })
})
