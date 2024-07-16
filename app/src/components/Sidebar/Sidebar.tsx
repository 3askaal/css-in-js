import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'react-feather'
import { Nav } from '../Nav/Nav'
import { NavContext } from '../../context/NavContext'
import {
  SSidebar,
  SSidebarContent,
  SSidebarToggle,
  SSidebarCloser
} from './Sidebar.styled'

export const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { docs, components } = useContext(NavContext)

  return (
    <>
      <SSidebar isOpen={isOpen} {...props}>
        <SSidebarToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size="1.2rem" /> : <Menu size="1.2rem" />}
        </SSidebarToggle>
        <SSidebarContent>
          <NavLink to="/">
            <Nav>Home</Nav>
          </NavLink>
          <Nav type='docs' items={docs} setIsOpen={setIsOpen}>
            <NavLink to="/docs">
              Docs
            </NavLink>
          </Nav>
          <Nav type='components' items={components} setIsOpen={setIsOpen}>
            <NavLink to="/components">
              Components
            </NavLink>
          </Nav>
        </SSidebarContent>
      </SSidebar>
      { isOpen && <SSidebarCloser onClick={() => setIsOpen(!isOpen)} /> }
    </>
  )
}
