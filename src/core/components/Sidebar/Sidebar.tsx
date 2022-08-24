import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Menu, X } from 'react-feather'
import { useLocation } from 'react-router-dom';
import {
  SSidebar,
  SSidebarContent,
  SSidebarToggle,
  SSidebarCloser,
} from './Sidebar.styled'

export const Sidebar: FC<any> = ({
  children,
  openButton,
  closeButton,
  onOpen,
  onClose,
  ...props
}: any): ReactElement => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    if (!isOpen) {
      onOpen()
    } else {
      onClose()
    }

    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location]);

  return (
    <>
      <SSidebar {...props} isOpen={isOpen} data-testid="sidebar">
        <SSidebarToggle
          onClick={onClick}
          data-testid="sidebar-toggle"
        >
          {isOpen ? (closeButton || <X size={24} />) : (openButton || <Menu size={24} />)}
        </SSidebarToggle>
        <SSidebarContent
          // onClick={onClick}
          data-testid="sidebar-content"
        >
          { children }
        </SSidebarContent>
      </SSidebar>
      {isOpen ? (
        <SSidebarCloser
          onClick={onClick}
          data-testid="sidebar-closer"
        />
      ) : null}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
