import React from 'react'
import { s } from '@core'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '..'
import { Wrapper } from '../../core'

const SSiteWrapper = s.div({
  display: 'flex',
  width: '100%',
})

export const SiteWrapper = ({ children }: any) => {
  const { pathname } = useLocation()
  const atHome = pathname === '/'

  return (
    <SSiteWrapper>
      {atHome ? null : <Sidebar />}
      {atHome ? (
        children
      ) : (
        <Wrapper
          s={{
            px: ['m', null, null, null, 'l'],
            overflow: 'hidden',
            maxWidth: !atHome && '800px',
            marginLeft: [0, null, null, null, '260px'],
          }}
        >
          {children}
        </Wrapper>
      )}
    </SSiteWrapper>
  )
}
