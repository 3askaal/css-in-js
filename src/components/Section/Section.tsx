import React, { useContext, useEffect, useRef } from 'react'
import { s, Body, Title } from '@core'
import { kebabCase } from 'lodash'
import { NavContext } from '../../context/NavContext'

export const SSection = s.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  pt: 'xxl'
})

export const Section = ({ children, title, index, isGuide, ...props }: any) => {
  const ref = useRef(null)
  const { addGuideRef, addComponentNavItem }: any = useContext(NavContext)

  useEffect(() => {
    if (isGuide) {
      addGuideRef(index, ref)
    } else {
      addComponentNavItem(title, ref)
    }
  }, [ref])

  return (
    <SSection {...props} ref={ref}>
      {title && (
        <Title
          s={{ mb: 'm' }}
          id={kebabCase(title)}
          data-testid="section-title"
        >
          {title}
        </Title>
      )}
      <Body>{children}</Body>
    </SSection>
  )
}
