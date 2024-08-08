import { createElement, forwardRef, useContext, useMemo } from 'react'
import ShortUniqueId from 'short-unique-id'
import { inject } from './inject'
import { TAGS } from './constants'
import { css, apply, type S, type Style, type StyleVariants, ThemeContext, parse, STags } from '.'

export const s: S = Object.assign(
  (style: Style) => {
    return (props: Record<string, boolean>) => {
      const { theme } = useContext(ThemeContext)
      const parsedStyle = parse(style, { ...props, theme })
      const cssString = css(parsedStyle)

      inject(cssString)

      return null
    }
  },
  TAGS.reduce((acc, key) => ({
    ...acc,
    [key]: (defaults?: Style, variants?: StyleVariants, sref?: string) => {
      return forwardRef((props, ref) => {
        const id = useMemo(() => new ShortUniqueId({ length: 20, dictionary: 'alpha' }).rnd(), [])
        const { theme } = useContext(ThemeContext)
        const style = apply({ ...props, theme }, defaults, variants, sref)
        const cssString = css(style, id)

        inject(cssString)

        return createElement(key, { ...props, ref, className: id })
      })
    }
  }), {} as STags)
)
