import React, { ReactElement, FC } from 'react'
import { s } from '../../utils'

export const SListItem = s.div(
  {
    display: 'flex',
    padding: 's',

    '+ *': {
      borderTop: 'main',
      borderColor: 'primary',
    },
  },
  {
    disabled: {
      opacity: 0.8,
      cursor: 'not-allowed',
      pointerEvents: 'not-allowed',

      '@media (hover: hover)': {
        ':hover': {
          backgroundColor: 'primaryDark',
        },
      },
    },
  },
)

export const ListItem: FC<any> = ({
  href,
  children,
  options,
  ...props
}: any): ReactElement => {
  return (
    <SListItem sRef="ListItem" as={href ? 'a' : 'div'} href={href} {...props}>
      {children}
    </SListItem>
  )
}

ListItem.displayName = 'ListItem'
