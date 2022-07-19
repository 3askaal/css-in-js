import React from 'react'
import { render } from '@tests'
import { ListItem } from '@core'

describe('ListItem', () => {
  it('renders', () => {
    render(<ListItem />)
  })

  it('renders as link', () => {
    render(<ListItem href="/" />)
  })
})
