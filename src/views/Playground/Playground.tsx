import React from 'react'
import { Button } from '../../core'

export const PlaygroundView = () => {
  return (
    <>
      <Button s={{ display: 'flex', flexDirection: 'row'}}>Button 1</Button>
      <Button>Button 1</Button>
      <Button isSecondary>Button 2</Button>
    </>
  )
}
