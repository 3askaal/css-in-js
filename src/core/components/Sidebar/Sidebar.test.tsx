import React from 'react'
import { render, fireEvent } from '@tests'
import { Sidebar } from '@components'

describe('Sidebar', () => {
  it('can open with toggle', () => {
    const { queryByTestId } = render(<Sidebar />)

    // expect(getComputedStyle(queryByTestId('sidebar-content')).display).toBe(
    //   'none',
    // )

    const sidebarToggle: any = queryByTestId('sidebar-toggle')
    fireEvent.click(sidebarToggle)
    // expect(getComputedStyle(queryByTestId('sidebar-content')).display).toBe(
    //   'block',
    // )
  })

  // it('can close with content', () => {
  //   const { queryByTestId } = render(<Sidebar />)

  //   const sidebarToggle: any = queryByTestId('sidebar-toggle')
  //   fireEvent.click(sidebarToggle)

  //   const sidebarContent = queryByTestId('sidebar-content')
  //   fireEvent.click(sidebarContent)
  //   expect(getComputedStyle(queryByTestId('sidebar-content')).display).toBe(
  //     'none',
  //   )
  // })

  // it('can close with closer', () => {
  //   const { queryByTestId } = render(<Sidebar />)

  //   const sidebarToggle: any = queryByTestId('sidebar-toggle')
  //   fireEvent.click(sidebarToggle)
  //   expect(getComputedStyle(queryByTestId('sidebar-content')).display).toBe(
  //     'block',
  //   )

  //   const sidebarCloser: any = queryByTestId('sidebar-closer')
  //   fireEvent.click(sidebarCloser)
  //   expect(getComputedStyle(queryByTestId('sidebar-content')).display).toBe(
  //     'none',
  //   )
  // })
})
