import React from 'react'
import { render } from '@tests'
import { Title } from '@core'

describe('Title', () => {
  it('renders', () => {
    render(<Title />)
  })

  it('renders with title font in theme', () => {
    render(<Title />, {
      theme: {
        fonts: {
          title: 'test',
        },
      },
    })
  })
})
