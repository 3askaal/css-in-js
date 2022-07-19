import React from 'react'
import { render } from '@tests'
import { Routes } from './Routes'

describe('Sitewrapper', () => {
  it('renders home view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/'],
    })

    expect(queryByTestId('home-view')).toBeTruthy()
  })

  it('renders components view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/components'],
    })

    expect(queryByTestId('components-view')).toBeTruthy()
  })

  it('renders guides view', () => {
    const { queryByTestId } = render(<Routes />, {
      history: ['/guides'],
    })

    expect(queryByTestId('guides-view')).toBeTruthy()
  })
})
