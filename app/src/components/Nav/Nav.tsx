import { useState, useEffect } from 'react'
import { ChevronDown } from 'react-feather'
import { useLocation } from 'react-router-dom'
import { Box } from '../../../../src'

export const Nav = ({ type, children, items, setIsOpen }) => {
  const { pathname } = useLocation()
  const [isExtended, setIsExtended] = useState(false)

  useEffect(() => {
    setIsExtended(pathname.replace('/', '') === type)
  }, [pathname])

  const handleOnClick = (ref) => {
    setIsOpen(false)
    ref.current?.scrollIntoView()
  }

  return (
    <Box s={{ mb: 'xs' }}>
      <Box
        s={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 's',
          color: isExtended ? 'primary' : 'inherit',
          fontWeight: 'bold'
        }}
      >
        { children }
        { !!items?.length && (
          <Box
            onClick={() => setIsExtended(!isExtended)}
            s={{
              color: isExtended && 'primary',
              cursor: 'pointer',
              transform: isExtended ? 'rotate(0deg)' : 'rotate(90deg)'
            }}
          >
            <ChevronDown size={14} />
          </Box>
        ) }
      </Box>

      { isExtended && items.map(({ title, ref, isInView }) => (
        <Box s={{ p: 's', px: 'm', color: isInView ? 'primary' : 'inherit', cursor: 'pointer' }} onClick={() => handleOnClick(ref)}>
          { title }
        </Box>
      )) }
    </Box>
  )
}
