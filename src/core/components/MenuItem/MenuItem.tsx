import React, { ReactElement, FC } from 'react'
import { SMenuItem } from './MenuItem.styled'

export const MenuItem: FC<any> = (props: any): ReactElement => {
  return <SMenuItem sRef="MenuItem" {...props} />
}

MenuItem.displayName = 'MenuItem'
