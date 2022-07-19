import React from 'react'
import { render } from '@tests'
import { Section } from '@components'

describe('Section', () => {
  it('renders with title', () => {
    const { queryByTestId } = render(<Section title="test" />)

    expect(queryByTestId('section-title')).toBeTruthy()
  })
})
