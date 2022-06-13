import React, { ReactElement, FC } from 'react'
import { SMenu } from './Menu.styled'

export const Menu: FC<any> = (props: any): ReactElement => {
  return <SMenu sRef="Menu" {...props} />
}

Menu.displayName = 'Menu'
