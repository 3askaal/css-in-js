import React, { useState } from 'react'
import { render, fireEvent } from '@tests'
import { Nav } from './Nav'

const scrollIntoViewMock = jest.fn()

const navItems = [
  { to: '#Section1', content: 'Section 1', ref: { current: { scrollIntoView: scrollIntoViewMock } }  },
  { to: '#Section2', content: 'Section 2', ref: { current: { scrollIntoView: scrollIntoViewMock } }  },
  { to: '#Section3', content: 'Section 3', ref: { current: { scrollIntoView: scrollIntoViewMock } }  },
]

describe('Nav', () => {
  it('renders', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Nav to="/page1" items={navItems}>
        Page 1
      </Nav>,
    )

    const navOpenTrigger: any = getByTestId('nav-open-trigger')
    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(3)

    const subItemLink = getByTestId('nav-sub-item-link-0')
    fireEvent.click(subItemLink)
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1)

    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(0)
  })

  it('opens and closes sub navs', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Nav to="/page1" items={navItems}>
        Page 1
      </Nav>,
    )

    const navOpenTrigger: any = getByTestId('nav-open-trigger')
    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(3)

    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(0)
  })

  it('scrolls to section', () => {
    jest.spyOn(React, 'useState').mockReturnValueOnce([true, {}])

    const { queryAllByTestId, getByTestId } = render(
      <Nav to="/page1" items={navItems}>
        Page 1
      </Nav>,
    )

    const navOpenTrigger: any = getByTestId('nav-open-trigger')
    fireEvent.click(navOpenTrigger)
    expect(queryAllByTestId('nav-sub-item').length).toBe(3)

    const subItemLink = getByTestId('nav-sub-item-link-0')
    expect(subItemLink).toBeInTheDocument()
    fireEvent.click(subItemLink)
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1)
  })
})
