import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { useLocation } from 'react-router-dom'
import { List, ListItem, Box, Link, keyGen } from '../../core'

export const Nav = ({ to, children, items }: any) => {
  const { pathname: activeLink }: any = useLocation()
  const [isOpen, setIsOpen] = useState(activeLink === to)

  return (
    <List s={{ border: 0, marginBottom: 'xs' }}>
      <ListItem s={{ padding: 0, border: 0 }}>
        <Link
          to={to}
          s={{
            display: 'flex',
            padding: 's',
            flexGrow: 1,
            fontWeight: 'bold',
            color: activeLink === to ? 'primary' : 'inherit',
          }}
        >
          {children}
        </Link>
        {items ? (
          <Box
            data-testid="nav-open-trigger"
            onClick={() => setIsOpen(!isOpen)}
            s={{
              py: 's',
              px: 'm',
              display: 'inline-flex',
              cursor: 'pointer',
            }}
          >
            <Box
              s={{
                color: isOpen && 'primary',
                transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
              }}
            >
              <ChevronDown size={14} />
            </Box>
          </Box>
        ) : null}
      </ListItem>
      {isOpen && items
        ? items.map(({ title, ref, isInView }: any, index: number) => (
            <ListItem
              s={{ border: 0, marginLeft: 'xs' }}
              key={keyGen(title)}
              data-testid="nav-sub-item"
            >
              <Box
                data-testid={`nav-sub-item-link-${index}`}
                onClick={() => ref?.current?.scrollIntoView()}
                s={{
                  cursor: 'pointer',
                  color: isInView ? 'primary' : 'inherit',
                }}
              >
                {title}
              </Box>
            </ListItem>
          ))
        : null}
    </List>
  )
}
