import React from 'react'
import { s } from '../../utils'

const TitleSizes: { [key: string]: string } = {
  1: '2.5em',
  2: '2em',
  3: '1.5em',
  4: '1.25em',
  5: '1.125em',
  6: '1em',
}

const STitle = s.h1(({ theme, level }: any) => ({
  fontFamily: theme.fonts.title || 'inherit',
  fontWeight: 'bold',
  fontSize: TitleSizes[level],
  lineHeight: 1.4,
}))

export const Title = ({ level = 3, ...props }: any) => {
  return <STitle sRef="Title" as={`h${level}`} level={level} {...props} />
}
