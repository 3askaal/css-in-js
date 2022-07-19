import React from 'react'
import { render } from '@tests'
import { Link } from '@core'

describe('Link', () => {
  it('renders', () => {
    render(<Link href="/" />)
  })
})
