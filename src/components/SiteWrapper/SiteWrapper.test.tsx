import React from 'react'
import { render } from '@tests'
import { SiteWrapper } from '@components'

describe('Sitewrapper', () => {
  it('renders without sidebar & wrapper', () => {
    const { queryByTestId } = render(<SiteWrapper />)
    expect(queryByTestId('sidebar')).toBeNull()
  })

  it('renders with sidebar & wrapper', () => {
    const { queryByTestId } = render(<SiteWrapper />, {
      history: ['/guides'],
    })

    expect(queryByTestId('sidebar')).toBeTruthy()
    expect(queryByTestId('wrapper')).toBeTruthy()
  })
})
