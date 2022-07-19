import React from 'react'
import { render, fireEvent } from '@tests'
import { Nav } from './Nav'

const navItems = [
  { to: '#Section1', content: 'Section 1' },
  { to: '#Section2', content: 'Section 2' },
  { to: '#Section3', content: 'Section 3' },
]

describe('Nav', () => {
  test('Has items', () => {
    const { queryAllByTestId } = render(
      <Nav to="/page1" items={navItems}>
        Page 1
      </Nav>,
    )

    expect(queryAllByTestId('nav-sub-item').length).toBe(3)
  })

  test('Can be closed', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Nav to="/page1" items={navItems}>
        Page 1
      </Nav>,
    )

    const navOpenTrigger: any = getByTestId('nav-open-trigger')

    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(0)

    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(3)
  })
})
