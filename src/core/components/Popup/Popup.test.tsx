import React from 'react'
import { render, fireEvent } from '@tests'
import { Popup } from '@core'

describe('Popup', () => {
  it('able to be closed', () => {
    const onClose = jest.fn()

    const { queryByTestId } = render(<Popup onClose={onClose} />)

    expect(queryByTestId('popup')).toBeTruthy()

    const popupCloser = queryByTestId('popup-closer')
    fireEvent.click(popupCloser)

    expect(queryByTestId('popup')).toBeNull()
  })
})
