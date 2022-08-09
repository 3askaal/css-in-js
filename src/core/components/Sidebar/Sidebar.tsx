import React, { FC, ReactElement, useState } from 'react'
import { Menu, X } from 'react-feather'
import {
  SSidebar,
  SSidebarContent,
  SSidebarToggle,
  SSidebarCloser,
} from './Sidebar.styled'

export const Sidebar: FC<any> = ({ children, openButton, closeButton, ...props }: any): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SSidebar {...props} isOpen={isOpen} data-testid="sidebar">
        <SSidebarToggle
          onClick={() => setIsOpen(!isOpen)}
          data-testid="sidebar-toggle"
        >
          {isOpen ? (closeButton || <X size={24} />) : (openButton || <Menu size={24} />)}
        </SSidebarToggle>
        <SSidebarContent
          onClick={() => isOpen && setIsOpen(false)}
          data-testid="sidebar-content"
        >
          { children }
        </SSidebarContent>
      </SSidebar>
      {isOpen ? (
        <SSidebarCloser
          onClick={() => setIsOpen(!isOpen)}
          data-testid="sidebar-closer"
        />
      ) : null}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
