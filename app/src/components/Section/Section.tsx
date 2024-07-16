import { useContext, useEffect, useRef } from 'react'
import { kebabCase } from 'lodash'
import { s, Title } from '../../../../src'
import { NavContext } from '../../context/NavContext'

export const SSection = s.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  pt: 'xxl'
})

export const SSectionBody = s.div({
  display: 'flex',
  flexDirection: 'column',

  li: {
    position: 'relative',
    paddingLeft: '1rem',

    '&:before': {
      position: 'absolute',
      top: '.6em',
      left: 0,
      display: 'inline-block',
      width: '6px',
      height: '6px',
      margin: 'auto',
      borderRadius: '1px',
      backgroundColor: 'currentColor',
      content: '""'
    }
  },

  '> * + *': {
    marginTop: 'm'
  }
})

export const Section = ({ children, title, index, isDoc, ...props }) => {
  const ref = useRef(null)
  const { addDocRefToNav, addCompToNav } = useContext(NavContext)

  useEffect(() => {
    if (!ref.current) return
    isDoc ? addDocRefToNav(index, ref) : addCompToNav(title, ref)
  }, [ref])

  return (
    <SSection {...props} ref={ref}>
      {title && (
        <Title s={{ mb: 'm' }} id={kebabCase(title)}>
          { title }
        </Title>
      )}
      <SSectionBody>{ children }</SSectionBody>
    </SSection>
  )
}
